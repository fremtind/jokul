import{r as n,j as i}from"./iframe-B7BRrnZk.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DtUGo3E5.js";import l from"./Help.stories-i3Xt_T9X.js";import c from"./RadioButton.stories-xffqnAT2.js";import{F as d}from"./FieldGroup-Cq7HBxsD.js";import{C as k,a as u}from"./CheckboxPanel.stories-DagVjq4r.js";import{RadioPanel as g}from"./RadioPanel.stories-B8ynTwYm.js";import{C as h}from"./Checkbox-CP_ZYfXz.js";import{R as b}from"./RadioPanel-DU4sCeLz.js";import{H as x}from"./Help-BlmvzlwZ.js";import{R as C}from"./RadioButton-B7RzBKTl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-gyv7jAtv.js";import"./Label-L_Ua2Xx4.js";import"./SupportLabel-Co7SwUDP.js";import"./SuccessIcon-B960KZK0.js";import"./Icon-D3JfHITU.js";import"./WarningIcon-BUCY9ITV.js";import"./BaseRadioButton.stories-BeuXj4r2.js";import"./BaseRadioButton-CcHUG0Hk.js";import"./InputPanel-CoSNoNB1.js";import"./Flex-LtXjrw5j.js";import"./SlotComponent-BWq2Zy3K.js";import"./mergeRefs-BaiX8sy6.js";import"./Button-CkRbXC5_.js";import"./usePreviousValue-C6RsyoxO.js";import"./Loader-DN4YDe1m.js";import"./useDelayedRender-C5gDVmMs.js";import"./Title-D1yWmHHR.js";import"./Card-BsjCLtfd.js";import"./Text-8URVOSOJ.js";import"./Tag-DH_6cLM4.js";import"./ExpandablePanel-DG85PwT5.js";import"./useAnimatedHeightBetween-C8WVb6C5.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CFTye-0r.js";import"./Expander-CkSRPIjt.js";import"./ChevronUpIcon-DDBdJU-B.js";import"./ListItem-CgZhXUPI.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
