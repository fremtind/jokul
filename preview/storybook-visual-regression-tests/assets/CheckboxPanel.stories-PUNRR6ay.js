import{j as e,r as m}from"./iframe-By8gZeFG.js";import{I as g}from"./InputPanel-_oA5Q7o_.js";import{F as l}from"./Flex-Tg7YYwJB.js";import{F as d}from"./FieldGroup-DI2hr-UD.js";import{B as u}from"./Button-BOH3L-ZW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Checkbox-feP7hqhF.js";import"./useId-Cdnxfj6t.js";import"./RadioButton-CiBzWZo9.js";import"./SupportLabel-CXcM79J6.js";import"./WarningIcon-yADw5iCl.js";import"./Icon-CqozMsi7.js";import"./BaseRadioButton-Dv6xMyBy.js";import"./SlotComponent-CFDzT8eL.js";import"./mergeRefs-Dmn1bJAP.js";import"./Label-Cf0ZE616.js";import"./usePreviousValue-Bwf-JQ7i.js";import"./Loader-DoZC8Oyb.js";import"./useDelayedRender-Da3qcKI6.js";const r=n=>e.jsx(g,{...n,type:"checkbox"});r.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel"};const _={title:"Komponenter/CheckboxPanel",component:r,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0,"aria-invalid":!1},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},i={},a={name:"Velg dekning for reiseforsikring",tags:["visual"],render:n=>e.jsxs(l,{gap:"xs",direction:"column",as:d,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(r,{...n,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",value:"Ulykke",description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`})]})},s={name:"Controlled",render:n=>{const[o,k]=m.useState(!0);return e.jsxs(l,{gap:"xs",direction:"column",as:d,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",amount:"35 kr/mnd",value:"Reisegods",checked:o,description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",amount:"40 kr/mnd",value:"Ulykke",checked:o,description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`}),e.jsx(u,{variant:"ghost",onClick:()=>k(!o),type:"button",children:"Check"})]})}},t={name:"Med feil",tags:["visual"],render:n=>e.jsxs(l,{gap:"xs",direction:"column",as:d,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"minikasko",label:"Kasko",amount:"300 kr/mnd",value:"kasko","aria-invalid":"true"}),e.jsx(r,{...n,name:"minikasko",label:"Minikasko",amount:"200 kr/mnd",value:"minikasko","aria-invalid":"true"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Velg dekning for reiseforsikring",
  tags: ["visual"],
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Med feil",
  tags: ["visual"],
  render: args => <Flex gap="xs" direction="column" as={FieldGroup} legend="Velg dekninger">
            <CheckboxPanelComponent {...args} name="minikasko" label="Kasko" amount="300 kr/mnd" value="kasko" aria-invalid="true" />
            <CheckboxPanelComponent {...args} name="minikasko" label="Minikasko" amount="200 kr/mnd" value="minikasko" aria-invalid="true" />
        </Flex>
}`,...t.parameters?.docs?.source}}};const D=["CheckboxPanelStory","VelgDekningForReiseforsikring","ControlledCheckboxPanel","MedFeil"];export{i as CheckboxPanelStory,s as ControlledCheckboxPanel,t as MedFeil,a as VelgDekningForReiseforsikring,D as __namedExportsOrder,_ as default};
