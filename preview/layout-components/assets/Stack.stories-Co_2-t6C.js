import{R as e}from"./index-siqcju79.js";import{t as o}from"./tokens-CmXyXTIM.js";import{c}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DaWZu8wl.js";const t=e.forwardRef(function(s,l){const{as:i="div",className:d,gap:a,recursive:m=!1,style:g,...k}=s,p=i;return e.createElement(p,{"data-testid":"jkl-stack","data-recursive":m,className:c("jkl-stack",d),style:{...g,"--gap":a?o.spacing[a]:0},...k,ref:l})});t.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},gap:{required:!1,tsType:{name:"unknown"},description:`Spacing-steget som skal brukes som avstand mellom innholdsblokkene.
@default 0`},recursive:{required:!1,tsType:{name:"boolean"},description:`lager automatisk avstand også mellom innhold inni nøstede elementer
inne i Stack. Dette sørger for jevn fordeling av innholdet selv om
du trenger å lage flere nivåer med innhold.
@default false`}}};const y={title:"Layout/Primitives/Stack",component:t,tags:["autodocs"],argTypes:{ref:{table:{disable:!0}},as:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},gap:{control:"select",options:Object.keys(o.spacing)},recursive:{control:"boolean"}}},r={parameters:{layout:"fullscreen"},decorators:[n=>e.createElement("div",{style:{paddingInline:"var(--jkl-unit-90)",paddingBlock:"var(--jkl-unit-130)"}},e.createElement(n,null))],render:n=>e.createElement(t,{...n},e.createElement("h1",null,"Hvordan skrive dokumentasjon"),e.createElement("p",null,"For at designsystemet skal fungere må systemdokumentasjonen være god. Hvis utviklere og designere ikke vet hvilke muligheter og begrensninger som finnes i systemet, kommer de til å gjøre feil og dobbeltarbeid."),e.createElement("p",null,"Vi prøver å levere god dokumentasjon for Jøkul, og vi har bygd opp rammeverket for dokumentasjon slik at Jøkul har det som trengs og sånn at vi kan levere en smidig utvikleropplevelse. Det skal bare være én kilde til sannhet."),e.createElement("h2",null,"Dokumentere endringer"),e.createElement("p",null,"For å dokumentere endringer på en måte som automatiserer versjonering og generering av changelogs, bruker vi verktøyet Changesets."),e.createElement("p",null,"Changesets lar oss definere nøyaktig hvilke pakker som er påvirket av en endring og hva slags versjonsoppdatering (",e.createElement("code",null,"major"),", ",e.createElement("code",null,"minor"),", eller"," ",e.createElement("code",null,"patch"),") endringen medfører."))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  decorators: [Story => <div style={{
    paddingInline: "var(--jkl-unit-90)",
    paddingBlock: "var(--jkl-unit-130)"
  }}>
                <Story />
            </div>],
  render: props => {
    return <Stack {...props}>
                <h1>Hvordan skrive dokumentasjon</h1>
                <p>
                    For at designsystemet skal fungere må systemdokumentasjonen
                    være god. Hvis utviklere og designere ikke vet hvilke
                    muligheter og begrensninger som finnes i systemet, kommer de
                    til å gjøre feil og dobbeltarbeid.
                </p>
                <p>
                    Vi prøver å levere god dokumentasjon for Jøkul, og vi har
                    bygd opp rammeverket for dokumentasjon slik at Jøkul har det
                    som trengs og sånn at vi kan levere en smidig
                    utvikleropplevelse. Det skal bare være én kilde til sannhet.
                </p>
                <h2>Dokumentere endringer</h2>
                <p>
                    For å dokumentere endringer på en måte som automatiserer
                    versjonering og generering av changelogs, bruker vi
                    verktøyet Changesets.
                </p>
                <p>
                    Changesets lar oss definere nøyaktig hvilke pakker som er
                    påvirket av en endring og hva slags versjonsoppdatering (
                    <code>major</code>, <code>minor</code>, eller{" "}
                    <code>patch</code>) endringen medfører.
                </p>
            </Stack>;
  }
}`,...r.parameters?.docs?.source}}};const b=["Demo"];export{r as Demo,b as __namedExportsOrder,y as default};
