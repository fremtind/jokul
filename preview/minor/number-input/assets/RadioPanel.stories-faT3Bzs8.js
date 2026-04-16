import{j as e,r as g}from"./iframe-CX7d-M6G.js";import{R as r}from"./RadioPanel-CquVlRqQ.js";import{F as a}from"./Flex-D8YWhLiW.js";import{F as l}from"./FieldGroup-DXXWBcq8.js";import{B as k}from"./Button-C6J32eKw.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DnjsIKHT.js";import"./clsx-B-dksMZM.js";import"./Checkbox-BJaDj9SU.js";import"./useId-CVAgRN4R.js";import"./RadioButton-C_gmT_MC.js";import"./SupportLabel-C6mhfjzx.js";import"./WarningIcon-xCUlSVcJ.js";import"./Icon-DP0TbAjA.js";import"./BaseRadioButton-ZWBaUHaA.js";import"./SlotComponent-C-aBYc1k.js";import"./mergeRefs-ChfDIb2x.js";import"./Label-DKRirb-G.js";import"./usePreviousValue-9mUcCFwU.js";import"./Loader-BIVhUfXk.js";import"./useDelayedRender-Cj-5yd5I.js";const B={title:"Komponenter/RadioPanel",component:r,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Forsikring",alwaysOpen:!0,"aria-invalid":!1},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},i={},s={render:n=>e.jsxs(a,{as:l,legend:"Velg en forsikring",name:"forsikring",defaultValue:"Livsforsikring",gap:"xs",direction:"column",children:[e.jsx(r,{...n,name:"forsikring",label:"Ulykkesforsikring",amount:"50 kr/mnd",value:"Ulykkesforsikring",description:`Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død.`}),e.jsx(r,{...n,name:"forsikring",label:"Innboforsikring",amount:"100 kr/mnd",value:"Innboforsikring",description:"Sikrer dine eiendeler mot brann, vannskader og tyveri."}),e.jsx(r,{...n,name:"forsikring",label:"Livsforsikring",amount:"200 kr/mnd",value:"Livsforsikring",description:`Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon.`})]})},o={render:n=>{const[t,d]=g.useState(!0);return e.jsxs(a,{as:l,legend:"Velg en forsikring",name:"forsikring",defaultValue:"Livsforsikring",gap:"xs",direction:"column",children:[e.jsx(r,{...n,name:"forsikring",label:"Ulykkesforsikring",amount:"50 kr/mnd",value:"Ulykkesforsikring",description:`Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død.`}),e.jsx(r,{...n,name:"forsikring",label:"Innboforsikring",amount:"100 kr/mnd",value:"Innboforsikring",description:"Sikrer dine eiendeler mot brann, vannskader og tyveri."}),e.jsx(r,{...n,name:"forsikring",label:"Livsforsikring",amount:"200 kr/mnd",value:"Livsforsikring",checked:t,description:`Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon.`}),e.jsx(k,{variant:"ghost",onClick:()=>d(!t),type:"button",children:"Toggle radio 3"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Flex as={FieldGroup} legend="Velg en forsikring" name="forsikring" defaultValue="Livsforsikring" gap="xs" direction="column">
                <RadioPanelComponent {...args} name="forsikring" label="Ulykkesforsikring" amount="50 kr/mnd" value="Ulykkesforsikring" description="Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død." />

                <RadioPanelComponent {...args} name="forsikring" label="Innboforsikring" amount="100 kr/mnd" value="Innboforsikring" description="Sikrer dine eiendeler mot brann, vannskader og tyveri." />
                <RadioPanelComponent {...args} name="forsikring" label="Livsforsikring" amount="200 kr/mnd" value="Livsforsikring" description="Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon." />
            </Flex>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Flex as={FieldGroup} legend="Velg en forsikring" name="forsikring" defaultValue="Livsforsikring" gap="xs" direction="column">
                <RadioPanelComponent {...args} name="forsikring" label="Ulykkesforsikring" amount="50 kr/mnd" value="Ulykkesforsikring" description="Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død." />

                <RadioPanelComponent {...args} name="forsikring" label="Innboforsikring" amount="100 kr/mnd" value="Innboforsikring" description="Sikrer dine eiendeler mot brann, vannskader og tyveri." />
                <RadioPanelComponent {...args} name="forsikring" label="Livsforsikring" amount="200 kr/mnd" value="Livsforsikring" checked={checked} description="Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon." />
                <Button variant="ghost" onClick={() => setChecked(!checked)} type="button">
                    Toggle radio 3
                </Button>
            </Flex>;
  }
}`,...o.parameters?.docs?.source}}};const E=["RadioPanel","VelgForsikring","Controlled"];export{o as Controlled,i as RadioPanel,s as VelgForsikring,E as __namedExportsOrder,B as default};
