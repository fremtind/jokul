import { Flex } from "@fremtind/jokul/flex";
import { Tab, TabList, TabPanel, Tabs } from "@fremtind/jokul/tabs";
import type { DisplayState } from "../displayAttributes";
import { PreviewPanel } from "../preview/PreviewPanel";
import type { ColorToken } from "../tokens";
import { TokensList } from "../tokens-list/TokensList";

type WorkspaceTabsProps = {
    tokens: ColorToken[];
    display: DisplayState;
    onDisplayChange: (next: DisplayState) => void;
};

/** Workspace med to faner: token-listing og live demo-preview. */
export function WorkspaceTabs({
    tokens,
    display,
    onDisplayChange,
}: WorkspaceTabsProps) {
    return (
        <Flex direction="column" gap="l">
            <Tabs defaultTab={0}>
                <TabList aria-label="Temabyggerinnhold">
                    <Tab>Demo</Tab>
                    <Tab>Farge-tokens</Tab>
                </TabList>
                <TabPanel>
                    <PreviewPanel
                        display={display}
                        onDisplayChange={onDisplayChange}
                        tokens={tokens}
                    />
                </TabPanel>
                <TabPanel>
                    <TokensList tokens={tokens} />
                </TabPanel>
            </Tabs>
        </Flex>
    );
}
