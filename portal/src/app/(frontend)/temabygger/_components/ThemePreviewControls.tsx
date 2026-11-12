import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { Icon } from "@fremtind/jokul/icon";
import { Tab, TabList, Tabs } from "@fremtind/jokul/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@fremtind/jokul/tooltip";
import type { ColorScheme } from "@fremtind/jokul/utilities";
import {
    type ThemePreviewTab,
    useThemePreview,
} from "../_context/ThemePreviewContext";

type ThemePreviewControlsProps = {
    segment?: string | null;
};

const PREVIEW_TABS: { value: ThemePreviewTab; label: string }[] = [
    { value: "overview", label: "Overblikk" },
    { value: "components", label: "Komponenter" },
    { value: "contrast", label: "Fargekombinasjoner" },
];

const COLOR_SCHEME_LABELS: Record<ColorScheme, string> = {
    light: "Bytt til mørk modus",
    dark: "Bytt til lys modus",
};

const COLOR_SCHEME_ICONS: Record<ColorScheme, string> = {
    light: "light_mode",
    dark: "dark_mode",
};

export const ThemePreviewControls = ({
    segment,
}: ThemePreviewControlsProps) => {
    const {
        activeColorScheme,
        activeTab,
        isColorSchemeLocked,
        setActiveTab,
        toggleColorScheme,
    } = useThemePreview();

    if (!segment || !["farger", "innsending"].includes(segment)) return null;

    return (
        <Flex alignItems="center" justifyContent="space-between" gap="24">
            <Tabs
                defaultTab={PREVIEW_TABS.findIndex(
                    (tab) => tab.value === activeTab,
                )}
                onChange={(index) => setActiveTab(PREVIEW_TABS[index].value)}
            >
                <TabList>
                    {PREVIEW_TABS.map(({ value, label }) => (
                        <Tab key={value}>{label}</Tab>
                    ))}
                </TabList>
            </Tabs>
            <Flex gap="16">
                {!isColorSchemeLocked && (
                    <Tooltip>
                        <TooltipTrigger>
                            <Button
                                variant="ghost"
                                icon={
                                    <Icon>
                                        {COLOR_SCHEME_ICONS[activeColorScheme]}
                                    </Icon>
                                }
                                onClick={toggleColorScheme}
                            />
                        </TooltipTrigger>
                        <TooltipContent>
                            {COLOR_SCHEME_LABELS[activeColorScheme]}
                        </TooltipContent>
                    </Tooltip>
                )}
            </Flex>
        </Flex>
    );
};
