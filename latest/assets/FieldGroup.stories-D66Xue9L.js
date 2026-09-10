import{r as p,j as i}from"./iframe-CPbWXMU_.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-4RVuC-Wr.js";import{CheckboxStory as c}from"./Checkbox.stories-DUY6CW6K.js";import d from"./Help.stories-BmLm5gwc.js";import k from"./RadioButton.stories-WjMlvr0p.js";import{RadioPanel as u}from"./RadioPanel.stories-BsCXJlDD.js";import{F as g}from"./FieldGroup-ZpCOBC5p.js";import{C as h}from"./Checkbox-gv1sgKbR.js";import{R as b}from"./RadioPanel-D2R4Umji.js";import{H as x}from"./Help-rcOGg8wB.js";import{R as C}from"./RadioButton-D-PIF4E9.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DlBDKPZM.js";import"./clsx-B-dksMZM.js";import"./Flex-C1vR0ZPB.js";import"./SlotComponent-DAAnkNPC.js";import"./mergeRefs-C5uVU_UP.js";import"./Button-Ct4MyYNm.js";import"./usePreviousValue-B1wD9Oct.js";import"./Loader-qw5W2u78.js";import"./useDelayedRender-D5iBKQVu.js";import"./BaseRadioButton.stories-pW4lXI5c.js";import"./BaseRadioButton-C63vTAy1.js";import"./useId-C8K8eZ_c.js";import"./Title-Cw5CJ_8d.js";import"./Card-DyccJBsm.js";import"./Text-B3T762vn.js";import"./Tag-Dx26jJkO.js";import"./ExpandablePanel-CUqboYue.js";import"./useAnimatedHeightBetween-Cz89iPSH.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D8oMZ2rM.js";import"./Expander-CmYwhiXu.js";import"./ChevronDownIcon-DEiqzhET.js";import"./Icon-hyuaEZft.js";import"./ChevronUpIcon-BLta-WpH.js";import"./ListItem-CCzo-9s9.js";import"./Label-BbVNIBZ9.js";import"./SupportLabel-Dd9r0bdR.js";import"./SuccessIcon-BkPRNqE4.js";import"./WarningIcon-FA81JO7j.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
