import{r as p,j as i}from"./iframe-CbBLOIfM.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Dc2U_ieZ.js";import{CheckboxStory as c}from"./Checkbox.stories-QNVMor_4.js";import k from"./Help.stories-Cx4lXukr.js";import u from"./RadioButton.stories-D9ealIDg.js";import{RadioPanel as g}from"./RadioPanel.stories-CUVtSmPs.js";import{F as h}from"./FieldGroup-BclRwBCG.js";import{C as b}from"./Checkbox-BklA8vn7.js";import{R as x}from"./RadioPanel-BJsefKGb.js";import{H as C}from"./Help-CXgPwE11.js";import{R as G}from"./RadioButton-B-gALkB4.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CzpdPUKW.js";import"./clsx-B-dksMZM.js";import"./Flex-DSLe_sDe.js";import"./SlotComponent-B7n_Qc9q.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CH0Cd-xM.js";import"./usePreviousValue-D-dV46U-.js";import"./Loader-BZaBSIW0.js";import"./useDelayedRender-DkI5SzBS.js";import"./useId-CUTrMC_3.js";import"./Label-D5TsrAKY.js";import"./SupportLabel-UaUnvt7G.js";import"./SuccessIcon-BhFZTp6X.js";import"./Icon-CjGrPPsk.js";import"./WarningIcon-DiiKBtCB.js";import"./BaseRadioButton.stories-CI8PKJNO.js";import"./BaseRadioButton-CuiCdRXO.js";import"./Title-DlRHF43M.js";import"./Card-CkglMH8G.js";import"./Text-Dflll0sT.js";import"./Tag-CkEMpS3P.js";import"./ExpandablePanel-C0Wi09N8.js";import"./useAnimatedHeightBetween-DbzULcba.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-1BhnzLay.js";import"./Expander-C7YtbxqY.js";import"./ChevronUpIcon-BiyBHG_3.js";import"./ListItem-DPqrVzoe.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Checkbox panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <CheckboxPanel {...CheckboxPanelStory.args} key={value} value={value} name="kontaktmetode" label={value}>
                {value}
            </CheckboxPanel>)
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Radio panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <RadioPanel {...RadioPanelStory.args} key={value} value={value} name="kontaktmetode" label={value} />)
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Legend som sideoverskrift",
  args: {
    legend: "Hvordan vil du bli kontaktet?",
    labelProps: {
      pageHeading: true
    }
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};
