type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key;
          }
        : {
              type: Key;
              payload: M[Key];
          };
};

export enum Types {
    ToggleBurger = "TOGGLE_BURGER",
}

type HamburgerPayload = {
    [Types.ToggleBurger]: undefined;
};

export type HamburgerActions = ActionMap<HamburgerPayload>[keyof ActionMap<HamburgerPayload>];

export const hamburgerReducer = (state: boolean, action: HamburgerActions) => {
    switch (action.type) {
        case Types.ToggleBurger:
            return !state;
        default:
            return state;
    }
};
