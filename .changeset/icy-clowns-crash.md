---
"portal": minor
---

Lagt til webhook-basert cache invalidation for umiddelbare bloggoppdateringer i produksjon

Løser cache-problemer hvor nye Sanity-innlegg ikke viste seg umiddelbart på deployed miljøer ved å implementere automatisk cache revalidation via webhook-integrasjon.
