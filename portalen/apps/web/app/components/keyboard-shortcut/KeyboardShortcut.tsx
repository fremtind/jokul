import { type WithChildren } from '@fremtind/jkl-core';
import cn from 'classnames';
import React, { type FC } from 'react';

interface KeyboardShortcutProps extends WithChildren {
    className?: string;
}

export const KeyboardShortcut: FC<KeyboardShortcutProps> = ({
    className,
    children,
    ...rest
}) => (
    <kbd className={cn('kbd', className)} {...rest}>
        {children}
    </kbd>
);
