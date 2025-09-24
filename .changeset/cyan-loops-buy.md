---
"@fremtind/jokul": minor
---

Utvidet ExpandablePanel med Header-prop for et mer konsistent og intuitivt API. Nå kan du bruke <ExpandablePanel.Header> direkte for å definere headeren til panelet. Storybook-eksempler og relevante typer er oppdatert for å støtte endringen.

**Eksempel på bruk:**

```tsx
<ExpandablePanel>
	<ExpandablePanel.Header>
		Klikk for å åpne panelet
	</ExpandablePanel.Header>
	<ExpandablePanel.Content>
		Her er innholdet i panelet.
	</ExpandablePanel.Content>
</ExpandablePanel>
```
