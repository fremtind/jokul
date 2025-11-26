---
"@fremtind/jokul": major
---

Gjør Link List til stabil komponent.

Før:

```tsx
<LinkList>
    <LinkList.Item>
        <LinkList.Link href="#">...</LinkList.Link>
    </LinkList.Item>
</LinkList>
```

Etter:

```tsx
<LinkList label="...">
    <LinkList.Link href="#">...</LinkList.Link>
</LinkList>
```
