import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{r as g}from"./index-Bv6P490N.js";import{I as m}from"./InputPanel-CqF541on.js";import{F as a}from"./Flex-DAYRz_h9.js";import{F as l}from"./FieldGroup-DI0jauUP.js";import{B as k}from"./Button-7xZWz2K4.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./Checkbox-DYaADVQK.js";import"./useId-B1yQ3ow-.js";import"./RadioButton-CLkk-7j6.js";import"./SupportLabel-WsXYroYu.js";import"./WarningIcon-tCz-nOjC.js";import"./Icon-DYEEOjBa.js";import"./BaseRadioButton-B-4anWNh.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-CgJtPkTS.js";import"./mergeRefs-BP-F_O_W.js";import"./Label-BcS4ibrI.js";import"./usePreviousValue-CFxVqUaX.js";import"./Loader-DU6KErPQ.js";import"./useDelayedRender-CuF3W8uc.js";const r=n=>e.jsx(m,{...n,type:"checkbox"});r.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel"};const E={title:"Komponenter/CheckboxPanel",component:r,parameters:{layout:"padded"},tags:["autodocs","forms"],args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},i={},s={name:"Velg dekning for reiseforsikring",render:n=>e.jsxs(a,{gap:"xs",direction:"column",as:l,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(r,{...n,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",value:"Ulykke",description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`})]})},t={tags:["dev"],name:"Controlled",render:n=>{const[o,d]=g.useState(!0);return e.jsxs(a,{gap:"xs",direction:"column",as:l,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",amount:"35 kr/mnd",value:"Reisegods",checked:o,description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",amount:"40 kr/mnd",value:"Ulykke",checked:o,description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`}),e.jsx(k,{variant:"ghost",onClick:()=>d(!o),type:"button",children:"Check"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const I=["CheckboxPanelStory","VelgDekningForReiseforsikring","ControlledCheckboxPanel"];export{i as CheckboxPanelStory,t as ControlledCheckboxPanel,s as VelgDekningForReiseforsikring,I as __namedExportsOrder,E as default};
