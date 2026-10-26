import{r as n,j as i}from"./iframe-Dn-RTtUI.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D14LRam1.js";import{CheckboxStory as c}from"./Checkbox.stories-CLZ296F1.js";import d from"./Help.stories-BWiepfL6.js";import k from"./RadioButton.stories-DugOOYgE.js";import{RadioPanel as u}from"./RadioPanel.stories-CaEbNWZJ.js";import{F as g}from"./FieldGroup-ChG_HMl3.js";import{C as h}from"./Checkbox-115zFBhP.js";import{R as b}from"./RadioPanel-BLbdksYo.js";import{H as x}from"./Help-DWX8_qST.js";import{R as C}from"./RadioButton-CUHDVJJh.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BWNlh-qx.js";import"./clsx-B-dksMZM.js";import"./Flex-RrKE9ei5.js";import"./SlotComponent-DBQZ9JbW.js";import"./mergeRefs-DPKVXR0V.js";import"./Button-CgpwHTru.js";import"./usePreviousValue-cRP1osgS.js";import"./Loader-DgkrlpTN.js";import"./useDelayedRender-D7E56Ofl.js";import"./useId-BjHAy9N6.js";import"./Label-DehQRkXj.js";import"./SupportLabel-DSw8j560.js";import"./SuccessIcon-DPgW7NwU.js";import"./Icon-BrLF-dqp.js";import"./WarningIcon-B6Hp6BKL.js";import"./BaseRadioButton.stories-DbJzBt5_.js";import"./BaseRadioButton-BasYw5Nf.js";import"./Title-DKUwRpdr.js";import"./Card-C5JfOtv2.js";import"./Text-DybWFjk0.js";import"./Tag-CEsOUAq2.js";import"./ExpandablePanel-CzDtowyQ.js";import"./useAnimatedHeightBetween-BnGVLV3j.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CUt6MhIv.js";import"./Expander-DEYehXbn.js";import"./ChevronUpIcon-Ch1kJtPz.js";import"./ListItem-CmEUqQUy.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
