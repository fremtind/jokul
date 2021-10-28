import React, { ReactElement } from "react";
import { ListItem as JklListItem } from "@fremtind/jkl-list-react";
import { CodeBlock as FTCodeBlock } from "../../../../doc-utils/CodeBlock";

export const PageTitle: React.FC = ({ children, ...rest }) => (
    <h1 className="jkl-portal-page-title" {...rest}>
        {children}
    </h1>
);

export const HeadingLarge: React.FC = ({ children, ...rest }) => {
    const id = typeof children === "string" ? children.toLowerCase().replace(/[^\wæøåÆØÅ]+/g, "-") : undefined;
    return (
        <h2 className="jkl-portal-heading-large" id={id} {...rest}>
            {children}
        </h2>
    );
};

export const HeadingMedium: React.FC = ({ children, ...rest }) => {
    const id = typeof children === "string" ? children.toLowerCase().replace(/[^\wæøåÆØÅ]+/g, "-") : undefined;
    return (
        <h3 className="jkl-portal-heading-medium" id={id} {...rest}>
            {children}
        </h3>
    );
};

export const HeadingSmall: React.FC = ({ children, ...rest }) => (
    <h4 className="jkl-portal-heading-small" {...rest}>
        {children}
    </h4>
);

export const HeadingXS: React.FC = ({ children, ...rest }) => (
    <h5 className="jkl-portal-heading-xs" {...rest}>
        {children}
    </h5>
);

export const ArticleLead: React.FC = ({ children, ...rest }) => (
    <p className="jkl-portal-article-lead" {...rest}>
        {children}
    </p>
);

export const Paragraph: React.FC = ({ children, ...rest }) => (
    <p className="jkl-portal-paragraph" {...rest}>
        {children}
    </p>
);

export const InlineCode: React.FC = ({ children, ...rest }) => (
    <code className="jkl-portal-inline-code" {...rest}>
        {children}
    </code>
);

interface CodeBlockProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement> {
    language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, language, ...rest }) => {
    const child: ReactElement = React.Children.only(children) as ReactElement;
    if (!child.props) {
        // if there is more than one child, or it is text return a normal pre
        return <pre {...rest}>{children}</pre>;
    }

    const displayLanguage = child.props?.className?.replace("language-", "") || language;
    return <FTCodeBlock language={displayLanguage}>{child.props.children}</FTCodeBlock>;
};

export const ListItem: React.FC = ({ children }) => (
    <JklListItem className="jkl-portal-list-item">{children}</JklListItem>
);
