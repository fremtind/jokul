import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@fremtind/jokul/table";
import { useMemo } from "react";
import { contrastReference, evaluateColorContrast } from "../contrast";
import {
    type ColorToken,
    THEME_MODES,
    type ThemeMode,
    type TokenSection,
    getTokenId,
} from "../tokens";
import { TokenSwatch } from "./TokenSwatch";

type TokenSectionTableProps = {
    section: TokenSection;
    tokens: ColorToken[];
    allTokens: ColorToken[];
};

/**
 * Jøkul Table med én rad per token i én seksjon. Hver verdi-celle viser et
 * rolle-eksempel, heks-kode og en klikkbar WCAG-kontrast-hint mot tokenets
 * naturlige par (se {@link contrastReference}).
 */
export function TokenSectionTable({
    section,
    tokens,
    allTokens,
}: TokenSectionTableProps) {
    const tokensById = useMemo(
        () => new Map(allTokens.map((t) => [getTokenId(t), t])),
        [allTokens],
    );

    return (
        <Table
            fullWidth
            collapseToList
            caption={<TableCaption srOnly={false}>{section}</TableCaption>}
        >
            <TableHead>
                <TableRow>
                    <TableHeader scope="col">path</TableHeader>
                    <TableHeader scope="col">group</TableHeader>
                    <TableHeader scope="col">role</TableHeader>
                    {THEME_MODES.map((mode) => (
                        <TableHeader key={mode} scope="col">
                            {mode}
                        </TableHeader>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tokens.map((token) => {
                    const reference = contrastReference(token);
                    const referenceToken = reference
                        ? tokensById.get(getTokenId(reference.against))
                        : undefined;

                    return (
                        <TableRow key={token.id}>
                            <TableCell data-th="path">
                                <code>{token.id}</code>
                            </TableCell>
                            <TableCell data-th="group">
                                <code>{token.group}</code>
                            </TableCell>
                            <TableCell data-th="role">
                                <code>{token.role}</code>
                            </TableCell>
                            {THEME_MODES.map((mode) => (
                                <TableCell key={mode} data-th={mode}>
                                    <TokenSwatch
                                        group={token.group}
                                        value={token[mode]}
                                        contrast={evaluateContrastFor(
                                            token,
                                            reference,
                                            referenceToken,
                                            mode,
                                        )}
                                        reference={
                                            reference && referenceToken
                                                ? {
                                                      token: reference.against,
                                                      value: referenceToken[
                                                          mode
                                                      ],
                                                  }
                                                : undefined
                                        }
                                    />
                                </TableCell>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

function evaluateContrastFor(
    token: ColorToken,
    reference: ReturnType<typeof contrastReference>,
    referenceToken: ColorToken | undefined,
    mode: ThemeMode,
) {
    if (!reference || !referenceToken) return undefined;
    return evaluateColorContrast(
        token[mode],
        referenceToken[mode],
        reference.requirementId,
    );
}
