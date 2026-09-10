import{r as n,j as i}from"./iframe-RT_nzz6I.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-NC8kxdc-.js";import{CheckboxStory as c}from"./Checkbox.stories-Baz3vP5T.js";import d from"./Help.stories-DV3V5P8k.js";import k from"./RadioButton.stories-C83ClDYL.js";import{RadioPanel as u}from"./RadioPanel.stories-CkpjDM6U.js";import{F as g}from"./FieldGroup-fCRvCNHH.js";import{C as h}from"./Checkbox-9EkwsOn2.js";import{R as b}from"./RadioPanel-BCCU1FbO.js";import{H as x}from"./Help-DxjG5EOU.js";import{R as C}from"./RadioButton-DovXr7rV.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-M3VDPee8.js";import"./clsx-B-dksMZM.js";import"./Flex-CIXJgigV.js";import"./SlotComponent-iByCs9-p.js";import"./mergeRefs-uAseLVMh.js";import"./Button-C1JH9WsQ.js";import"./usePreviousValue-B4jaIlh7.js";import"./Loader-BTWx_Pgv.js";import"./useDelayedRender-Dbkid2CJ.js";import"./useId-DBCZE3HB.js";import"./Label-QGiJnt1U.js";import"./SupportLabel-cQPgH1-c.js";import"./SuccessIcon-DJ9RfkLH.js";import"./Icon-BI8GRXG3.js";import"./WarningIcon-B7gif68V.js";import"./BaseRadioButton.stories-CzRdFWad.js";import"./BaseRadioButton-_c0zXMWK.js";import"./Title-De15eRAt.js";import"./Card-C_rGUz_a.js";import"./Text-B1AMOH78.js";import"./Tag-B0TfK7tL.js";import"./ExpandablePanel-CSba-SP6.js";import"./useAnimatedHeightBetween-BatIjCL_.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-veqGPwnL.js";import"./Expander-D7AhHHnT.js";import"./ChevronUpIcon-Bc0plBEO.js";import"./ListItem-CDAsgLaH.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
