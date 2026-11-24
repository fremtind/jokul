import{R as c,j as g}from"./iframe-DHZS9f39.js";import{c as f}from"./clsx-B-dksMZM.js";import{S as u}from"./SlotComponent-CVors34f.js";import{C as b,g as v}from"./types-IsTkoTmK.js";const y=c.forwardRef(function(i,l){const{className:d,clickable:t=!1,padding:r="s",outlined:n=!1,asChild:k,as:m="div",children:e,trackingProps:a,...s}=i,p=k?u:m,o=e?String(e):void 0;return g.jsx(p,{"data-testid":"jkl-card","data-clickable":t,"data-padding":r,className:f("jkl-card",n&&"jkl-card--outlined",d),...s,"data-track-component-name":b.Card,"data-track-id":a?.id??o,"data-track-label":o,"data-track-padding":r,"data-track-outlined":n,"data-track-clickable":t,...v(a?.extra,s),ref:l,children:e})});y.__docgenInfo={description:`En allsidig kortkomponent som brukes for å gruppere innhold på en side.
Komponenten rendres til vanlig som en \`<div>\`, men du kan velge å rendre
den som andre elementer eller komponenter der du trenger annen semantikk
eller funksjonalitet.`,methods:[],displayName:"Card",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]'},description:""},className:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof CARD_PADDINGS)[number]"},description:`Setter padding på kortet. Tilsvarer samme property i Figma.
@default "s"`},outlined:{required:!1,tsType:{name:"boolean"},description:`Legger på kantlinje rundt kortet.
@default false`},clickable:{required:!1,tsType:{name:"boolean"},description:"@deprecated Kortet får automatisk riktige stiler dersom det rendres som `button` eller `a`\nAngir om kortet visuelt skal fremstå som klikkbart. Du må selv rendre\nkortet som et klikkbart element (f.eks. `<a>` eller en `<Link>` fra\net ruting-bibliotek) og gi det en `href` eller `onClick`-handler.\nHUSK: Sett aria-label for at støtteverktøy, som skjermlesere, ikke\nskal lese alt innholdet i kortet."},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * En unik identifikator for komponenten som skal spores. Mappes til \`data-track-id\`.
     */
    id?: string;
    /**
     * Ekstra sporingsfelt utover de faste feltene over, for team som trenger å
     * spore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget
     * \`data-track-<kebab-case-nøkkel>\`-attributt i DOM-en, se \`getExtraTrackingAttributes\`.
     */
    extra?: Record<string, string | number | boolean>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""}}};export{y as C};
