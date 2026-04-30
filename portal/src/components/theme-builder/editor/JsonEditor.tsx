import { TextArea } from "@fremtind/jokul/text-area";

import styles from "./editor.module.scss";

type JsonEditorProps = {
    value: string;
    error?: string;
    onChange: (value: string) => void;
    /** Kalles ved blur — committer JSON-en til provider-staten. */
    onCommit: () => void;
};

/**
 * Rå JSON-editor for fargetokens. Live parse-feedback ved hver tastetrykk;
 * faktisk commit til provider-staten skjer ved blur for å unngå at hele
 * provider-treet re-renderer for hvert tegn.
 */
export function JsonEditor({
    value,
    error,
    onChange,
    onCommit,
}: JsonEditorProps) {
    return (
        <TextArea
            className={styles.jsonEditor}
            label="Fargetokens JSON"
            labelProps={{ srOnly: true }}
            value={value}
            spellCheck={false}
            errorLabel={error}
            rows={10}
            style={{ minHeight: "min(60vh, 32rem)" }}
            onChange={(event) => onChange(event.target.value)}
            onBlur={onCommit}
        />
    );
}
