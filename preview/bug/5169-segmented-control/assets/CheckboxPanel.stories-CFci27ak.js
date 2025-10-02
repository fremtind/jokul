import{r as s,R as e}from"./index-siqcju79.js";import{B as x}from"./BasePanel-e4z04p61.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useAutoAnimateHeight-DlmWcLa-.js";import"./tokens-CvksrKef.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";const n=s.forwardRef(function({label:k,extraLabel:g,alwaysOpen:m=!1,checked:t,defaultChecked:l,onChange:i,...c},p){const[u,b]=s.useState(l||!1),f=s.useCallback(d=>{i?.(d),b(d.target.checked)},[i]),o=typeof t<"u",v=o?t:u;return e.createElement(x,{ref:p,type:"checkbox",isChecked:v,defaultChecked:l,checked:o?t:void 0,onChange:f,alwaysOpen:m,label:k,extraLabel:g,...c})});n.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel",props:{label:{required:!0,tsType:{name:"string"},description:""},extraLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},alwaysOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const _={title:"Komponenter/CheckboxPanel",component:n,parameters:{layout:"padded"},tags:["autodocs","forms"],argTypes:{extraLabel:{control:"text"}},args:{label:"Livsforsikring",children:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",alwaysOpen:!1,extraLabel:"xxx kr/mnd",value:"Livsforsikring"}},r={},a={name:"Velg dekning for reiseforsikring",render:()=>e.createElement(e.Fragment,null,e.createElement(n,{name:"dekning",label:"Reisegods",extraLabel:"35 kr/mnd",value:"Reisegods"},"Dekker tap, tyveri eller skade på bagasje og personlige eiendeler med inntil 30 000 kr."),e.createElement(n,{name:"dekning",label:"Avbestilling",extraLabel:"55 kr/mnd",value:"Avbestilling"},"Gir erstatning for reiseutgifter hvis du må avbestille reisen på grunn av akutt sykdom eller andre uforutsette hendelser."),e.createElement(n,{name:"dekning",label:"Ulykkesdekning",extraLabel:"40 kr/mnd",value:"Ulykke"},"Gir en engangsutbetaling ved varig medisinsk invaliditet eller død som følge av en ulykke på reisen."))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const w=["CheckboxPanel","VelgDekningForReiseforsikring"];export{r as CheckboxPanel,a as VelgDekningForReiseforsikring,w as __namedExportsOrder,_ as default};
