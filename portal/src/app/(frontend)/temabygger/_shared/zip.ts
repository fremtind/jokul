/**
 * Et ZIP-arkiv der filene lagres ukomprimert. Fontfilene er allerede
 * komprimerte, og JSON-en er noen kilobyte, så en deflate-implementasjon ville
 * kostet mer kode enn den sparte plass.
 */

export type ZipEntry = {
    /** Stien i arkivet, med `/` som skille mellom mapper. */
    name: string;
    data: Uint8Array<ArrayBuffer>;
};

const LOCAL_HEADER_SIZE = 30;
const CENTRAL_HEADER_SIZE = 46;
const END_OF_CENTRAL_DIRECTORY_SIZE = 22;

const LOCAL_HEADER_SIGNATURE = 0x04034b50;
const CENTRAL_HEADER_SIGNATURE = 0x02014b50;
const END_OF_CENTRAL_DIRECTORY_SIGNATURE = 0x06054b50;

/** Versjon 2.0 er den eldste som kan lese mapper i arkivet. */
const VERSION = 20;
/** Bit 11 forteller leseren at filnavnene er UTF-8 og ikke CP437. */
const UTF8_NAMES_FLAG = 0x0800;
const STORED = 0;

const encoder = new TextEncoder();

const CRC_TABLE = buildCrcTable();

function buildCrcTable(): Uint32Array {
    const table = new Uint32Array(256);

    for (let byte = 0; byte < table.length; byte++) {
        let value = byte;

        for (let bit = 0; bit < 8; bit++) {
            value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
        }

        table[byte] = value;
    }

    return table;
}

/** `TextEncoder` lover ikke at bufferet er et vanlig `ArrayBuffer`. Blob gjør. */
export function encodeTextForZip(text: string): Uint8Array<ArrayBuffer> {
    return new Uint8Array(encoder.encode(text));
}

export function crc32(data: Uint8Array): number {
    let crc = 0xffffffff;

    for (const byte of data) {
        crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
    }

    return (crc ^ 0xffffffff) >>> 0;
}

export function createZipArchive(
    entries: readonly ZipEntry[],
    modified = new Date(),
): Blob {
    const time = toDosTime(modified);
    const date = toDosDate(modified);

    const files: BlobPart[] = [];
    const directory: Uint8Array<ArrayBuffer>[] = [];
    // Hver katalogoppføring peker til der fila begynner i arkivet.
    let offset = 0;

    for (const entry of entries) {
        const name = encoder.encode(entry.name);
        const checksum = crc32(entry.data);
        const size = entry.data.byteLength;

        const header = new Uint8Array(LOCAL_HEADER_SIZE + name.byteLength);
        const headerFields = new DataView(header.buffer);
        headerFields.setUint32(0, LOCAL_HEADER_SIGNATURE, true);
        headerFields.setUint16(4, VERSION, true);
        headerFields.setUint16(6, UTF8_NAMES_FLAG, true);
        headerFields.setUint16(8, STORED, true);
        headerFields.setUint16(10, time, true);
        headerFields.setUint16(12, date, true);
        headerFields.setUint32(14, checksum, true);
        headerFields.setUint32(18, size, true);
        headerFields.setUint32(22, size, true);
        headerFields.setUint16(26, name.byteLength, true);
        header.set(name, LOCAL_HEADER_SIZE);

        const entryRecord = new Uint8Array(
            CENTRAL_HEADER_SIZE + name.byteLength,
        );
        const entryFields = new DataView(entryRecord.buffer);
        entryFields.setUint32(0, CENTRAL_HEADER_SIGNATURE, true);
        entryFields.setUint16(4, VERSION, true);
        entryFields.setUint16(6, VERSION, true);
        entryFields.setUint16(8, UTF8_NAMES_FLAG, true);
        entryFields.setUint16(10, STORED, true);
        entryFields.setUint16(12, time, true);
        entryFields.setUint16(14, date, true);
        entryFields.setUint32(16, checksum, true);
        entryFields.setUint32(20, size, true);
        entryFields.setUint32(24, size, true);
        entryFields.setUint16(28, name.byteLength, true);
        entryFields.setUint32(42, offset, true);
        entryRecord.set(name, CENTRAL_HEADER_SIZE);

        files.push(header, entry.data);
        directory.push(entryRecord);
        offset += header.byteLength + size;
    }

    const directorySize = directory.reduce(
        (size, record) => size + record.byteLength,
        0,
    );

    const end = new Uint8Array(END_OF_CENTRAL_DIRECTORY_SIZE);
    const endFields = new DataView(end.buffer);
    endFields.setUint32(0, END_OF_CENTRAL_DIRECTORY_SIGNATURE, true);
    endFields.setUint16(8, entries.length, true);
    endFields.setUint16(10, entries.length, true);
    endFields.setUint32(12, directorySize, true);
    endFields.setUint32(16, offset, true);

    return new Blob([...files, ...directory, end], {
        type: "application/zip",
    });
}

/** Klokka ligger i to byte, så sekundene lagres i steg på to. */
function toDosTime(date: Date): number {
    return (
        (date.getHours() << 11) |
        (date.getMinutes() << 5) |
        (date.getSeconds() >> 1)
    );
}

function toDosDate(date: Date): number {
    return (
        ((date.getFullYear() - 1980) << 9) |
        ((date.getMonth() + 1) << 5) |
        date.getDate()
    );
}
