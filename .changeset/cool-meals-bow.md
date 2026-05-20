---
"portal": minor
---

Legger til sporing med Mixpanel

- Sporer sidevisninger automatisk
- Legger til generisk `track`-funksjon som kan brukes i portalen
- Skrur av persistence i Mixpanel, slik at det ikke blir brukt cookies i
  forbindelse med sporingen.
- Sender trafikk til Mixpanel via vår egen server
