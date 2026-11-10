import{r as p,j as i}from"./iframe-fpE_04G4.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DLuOViLc.js";import{CheckboxStory as c}from"./Checkbox.stories-DRPp_fna.js";import d from"./Help.stories-B3N17BRO.js";import k from"./RadioButton.stories-DKOM5nIZ.js";import{RadioPanel as u}from"./RadioPanel.stories-fCoYbN3y.js";import{F as g}from"./FieldGroup-BQzoqMqh.js";import{C as h}from"./Checkbox-Bd4fZK8s.js";import{R as b}from"./RadioPanel-BcO0-xap.js";import{H as x}from"./Help-CCLvqES_.js";import{R as C}from"./RadioButton-BAY6nhTY.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C1M-6IyD.js";import"./clsx-B-dksMZM.js";import"./Flex-rbiABwTq.js";import"./SlotComponent-8ggEb9io.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BTWglbXI.js";import"./usePreviousValue-CQMS_-q2.js";import"./Loader-DyUpJpnn.js";import"./useDelayedRender-DNLqz29g.js";import"./BaseRadioButton.stories-0ncCE7AN.js";import"./BaseRadioButton-DMkJWG9_.js";import"./useId-DrVo0TQZ.js";import"./Title-BQZp2OzC.js";import"./Card-BhqI5d1-.js";import"./Text-CSjaS65d.js";import"./Tag-C0-0lYD1.js";import"./ExpandablePanel-DuPf_ENr.js";import"./useAnimatedHeightBetween-NTU1w8Qb.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CtqpneYp.js";import"./Expander-BBkwMEXy.js";import"./ChevronDownIcon-CL76l_s9.js";import"./Icon-CitTsCpk.js";import"./ChevronUpIcon-5COxtaLc.js";import"./ListItem-4Q3WDUQW.js";import"./Label-DWc_8rlg.js";import"./SupportLabel-DQdvgacY.js";import"./SuccessIcon-BhLgmRKa.js";import"./WarningIcon-vKPuZd7F.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
