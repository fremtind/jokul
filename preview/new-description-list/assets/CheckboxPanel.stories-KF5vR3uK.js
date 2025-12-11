import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{r as t}from"./index-siqcju79.js";import{B as v}from"./BasePanel-DikHzdFL.js";import{F as h}from"./Flex-4pIEM4q7.js";import{F as y}from"./FieldGroup-4QcUrmjz.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useAutoAnimateHeight-8n24dQsP.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";import"./SlotComponent-DNbIHoXc.js";import"./mergeRefs-DouPjScu.js";import"./useId-CahK3IZ3.js";import"./Label-Ct8Bs2e9.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./Icon-DnRkF4CO.js";const n=t.forwardRef(function({label:m,extraLabel:k,alwaysOpen:p=!1,checked:s,defaultChecked:i,onChange:l,...g},c){const[u,b]=t.useState(i||!1),f=t.useCallback(d=>{l?.(d),b(d.target.checked)},[l]),o=typeof s<"u",x=o?s:u;return e.jsx(v,{ref:c,type:"checkbox",isChecked:x,defaultChecked:i,checked:o?s:void 0,onChange:f,alwaysOpen:p,label:m,extraLabel:k,...g})});n.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{label:{required:!0,tsType:{name:"string"},description:""},extraLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`@deprecated bruk heller {@link amount} for å vise pris.
Dersom du har behov utover dette ta kontakt med oss så finner vi en løsning sammen.`},alwaysOpen:{required:!1,tsType:{name:"boolean"},description:`@deprecated vi ønsker ikke at content skal skjules for brukerne lenger
@default false`,defaultValue:{value:"false",computed:!1}},amount:{required:!1,tsType:{name:"string"},description:"Viser pris til høyre i panelet"}}};const B={title:"Komponenter/CheckboxPanel",component:n,parameters:{layout:"padded"},tags:["autodocs","forms"],argTypes:{extraLabel:{control:"text"}},args:{label:"Livsforsikring",children:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",alwaysOpen:!0,amount:"xxx kr/mnd",value:"Livsforsikring"}},r={},a={name:"Velg dekning for reiseforsikring",render:()=>e.jsxs(h,{gap:"xs",direction:"column",as:y,legend:"Velg dekninger",children:[e.jsx(n,{name:"dekning",label:"Reisegods",extraLabel:"35 kr/mnd",value:"Reisegods",children:"Dekker tap, tyveri eller skade på bagasje og personlige eiendeler med inntil 30 000 kr."}),e.jsx(n,{name:"dekning",label:"Avbestilling",extraLabel:"55 kr/mnd",value:"Avbestilling",children:"Gir erstatning for reiseutgifter hvis du må avbestille reisen på grunn av akutt sykdom eller andre uforutsette hendelser."}),e.jsx(n,{name:"dekning",label:"Ulykkesdekning",extraLabel:"40 kr/mnd",value:"Ulykke",children:"Gir en engangsutbetaling ved varig medisinsk invaliditet eller død som følge av en ulykke på reisen."})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Velg dekning for reiseforsikring",
  render: () => {
    return <Flex gap="xs" direction="column" as={FieldGroup} legend="Velg dekninger">
                <CheckboxPanelComponent name="dekning" label="Reisegods" extraLabel="35 kr/mnd" value="Reisegods">
                    Dekker tap, tyveri eller skade på bagasje og personlige
                    eiendeler med inntil 30 000 kr.
                </CheckboxPanelComponent>
                <CheckboxPanelComponent name="dekning" label="Avbestilling" extraLabel="55 kr/mnd" value="Avbestilling">
                    Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.
                </CheckboxPanelComponent>
                <CheckboxPanelComponent name="dekning" label="Ulykkesdekning" extraLabel="40 kr/mnd" value="Ulykke">
                    Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.
                </CheckboxPanelComponent>
            </Flex>;
  }
}`,...a.parameters?.docs?.source}}};const I=["CheckboxPanel","VelgDekningForReiseforsikring"];export{r as CheckboxPanel,a as VelgDekningForReiseforsikring,I as __namedExportsOrder,B as default};
