/**
 * Hjelpefunksjon for å laste opp filer med progress-bar
 *
 * @param {string} url Endepunktet som skal lastes opp til
 * @param {FormData} data FormData med filen som skal lastes opp
 * @param progress Callback som blir kalt med oppdatert progresjon (0–100)
 * @param {Record<string, string>} headers Eventuelle headers som skal sendes
 * med opplasingen. Her kan du f.eks. sende med CSRF-verdier.
 * @param {AbortSignal} signal Avbryter opplastingen når signalet utløses
 * @returns {T} Svaret fra endepunktet, tolket som JSON. `null` hvis svaret ikke er gyldig JSON.
 */
export async function upload<T>(
    url: string,
    data: FormData,
    progress: (progress: number) => void,
    headers?: Record<string, string>,
    signal?: AbortSignal,
): Promise<T> {
    signal?.throwIfAborted();

    // fetch kan ikke rapportere fremdrift for opplastinger. Derfor bruker vi XMLHttpRequest.
    const xhr = new XMLHttpRequest();

    return new Promise<T>((resolve, reject) => {
        xhr.upload.addEventListener("progress", (e) => {
            if (e.lengthComputable) {
                progress((e.loaded / e.total) * 100);
            }
        });

        xhr.addEventListener("load", () => {
            if (xhr.status >= 400) {
                reject(
                    new Error(
                        `Opplastingen feilet med status ${xhr.status} ${xhr.statusText}`.trim(),
                    ),
                );
                return;
            }
            resolve(xhr.response as T);
        });

        xhr.addEventListener("error", () => {
            reject(new Error("Opplastingen feilet"));
        });

        xhr.addEventListener("abort", () => {
            reject(
                signal?.reason ??
                    new DOMException("Opplastingen ble avbrutt", "AbortError"),
            );
        });

        signal?.addEventListener("abort", () => xhr.abort(), { once: true });

        xhr.open("POST", url);
        xhr.responseType = "json";

        for (const [header, value] of Object.entries(headers ?? {})) {
            xhr.setRequestHeader(header, value);
        }

        xhr.send(data);
    });
}
