import{r as n,j as i}from"./iframe-C5PVGYet.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-WkGkZ8ns.js";import{CheckboxStory as c}from"./Checkbox.stories-ByNwLeo-.js";import d from"./Help.stories-FcljCvwH.js";import k from"./RadioButton.stories-C596Henx.js";import{RadioPanel as u}from"./RadioPanel.stories-QFVy64bZ.js";import{F as g}from"./FieldGroup-ljjP7vqh.js";import{C as h}from"./Checkbox-D-0TfQ88.js";import{R as b}from"./RadioPanel-CClCBItI.js";import{H as x}from"./Help-C8xShdAY.js";import{R as C}from"./RadioButton-Df6dDDl4.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BVubrQNm.js";import"./clsx-B-dksMZM.js";import"./Flex-e0brVn0G.js";import"./SlotComponent-C3h0bMyX.js";import"./mergeRefs-VmRltNPL.js";import"./Button-DwH-_IFK.js";import"./usePreviousValue-VZDKb92K.js";import"./Loader-ZR9gysob.js";import"./useDelayedRender-DllXOwfc.js";import"./useId-DTGCRy4K.js";import"./Label-p7Dd1hXl.js";import"./SupportLabel-xEeHDRVo.js";import"./SuccessIcon-CuqJouq8.js";import"./Icon-CHtB3UC8.js";import"./WarningIcon-BtYCozmf.js";import"./BaseRadioButton.stories-BZq_tMTH.js";import"./BaseRadioButton-DfkhnxeQ.js";import"./Title-Cnd4Ie3T.js";import"./Card-D6HXwrYL.js";import"./Text-BgiRMSSl.js";import"./Tag-sgIwOciV.js";import"./ExpandablePanel-DpgiKQE0.js";import"./useAnimatedHeightBetween-DQIaNle8.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-UwX2JF7_.js";import"./Expander-B2y7U1dm.js";import"./ChevronUpIcon-gFCXdhG0.js";import"./ListItem-C_pMLiZM.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
