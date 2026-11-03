import type { JokulThemeFile } from "@fremtind/jokul/theme";

const THEME_TOKEN_MAIL_RECIPIENT = "fremtind.designsystem@fremtind.no";

export function createThemeTokenMailHref(theme: JokulThemeFile): string {
    const subject = theme.title
        ? `Tokens for ${theme.title}`
        : "Tokens fra temabygger";
    const body = JSON.stringify(theme);

    return `mailto:${THEME_TOKEN_MAIL_RECIPIENT}?subject=${encodeURIComponent(
        subject,
    )}&body=${encodeURIComponent(body)}`;
}
