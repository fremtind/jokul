import { VERSIONS } from "@/utils/versions";
import { Box, Checkbox, Flex, Text } from "@sanity/ui";
import { IntentLink } from "sanity/router";
import type { Row } from "./types";

type Props = {
    row: Row;
    checked: boolean;
    onToggle: () => void;
};

export function DocumentRow({ row, checked, onToggle }: Props) {
    const currentVersion = VERSIONS.find((v) => v.id === row.versjon);

    return (
        <Flex align="center" gap={3}>
            <Checkbox checked={checked} onChange={onToggle} />
            <Box flex={1}>
                <Text>
                    <IntentLink
                        intent="edit"
                        params={{ id: row._id, type: row._type }}
                    >
                        {row.title}
                    </IntentLink>
                </Text>
            </Box>
            <Text size={1} muted>
                {currentVersion?.title ?? "Uten versjon"}
            </Text>
        </Flex>
    );
}
