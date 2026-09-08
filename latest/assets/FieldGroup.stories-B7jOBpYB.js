import{r as p,j as i}from"./iframe-Dr3hdvzZ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BKKZqYnT.js";import{CheckboxStory as c}from"./Checkbox.stories-B-1hGbyL.js";import d from"./Help.stories-x8jD8X3F.js";import k from"./RadioButton.stories-QMMDdQVs.js";import{RadioPanel as u}from"./RadioPanel.stories-BZemEcJM.js";import{F as g}from"./FieldGroup-C2gZ7HBR.js";import{C as h}from"./Checkbox-j6IL56BX.js";import{R as b}from"./RadioPanel-DYye0GuN.js";import{H as x}from"./Help-CObHdh0D.js";import{R as C}from"./RadioButton-CeTnz5J_.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BeQtMAay.js";import"./clsx-B-dksMZM.js";import"./Flex-CfLxzPSQ.js";import"./SlotComponent-CBMqe0WA.js";import"./mergeRefs-DTnU7sXj.js";import"./Button-CRIUDUuP.js";import"./usePreviousValue-D4j3ywwz.js";import"./Loader-DGkkTapQ.js";import"./useDelayedRender-Bx8dq0K2.js";import"./BaseRadioButton.stories-DK8PtGVG.js";import"./BaseRadioButton-BEt_7sjb.js";import"./useId-BIrs1ezV.js";import"./Title-DbcaIV-U.js";import"./Card-ofGH7hMQ.js";import"./Text-CLnjSfbL.js";import"./Tag-DPa6cm8f.js";import"./ExpandablePanel-jBWFkzvX.js";import"./useAnimatedHeightBetween-CVs2NEHl.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DeXhEsDl.js";import"./Expander-CgQBVW3h.js";import"./ChevronDownIcon-eYFW6E9h.js";import"./Icon-xBlGy7PF.js";import"./ChevronUpIcon-B2T-2lYa.js";import"./ListItem-DrjPHHXd.js";import"./Label-CjQ6NTqV.js";import"./SupportLabel-CIPnqu5V.js";import"./SuccessIcon-DCwvqYOg.js";import"./WarningIcon-VSPsgyrm.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
