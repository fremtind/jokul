# [`@fremtind/browserslist-config-jkl`](https://jokul.fremtind.no)

Inneholder browserlist konfigurasjonen til Jøkul. Endringer i denne pakke vil påvirke alle andre pakker i Jøkul, så alle endringer her vil kreve regresjonstesting av alle andre pakker i de browsere vi ønsker å støtte.

## Bruk

Legges til i `package.json`:

```json
{
    "devDependencies": {
        "@fremtind/browserslist-config-jkl": "^0.3.2"
    },
    "browserslist": ["extends @fremtind/browserslist-config-jkl"]
}
```
