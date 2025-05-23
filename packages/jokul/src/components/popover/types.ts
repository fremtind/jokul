import type {
    ReferenceType,
    UseFloatingOptions,
    useClick,
    useDismiss,
    useFocus,
    useHover,
    useRole,
} from "@floating-ui/react";

export type ClickOptions = Parameters<typeof useClick>[1];
export type DismissOptions = Parameters<typeof useDismiss>[1];
export type FocusOptions = Parameters<typeof useFocus>[1];
export type HoverOptions = Parameters<typeof useHover>[1];
export type RoleOptions = Parameters<typeof useRole>[1];

export interface PopoverOptions {
    /**
     * Angir om popoveren er åpen eller lukket.
     *
     * @see https://floating-ui.com/docs/usefloating#open
     */
    open?: boolean;
    /**
     * Callback som trigges når popoveren åpnes eller lukkes.
     *
     * @see https://floating-ui.com/docs/usefloating#onopenchange
     */
    onOpenChange?: UseFloatingOptions["onOpenChange"];
    /**
     * Bestemmer plasseringen av popoveren.
     *
     * @see https://floating-ui.com/docs/usefloating#placement
     *
     * @default "bottom-start"
     */
    placement?: UseFloatingOptions["placement"];
    /**
     * Definerer strategien for posisjonering av popoveren.
     *
     * @see https://floating-ui.com/docs/usefloating#strategy
     *
     * @default "absolute"
     */
    strategy?: UseFloatingOptions["strategy"];
    /**
     * Angir om popoveren skal fungere som en modal, der fokus er låst til det flytende elementet
     * og innhold utenfor ikke kan interageres med.
     *
     * @see https://floating-ui.com/docs/usefloating#modal
     *
     * @default true
     */
    modal?: boolean;
    /**
     * Justerer avstanden mellom referanse-elementet og popoveren.
     *
     * @see https://floating-ui.com/docs/offset
     *
     * @default 4
     */
    offset?: number;
    /**
     * Referanse til elementet som popoveren skal posisjoneres i forhold til.
     *
     * @see https://floating-ui.com/docs/usefloating#setpositionreference
     *
     * @default Popover.Trigger
     */
    positionReference?: React.RefObject<ReferenceType>;
    /**
     * Options for hover-interaksjoner.
     *
     * @see https://floating-ui.com/docs/usehover
     *
     * @default { enabled: false }
     */
    hoverOptions?: HoverOptions;
    /**
     * Options for fokus-interaksjoner.
     *
     * @see https://floating-ui.com/docs/usefocus
     *
     * @default { enabled: false }
     */
    focusOptions?: FocusOptions;
    /**
     * Options for klikk-interaksjoner.
     *
     * @see https://floating-ui.com/docs/useclick
     *
     * @default { enabled: false }
     */
    clickOptions?: ClickOptions;
    /**
     * Konfigurerer rollen for popoveren.
     *
     * @see https://floating-ui.com/docs/userole
     *
     * @default { enabled: true, role: "dialog" }
     */
    roleOptions?: RoleOptions;
    /**
     * Options for å lukke popoveren når en dismissal skjer,
     * som ved å klikke utenfor eller trykke på "Escape"-tasten.
     *
     * @see https://floating-ui.com/docs/usedismiss
     *
     * @default { enabled: true }
     */
    dismissOptions?: DismissOptions;
}
