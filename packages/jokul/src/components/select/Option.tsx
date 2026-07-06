import clsx from "clsx";
import {
    type ComponentPropsWithoutRef,
    forwardRef,
    useEffect,
    useRef,
} from "react";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import type { ValuePair } from "../../utilities/valuePair.js";
import { Flex } from "../flex/Flex.jsx";
import { Text } from "../typography/Text.jsx";

// biome-ignore lint/suspicious/noExplicitAny: any er default verdi, men vi må spesifisere den for å kunne velge elementer
type AcceptedElements = React.ElementType<any, "button" | "option">;

export type OptionProps<T extends AcceptedElements> = Omit<
    ComponentPropsWithoutRef<T>,
    "children"
> & {
    as?: T;
    multiple?: boolean;
} & ValuePair;

type OptionComponent = <ElementType extends AcceptedElements = "option">(
    props: OptionProps<ElementType>,
) => React.ReactElement | null;

export const Option = forwardRef(function Option<
    ElementType extends AcceptedElements = "option",
>(props: OptionProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        className = "",
        as = "option",
        multiple = false,
        label,
        description,
        media,
        value,
        ...rest
    } = props;

    const Component = as;

    const mediaRef = useRef<HTMLSpanElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!media || !textRef.current || !mediaRef.current) return;
        const textEl = textRef.current;
        const mediaEl = mediaRef.current;
        const observer = new ResizeObserver(() => {
            mediaEl.style.setProperty(
                "--media-size",
                `${textEl.offsetHeight}px`,
            );
        });
        observer.observe(textEl);
        return () => observer.disconnect();
    }, [media]);

    if (Component === "option") {
        return (
            // @ts-ignore
            <Component
                ref={ref}
                className={clsx("jkl-option", className)}
                value={value}
                {...rest}
            >
                {label}
            </Component>
        );
    }

    return (
        // @ts-ignore
        <Component
            ref={ref}
            className={clsx(
                "jkl-option",
                {
                    "jkl-option--multiple": multiple,
                },
                className,
            )}
            value={value}
            {...rest}
        >
            <Flex
                direction="column"
                gap="4"
                as="span"
                className="jkl-option__text"
                ref={media ? textRef : undefined}
            >
                <Text short as="span">
                    {label}
                </Text>
                {description && (
                    <Text
                        short
                        as="span"
                        size="xs"
                        className="jkl-option__description"
                    >
                        {description}
                    </Text>
                )}
            </Flex>
            {media && (
                <span className="jkl-option__media" ref={mediaRef}>
                    {media}
                </span>
            )}
        </Component>
    );
}) as OptionComponent;
