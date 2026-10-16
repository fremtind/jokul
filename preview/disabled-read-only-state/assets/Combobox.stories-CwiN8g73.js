import{j as d,r as p}from"./iframe-BluD2y5g.js";import{C as f}from"./Combobox-BF6ObpX5.js";/* empty css               */import{P as c}from"./PopupTip-BALPCqHe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-c8sxQ045.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bi9Y6njz.js";import"./usePreviousValue-BbleQHP3.js";import"./useId-CqDn8-2e.js";import"./useListNavigation-DwhTreHd.js";import"./Chip-DNauBQFT.js";import"./CheckIcon-BsRBRY0Z.js";import"./Icon-kqGXX5uY.js";import"./CloseIcon-Fvd7iKu-.js";import"./IconButton-BZ4zeUNb.js";import"./ArrowVerticalAnimated-BEDmrzL1.js";import"./ArrowDownIcon-DuwEs9a-.js";import"./InputGroup-D7CFmTiR.js";import"./Label-BuBxX9pA.js";import"./SupportLabel-CuwoYV1K.js";import"./SuccessIcon-De2Rf2HP.js";import"./WarningIcon-BvUiAEtD.js";import"./TooltipTrigger-C71H4jqG.js";import"./floating-ui.react-BfYA8F-T.js";import"./index-VO3XEULM.js";import"./index-CeaZETLJ.js";import"./TooltipContent-DQ0kCxy4.js";import"./getThemeAndSize-CZAj3IXt.js";import"./QuestionIcon-BSes4oaW.js";const e=[{value:"bil",label:"Bil",tagLabel:"Bil"},{value:"hus",label:"Hus",tagLabel:"Hus"},{value:"reise",label:"Reise",tagLabel:"Reise"}],h=[{value:"B01",label:"B01 - Frontkollisjon med moderat deformasjon",tagLabel:"B01",description:"Foreslar takst, kontroll av airbag og vurdering av leiebil."},{value:"B12",label:"B12 - Glasskade uten karosseriskade",tagLabel:"B12",description:"Prioriterer glasspartner og hopper over ordinaer taksering."},{value:"B19",label:"B19 - Parkeringsskade med ukjent motpart",tagLabel:"B19",description:"Sender saken til hurtigloep for egenandel og bildeinnhenting."},{value:"B27",label:"B27 - Kollisjon med dyr over egenandelsterskel",tagLabel:"B27",description:"Ber om politianmeldelse eller dokumentasjon fra viltnemnd."},{value:"B41",label:"B41 - Brann eller sot i motorrom",tagLabel:"B41",description:"Eskalerer til spesialist og stopper automatisk oppgjor."},{value:"B53",label:"B53 - Tyveri med sporingsdata tilgjengelig",tagLabel:"B53",description:"Kobler inn antifraud-regelsett og ber om komplett hendelsesforloep."}],g=[{value:"P03",label:"P03 - Nakkesleng rapportert innen 72 timer",tagLabel:"P03",description:"Utloser medisinsk sporsmal og forslag om oppfolgingstidspunkt."},{value:"P11",label:"P11 - Fravaer fra arbeid over 16 dager",tagLabel:"P11",description:"Vurderer inntektstap og sender saken til personskadeteam."},{value:"P18",label:"P18 - Flere behandlere involvert i samme skadeforlop",tagLabel:"P18",description:"Ber om koordinering av journalinnhenting og samtykke."},{value:"P24",label:"P24 - Barn involvert i ulykken",tagLabel:"P24",description:"Aktiverer ekstra kontrollsporsmal og prioriterer manuell vurdering."},{value:"P37",label:"P37 - Motstrid mellom skademelding og legeopplysninger",tagLabel:"P37",description:"Markerer mulig avvik og foreslar kvalitetssikring for vedtak."}],y=[{value:"M02",label:"M02 - Dokumentasjon kom inn etter automatisk avvisning",tagLabel:"M02",description:"Brukes nar saksbehandler vil overstyre et negativt regelutfall."},{value:"M07",label:"M07 - Kunden er dekket av overgangsregel i tidligere vilkar",tagLabel:"M07",description:"Gjelder saker der historiske vilkar trumfer dagens regelmotor."},{value:"M13",label:"M13 - Regelfunn gjelder annen forsikring enn valgt produkt",tagLabel:"M13",description:"Fjerner feiltreff nar samme kunde har flere relaterte dekninger."},{value:"M21",label:"M21 - Saken er flagget for antifraud og trenger second opinion",tagLabel:"M21",description:"Tvinger manuell kontroll for utbetaling eller videre behandling."},{value:"M34",label:"M34 - Fravik godkjent av medisinsk radgiver",tagLabel:"M34",description:"Dokumenterer at spesialist har godkjent unntak fra standardregelen."}];function B({width:t,value:i,onChange:u,...v}){const[b,k]=p.useState(i||[]);return p.useEffect(()=>{k(i||[])},[i]),d.jsx(f,{...v,width:`${t}ch`,value:b,onChange:m=>{k(m.target.selectedOptions),u(m)}})}const Z={title:"Komponenter/Combobox",component:f,argTypes:{width:{control:"number",description:"Bredden til feltet i ch-enheter"}},args:{placeholder:"Søk etter kode eller regelnavn",inline:!1,invalid:!1,hasTagHover:!1,labelProps:{srOnly:!1,variant:"small"},width:28,description:"Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",noMatchingOption:"Ingen regelfunn matcher soeket.",onChange:()=>""},render:t=>d.jsx(B,{...t})},a={name:"Combobox",args:{items:e,name:"forsikringer",label:"Velg forsikringer",description:"Velg en eller flere forsikringer.",width:20}},n={args:{items:e,name:"forsikringer-disabled",label:"Velg forsikringer",value:[e[0]],disabled:!0,width:20}},r={name:"Read-only",args:{items:e,name:"forsikringer-readonly",label:"Velg forsikringer",value:[e[0],e[2]],readOnly:!0,width:20}},l={args:{items:g,name:"personskade-regeltreff",label:"Hvilke regelfunn skal folge personskadesaken?",description:"Korte tagger viser regelkodene, mens hover viser hele regelbeskrivelsen.",hasTagHover:!0,tooltip:d.jsx(c,{content:"Taggene viser regelkoder. Hold over en kode for aa se hele regelfunnet."}),helpLabel:"Velg alle koder som skal ligge synlig i arbeidsflaten for medisinsk vurdering.",value:[g[0],g[4]],width:32}},o={args:{items:h,name:"bilskade-regeltreff",label:"Hvilke regelfunn traff for bilskaden?",description:"Bruk kombinasjonen av kode og forklaring for aa velge relevante funn.",helpLabel:"Soek paa kode, skadeaarsak eller anbefalt neste steg for aa filtrere listen.",width:30}},s={args:{items:y,name:"overstyringsarsaker",label:"Hvilke arsaker skal dokumentere manuell overstyring?",description:"Ekspertsystemet krever minst ett begrunnet avvik for a fortsette behandlingen.",invalid:!0,errorLabel:"Velg minst en arsakskode for a dokumentere hvorfor regelfunnet overstyres.",noMatchingOption:"Ingen overstyringsarsaker matcher soeket. Proev en kode som M02 eller M21.",width:34}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Combobox",
  args: {
    items: enkleValg,
    name: "forsikringer",
    label: "Velg forsikringer",
    description: "Velg en eller flere forsikringer.",
    width: 20
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: enkleValg,
    name: "forsikringer-disabled",
    label: "Velg forsikringer",
    value: [enkleValg[0]],
    disabled: true,
    width: 20
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Read-only",
  args: {
    items: enkleValg,
    name: "forsikringer-readonly",
    label: "Velg forsikringer",
    value: [enkleValg[0], enkleValg[2]],
    readOnly: true,
    width: 20
  }
}`,...r.parameters?.docs?.source},description:{story:`Read-only viser valget uten å kunne endre det: menyen kan ikke åpnes og taggene
kan ikke fjernes, men teksten beholder full kontrast.`,...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: personskadeRegeltreff,
    name: "personskade-regeltreff",
    label: "Hvilke regelfunn skal folge personskadesaken?",
    description: "Korte tagger viser regelkodene, mens hover viser hele regelbeskrivelsen.",
    hasTagHover: true,
    tooltip: <PopupTip content="Taggene viser regelkoder. Hold over en kode for aa se hele regelfunnet." />,
    helpLabel: "Velg alle koder som skal ligge synlig i arbeidsflaten for medisinsk vurdering.",
    value: [personskadeRegeltreff[0], personskadeRegeltreff[4]],
    width: 32
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: bilskadeRegeltreff,
    name: "bilskade-regeltreff",
    label: "Hvilke regelfunn traff for bilskaden?",
    description: "Bruk kombinasjonen av kode og forklaring for aa velge relevante funn.",
    helpLabel: "Soek paa kode, skadeaarsak eller anbefalt neste steg for aa filtrere listen.",
    width: 30
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: overstyringsarsaker,
    name: "overstyringsarsaker",
    label: "Hvilke arsaker skal dokumentere manuell overstyring?",
    description: "Ekspertsystemet krever minst ett begrunnet avvik for a fortsette behandlingen.",
    invalid: true,
    errorLabel: "Velg minst en arsakskode for a dokumentere hvorfor regelfunnet overstyres.",
    noMatchingOption: "Ingen overstyringsarsaker matcher soeket. Proev en kode som M02 eller M21.",
    width: 34
  }
}`,...s.parameters?.docs?.source}}};const ee=["ComboboxStory","Disabled","ReadOnly","RegeltreffMedTagHover","BilskadeRegelmotor","ManuellOverstyring"];export{o as BilskadeRegelmotor,a as ComboboxStory,n as Disabled,s as ManuellOverstyring,r as ReadOnly,l as RegeltreffMedTagHover,ee as __namedExportsOrder,Z as default};
