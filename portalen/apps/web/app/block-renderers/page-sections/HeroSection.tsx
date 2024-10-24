import { type WithOptionalChildren } from '@fremtind/jkl-core';
import { LogoStamp, TeknologiFraFremtind } from '@fremtind/jkl-logo-react';
import { NavLink } from '@remix-run/react';
import React, { type FC } from 'react';
import { type PageSectionProps } from './types';
import { assertSectionIs } from './types';
import { getPagePathFromId } from '~/components/navigation/utils';
import { RichText } from '~/components/rich-text/RichText';
import { useMainMenu } from '~/utils';

type Hero = PageSectionProps['pageSection'] & {
    blockType: 'hero-section';
};
type Action = NonNullable<Hero['actions']>[number];

const ActionButton: FC<Action> = ({ link, type }) => {
    const { type: linkType, reference, url, label = '', newTab } = link;
    const mainMenu = useMainMenu();

    if (linkType === 'reference') {
        const to = getPagePathFromId(mainMenu, reference?.value as string);

        return (
            <NavLink className={`jkl-button jkl-button--${type}`} to={`${to}`}>
                {label}
            </NavLink>
        );
    } else if (linkType === 'custom' && url) {
        return (
            <a
                className={`jkl-button jkl-button--${type}`}
                href={url}
                target={newTab ? '_blank' : undefined}
                rel={newTab ? 'noreferrer noopener' : undefined}
            >
                {label}
            </a>
        );
    } else {
        return null;
    }
};

const HeroRenderer: FC<WithOptionalChildren> = ({ children }) => (
    <h1 className="jkl-portal-hero-block__hero-text">{children}</h1>
);

export const HeroSection: FC<PageSectionProps> = ({ pageSection }) => {
    assertSectionIs('hero-section', pageSection);

    const { heroText, actions } = pageSection;

    return (
        <div className="jkl-portal-hero-block">
            <RichText content={heroText} fallbackRenderer={HeroRenderer} />
            <div className="jkl-portal-hero-block__actions">
                {actions &&
                    actions.map((action) => {
                        return <ActionButton key={action.id} {...action} />;
                    })}
                <LogoStamp
                    aria-hidden
                    animated
                    className="jkl-portal-hero-block__stamp"
                >
                    <TeknologiFraFremtind />
                </LogoStamp>
            </div>
        </div>
    );
};
