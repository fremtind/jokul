/**
 * Hjelpefunksjon for å laste opp filer med progress-bar
 *
 * @param {string} url Endepunktet som skal lastes opp til
 * @param {FormData} data FormData med filen som skal lastes opp
 * @param progress Callback som blir kalt med oppdatert progresjon
 * @param {Record<string, string>} headers Eventuelle headers som skal sendes
 * med opplasingen. Her kan du f.eks. sende med CSRF-verdier.
 * @returns {T} Svaret fra endepunktet
 */
export async function upload<T>(
    url: string,
    data: FormData,
    progress: (progress: number) => void,
    headers?: Record<string, string>,
): Promise<T> {
    // I skrivende stund er det ikke mulig å hente progress med fetch. Derfor bruker vi XMLHttpRequest.
    const xhr = new XMLHttpRequest();
    const request = new Promise<ProgressEvent<XMLHttpRequestEventTarget>>(
        (resolve, reject) => {
            xhr.upload.addEventListener("progress", (e) => {
                if (e.lengthComputable && progress) {
                    progress((e.loaded / e.total) * 100);
                }
            });

            xhr.addEventListener("load", (e) => {
                if (xhr.status >= 400) {
                    reject(e);
                }
                resolve(e);
            });

            xhr.addEventListener("error", (e) => {
                reject(e);
            });

            xhr.addEventListener("abort", (e) => {
                reject(e);
            });

            xhr.open("POST", url);

            for (const [header, value] of Object.entries(headers || {})) {
                xhr.setRequestHeader(header, value);
            }

            xhr.send(data);
        },
    ).then(
        (e) => {
            const response: T = JSON.parse(xhr.responseText);
            return response;
        },
        () => {
            throw new Error(xhr.statusText);
        },
    );

    return request;
}
