import {
    Menu,
    MenuDivider,
    MenuItem,
    MenuItemCheckbox,
    IconButton,
    DotsIcon,
    useCookieConsent,
    type ColorScheme,
    type WithChildren,
} from "@fremtind/jokul";
import React, { createContext, useContext, type FC } from "react";

type GlobalPreferencesContext = {
    colorScheme: ColorScheme | undefined;
    setColorScheme: (colorScheme: ColorScheme) => void;
};

const globalPreferencesContext = createContext<GlobalPreferencesContext>({
    colorScheme: undefined,
    setColorScheme: () => {
        return;
    },
});

export const useGlobalPreferences = (): GlobalPreferencesContext =>
    useContext(globalPreferencesContext);

export const GlobalPreferencesContextProvider: FC<
    WithChildren & GlobalPreferencesContext
> = ({ children, colorScheme, setColorScheme }) => {
    return (
        <globalPreferencesContext.Provider
            value={{ colorScheme, setColorScheme }}
        >
            {children}
        </globalPreferencesContext.Provider>
    );
};

export const GlobalContextualMenu: FC<{ className: string }> = ({
    className,
}) => {
    const { consents } = useCookieConsent();
    const { colorScheme, setColorScheme } = useGlobalPreferences();
    return (
        <Menu
            className={className}
            initialPlacement="bottom-start"
            triggerElement={
                <IconButton
                    className="jkl-portal-navigation__contextual-menu-trigger"
                    title="Åpne innstillinger"
                >
                    <DotsIcon variant="medium" />
                </IconButton>
            }
        >
            {consents.functional === "accepted" && (
                <>
                    <MenuItemCheckbox
                        aria-checked={colorScheme === "dark"}
                        onChange={(_, pressed) => {
                            setColorScheme(pressed ? "dark" : "light");
                        }}
                    >
                        Lights off
                    </MenuItemCheckbox>
                    <MenuDivider />
                </>
            )}
            <MenuItem
                onClick={() => {
                    window.location.assign("https://github.com/fremtind/jokul");
                }}
            >
                Gå til GitHub
            </MenuItem>
            <MenuItem
                onClick={() =>
                    window.location.assign(
                        "https://www.figma.com/files/project/52944370",
                    )
                }
            >
                Gå til Figma
            </MenuItem>
            <MenuItem
                onClick={() => {
                    window.location.assign(
                        "https://teams.microsoft.com/l/channel/19%3adb7fc5da697547ad8a199247b3be66dc%40thread.skype/Support%2520Designsystem?groupId=460dde26-9370-4131-8b04-61b3e9b47048&tenantId=273051d7-ce03-4594-b66d-0c68e4c778c0",
                    );
                }}
            >
                Gå til Teams
            </MenuItem>
        </Menu>
    );
};
