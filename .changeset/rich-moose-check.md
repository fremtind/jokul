---
"@fremtind/jokul": minor
---

Legger til en utility-funksjon for å slå sammen flere React refs

```tsx
import { mergeRefs } from "@fremtind/jokul/utilities";

const MyComponent = forwardRef<HTMLInputElement>((props, ref) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const combinedRef = mergeRefs(ref, internalRef);

    return <input type="text" ref={combinedRef} {...props} />;
}
```

Du kan sende inn så mange refs du vil: `mergeRefs(ref1, ref2, ref3, ref4)`.
Det finnes også en memoisert versjon `useMergeRefs` som oppdateres kun
når noen av `ref`-ene endrer seg
