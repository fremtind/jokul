import "jest-dom/extend-expect";
// Polyfill fill to make parts of Web components (used by @nrk/core-toggle) work.
// Hopefully this will land one day https://github.com/jsdom/jsdom/issues/1030
import "document-register-element";
