---
"@fremtind/jokul": patch
---

Select-menyen rendres nå i en portal via `Popover`-komponenten. Det fikser at hele listen ikke ble synlig når `Select` ble brukt inne i containere med `overflow: hidden|clip|auto` (f.eks. `Card` eller `ExpandablePanel`), og at lista i tillegg flippes over til toppen dersom det ikke er plass under triggeren. Bredden til lista matcher triggeren via CSS `anchor-size()`, og `Popover` har fått en ny `onPlacementChange`-callback som lar Select bytte hvilken side av lista og knappen som er flat når lista flippes opp.
