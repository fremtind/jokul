import { getInterface } from "./getInterface";
test("should pick out the interface from a definition file", () => {
    const exampleType = `import { ReactNode } from "react";
interface Props {
    children: ReactNode;
}
export declare function Accordion({ children }: Props): JSX.Element;
export {};`;

    const expectedInterface = `interface Props {
    children: ReactNode;
}`;
    const res = getInterface(exampleType);
    expect(res).toEqual(expectedInterface);
});

test("should pick out all interfaces from a definition file", () => {
    const exampleType = `import { ReactNode } from "react";
interface SomeProps {
    children: ReactNode;
}
somthing else
her
interface OtherProps {
    children: ReactNode;
}
export declare function Accordion({ children }: Props): JSX.Element;
export {};`;

    const expectedInterface = `interface SomeProps {
    children: ReactNode;
}
interface OtherProps {
    children: ReactNode;
}`;
    const res = getInterface(exampleType);
    expect(res).toEqual(expectedInterface);
});

test("should return empty string if no interface is detected", () => {
    const exampleType = `no type definition`;

    const res = getInterface(exampleType);
    expect(res).toEqual("");
});
