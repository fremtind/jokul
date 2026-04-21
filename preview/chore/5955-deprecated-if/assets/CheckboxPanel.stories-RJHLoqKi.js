import{j as e,r as g}from"./iframe-BLNpsbZz.js";import{I as k}from"./InputPanel-CBd7xM00.js";import{F as a}from"./Flex-B7qFfxDd.js";import{F as l}from"./FieldGroup-Cb0gr8N4.js";import{B as m}from"./Button-BdpfEjaH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Checkbox-Cpg_rado.js";import"./useId-D5lXUgzX.js";import"./RadioButton-CVCwDob4.js";import"./SupportLabel-DcstD1Mr.js";import"./WarningIcon-VPXvzMmB.js";import"./Icon-Dlx8pDqr.js";import"./BaseRadioButton-D-zOpqu_.js";import"./SlotComponent-H-Ef-fbo.js";import"./mergeRefs-D2s68ZRt.js";import"./Label-Wc6SeeyB.js";import"./usePreviousValue-t0OyTIBL.js";import"./Loader-CXJPNTPO.js";import"./useDelayedRender-36WnAI9t.js";const r=n=>e.jsx(k,{...n,type:"checkbox"});r.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel"};const _={title:"Komponenter/CheckboxPanel",component:r,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0,"aria-invalid":!1},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},i={},s={name:"Velg dekning for reiseforsikring",render:n=>e.jsxs(a,{gap:"xs",direction:"column",as:l,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(r,{...n,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",value:"Ulykke",description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`})]})},t={name:"Controlled",render:n=>{const[o,d]=g.useState(!0);return e.jsxs(a,{gap:"xs",direction:"column",as:l,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",amount:"35 kr/mnd",value:"Reisegods",checked:o,description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",amount:"40 kr/mnd",value:"Ulykke",checked:o,description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`}),e.jsx(m,{variant:"ghost",onClick:()=>d(!o),type:"button",children:"Check"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["CheckboxPanelStory","VelgDekningForReiseforsikring","ControlledCheckboxPanel"];export{i as CheckboxPanelStory,t as ControlledCheckboxPanel,s as VelgDekningForReiseforsikring,D as __namedExportsOrder,_ as default};
