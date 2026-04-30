import{j as e,r as g}from"./iframe-CeesAeJk.js";import{I as k}from"./InputPanel-BXTZo932.js";import{F as a}from"./Flex-M93KjfCP.js";import{F as l}from"./FieldGroup-BF5z908T.js";import{B as m}from"./Button-DwqEI8aB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Checkbox-DtwtZexU.js";import"./useId-2pFt6F_A.js";import"./RadioButton-B0dwYcvw.js";import"./SupportLabel-1PRZZiNM.js";import"./WarningIcon-Cbvn31Sd.js";import"./Icon-mZYfqGYU.js";import"./BaseRadioButton-qVAFR6bk.js";import"./SlotComponent-BbCsnBSL.js";import"./mergeRefs-BkCkL791.js";import"./Label-BqK-IBeX.js";import"./usePreviousValue-BT40vW8m.js";import"./Loader-lWwKCdlt.js";import"./useDelayedRender-WPsDlUVi.js";const r=n=>e.jsx(k,{...n,type:"checkbox"});r.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel"};const _={title:"Komponenter/CheckboxPanel",component:r,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0,"aria-invalid":!1},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},i={},s={name:"Velg dekning for reiseforsikring",render:n=>e.jsxs(a,{gap:"xs",direction:"column",as:l,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(r,{...n,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
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
