---
"@fremtind/jokul": patch
---

Fikser CSS-variabelnavn for tokens der bindestrek manglet mellom kategori og tall (f.eks. `jkl-spacing20` i stedet for `jkl-spacing-20`). Feilen skyldes at TypeScript-plattformen brukte `name/camel` i stedet for `name/kebab` som navnetransform.
