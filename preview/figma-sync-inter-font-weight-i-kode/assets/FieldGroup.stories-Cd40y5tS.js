import{r as n,j as i}from"./iframe-CUnOM3T_.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BNdOEYxd.js";import{CheckboxStory as c}from"./Checkbox.stories-DjJaHt_j.js";import d from"./Help.stories-CKJpCugO.js";import k from"./RadioButton.stories-XfzR8aP-.js";import{RadioPanel as u}from"./RadioPanel.stories-8kbNDU5F.js";import{F as g}from"./FieldGroup-LrGA8pRV.js";import{C as h}from"./Checkbox-A3GJKGLk.js";import{R as b}from"./RadioPanel-DnzPnSp4.js";import{H as x}from"./Help-g-Z97lkT.js";import{R as C}from"./RadioButton-1VvVp65b.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-xHKAADbP.js";import"./clsx-B-dksMZM.js";import"./Flex-JDwjqzYc.js";import"./SlotComponent-CtWbA9SI.js";import"./mergeRefs-Bxe_SOtE.js";import"./Button-BzzfszsY.js";import"./usePreviousValue-bWKkdOD5.js";import"./Loader-BZ3DnWpu.js";import"./useDelayedRender-BJ5Pq7sW.js";import"./useId-CJPpwNgz.js";import"./Label-BOAgzY9a.js";import"./SupportLabel-Cr3_8tzD.js";import"./SuccessIcon-CYbNYO7_.js";import"./Icon-Bdkd54Hr.js";import"./WarningIcon-C2pbPbjk.js";import"./BaseRadioButton.stories-D1i1BIMN.js";import"./BaseRadioButton-CwGIcgw6.js";import"./Title-BTso4wLx.js";import"./Card-osmpjEHZ.js";import"./Text-DBqxX_z-.js";import"./Tag-CHFlVpt7.js";import"./ExpandablePanel-dyHFsQ-v.js";import"./useAnimatedHeightBetween-CzE2LnGi.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BRfyO9dQ.js";import"./Expander-TzXWXhmx.js";import"./ChevronUpIcon-Bc5UghZa.js";import"./ListItem-UjO_0w0Z.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
