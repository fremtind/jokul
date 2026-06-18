import{r as l,j as e}from"./iframe-C6cw858C.js";import{I as m}from"./InputPanel-CUCUyRMl.js";import{F as d}from"./Flex-D-PrVzHy.js";import{F as g}from"./FieldGroup-1p9hO5rV.js";import{B as c}from"./Button-DMT52haf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Checkbox-lIV6qJlG.js";import"./useId-C5hLgcHx.js";import"./RadioButton-DTTg5fVd.js";import"./SupportLabel-g6aGXEIX.js";import"./SuccessIcon-YZNnMhuU.js";import"./Icon-DlkrbHjF.js";import"./WarningIcon-nL3Nkoza.js";import"./BaseRadioButton-Bl2ClpHz.js";import"./SlotComponent-Br7AaOcD.js";import"./mergeRefs-DSdRbafR.js";import"./Label-Bj5GNkY3.js";import"./usePreviousValue-UFPyu8w9.js";import"./Loader-DA0RbnIn.js";import"./useDelayedRender-D0CwEOzn.js";const r=l.forwardRef(function(n,i){return e.jsx(m,{...n,ref:i,type:"checkbox"})});r.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel"};const D={title:"Komponenter/CheckboxPanel",component:r,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0,"aria-invalid":!1,errorLabel:""}},t={name:"CheckboxPanelStory"},a={name:"Velg dekning for reiseforsikring",render:({errorLabel:s,...n})=>e.jsxs(d,{gap:"xs",direction:"column",as:g,legend:"Velg dekninger",errorLabel:s,children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(r,{...n,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",value:"Ulykke",description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`})]})},o={name:"Controlled",render:({errorLabel:s,...n})=>{const[i,k]=l.useState(!0);return e.jsxs(d,{gap:"xs",direction:"column",as:g,legend:"Velg dekninger",errorLabel:s,children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",amount:"35 kr/mnd",value:"Reisegods",checked:i,description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",amount:"40 kr/mnd",value:"Ulykke",checked:i,description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`}),e.jsx(c,{variant:"ghost",onClick:()=>k(!i),type:"button",children:"Check"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "CheckboxPanelStory"
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Velg dekning for reiseforsikring",
  render: ({
    errorLabel,
    ...args
  }: CheckboxPanelStoryArgs) => {
    return <Flex gap="xs" direction="column" as={FieldGroup} legend="Velg dekninger" errorLabel={errorLabel}>
                <CheckboxPanel {...args} name="dekning" label="Reisegods" value="Reisegods" />
                <CheckboxPanel {...args} name="dekning" label="Avbestilling" value="Avbestilling" description="Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser." />
                <CheckboxPanel {...args} name="dekning" label="Ulykkesdekning" value="Ulykke" description="Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen." />
            </Flex>;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Controlled",
  render: ({
    errorLabel,
    ...args
  }: CheckboxPanelStoryArgs) => {
    const [checked, setChecked] = useState(true);
    return <Flex gap="xs" direction="column" as={FieldGroup} legend="Velg dekninger" errorLabel={errorLabel}>
                <CheckboxPanel {...args} name="dekning" label="Reisegods" amount="35 kr/mnd" value="Reisegods" checked={checked} description="Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser." />
                <CheckboxPanel {...args} name="dekning" label="Ulykkesdekning" amount="40 kr/mnd" value="Ulykke" checked={checked} description="Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen." />
                <Button variant="ghost" onClick={() => setChecked(!checked)} type="button">
                    Check
                </Button>
            </Flex>;
  }
}`,...o.parameters?.docs?.source}}};const E=["CheckboxPanelStory","VelgDekningForReiseforsikring","ControlledCheckboxPanel"];export{t as CheckboxPanelStory,o as ControlledCheckboxPanel,a as VelgDekningForReiseforsikring,E as __namedExportsOrder,D as default};
