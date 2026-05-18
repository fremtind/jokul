---
"@fremtind/jokul": patch
---

`Brand` og `BRANDS` er tilgjengelig fra utilities. Bruk `Brand` for å type gyldige `data-brand`-verdier, og `BRANDS` når du trenger listen over støttede brand i kode.

```ts
import { BRANDS, type Brand } from "@fremtind/jokul/utilities";

const brand: Brand = "fremtind";
const brandOptions = BRANDS.map((brand) => ({ label: brand, value: brand }));
```
