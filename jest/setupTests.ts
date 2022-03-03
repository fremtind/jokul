import { configure } from '@testing-library/react';
import prettier from 'prettier';
import "@testing-library/jest-dom/extend-expect";
import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

configure({
    /**
     * Custom error handler for @testing-library/react.
     * When screen.getByText("Something") fails to find an Element @testing-library will attempt to print the DOM
     * rendered by a test using prettyDOM. If the DOM contains custom-elements prettyDOM will run in an infinite loop
     * and sometimes crash with a HeapError.
     *
     * This custom error handler will use prettier to format the DOM instead of prettyDOM and thus also support
     * printing DOM with custom-elements in it.
     */
    getElementError: (message, container) => {

        return new Error(
            [
                message,
                prettier.format(container.innerHTML, {
                    parser: 'html',
                    htmlWhitespaceSensitivity: 'ignore',
                }),
            ]
                .filter(Boolean)
                .join('\n\n')
        );
    },
});