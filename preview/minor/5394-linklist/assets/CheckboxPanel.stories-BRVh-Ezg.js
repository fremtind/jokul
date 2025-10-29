import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{r as s}from"./index-siqcju79.js";import{B as v}from"./BasePanel-B41mdMvS.js";import{F as h}from"./Flex-6AvuqMfo.js";import{F as C}from"./FieldGroup-4QcUrmjz.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useAutoAnimateHeight-8n24dQsP.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";import"./useId-CahK3IZ3.js";import"./Label-Ct8Bs2e9.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./Icon-DnRkF4CO.js";const n=s.forwardRef(function({label:m,extraLabel:g,alwaysOpen:k=!1,checked:i,defaultChecked:t,onChange:l,...p},c){const[u,b]=s.useState(t||!1),x=s.useCallback(d=>{l?.(d),b(d.target.checked)},[l]),o=typeof i<"u",f=o?i:u;return e.jsx(v,{ref:c,type:"checkbox",isChecked:f,defaultChecked:t,checked:o?i:void 0,onChange:x,alwaysOpen:k,label:m,extraLabel:g,...p})});n.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{label:{required:!0,tsType:{name:"string"},description:""},extraLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},alwaysOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const B={title:"Komponenter/CheckboxPanel",component:n,parameters:{layout:"padded"},tags:["autodocs","forms"],argTypes:{extraLabel:{control:"text"}},args:{label:"Livsforsikring",children:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",alwaysOpen:!1,extraLabel:"xxx kr/mnd",value:"Livsforsikring"}},r={},a={name:"Velg dekning for reiseforsikring",render:()=>e.jsxs(h,{gap:"xs",direction:"column",as:C,legend:"Velg dekninger",children:[e.jsx(n,{name:"dekning",label:"Reisegods",extraLabel:"35 kr/mnd",value:"Reisegods",children:"Dekker tap, tyveri eller skade på bagasje og personlige eiendeler med inntil 30 000 kr."}),e.jsx(n,{name:"dekning",label:"Avbestilling",extraLabel:"55 kr/mnd",value:"Avbestilling",children:"Gir erstatning for reiseutgifter hvis du må avbestille reisen på grunn av akutt sykdom eller andre uforutsette hendelser."}),e.jsx(n,{name:"dekning",label:"Ulykkesdekning",extraLabel:"40 kr/mnd",value:"Ulykke",children:"Gir en engangsutbetaling ved varig medisinsk invaliditet eller død som følge av en ulykke på reisen."})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
