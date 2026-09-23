import{r as n,j as i}from"./iframe-C7V8eVuP.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Dm0b8XbR.js";import{CheckboxStory as c}from"./Checkbox.stories--hmmsmtf.js";import d from"./Help.stories-CiRXkHXt.js";import k from"./RadioButton.stories-_w8UYmei.js";import{RadioPanel as u}from"./RadioPanel.stories-vJi014LB.js";import{F as g}from"./FieldGroup-Bv88EKWk.js";import{C as h}from"./Checkbox-B_FtVSze.js";import{R as b}from"./RadioPanel-DeaErQdq.js";import{H as x}from"./Help-Ckdqsn2s.js";import{R as C}from"./RadioButton-18m6SnWW.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-vUJKyfHv.js";import"./clsx-B-dksMZM.js";import"./Flex-IWcZ4IuM.js";import"./SlotComponent-D2C7s_Zx.js";import"./mergeRefs-Bwwglhjb.js";import"./Button-CBX5iTp9.js";import"./usePreviousValue-CxSW9jTc.js";import"./Loader-h1wAKNzW.js";import"./useDelayedRender-f1H5wN72.js";import"./useId-C9VpPwS8.js";import"./Label-DS19S-tU.js";import"./SupportLabel-fg0i7eVz.js";import"./SuccessIcon-D_xwPqmJ.js";import"./Icon-DtmXCUax.js";import"./WarningIcon-hzasHG4U.js";import"./BaseRadioButton.stories-BsRtkIHZ.js";import"./BaseRadioButton-DgSShevf.js";import"./Title-DA4ZToec.js";import"./Card-Cla8OPrw.js";import"./Text-CqOzwNJ2.js";import"./Tag-TZxuQw5K.js";import"./ExpandablePanel-DV-Ps0VA.js";import"./useAnimatedHeightBetween-2xx8UK8F.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DG7rpKRz.js";import"./Expander-BqxKkrUt.js";import"./ChevronUpIcon-CuvaXh-D.js";import"./ListItem-DfNsw1vi.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
