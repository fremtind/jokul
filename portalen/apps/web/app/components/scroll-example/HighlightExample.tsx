import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { throttle } from '~/utils/function';
import { camelToKebab } from '~/utils/string';

interface HighlightExampleProps {
    children: React.ReactNode;
    className?: string;
    hidden?: boolean;
    step?: number;
}

/**
 * Oppdaterer CSS-variabler for plassering og størrelse på highlighter-
 * elementet ut fra plassering og størrelse på elementet som skal utheves.
 *
 * @param viewport Elementet som inneholder eksemplet
 * @param highlighter Elementet som viser uthevingen
 * @param highlightedElement Elementet som skal utheves
 */
async function updateHighlighterDimensions(
    viewport: HTMLDivElement | null,
    highlighter: HTMLDivElement | null,
    highlightedElement: HTMLElement | null
) {
    if (viewport && highlighter && highlightedElement) {
        const viewportRect = viewport.getBoundingClientRect();
        let elementRect = highlightedElement.getBoundingClientRect();

        highlighter.removeAttribute('hidden');
        Object.entries({
            top: elementRect.top - viewportRect.top,
            left: elementRect.left - viewportRect.left,
            width: elementRect.width,
            height: elementRect.height,
        }).forEach(([dimension, value]) => {
            highlighter.style.setProperty(
                `--${camelToKebab(dimension)}`,
                `${value}px`
            );
        });
    }
}

export const HighlightExample: React.FC<HighlightExampleProps> = (props) => {
    const { children, className, step, hidden = false } = props;

    const viewport = useRef<HTMLDivElement>(null);
    const highlighter = useRef<HTMLDivElement>(null);
    const [highlightedElement, setHighlightedElement] =
        useState<HTMLElement | null>(null);

    useEffect(() => {
        // Skjul utheving dersom steg ikke er satt eller er minde enn 1
        if (!step || step < 1) {
            if (highlighter.current !== null) {
                highlighter.current.setAttribute('hidden', 'hidden');
            }
            return;
        } else if (viewport.current) {
            // Oppdater state med uthevet element når step endrer seg
            setHighlightedElement(
                viewport.current.querySelector<HTMLElement>(
                    `[data-step="${step}"]`
                )
            );
        }
    }, [step]);

    useEffect(() => {
        const handleUpdate = () =>
            updateHighlighterDimensions(
                viewport.current,
                highlighter.current,
                highlightedElement
            );
        const handleResize = throttle(handleUpdate, 100);

        // Oppdater dimensjoner når uthevet element endres
        handleUpdate();

        // Oppdater dimensjoner når størrelsen på vinduet endres
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }

        // Rydd opp lytter ved unmount
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, [highlightedElement]);

    return (
        <div
            ref={viewport}
            data-hidden={hidden ? 'hidden' : undefined}
            className={cn('jkl-portal-highlight-example', className)}
        >
            <div
                id="highlighter"
                ref={highlighter}
                className="jkl-portal-highlight-example__highlighter"
            />
            {children}
        </div>
    );
};
