import{j as e,r as g}from"./iframe-DtM7RXj6.js";import{I as k}from"./InputPanel-Bla-U-WO.js";import{F as a}from"./Flex-Bw_hwLCN.js";import{F as l}from"./FieldGroup-CwRx3Awk.js";import{B as m}from"./Button-B6z-5Ezn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Checkbox-DL-Ydsk_.js";import"./useId-CC-388Ss.js";import"./RadioButton-BDd8q_CW.js";import"./SupportLabel-DyJuzdLr.js";import"./WarningIcon-Bz0badf_.js";import"./Icon-DEBh_q2D.js";import"./BaseRadioButton-ri6ICuV4.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DYrfhb9R.js";import"./mergeRefs-Akd9vO6p.js";import"./Label-ByAl5DiS.js";import"./usePreviousValue-CIjN-Smo.js";import"./Loader-ClQCFrJZ.js";import"./useDelayedRender-DaYV0-O6.js";const r=n=>e.jsx(k,{...n,type:"checkbox"});r.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel"};const D={title:"Komponenter/CheckboxPanel",component:r,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},i={},s={name:"Velg dekning for reiseforsikring",render:n=>e.jsxs(a,{gap:"xs",direction:"column",as:l,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(r,{...n,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
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
}`,...t.parameters?.docs?.source}}};const E=["CheckboxPanelStory","VelgDekningForReiseforsikring","ControlledCheckboxPanel"];export{i as CheckboxPanelStory,t as ControlledCheckboxPanel,s as VelgDekningForReiseforsikring,E as __namedExportsOrder,D as default};
