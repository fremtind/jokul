---
"@fremtind/jokul": minor
---

LinkList får nytt visuelt uttrykk i beta-versjon. I forbindelse med dette er det gjort følgende endringer:

- Lagt til `TableOfContents`, som brukes likt som `LinkList` med `variant="ordered"` satt. Endringene under er gjeldende for både `LinkList` og `TableOfContents`.
- `LinkList` krever ikke lenger `LinkList.Item`.
- `LinkList` krever nå en [`label` som beskriver innholdet i lista](https://www.w3.org/WAI/WCAG21/Techniques/html/H97). Denne skjules automatisk med `hideLabel`-propen.
- `LinkList` er nå semantisk en `nav`-komponent fordi den skal brukes for samlinger av navigasjonslenker.

Før:
```typescript jsx
<LinkList>
    <LinkList.Item>
        <LinkList.Link href="#">
            ...
        </LinkList.Link>
    </LinkList.Item>
</LinkList>
```

Etter:
```typescript jsx
<LinkList>
    <LinkList.Link href="#">
        ...
    </LinkList.Link>
</LinkList>
```
