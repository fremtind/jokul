# Migrasjonsguide til v2.x.x

APIet til `Image`-komponenten er vesentlig forandret til versjon 2.0. Likevel er det ikke veldig store forandringer som skal til for å benytte den nye versjonen av komponenten. Her finner du en enkel oversikt over endringene som må til, og som kan gjøres for å utnytte nye funksjoner i komponenten.

## Kortversjon

-   `defaultSize` er erstattet av `src`
-   `largeSize` er erstattet av `srcSet` (på en måte, les mer under)
-   `thumbnail` er erstattet av `placeholder`
-   `backgroundColor` og `isSmallDevice` utgår

## useScreen er ikke lenger nødvendig

Den gamle komponenten tok inn en prop `isSmallDevice` for å velge mellom bildestørrelser. Den nye komponenten bruker dimensjonene til bildet på siden for å bestemme dette, så man trenger ikke lenger hente skjermstørrelsen via f.eks. `useScreen`.

## Bruk av `srcSet` for responsive bilder

Den største forandringen i komponenten er bruken av `srcSet` for responsivitet i bildeoppløsningen. Dette muliggjør flere steg enn de to som fantes i den gamle versjonen, slik at det oftere blir lastet inn et bilde av riktig størrelse for brukerens nettleservindu.

Den enkleste måten å lage et `srcSet` fra et bilde i produksjon er sannsynligvis ved hjelp av en loader for bundleren du bruker. Mange CMSer tilbyr også `srcSet` for bildene som er lagret der.

### Eksempel med Webpack og `responsive-loader`

Dersom du bruker Webpack kan du benytte f.eks. [responsive-loader](https://github.com/dazuaz/responsive-loader) til å generere `srcSet`s fra bildene du importerer.

**1. Legg til loaderen i webpack.config.js:**

```ts
{
    test: /\.(png|jpg|jpeg)$/i,
    use: [
        {
            loader: 'responsive-loader',
            options: {
                outputPath: 'bilder',
                adapter: require('responsive-loader/sharp'),
                // Spesifiser at du ønsker placeholder, og oppløsningen:
                placeholder: true,
                placeholderSize: 50,
                // Spesifiser oppløsningene du vil ha bildene i:
                sizes: [400, 800, 1200, 1500],
            },
        },
    ],
},
```

**2. Importer og bruk bildet i komponenten din:**

```tsx
import myResponsiveImage from "./images/myImage.jpg";

export const MyComponent = () => {
    // "src" er den laveste oppløsningen av de du spesifiserte over
    const { src, srcSet, placeholder } = myResponsiveImage;

    return (
        <Image
            alt="Et fint bilde"
            src={src}
            srcSet={srcSet}
            placeholder={placeholder}
        />
    );
};
```

### Konstruere `srcSet` manuelt

Siden `srcSet` bare er en string kan du også lage det manuelt ved å importere bilder i forskjellig størrelse.

```ts
import image400 from "./image400.jpg";
import image800 from "./image800.jpg";
import image1200 from "./image1200.jpg";

// List opp bildene sammen med størrelsen deres:
const srcSet = `${image400} 400w, ${image800} 800w, ${image1200} 1200w`;
```
