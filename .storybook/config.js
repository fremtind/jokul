import React from 'react';
import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import '@fremtind/jkl-portal-components/dev-example.min.css';
import '@fremtind/jkl-radio-button/radio-button.min.css';
import '@fremtind/jkl-checkbox/checkbox.min.css';
import '@fremtind/jkl-core/core.min.css';


configure(requireContext('../packages', true, /\.stories\.mdx$/), module);
