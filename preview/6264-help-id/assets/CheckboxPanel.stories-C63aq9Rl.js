import{r as l,j as e}from"./iframe-D1MzGBjH.js";import{I as k}from"./InputPanel-DT0_idcn.js";import{F as d}from"./Flex-B6LznmLd.js";import{F as g}from"./FieldGroup-CLJ7zs3s.js";import{B as m}from"./Button-CMtqD-YQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Checkbox-CePdGX_8.js";import"./useId-DAqXhn2R.js";import"./RadioButton-Cz2Tlvs4.js";import"./SupportLabel-C7_E0lcf.js";import"./SuccessIcon-DRf5Ad0H.js";import"./Icon-B8A45j_9.js";import"./WarningIcon-Bmf2cg-P.js";import"./BaseRadioButton-aFdken0p.js";import"./SlotComponent-Casv_pAX.js";import"./mergeRefs-DrnCA9RY.js";import"./Label-8OWqXdNQ.js";import"./usePreviousValue-GgYJ9cGl.js";import"./Loader-Dxq1VbHm.js";import"./useDelayedRender-DYAhCluU.js";const r=l.forwardRef(function(i,a){return e.jsx(k,{...i,ref:a,type:"checkbox"})});r.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel"};const D={title:"Komponenter/CheckboxPanel",component:r,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0,"aria-invalid":!1},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},s={},t={name:"Velg dekning for reiseforsikring",render:n=>e.jsxs(d,{gap:"xs",direction:"column",as:g,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(r,{...n,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",value:"Ulykke",description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`})]})},o={name:"Controlled",render:n=>{const[i,a]=l.useState(!0);return e.jsxs(d,{gap:"xs",direction:"column",as:g,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",amount:"35 kr/mnd",value:"Reisegods",checked:i,description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",amount:"40 kr/mnd",value:"Ulykke",checked:i,description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`}),e.jsx(m,{variant:"ghost",onClick:()=>a(!i),type:"button",children:"Check"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const E=["CheckboxPanelStory","VelgDekningForReiseforsikring","ControlledCheckboxPanel"];export{s as CheckboxPanelStory,o as ControlledCheckboxPanel,t as VelgDekningForReiseforsikring,E as __namedExportsOrder,D as default};
