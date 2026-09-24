import{r as n,j as i}from"./iframe-Cm48T0tS.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D5rBnoz_.js";import{CheckboxStory as c}from"./Checkbox.stories-to7NydaR.js";import d from"./Help.stories-BjSEETDX.js";import k from"./RadioButton.stories-DY2GyrtX.js";import{RadioPanel as u}from"./RadioPanel.stories-D8bwMzw-.js";import{F as g}from"./FieldGroup-OheB19X9.js";import{C as h}from"./Checkbox-5qgFgwlE.js";import{R as b}from"./RadioPanel-DrdP0vv-.js";import{H as x}from"./Help-CHio5exL.js";import{R as C}from"./RadioButton-CvGDyDRY.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DMTfK1l7.js";import"./clsx-B-dksMZM.js";import"./Flex-DtisApXr.js";import"./SlotComponent-DLdyVv31.js";import"./mergeRefs-BeTQmAro.js";import"./Button-BqndDzce.js";import"./usePreviousValue-DsPQ-tTm.js";import"./Loader-CvdGTpMo.js";import"./useDelayedRender-Cudl3UeT.js";import"./useId-C3fxz3Oh.js";import"./Label-D7f80aws.js";import"./SupportLabel-D9xOXodY.js";import"./SuccessIcon-Dbel23xb.js";import"./Icon-BAMfdakS.js";import"./WarningIcon-CicChWgz.js";import"./BaseRadioButton.stories-B3Vv2AZX.js";import"./BaseRadioButton-CvyDFwpM.js";import"./Title-Doih8TFh.js";import"./Card-D52D3Tps.js";import"./Text-AfmwoSOI.js";import"./Tag-U8DY-Enu.js";import"./ExpandablePanel-DOMjPfn-.js";import"./useAnimatedHeightBetween-4FAot8yr.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DlPo2Uct.js";import"./Expander-CuKplOov.js";import"./ChevronUpIcon-CMnEHVTb.js";import"./ListItem-CLPT14aq.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
