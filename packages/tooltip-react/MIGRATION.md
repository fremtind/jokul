# Migrasjonsguide

## Til `jkl-tooltip-react@3.0.0`

Der du har brukt den eksisterende `<Tooltip>`-komponenten kan du erstatte den med den nye `<PopupTip>`-komponenten direkte:

```tsx
{
    /* Før: */
}
<p className="jkl-body">
    Du betaler 348 kr/mnd <Tooltip content="Månedsprisen varierer fra måned til måned" placement="top" />
</p>;

{
    /* Etter: */
}
<p className="jkl-body">
    Du betaler 348 kr/mnd <PopupTip content="Månedsprisen varierer fra måned til måned" placement="top" />
</p>;
```
