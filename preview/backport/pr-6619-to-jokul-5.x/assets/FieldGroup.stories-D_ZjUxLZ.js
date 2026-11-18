import{r as p,j as i}from"./iframe-7_fnrMRC.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CHydKXdV.js";import{CheckboxStory as c}from"./Checkbox.stories-BnDGh4O2.js";import d from"./Help.stories-DyhBQgek.js";import k from"./RadioButton.stories-BgfW4Ox1.js";import{RadioPanel as u}from"./RadioPanel.stories-b5iHMSkP.js";import{F as g}from"./FieldGroup-BJDzxhT7.js";import{C as h}from"./Checkbox-DcGtMnBz.js";import{R as b}from"./RadioPanel-Dj7rS9Yg.js";import{H as x}from"./Help-SP0uG90B.js";import{R as C}from"./RadioButton-c7k4SAzx.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CYnut9hk.js";import"./clsx-B-dksMZM.js";import"./Flex-BA23hn0z.js";import"./SlotComponent-BiLao9zq.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CD7O9FX2.js";import"./usePreviousValue-DsrO3xOD.js";import"./Loader-Dkk1GOGK.js";import"./useDelayedRender-k6D9c494.js";import"./BaseRadioButton.stories-DwGMHHUi.js";import"./BaseRadioButton-wBp3JGxQ.js";import"./useId-BbNq_aaf.js";import"./Title-DuqXn-C1.js";import"./Card-DJnKIvSk.js";import"./Text-DAjAYENW.js";import"./Tag-CnNRGd88.js";import"./ExpandablePanel-CvPstB94.js";import"./useAnimatedHeightBetween-BvdrYWBM.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DxsIvvzJ.js";import"./Expander-BRvqQ3R5.js";import"./ChevronDownIcon-BOLpaw85.js";import"./Icon-DBMsta37.js";import"./ChevronUpIcon-BJO0EOIg.js";import"./ListItem-BiStoqAE.js";import"./Label-DXV2eElB.js";import"./SupportLabel-DXsK5t_a.js";import"./SuccessIcon-UqAo9RGp.js";import"./WarningIcon-DvL1FK2z.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
