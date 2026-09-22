import{r as p,j as i}from"./iframe-CIcBiPdf.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CfGRhzrq.js";import{CheckboxStory as c}from"./Checkbox.stories-DQYOXkxf.js";import d from"./Help.stories-DaPMIDfz.js";import k from"./RadioButton.stories-BFEQFUQ5.js";import{RadioPanel as u}from"./RadioPanel.stories-DMsdUEmC.js";import{F as g}from"./FieldGroup-DkCXyls8.js";import{C as h}from"./Checkbox-CussRpMB.js";import{R as b}from"./RadioPanel-B2eF3Em-.js";import{H as x}from"./Help-jnCv3tCU.js";import{R as C}from"./RadioButton-Cy9JpkPj.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DL_jz0kp.js";import"./clsx-B-dksMZM.js";import"./Flex-BXJyRmqO.js";import"./SlotComponent-DVIdhzfP.js";import"./mergeRefs-BZFHIUXT.js";import"./Button-DWeHs1Pj.js";import"./usePreviousValue-DzFyRNrl.js";import"./Loader-FW72xt0c.js";import"./useDelayedRender-Dee07hHo.js";import"./BaseRadioButton.stories-BMWzZ3Qp.js";import"./BaseRadioButton-BuV5IhqW.js";import"./useId-B88QKCfc.js";import"./Title-BIGftj_9.js";import"./Card-BAzxwuA3.js";import"./Text-D2M3bCa8.js";import"./Tag-Cp5NWoro.js";import"./ExpandablePanel-BxuixIH2.js";import"./useAnimatedHeightBetween-BjGTfW56.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Cy0XMKGA.js";import"./Expander-BzY1B0_s.js";import"./ChevronDownIcon-BSmXzqEH.js";import"./Icon-P0T3j5Ky.js";import"./ChevronUpIcon-CLlcksxH.js";import"./ListItem-J0yEzrme.js";import"./Label-K-8OubWa.js";import"./SupportLabel-1dj_mshh.js";import"./SuccessIcon-DKHh9U3W.js";import"./WarningIcon-BKOi12IP.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
