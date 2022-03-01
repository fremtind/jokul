# [`@fremtind/browserslist-config-jkl`](https://jokul.fremtind.no)

Inneholder browserslist-konfigurasjonen til Jøkul. Det er en god idé å basere seg på Jøkul sin browserslist i ditt eget prosjekt.

Om konfigurasjonen _ikke passer_ til ditt bruk bør det være et tegn på at det enten er noe galt med konfigurasjonen i Jøkul som bør rettes på, eller at du prøver å støtte nettlesere du ikke trenger å støtte.

## Bruk

Legges til i `package.json`:

```json
{
    "devDependencies": {
        "@fremtind/browserslist-config-jkl": "<versjonsnummer>"
    },
    "browserslist": ["extends @fremtind/browserslist-config-jkl"]
}
```
