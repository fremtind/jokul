---
"@fremtind/jokul": major
---

LinkList får nytt visuelt uttrykk i unordered varianten. I forbindelse med dette er det gjort følgende endringer:

BREAKING CHANGES:
- `LinkList` krever ikke lenger `LinkList.Item`. Denne er derfor fjernet.
- `LinkList` krever nå en [`label` som beskriver innholdet i lista](https://www.w3.org/WAI/WCAG21/Techniques/html/H97).

Minor changes:
- `LinkList` er nå semantisk en `nav`-komponent fordi den skal brukes for samlinger av navigasjonslenker.
