import cn from "classnames";
import type { Language } from "prism-react-renderer";
import React from "react";
import { type FC, useCallback, useEffect, useState } from "react";
import { Checkbox } from "../../packages/checkbox-react/src";
import type { ColorScheme, Density, ValuePair } from "../../packages/core/src";
import { RadioButton, RadioButtonGroup } from "../../packages/radio-button-react/src";
import { useBrowserPreferences, useId, usePreviousValue } from "../../packages/react-hooks/src";
import { Select } from "../../packages/select-react/src";
import { LiveEditor } from "./LiveEditor";
import { LiveError } from "./LiveError";
import { LivePreview } from "./LivePreview";
import { LiveProvider } from "./LiveProvider";
import { useLocalStorage } from "./useLocalStorage";

import "./_interactive-code.scss";

type BoolValues = Record<string, boolean>;
type ChoiceValues = Record<string, string | ValuePair>;

export type CodeGenerator = (props: { boolValues: BoolValues; choiceValues: ChoiceValues }) => string;

export interface ControlProps {
    generator: CodeGenerator;
    boolProps?: Array<BoolProp>;
    choiceProps?: Array<ChoiceProp>;
}

export interface ChoiceProp {
    name: string;
    values: Array<string> | Array<ValuePair>;
    defaultValue: number;
}

export type BoolProp = string | { prop: string; defaultValue: boolean };

export interface InteractiveCodeProps {
    id?: string;
    title: string;
    /**
     * Forhåndsvisningen sentreres i en flexbox.
     * @default false
     */
    centerPreview?: boolean;
    /**
     * Styr om preview skal vises åpen som default.
     * @default true
     */
    defaultShowPreview?: boolean;
    /**
     * Styr om kontroller skal vises åpen som default.
     * @default true
     */
    defaultShowControls?: boolean;
    /**
     * Styr om editoren skal vises åpen som default.
     * @default false
     */
    defaultShowEditor?: boolean;
    /**
     * @default "tsx"
     */
    language?: Language;
    /**
     * Om du bare ønsker ett eksempel bruker du denne.
     */
    defaultCode?: string;
    /**
     * Hvis du vil ha en Select med flere eksempler kan du sende inn en liste.
     * Det første eksempelet i listen blir brukt som default.
     */
    examples?: Array<ValuePair>;
    /**
     * Tenk over om disse krever at vi sender med en codegen-funksjon som tar noe props? I stedet for å hacke til med value lik masse kode.
     */
    controls?: ControlProps;
    /**
     * Sett til `true` om du har kode i eksempelet som _ikke_ er React-komponenter.
     *
     * @default false
     */
    noInline?: boolean;
    scope?: object;
}

export const InteractiveCode: FC<InteractiveCodeProps> = ({
    id,
    title,
    centerPreview = false,
    defaultCode,
    defaultShowControls = true,
    defaultShowEditor = false,
    defaultShowPreview = true,
    examples,
    language = "tsx",
    controls,
    noInline = false,
    scope = {},
}) => {
    const uid = useId(id || "interactive-code", { generateSuffix: !id });

    // TODO: finn ut av hvordan toggling skal se ut visuelt
    const [showControls] = useState<boolean>(defaultShowControls);
    const [showEditor] = useState<boolean>(defaultShowEditor);
    const [showPreview] = useState<boolean>(defaultShowPreview);

    const { prefersColorScheme } = useBrowserPreferences();

    const [theme, setTheme] = useLocalStorage<ColorScheme>("jkl-example-theme", prefersColorScheme || "light");
    const [density, setDensity] = useLocalStorage<Density>("jkl-example-density", "comfortable");

    const [boolValues, setBoolValues] = useState<BoolValues>(
        controls?.boolProps?.reduce((acc, boolProp) => {
            if (typeof boolProp === "string") {
                return { ...acc, [boolProp]: false };
            }
            return { ...acc, [boolProp.prop]: boolProp.defaultValue };
        }, {}) || {},
    );

    const [choiceValues, setChoiceValues] = useState<ChoiceValues>(
        controls?.choiceProps?.reduce(
            (acc, { name, values, defaultValue }) => ({
                ...acc,
                [name]: values[defaultValue],
            }),
            {},
        ) || {},
    );

    const [code, setCode] = useState<string>(
        defaultCode ||
            examples?.[0].value ||
            controls?.generator({
                boolValues,
                choiceValues,
            }) ||
            "console.log('Hello, World!)'",
    );

    const handleChange = useCallback(
        (newCode: string) => {
            if (code !== newCode) {
                setCode(newCode);
            }
        },
        [setCode, code],
    );

    const previousBoolValues = usePreviousValue(boolValues);
    const previousChoiceValues = usePreviousValue(choiceValues);
    useEffect(() => {
        if (!controls || !previousBoolValues || !previousChoiceValues) {
            return;
        }

        if (boolValues === previousBoolValues && choiceValues === previousChoiceValues) {
            // Sjekk at endringen er i choices, og ikke redigering i editoren
            return;
        }

        const newCode = controls.generator({
            boolValues,
            choiceValues,
        });

        if (code !== newCode) {
            setCode(newCode);
        }
    }, [boolValues, previousBoolValues, choiceValues, previousChoiceValues, code, controls]);

    const choices: Record<string, string[] | ValuePair[]> =
        controls?.choiceProps?.reduce((acc, { name, values }) => ({ ...acc, [name]: values }), {}) || {};

    const setBoolValue = (key: string, value: boolean) =>
        setBoolValues((oldValues) => ({ ...oldValues, [key]: value }));
    const setChoiceValue = (key: string, value: string) =>
        setChoiceValues((oldValues) => ({ ...oldValues, [key]: value }));

    // TODO

    const hyphenate = (string: string) => string;
    const ClipboardButton: FC<{ target: string }> = () => <div></div>;

    return (
        <LiveProvider code={code} language={language} noInline={noInline} scope={scope}>
            <div
                className="interactive-code"
                data-show-controls={showControls}
                data-show-editor={showEditor}
                data-show-preview={showPreview}
            >
                <div className="interactive-code__title">{title}</div>
                {showPreview && (
                    <div
                        className={cn("interactive-code__preview", {
                            "interactive-code__preview--centered": centerPreview,
                        })}
                        data-layout-density={density}
                        data-theme={typeof window !== "undefined" ? theme : undefined}
                    >
                        <LivePreview />
                    </div>
                )}
                {showControls && (
                    <div className="interactive-code__controls">
                        {examples && (
                            <>
                                <div className="interactive-code__controls-title">Eksempler</div>
                                <div className="interactive-code__controls-knobs">
                                    <Select
                                        label="Velg eksempel"
                                        labelProps={{ srOnly: true }}
                                        name={`${uid}-examples`}
                                        items={examples}
                                        value={examples[0].value}
                                        onChange={(e) => setCode(e.target.value)}
                                    />
                                </div>
                            </>
                        )}
                        {((controls?.boolProps?.length || 0) > 0 || (controls?.choiceProps?.length || 0) > 0) && (
                            <>
                                <div className="interactive-code__controls-title">Egenskaper</div>
                                <div className="interactive-code__controls-knobs" data-layout-density="compact">
                                    {controls?.boolProps && (
                                        <>
                                            {Object.entries(boolValues).map(([key, value]) => (
                                                <Checkbox
                                                    key={`${uid}-${hyphenate(key)}`}
                                                    name={`${uid}-${hyphenate(key)}`}
                                                    value={key}
                                                    checked={value}
                                                    onChange={(e) => setBoolValue(key, e.target.checked)}
                                                >
                                                    {key}
                                                </Checkbox>
                                            ))}
                                        </>
                                    )}
                                    {controls?.choiceProps && (
                                        <>
                                            {Object.entries(choiceValues).map(([key, value]) =>
                                                choices[key].length < 4 ? (
                                                    <RadioButtonGroup
                                                        className="jkl-spacing-xs--top"
                                                        name={`${uid}-${hyphenate(key)}`}
                                                        key={`${uid}-${hyphenate(key)}`}
                                                        legend={key}
                                                        value={typeof value === "string" ? value : value.value}
                                                        labelProps={{
                                                            variant: "small",
                                                        }}
                                                        onChange={(e) => {
                                                            setChoiceValue(key, e.target.value);
                                                        }}
                                                    >
                                                        {choices[key]?.map((choice) => {
                                                            const value =
                                                                typeof choice === "string" ? choice : choice.value;
                                                            const label =
                                                                typeof choice === "string" ? choice : choice.label;
                                                            return (
                                                                <RadioButton key={value} label={label} value={value} />
                                                            );
                                                        })}
                                                    </RadioButtonGroup>
                                                ) : (
                                                    <Select
                                                        className="jkl-spacing-xs--top"
                                                        value={typeof value === "string" ? value : value.value}
                                                        onChange={(e) => setChoiceValue(key, e.target.value)}
                                                        label={key}
                                                        width="100%"
                                                        key={`${uid}-${hyphenate(key)}`}
                                                        name={key}
                                                        items={choices[key]}
                                                    />
                                                ),
                                            )}
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                        <div className="interactive-code__controls-title">Visning</div>
                        <div className="interactive-code__controls-knobs" data-layout-density="compact">
                            <RadioButtonGroup
                                name={`${uid}-theme`}
                                legend="Tema"
                                value={theme}
                                labelProps={{ variant: "small" }}
                                onChange={(e) => setTheme(e.target.value as ColorScheme)}
                            >
                                <RadioButton label="Light" value="light" />
                                <RadioButton label="Dark" value="dark" />
                            </RadioButtonGroup>
                            <RadioButtonGroup
                                className="jkl-spacing-xs--top"
                                name={`${uid}-density`}
                                legend="Tetthet"
                                value={density}
                                labelProps={{ variant: "small" }}
                                onChange={(e) => setDensity(e.target.value as Density)}
                            >
                                <RadioButton label="Default" value="comfortable" />
                                <RadioButton label="Compact" value="compact" />
                            </RadioButtonGroup>
                        </div>
                    </div>
                )}
                {showEditor && (
                    <div className="interactive-code__editor">
                        <ClipboardButton target={code} />
                        <LiveEditor onChange={handleChange} />
                        <LiveError />
                    </div>
                )}
            </div>
        </LiveProvider>
    );
};
