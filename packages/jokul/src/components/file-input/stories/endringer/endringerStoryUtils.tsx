import React, {
    type ChangeEvent,
    type FC,
    type ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";
import { File } from "../../../file/File.js";
import { Flex } from "../../../flex/index.js";
import { ListItem, UnorderedList } from "../../../list/index.js";
import { Text, Title } from "../../../typography/index.js";
import { FileInput } from "../../FileInput.js";
import type { FileInputProps, UploadedFile } from "../../types.js";
import { getPreviewProps } from "../fileInputStoryUtils.js";

export const Forklaring: FC<{
    tittel: string;
    children: ReactNode;
    test?: ReactNode[];
}> = ({ tittel, children, test }) => (
    <Flex
        direction="column"
        gap="16"
        style={{ maxWidth: "44rem", marginBlockEnd: "var(--jkl-unit-40)" }}
    >
        <Title as="h2" size="m">
            {tittel}
        </Title>
        <div>{children}</div>
        {test && (
            <div>
                <Text bold>Slik tester du</Text>
                <UnorderedList>
                    {test.map((steg, i) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: statisk liste
                        <ListItem key={i}>{steg}</ListItem>
                    ))}
                </UnorderedList>
            </div>
        )}
    </Flex>
);

export const Panel: FC<{ tittel: string; children: ReactNode }> = ({
    tittel,
    children,
}) => (
    <div
        style={{
            marginBlockStart: "var(--jkl-unit-30)",
            padding: "var(--jkl-unit-20)",
            border: "1px solid var(--jkl-color-border-subdued)",
            borderRadius: "var(--jkl-border-radius-s)",
            maxWidth: "44rem",
        }}
    >
        <Text size="s" bold>
            {tittel}
        </Text>
        <div>{children}</div>
    </div>
);

type DemoFileInputProps = Omit<
    FileInputProps,
    "value" | "onChange" | "legend"
> & {
    legend?: string;
    initialFiles?: UploadedFile[];
    onFilesAdded?: (
        e: ChangeEvent<HTMLInputElement>,
        files: UploadedFile[],
    ) => void;
};

/** FileInput med state, som viser valideringsfeil på filene */
export const DemoFileInput: FC<DemoFileInputProps> = ({
    initialFiles = [],
    onFilesAdded,
    multiple,
    legend = "Vedlegg",
    ...props
}) => {
    const [files, setFiles] = useState(initialFiles);

    return (
        <FileInput
            {...props}
            legend={legend}
            multiple={multiple}
            value={files}
            onChange={(e, newFiles) => {
                onFilesAdded?.(e, newFiles);
                setFiles((current) =>
                    multiple === false ? newFiles : [...current, ...newFiles],
                );
            }}
        >
            {files.map(({ file, state, validation }, index) => (
                <File
                    key={`${file.name}-${index}`}
                    fileName={file.name}
                    fileType={file.type}
                    fileSize={file.size}
                    {...getPreviewProps(file)}
                    state={validation ? "error" : state}
                    errorLabel={validation?.message}
                    onRemove={() =>
                        setFiles((current) =>
                            current.filter((_, i) => i !== index),
                        )
                    }
                />
            ))}
        </FileInput>
    );
};

/** Tekst slik skjermleseren får den, uten aria-hidden-innhold som ikoner */
export const synligTekst = (el: Element | null): string => {
    if (!el) {
        return "";
    }
    const kopi = el.cloneNode(true) as Element;
    for (const skjult of kopi.querySelectorAll("[aria-hidden='true']")) {
        skjult.remove();
    }
    return kopi.textContent?.trim() ?? "";
};

/** Viser hvilket element som har fokus akkurat nå */
export const useActiveElementDescription = () => {
    const [description, setDescription] = useState("");

    useEffect(() => {
        const describe = () => {
            const el = document.activeElement;
            if (!el || el === document.body) {
                return "Ingenting (fokus er på <body>)";
            }
            const name =
                el.getAttribute("aria-label") ??
                ((el.id &&
                    synligTekst(
                        document.querySelector(`label[for="${el.id}"]`),
                    )) ||
                    synligTekst(el));
            return `<${el.tagName.toLowerCase()}> «${name}»`;
        };
        const id = window.setInterval(() => setDescription(describe()), 100);
        return () => window.clearInterval(id);
    }, []);

    return description;
};

/** Følger med på alt som skrives til live-regionen inne i `container` */
export const useLiveRegionLog = (
    container: React.RefObject<HTMLElement | null>,
) => {
    const [log, setLog] = useState<string[]>([]);

    useEffect(() => {
        const region = container.current?.querySelector("[aria-live]");
        if (!region) {
            return;
        }
        setLog([region.textContent ?? ""]);
        const observer = new MutationObserver(() =>
            setLog((current) => [...current, region.textContent ?? ""]),
        );
        observer.observe(region, {
            childList: true,
            characterData: true,
            subtree: true,
        });
        return () => observer.disconnect();
    }, [container]);

    return log;
};

/** Leser ut data-track-attributter på et element */
export const useTrackingAttributes = (
    container: React.RefObject<HTMLElement | null>,
    selector: string,
) => {
    const [attributes, setAttributes] = useState<string[]>([]);

    useEffect(() => {
        const el = container.current?.querySelector(selector);
        setAttributes(
            el
                ? [...el.attributes]
                      .filter((attr) => attr.name.startsWith("data-track"))
                      .map((attr) => `${attr.name}="${attr.value}"`)
                : [],
        );
    }, [container, selector]);

    return attributes;
};

export const useContainerRef = () => useRef<HTMLDivElement>(null);

/**
 * Den gamle valideringen fra `main`, så vi kan sammenligne oppførselen
 */
export function gammelValidering(file: globalThis.File, accept = "") {
    const acceptStrings = accept
        .split(",")
        .map((s) => s.toLowerCase().replaceAll("*", "").trim());

    const isValidFormat = acceptStrings.some(
        (acceptString) =>
            file.type.toLowerCase().includes(acceptString) ||
            file.name.toLowerCase().endsWith(acceptString),
    );

    return isValidFormat
        ? undefined
        : {
              message: `Filtypen ${file.name?.split(".")[1] || ""} støttes ikke`,
          };
}

/**
 * Simulerer en server for `upload()` ved å erstatte XMLHttpRequest mens
 * forespørselen opprettes. Filer med «feil» i navnet feiler med status 500.
 */
class SimulertXMLHttpRequest extends EventTarget {
    upload = new EventTarget();
    status = 0;
    statusText = "";
    response: unknown = null;
    responseType = "";
    private timer?: number;

    open() {}
    setRequestHeader() {}

    send(data: FormData) {
        const file = data.get("fil") as globalThis.File;
        const shouldFail = file.name.includes("feil");
        let loaded = 0;

        this.timer = window.setInterval(() => {
            loaded = Math.min(100, loaded + 4 + Math.random() * 8);
            this.upload.dispatchEvent(
                new ProgressEvent("progress", {
                    lengthComputable: true,
                    loaded,
                    total: 100,
                }),
            );

            if (shouldFail && loaded > 60) {
                this.finish(500, "Internal Server Error", null);
            } else if (loaded >= 100) {
                this.finish(200, "OK", { id: crypto.randomUUID() });
            }
        }, 200);
    }

    abort() {
        window.clearInterval(this.timer);
        this.dispatchEvent(new Event("abort"));
    }

    private finish(status: number, statusText: string, response: unknown) {
        window.clearInterval(this.timer);
        this.status = status;
        this.statusText = statusText;
        this.response = response;
        this.dispatchEvent(new Event("load"));
    }
}

export function medSimulertServer<T>(request: () => Promise<T>): Promise<T> {
    const original = window.XMLHttpRequest;
    window.XMLHttpRequest =
        SimulertXMLHttpRequest as unknown as typeof XMLHttpRequest;
    try {
        return request();
    } finally {
        window.XMLHttpRequest = original;
    }
}
