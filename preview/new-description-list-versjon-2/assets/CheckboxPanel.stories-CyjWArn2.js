import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{r as t}from"./index-siqcju79.js";import{B as v}from"./BasePanel-DT57q9au.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useAutoAnimateHeight-FS5bB_AL.js";import"./tokens-CmXyXTIM.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";const n=t.forwardRef(function({label:k,extraLabel:g,alwaysOpen:m=!1,checked:s,defaultChecked:i,onChange:l,...p},c){const[u,b]=t.useState(i||!1),x=t.useCallback(d=>{l?.(d),b(d.target.checked)},[l]),o=typeof s<"u",f=o?s:u;return e.jsx(v,{ref:c,type:"checkbox",isChecked:f,defaultChecked:i,checked:o?s:void 0,onChange:x,alwaysOpen:m,label:k,extraLabel:g,...p})});n.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{label:{required:!0,tsType:{name:"string"},description:""},extraLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},alwaysOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const w={title:"Komponenter/CheckboxPanel",component:n,parameters:{layout:"padded"},tags:["autodocs","forms"],argTypes:{extraLabel:{control:"text"}},args:{label:"Livsforsikring",children:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",alwaysOpen:!1,extraLabel:"xxx kr/mnd",value:"Livsforsikring"}},r={},a={name:"Velg dekning for reiseforsikring",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{name:"dekning",label:"Reisegods",extraLabel:"35 kr/mnd",value:"Reisegods",children:"Dekker tap, tyveri eller skade på bagasje og personlige eiendeler med inntil 30 000 kr."}),e.jsx(n,{name:"dekning",label:"Avbestilling",extraLabel:"55 kr/mnd",value:"Avbestilling",children:"Gir erstatning for reiseutgifter hvis du må avbestille reisen på grunn av akutt sykdom eller andre uforutsette hendelser."}),e.jsx(n,{name:"dekning",label:"Ulykkesdekning",extraLabel:"40 kr/mnd",value:"Ulykke",children:"Gir en engangsutbetaling ved varig medisinsk invaliditet eller død som følge av en ulykke på reisen."})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Velg dekning for reiseforsikring",
  render: () => {
    return <>
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
            </>;
  }
}`,...a.parameters?.docs?.source}}};const A=["CheckboxPanel","VelgDekningForReiseforsikring"];export{r as CheckboxPanel,a as VelgDekningForReiseforsikring,A as __namedExportsOrder,w as default};
