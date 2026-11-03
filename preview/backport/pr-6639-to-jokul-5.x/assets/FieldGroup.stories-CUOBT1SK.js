import{r as p,j as i}from"./iframe-cPJsEF4B.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-vpcJkfYY.js";import{CheckboxStory as c}from"./Checkbox.stories-DMygDrdt.js";import d from"./Help.stories-CdWzlEO4.js";import k from"./RadioButton.stories-DkH-ml3u.js";import{RadioPanel as u}from"./RadioPanel.stories-BDoWddYG.js";import{F as g}from"./FieldGroup-DEMMvEAv.js";import{C as h}from"./Checkbox-CbVMUE4Y.js";import{R as b}from"./RadioPanel-CvwBbSV2.js";import{H as x}from"./Help-CuPT-jcw.js";import{R as C}from"./RadioButton-D2khb6NM.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-ConYGQg7.js";import"./clsx-B-dksMZM.js";import"./Flex-T7ns2ASZ.js";import"./SlotComponent-QOASnO2k.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DPCmqNs5.js";import"./usePreviousValue-DxdBVDCy.js";import"./Loader-BvkZRDVw.js";import"./useDelayedRender-BxA8XhXc.js";import"./BaseRadioButton.stories-BKiYM-ak.js";import"./BaseRadioButton-Culhw40c.js";import"./useId-CA4S2sd9.js";import"./Title-D2HH-kph.js";import"./Card-_UwWY75g.js";import"./Text-c5jnZwi6.js";import"./Tag-ScNr_v6o.js";import"./ExpandablePanel-DOx5WGL1.js";import"./useAnimatedHeightBetween-D7IwQiKi.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-YFVJEVPf.js";import"./Expander-BkkO9slb.js";import"./ChevronDownIcon-B2bKVOpE.js";import"./Icon-D6aJbd-B.js";import"./ChevronUpIcon-Bcb3JbSO.js";import"./ListItem-Cu7W4UIX.js";import"./Label-ivZjbUGi.js";import"./SupportLabel-BTCzZPZG.js";import"./SuccessIcon-CoWIvDw7.js";import"./WarningIcon-tJi3pQwy.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
