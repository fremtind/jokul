import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{r as l}from"./index-siqcju79.js";import{I as k}from"./InputPanel-DnqEnSbP.js";import{F as d}from"./Flex-6AvuqMfo.js";import{F as g}from"./FieldGroup-4QcUrmjz.js";import{B as m}from"./Button-fpmiG8ZH.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./Checkbox-CjNXUV26.js";import"./useId-CahK3IZ3.js";import"./RadioButton-DE54Ez63.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./Icon-DnRkF4CO.js";import"./BaseRadioButton-C4joAhFY.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";import"./Label-Ct8Bs2e9.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";const r=l.forwardRef(function({...i},t){return e.jsx(k,{...i,type:"radio",ref:t})});r.__docgenInfo={description:"",methods:[],displayName:"RadioPanel"};const _={title:"Komponenter/RadioPanel",component:r,parameters:{layout:"padded"},tags:["autodocs"],args:{label:"Livsforsikring",children:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Forsikring",alwaysOpen:!0},argTypes:{alwaysOpen:{description:"Deprecated: vi ønsker å vise beskrivelse hele tiden",table:{category:"Deprecated"}},children:{description:"Deprecated: bruk heller description",table:{category:"Deprecated"}},extraLabel:{description:"Deprecated: bruk heller amount",table:{category:"Deprecated"}}},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},o={},a={render:n=>e.jsxs(d,{as:g,legend:"Velg en forsikring",name:"forsikring",defaultValue:"Livsforsikring",gap:"xs",direction:"column",children:[e.jsx(r,{...n,name:"forsikring",label:"Ulykkesforsikring",amount:"50 kr/mnd",value:"Ulykkesforsikring",children:"Gir deg en engangsutbetaling hvis du skulle bli utsatt for en ulykke som fører til medisinsk invaliditet eller død."}),e.jsx(r,{...n,name:"forsikring",label:"Innboforsikring",amount:"100 kr/mnd",value:"Innboforsikring",children:"Sikrer dine eiendeler mot brann, vannskader og tyveri."}),e.jsx(r,{...n,name:"forsikring",label:"Livsforsikring",amount:"200 kr/mnd",value:"Livsforsikring",children:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon."})]})},s={render:n=>{const[i,t]=l.useState(!0);return e.jsxs(d,{as:g,legend:"Velg en forsikring",name:"forsikring",defaultValue:"Livsforsikring",gap:"xs",direction:"column",children:[e.jsx(r,{...n,name:"forsikring",label:"Ulykkesforsikring",amount:"50 kr/mnd",value:"Ulykkesforsikring",children:"Gir deg en engangsutbetaling hvis du skulle bli utsatt for en ulykke som fører til medisinsk invaliditet eller død."}),e.jsx(r,{...n,name:"forsikring",label:"Innboforsikring",amount:"100 kr/mnd",value:"Innboforsikring",children:"Sikrer dine eiendeler mot brann, vannskader og tyveri."}),e.jsx(r,{...n,name:"forsikring",label:"Livsforsikring",amount:"200 kr/mnd",value:"Livsforsikring",checked:i,children:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon."}),e.jsx(m,{variant:"ghost",onClick:()=>t(!i),type:"button",children:"Toggle radio 3"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Flex as={FieldGroup} legend="Velg en forsikring" name="forsikring" defaultValue="Livsforsikring" gap="xs" direction="column">
                <RadioPanelComponent {...args} name="forsikring" label="Ulykkesforsikring" amount="50 kr/mnd" value="Ulykkesforsikring">
                    Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død.
                </RadioPanelComponent>
                <RadioPanelComponent {...args} name="forsikring" label="Innboforsikring" amount="100 kr/mnd" value="Innboforsikring">
                    Sikrer dine eiendeler mot brann, vannskader og tyveri.
                </RadioPanelComponent>
                <RadioPanelComponent {...args} name="forsikring" label="Livsforsikring" amount="200 kr/mnd" value="Livsforsikring">
                    Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon.
                </RadioPanelComponent>
            </Flex>;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Flex as={FieldGroup} legend="Velg en forsikring" name="forsikring" defaultValue="Livsforsikring" gap="xs" direction="column">
                <RadioPanelComponent {...args} name="forsikring" label="Ulykkesforsikring" amount="50 kr/mnd" value="Ulykkesforsikring">
                    Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død.
                </RadioPanelComponent>
                <RadioPanelComponent {...args} name="forsikring" label="Innboforsikring" amount="100 kr/mnd" value="Innboforsikring">
                    Sikrer dine eiendeler mot brann, vannskader og tyveri.
                </RadioPanelComponent>
                <RadioPanelComponent {...args} name="forsikring" label="Livsforsikring" amount="200 kr/mnd" value="Livsforsikring" checked={checked}>
                    Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon.
                </RadioPanelComponent>
                <Button variant="ghost" onClick={() => setChecked(!checked)} type="button">
                    Toggle radio 3
                </Button>
            </Flex>;
  }
}`,...s.parameters?.docs?.source}}};const w=["RadioPanel","VelgForsikring","Controlled"];export{s as Controlled,o as RadioPanel,a as VelgForsikring,w as __namedExportsOrder,_ as default};
