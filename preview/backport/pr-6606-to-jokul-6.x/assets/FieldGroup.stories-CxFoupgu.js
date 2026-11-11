import{r as p,j as i}from"./iframe-BRLHYLz7.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-i9Y5NpO-.js";import{CheckboxStory as c}from"./Checkbox.stories-D_ooGkhN.js";import d from"./Help.stories-eFW3-tNb.js";import k from"./RadioButton.stories-AU5MnVy2.js";import{RadioPanel as u}from"./RadioPanel.stories-DEPfUWlz.js";import{F as g}from"./FieldGroup-BOBEyt1L.js";import{C as h}from"./Checkbox-CbBfmDtd.js";import{R as b}from"./RadioPanel-BAFQyCEC.js";import{H as x}from"./Help-B_gr_u6s.js";import{R as C}from"./RadioButton-bSJdw-zn.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DW9jTZgT.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BlLTrEOO.js";import"./SlotComponent-BF39QNvf.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-nZsIi3sD.js";import"./usePreviousValue-Ds6-pTrW.js";import"./Loader-Bb9Hczak.js";import"./useDelayedRender-DqQ0_9zI.js";import"./useId-1QuYB4oF.js";import"./Label-C-F8Kqyc.js";import"./SupportLabel-DPsREKkx.js";import"./SuccessIcon-D257efVo.js";import"./Icon-BzQYu2n1.js";import"./WarningIcon-D4xxbGIz.js";import"./BaseRadioButton.stories-BbhcDigq.js";import"./BaseRadioButton-DKv9PVlm.js";import"./Title-CWeMoSEL.js";import"./Card-CafW1GAd.js";import"./Text-XPbyqIjR.js";import"./Tag-fabd2Z3Q.js";import"./ExpandablePanel-D1AFSnPP.js";import"./useAnimatedHeightBetween-CWRO4bZG.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-fskkI5yi.js";import"./Expander-f_9BX5Qc.js";import"./ChevronUpIcon-BBhlYrh8.js";import"./ListItem-BglozNVU.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
