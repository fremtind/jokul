import clsx from "clsx";
import {
    type ChangeEventHandler,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { useId } from "../../hooks/useId/useId.js";
import { serializeTracking } from "../cookie-consent/tracking/serializeTracking.js";
import type { CheckboxProps } from "./types.js";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (props, ref) => {
        const {
            id,
            children,
            invalid,
            className,
            inline = false,
            "data-testautoid": testAutoId,
            checked,
            defaultChecked,
            indeterminate,
            tracking,
            onChange,
            ...rest
        } = props;

        const inputRef = useRef<HTMLInputElement>(null);
        useImperativeHandle(
            ref,
            () => inputRef.current as HTMLInputElement,
            [],
        );

        const inputId = useId(id || "jkl-checkbox", { generateSuffix: !id });

        // Speiler den faktiske avmerket-tilstanden for sporingsformål.
        // `checked`-propen alene holder kun styr på KONTROLLERT bruk - for
        // uncontrolled bruk (`defaultChecked`, ingen `checked`-prop gitt)
        // forblir den `undefined` for alltid, uavhengig av hva brukeren
        // faktisk krysser av, noe som ville gitt en fraværende/utdatert
        // `data-jkl-checked` for autocapture. Denne lokale staten
        // oppdateres kun i det uncontrolled tilfellet - kontrollert bruk
        // følger fortsatt `checked`-propen direkte.
        const [uncontrolledChecked, setUncontrolledChecked] = useState(
            checked ?? defaultChecked ?? false,
        );
        const isTrackedAsChecked = checked ?? uncontrolledChecked;

        const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
            if (checked === undefined) {
                setUncontrolledChecked(event.target.checked);
            }
            onChange?.(event);
        };

        useEffect(() => {
            if (
                checked === true &&
                indeterminate === true &&
                process.env.NODE_ENV !== "production"
            ) {
                console.warn(
                    "A Checkbox can not be both checked and indeterminate, and will be treated as checked",
                );
            }
            if (inputRef.current) {
                inputRef.current.indeterminate = !checked && !!indeterminate;
            }
        }, [checked, indeterminate]);

        return (
            <div
                className={clsx("jkl-checkbox", className, {
                    "jkl-checkbox--inline": inline,
                    "jkl-checkbox--error": invalid,
                })}
            >
                <input
                    id={inputId}
                    ref={inputRef}
                    className="jkl-checkbox__input"
                    data-testid="jkl-checkbox-input"
                    // Merker avkrysningsboksen som sporbar for Mixpanels
                    // `autocapture`. Attributtene er ellers inerte når ingen
                    // Mixpanel-instans er initialisert.
                    data-jkl-tracked="Checkbox"
                    data-jkl-checked={isTrackedAsChecked || undefined}
                    data-jkl-tracking={serializeTracking(tracking)}
                    aria-invalid={invalid}
                    type="checkbox"
                    data-testautoid={testAutoId}
                    checked={checked}
                    defaultChecked={defaultChecked}
                    onChange={handleChange}
                    {...rest}
                />
                <label htmlFor={inputId} className="jkl-checkbox__label">
                    {children}
                </label>
            </div>
        );
    },
);

Checkbox.displayName = "Checkbox";
