# [`@fremtind/jkl-file-uploader-react`](https://jokul.fremtind.no/komponenter/file-uploader)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/file-uploader).

## Installasjon

**Tips:** [stilpakken](../file-uploader/) blir automatisk installert som en avhengighet.

1. `npm i @fremtind/jkl-file-uploader-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { FileUploader } from "@fremtind/jkl-file-uploader-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-file-uploader/file-uploader.min.css";
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-icon-button/icon-button.min.css";
import "@fremtind/jkl-icons/icons.min.css";
import "@fremtind/jkl-input-group/input-group.min.css";
import "@fremtind/jkl-loader/loader.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-file-uploader/file-uploader";
@use "@fremtind/jkl-button/button";
@use "@fremtind/jkl-icon-button/icon-button";
@use "@fremtind/jkl-icons/icons";
@use "@fremtind/jkl-input-group/input-group";
@use "@fremtind/jkl-loader/loader";
```
