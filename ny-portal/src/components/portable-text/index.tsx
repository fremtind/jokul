import { PortableText, PortableTextComponents } from "@portabletext/react";

type PortableTextProps = React.ComponentProps<typeof PortableText>;

const defaultComponents: PortableTextComponents = {
    block: {
        normal: ({ children }) => <p>{children}</p>,
    },
};

const PortableTextRenderer = ({ components, ...props }: PortableTextProps) => {
    return (
        <PortableText
            components={{ ...defaultComponents, ...components }}
            {...props}
        />
    );
};

export default PortableTextRenderer;
