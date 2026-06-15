import type { ThemeDraftColorTokensState } from "../_context/types";

const COLOR_TOKEN_MAIL_RECIPIENT = "fremtind.designsystem@fremtind.no";

type ColorTokenMailInput = {
    themeName: string;
    colorTokens: ThemeDraftColorTokensState;
    includeDarkMode: boolean;
};

export function createColorTokenMailHref({
    themeName,
    colorTokens,
    includeDarkMode,
}: ColorTokenMailInput): string {
    const subject = `Fargetokens for ${themeName}`;
    const body = JSON.stringify({
        color: formatColorTokensForMail(colorTokens, includeDarkMode),
    });

    return `mailto:${COLOR_TOKEN_MAIL_RECIPIENT}?subject=${encodeURIComponent(
        subject,
    )}&body=${encodeURIComponent(body)}`;
}

function formatColorTokensForMail(
    colorTokens: ThemeDraftColorTokensState,
    includeDarkMode: boolean,
) {
    if (includeDarkMode) {
        return colorTokens;
    }

    return Object.fromEntries(
        Object.entries(colorTokens).map(([group, roles]) => [
            group,
            Object.fromEntries(
                Object.entries(roles).map(([role, token]) => [
                    role,
                    {
                        light: token.light,
                    },
                ]),
            ),
        ]),
    );
}
