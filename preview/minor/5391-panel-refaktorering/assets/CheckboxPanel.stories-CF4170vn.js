import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{r as g}from"./index-siqcju79.js";import{I as k}from"./InputPanel-D4i8DJjo.js";import{F as o}from"./Flex-6AvuqMfo.js";import{F as l}from"./FieldGroup-4QcUrmjz.js";import{B as m}from"./Button-fpmiG8ZH.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./Checkbox-CjNXUV26.js";import"./useId-CahK3IZ3.js";import"./RadioButton-DE54Ez63.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./Icon-DnRkF4CO.js";import"./BaseRadioButton-C4joAhFY.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";import"./Label-Ct8Bs2e9.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";const r=n=>e.jsx(k,{...n,type:"checkbox"});r.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel"};const E={title:"Komponenter/CheckboxPanel",component:r,parameters:{layout:"padded"},tags:["autodocs","forms"],args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0},argTypes:{alwaysOpen:{description:"Deprecated: vi ønsker å vise beskrivelse hele tiden",table:{category:"Deprecated"}},children:{description:"Deprecated: bruk heller description",table:{category:"Deprecated"}},extraLabel:{description:"Deprecated: bruk heller amount",table:{category:"Deprecated"}}},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},t={},i={name:"Velg dekning for reiseforsikring",render:n=>e.jsxs(o,{gap:"xs",direction:"column",as:l,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(r,{...n,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",value:"Ulykke",description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`})]})},s={tags:["dev"],name:"Controlled",render:n=>{const[a,d]=g.useState(!0);return e.jsxs(o,{gap:"xs",direction:"column",as:l,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",amount:"35 kr/mnd",value:"Reisegods",checked:a,description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",amount:"40 kr/mnd",value:"Ulykke",checked:a,description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`}),e.jsx(m,{variant:"ghost",onClick:()=>d(!a),type:"button",children:"Check"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Velg dekning for reiseforsikring",
  render: args => {
    return <Flex gap="xs" direction="column" as={FieldGroup} legend="Velg dekninger">
                <CheckboxPanelComponent {...args} name="dekning" label="Reisegods" value="Reisegods" />
                <CheckboxPanelComponent {...args} name="dekning" label="Avbestilling" value="Avbestilling" description="Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser." />
                <CheckboxPanelComponent {...args} name="dekning" label="Ulykkesdekning" value="Ulykke" description="Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen." />
            </Flex>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["dev"],
  name: "Controlled",
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Flex gap="xs" direction="column" as={FieldGroup} legend="Velg dekninger">
                <CheckboxPanelComponent {...args} name="dekning" label="Reisegods" amount="35 kr/mnd" value="Reisegods" checked={checked} description="Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser." />
                <CheckboxPanelComponent {...args} name="dekning" label="Ulykkesdekning" amount="40 kr/mnd" value="Ulykke" checked={checked} description="Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen." />
                <Button variant="ghost" onClick={() => setChecked(!checked)} type="button">
                    Check
                </Button>
            </Flex>;
  }
}`,...s.parameters?.docs?.source}}};const I=["CheckboxPanelStory","VelgDekningForReiseforsikring","ControlledCheckboxPanel"];export{t as CheckboxPanelStory,s as ControlledCheckboxPanel,i as VelgDekningForReiseforsikring,I as __namedExportsOrder,E as default};
