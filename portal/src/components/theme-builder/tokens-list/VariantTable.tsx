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
import {
    type ColorToken,
    type ColorVariant,
    THEME_MODES,
    type ThemeMode,
    tokenKey,
} from "../tokens";
import { evaluateColorContrast } from "../utils";
import { TokenSwatch } from "./TokenSwatch";
import { contrastReference } from "./contrastReference";

type VariantTableProps = {
    variant: ColorVariant;
    tokens: ColorToken[];
    allTokens: ColorToken[];
};

/**
 * Jøkul Table med én rad per token i én variant. Hver verdi-celle viser et
 * rolle-eksempel, heks-kode og en klikkbar WCAG-kontrast-hint mot tokenets
 * naturlige par (se {@link contrastReference}).
 */
export function VariantTable({
    variant,
    tokens,
    allTokens,
}: VariantTableProps) {
    const tokensByKey = useMemo(
        () => new Map(allTokens.map((t) => [tokenKey(t), t])),
        [allTokens],
    );

    return (
        <Table
            fullWidth
            collapseToList
            caption={<TableCaption srOnly={false}>{variant}</TableCaption>}
        >
            <TableHead>
                <TableRow>
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
                        ? tokensByKey.get(tokenKey(reference.against))
                        : undefined;

                    return (
                        <TableRow key={`${token.group}.${token.role}`}>
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
