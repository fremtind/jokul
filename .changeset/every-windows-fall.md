---
"@fremtind/jokul": major
---

Fjerner de utgåtte maskefunksjonene `registerWithFodselsnummerMask`, `registerWithKontonummerMask`, `registerWithKortnummerMask` og `registerWithTelefonnummerMask`.

Bruk metodene på `registerWithMasks(form)` i stedet:

```diff
- import { registerWithFodselsnummerMask } from "@fremtind/jokul/utilities";
- <TextInput {...registerWithFodselsnummerMask(form, "fnr")} />
+ import { registerWithMasks } from "@fremtind/jokul/utilities";
+ <TextInput {...registerWithMasks(form).registerWithFodselsnummerMask("fnr")} />
```

Codemoden `jokul codemod` migrerer kall og importer automatisk.
