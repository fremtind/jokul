import{j as s,r as d}from"./iframe-BnGY5X41.js";import{C as k}from"./Combobox-PtGRuvC-.js";/* empty css               */import{P as f}from"./PopupTip-DQJlOJZg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-BUcjHhUa.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-QAoad4DI.js";import"./usePreviousValue-Cecnm_7y.js";import"./useId-B5LPZB8u.js";import"./useListNavigation-5p3phoHz.js";import"./Chip-DX8_DVB8.js";import"./CheckIcon-EbBAJhcc.js";import"./Icon-BDncuAWp.js";import"./CloseIcon-BLl2VsQs.js";import"./IconButton-BSQXcM_l.js";import"./ArrowVerticalAnimated-DgdtennQ.js";import"./ArrowDownIcon-CqpOiTdm.js";import"./InputGroup-CmGiul4N.js";import"./Label-Qvk7BtU4.js";import"./SupportLabel-BHyajh5v.js";import"./SuccessIcon-DemxqsKh.js";import"./WarningIcon-CNLCTvIB.js";import"./TooltipTrigger-BfNQNDyZ.js";import"./floating-ui.react-Dei0d6di.js";import"./index-BfS9IyjD.js";import"./index-BJn-DCl_.js";import"./TooltipContent-DKDA2q4N.js";import"./getThemeAndSize-CZAj3IXt.js";import"./QuestionIcon-DrmQrqD8.js";const u=[{value:"bil",label:"Bil",tagLabel:"Bil"},{value:"hus",label:"Hus",tagLabel:"Hus"},{value:"reise",label:"Reise",tagLabel:"Reise"}],b=[{value:"B01",label:"B01 - Frontkollisjon med moderat deformasjon",tagLabel:"B01",description:"Foreslar takst, kontroll av airbag og vurdering av leiebil."},{value:"B12",label:"B12 - Glasskade uten karosseriskade",tagLabel:"B12",description:"Prioriterer glasspartner og hopper over ordinaer taksering."},{value:"B19",label:"B19 - Parkeringsskade med ukjent motpart",tagLabel:"B19",description:"Sender saken til hurtigloep for egenandel og bildeinnhenting."},{value:"B27",label:"B27 - Kollisjon med dyr over egenandelsterskel",tagLabel:"B27",description:"Ber om politianmeldelse eller dokumentasjon fra viltnemnd."},{value:"B41",label:"B41 - Brann eller sot i motorrom",tagLabel:"B41",description:"Eskalerer til spesialist og stopper automatisk oppgjor."},{value:"B53",label:"B53 - Tyveri med sporingsdata tilgjengelig",tagLabel:"B53",description:"Kobler inn antifraud-regelsett og ber om komplett hendelsesforloep."}],t=[{value:"P03",label:"P03 - Nakkesleng rapportert innen 72 timer",tagLabel:"P03",description:"Utloser medisinsk sporsmal og forslag om oppfolgingstidspunkt."},{value:"P11",label:"P11 - Fravaer fra arbeid over 16 dager",tagLabel:"P11",description:"Vurderer inntektstap og sender saken til personskadeteam."},{value:"P18",label:"P18 - Flere behandlere involvert i samme skadeforlop",tagLabel:"P18",description:"Ber om koordinering av journalinnhenting og samtykke."},{value:"P24",label:"P24 - Barn involvert i ulykken",tagLabel:"P24",description:"Aktiverer ekstra kontrollsporsmal og prioriterer manuell vurdering."},{value:"P37",label:"P37 - Motstrid mellom skademelding og legeopplysninger",tagLabel:"P37",description:"Markerer mulig avvik og foreslar kvalitetssikring for vedtak."}],c=[{value:"M02",label:"M02 - Dokumentasjon kom inn etter automatisk avvisning",tagLabel:"M02",description:"Brukes nar saksbehandler vil overstyre et negativt regelutfall."},{value:"M07",label:"M07 - Kunden er dekket av overgangsregel i tidligere vilkar",tagLabel:"M07",description:"Gjelder saker der historiske vilkar trumfer dagens regelmotor."},{value:"M13",label:"M13 - Regelfunn gjelder annen forsikring enn valgt produkt",tagLabel:"M13",description:"Fjerner feiltreff nar samme kunde har flere relaterte dekninger."},{value:"M21",label:"M21 - Saken er flagget for antifraud og trenger second opinion",tagLabel:"M21",description:"Tvinger manuell kontroll for utbetaling eller videre behandling."},{value:"M34",label:"M34 - Fravik godkjent av medisinsk radgiver",tagLabel:"M34",description:"Dokumenterer at spesialist har godkjent unntak fra standardregelen."}];function h({width:o,value:l,onChange:m,...p}){const[v,i]=d.useState(l||[]);return d.useEffect(()=>{i(l||[])},[l]),s.jsx(k,{...p,width:`${o}ch`,value:v,onChange:g=>{i(g.target.selectedOptions),m(g)}})}const X={title:"Komponenter/Combobox",component:k,argTypes:{width:{control:"number",description:"Bredden til feltet i ch-enheter"}},args:{placeholder:"Søk etter kode eller regelnavn",inline:!1,invalid:!1,hasTagHover:!1,labelProps:{srOnly:!1,variant:"small"},width:28,description:"Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",noMatchingOption:"Ingen regelfunn matcher soeket.",onChange:()=>""},render:o=>s.jsx(h,{...o})},e={name:"Combobox",args:{items:u,name:"forsikringer",label:"Velg forsikringer",description:"Velg en eller flere forsikringer.",width:20}},r={args:{items:t,name:"personskade-regeltreff",label:"Hvilke regelfunn skal folge personskadesaken?",description:"Korte tagger viser regelkodene, mens hover viser hele regelbeskrivelsen.",hasTagHover:!0,tooltip:s.jsx(f,{content:"Taggene viser regelkoder. Hold over en kode for aa se hele regelfunnet."}),helpLabel:"Velg alle koder som skal ligge synlig i arbeidsflaten for medisinsk vurdering.",value:[t[0],t[4]],width:32}},a={args:{items:b,name:"bilskade-regeltreff",label:"Hvilke regelfunn traff for bilskaden?",description:"Bruk kombinasjonen av kode og forklaring for aa velge relevante funn.",helpLabel:"Soek paa kode, skadeaarsak eller anbefalt neste steg for aa filtrere listen.",width:30}},n={args:{items:c,name:"overstyringsarsaker",label:"Hvilke arsaker skal dokumentere manuell overstyring?",description:"Ekspertsystemet krever minst ett begrunnet avvik for a fortsette behandlingen.",invalid:!0,errorLabel:"Velg minst en arsakskode for a dokumentere hvorfor regelfunnet overstyres.",noMatchingOption:"Ingen overstyringsarsaker matcher soeket. Proev en kode som M02 eller M21.",width:34}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Combobox",
  args: {
    items: enkleValg,
    name: "forsikringer",
    label: "Velg forsikringer",
    description: "Velg en eller flere forsikringer.",
    width: 20
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: bilskadeRegeltreff,
    name: "bilskade-regeltreff",
    label: "Hvilke regelfunn traff for bilskaden?",
    description: "Bruk kombinasjonen av kode og forklaring for aa velge relevante funn.",
    helpLabel: "Soek paa kode, skadeaarsak eller anbefalt neste steg for aa filtrere listen.",
    width: 30
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Y=["ComboboxStory","RegeltreffMedTagHover","BilskadeRegelmotor","ManuellOverstyring"];export{a as BilskadeRegelmotor,e as ComboboxStory,n as ManuellOverstyring,r as RegeltreffMedTagHover,Y as __namedExportsOrder,X as default};
