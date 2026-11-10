import{r as p,j as s}from"./iframe-BdJ4G0rk.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Dziqfyp0.js";import{CheckboxStory as c}from"./Checkbox.stories-nuEkcZI-.js";import k from"./Help.stories-BXvDKrMu.js";import u from"./RadioButton.stories-CTu_DNRB.js";import{RadioPanel as g}from"./RadioPanel.stories-C-nYx7BB.js";import{F as h}from"./FieldGroup-X67pPn91.js";import{C as b}from"./Checkbox-B76Aq7LG.js";import{R as x}from"./RadioPanel-jSbVn7Jc.js";import{H as C}from"./Help-CHW0u1lU.js";import{R as G}from"./RadioButton-vVTayVyL.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DGGWcdVz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-D0INi6bP.js";import"./SlotComponent-C4c8gkXl.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Bx-2uxsC.js";import"./usePreviousValue-CbGNmsQU.js";import"./Loader-DQkSlNYn.js";import"./useDelayedRender-B2gNuJdg.js";import"./useId-CKdpnab3.js";import"./Label-LSHeZwx2.js";import"./SupportLabel-BBIdhqhc.js";import"./SuccessIcon-C9v3Dlnh.js";import"./Icon-BGiwoyRt.js";import"./WarningIcon-CeyFEK26.js";import"./BaseRadioButton.stories-CL9JtJbl.js";import"./BaseRadioButton-yVuSJHvN.js";import"./Title-BDT7qceR.js";import"./Card-B6-R2Pw8.js";import"./Text-DtXUrHno.js";import"./Tag-BtBBoTbb.js";import"./ExpandablePanel-CEaykXzN.js";import"./useAnimatedHeightBetween-Bn4ze0hf.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CiykZEaZ.js";import"./Expander-C_qAe_tC.js";import"./ChevronUpIcon-D3ek9QwE.js";import"./ListItem-B6BFwNYS.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,le as __namedExportsOrder,se as default};
