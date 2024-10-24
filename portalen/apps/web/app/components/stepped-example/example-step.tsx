import { type WithChildren } from '@fremtind/jkl-core';
import React, { type FC } from 'react';

export interface ExampleStepProps extends WithChildren {
    headline?: string | null;
    description?: string | null | Array<{ [k: string]: unknown }>;
}

export const ExampleStep: FC<ExampleStepProps> = (props) => {
    return <>{props.children}</>;
};
