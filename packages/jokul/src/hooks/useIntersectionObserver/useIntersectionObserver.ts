import { useEffect, useRef, RefObject, MutableRefObject } from "react";

type ValidElement = HTMLElement | SVGElement;
type Target =
    | MutableRefObject<ValidElement>
    | RefObject<ValidElement>
    | MutableRefObject<NodeListOf<ValidElement>>
    | RefObject<NodeListOf<ValidElement>>
    | NodeListOf<ValidElement>;

function isNodeList(target: Target | ValidElement): target is NodeListOf<ValidElement> {
    return (target as NodeListOf<ValidElement>).forEach !== undefined;
}

const hasWindowWithIntersectionObserver = () =>
    typeof window !== "undefined" && typeof IntersectionObserver !== "undefined";

/**
 * Hook som gjør det enkelt å observere om et element er synlig i viewporten.
 *
 * @param target Elementet eller elementene som skal observeres. Du kan sende in en React ref til et HTMLElement eller SVG Element, eller en NodeList av samme type elementer (returneres f.eks. av document.querySelectorAll), eller en React ref med en NodeList av samme type elementer.
 * @param onIntersect Callback-funksjon som utføres når et av elementene som observeres overlapper angitt mål. Se https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#parameters for mer info.
 * @param fallback Funksjon som kalles dersom nettleseren ikke støtter IntersectionOpserver-APIet.
 * @param options Objekt med innstillinger for oberveren. Se https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#parameters for mer info.
 */
export const useIntersectionObserver = (
    target: Target,
    onIntersect: IntersectionObserverCallback,
    fallback?: VoidFunction | null,
    options?: Partial<IntersectionObserverInit>,
): void => {
    const observerRef = useRef<IntersectionObserver>(null);

    useEffect(() => {
        let observer = observerRef.current;

        if (hasWindowWithIntersectionObserver()) {
            if (observer) {
                observer.disconnect();
            }

            observer = new IntersectionObserver(onIntersect, options);

            if (isNodeList(target)) {
                target.forEach((element) => observer?.observe(element));
            } else if (target.current && isNodeList(target.current)) {
                target.current.forEach((element) => observer?.observe(element));
            } else if (target.current) {
                observer.observe(target.current);
            }
        } else if (fallback) {
            fallback();
        }

        return () => {
            if (hasWindowWithIntersectionObserver() && observer) {
                observer.disconnect();
            }
        };
    }, [target, onIntersect, fallback, options]);
};
