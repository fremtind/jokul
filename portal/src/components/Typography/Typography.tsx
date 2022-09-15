import { Link, WithChildren } from "@fremtind/jkl-core";
import { ListItem as JklListItem } from "@fremtind/jkl-list-react";
import { Link as GatsbyLink } from "gatsby";
import React, { ReactElement } from "react";
import { CodeBlock as FTCodeBlock } from "../../../../doc-utils/CodeBlock";

export const PageTitle: React.FC<WithChildren> = ({ children, ...rest }) => (
    <h1 className="jkl-portal-page-title" {...rest}>
        {children}
    </h1>
);

export const HeadingLarge: React.FC<WithChildren> = ({ children, ...rest }) => {
    const id = typeof children === "string" ? children.toLowerCase().replace(/[^\wæøåÆØÅ]+/g, "-") : undefined;
    return (
        <h2 className="jkl-portal-heading-large" id={id} {...rest}>
            {children}
        </h2>
    );
};

export const HeadingMedium: React.FC<WithChildren> = ({ children, ...rest }) => {
    const id = typeof children === "string" ? children.toLowerCase().replace(/[^\wæøåÆØÅ]+/g, "-") : undefined;
    return (
        <h3 className="jkl-portal-heading-medium" id={id} {...rest}>
            {children}
        </h3>
    );
};

export const HeadingSmall: React.FC<WithChildren> = ({ children, ...rest }) => (
    <h4 className="jkl-portal-heading-small" {...rest}>
        {children}
    </h4>
);

export const HeadingXS: React.FC<WithChildren> = ({ children, ...rest }) => (
    <h5 className="jkl-portal-heading-xs" {...rest}>
        {children}
    </h5>
);

export const Ingress: React.FC<WithChildren> = ({ children, ...rest }) => (
    <p className="jkl-portal-ingress" {...rest}>
        {children}
    </p>
);

export const Paragraph: React.FC<{ className?: string } & WithChildren> = ({ children, ...rest }) => (
    <p className="jkl-portal-paragraph" {...rest}>
        {children}
    </p>
);

export const Blockquote: React.FC<WithChildren> = ({ children, ...rest }) => (
    <blockquote className="jkl-portal-blockquote" {...rest}>
        {children}
    </blockquote>
);

export const InlineCode: React.FC<WithChildren> = ({ children, ...rest }) => (
    <code className="jkl-portal-inline-code" {...rest}>
        {children}
    </code>
);

export const Strong: React.FC<WithChildren> = ({ children, ...rest }) => (
    <strong className="jkl-bold" {...rest}>
        {children}
    </strong>
);

export const KeyboardShortcut: React.FC<WithChildren> = ({ children, ...rest }) => (
    <kbd className="jkl-portal-kbd" {...rest}>
        {children}
    </kbd>
);

interface CodeBlockProps extends React.React.HTMLAttributes<HTMLPreElement> {
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

export const ListItem: React.FC<WithChildren> = ({ children }) => (
    <JklListItem className="jkl-portal-list-item">{children}</JklListItem>
);

export const Anchor: React.FC<{ children: React.ReactNode; className?: string; href: string }> = (props) => {
    /** Don't add class jkl-link to <a /> if it's styled as a button */
    if (props.className && props.className.includes("jkl-button")) {
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        return <a {...props} />;
    }

    /** Use GatsbyLink for internal links */
    if (props.href.startsWith("/")) {
        const { href, ...restProps } = props;
        return <GatsbyLink to={href} className="jkl-link" {...restProps} />;
    }

    return <Link external={!props.href.includes("jokul.fremtind.no")} {...props} />;
};
