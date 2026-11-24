import{r as p,j as i}from"./iframe-Z8odhjME.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B1rYydpa.js";import{CheckboxStory as c}from"./Checkbox.stories-CJfqcQnS.js";import d from"./Help.stories-uVR1IWeV.js";import k from"./RadioButton.stories-1e9uAXRQ.js";import{RadioPanel as u}from"./RadioPanel.stories-3acMEYdQ.js";import{F as g}from"./FieldGroup-DLCxmfS9.js";import{C as h}from"./Checkbox-Vu1tHgPw.js";import{R as b}from"./RadioPanel-CbpolcYh.js";import{H as x}from"./Help-CClex3A9.js";import{R as C}from"./RadioButton-DxPu4vn2.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-HxgQe6g8.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-Bw7p_rCN.js";import"./SlotComponent-C6d5M0qU.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CchPXVRa.js";import"./usePreviousValue-ziD7nEuu.js";import"./Loader-sJnWJg17.js";import"./useDelayedRender-BIwUxSQq.js";import"./useId-nk5Pzg2U.js";import"./Label-DHItr_VW.js";import"./SupportLabel-BE96whBe.js";import"./SuccessIcon-DB9Q3ILT.js";import"./Icon-BOtjTwN3.js";import"./WarningIcon-DmPkFoQQ.js";import"./BaseRadioButton.stories-UdRJqZ1l.js";import"./BaseRadioButton-DsNabD-b.js";import"./Title-CP72oeV5.js";import"./Card-9LdXi5F1.js";import"./Text-AMyhPqQH.js";import"./Tag-C3KZg1b7.js";import"./ExpandablePanel-Bwe44YtR.js";import"./useAnimatedHeightBetween-DoSZBE_z.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BgeagpaL.js";import"./Expander-B2x97f3h.js";import"./ChevronUpIcon-Rc22quQ1.js";import"./ListItem-DTufU_yK.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
