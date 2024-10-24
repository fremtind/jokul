import { SearchIcon } from '@fremtind/jkl-icons-react';
import cn from 'classnames';
import React, { type FC, type MouseEventHandler } from 'react';
import { KeyboardShortcut } from '../keyboard-shortcut';

interface SearchTriggerProps {
    variant?: 'icon' | 'full';
    onClick: MouseEventHandler;
    tabIndex?: number;
}

export const SearchTrigger: FC<SearchTriggerProps> = ({
    onClick,
    variant = 'full',
    ...rest
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn('search-trigger', {
                'search-trigger--icon': variant === 'icon',
            })}
            {...rest}
        >
            <div className="search-trigger__label-wrapper">
                <SearchIcon variant="medium" />
                <span className="search-trigger__label">Søk</span>
            </div>
            <KeyboardShortcut className="search-trigger__shortcut">
                ⌘K
            </KeyboardShortcut>
        </button>
    );
};
