import { type WithChildren } from '@fremtind/jkl-core';
import React, { type FC } from 'react';

export const Code: FC<WithChildren> = ({ children }) => (
    <code className="code-snippet code-snippet--inline">{children}</code>
);
