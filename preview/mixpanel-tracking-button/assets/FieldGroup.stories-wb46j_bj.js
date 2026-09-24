import{r as n,j as i}from"./iframe-CfXBKWD5.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-9WOb2J8P.js";import{CheckboxStory as c}from"./Checkbox.stories-C_8wERnt.js";import d from"./Help.stories-Ds_Tx0g-.js";import k from"./RadioButton.stories-BzCBrPKN.js";import{RadioPanel as u}from"./RadioPanel.stories-D5CR7Meb.js";import{F as g}from"./FieldGroup-6ODHLzDL.js";import{C as h}from"./Checkbox-D9VYb0t_.js";import{R as b}from"./RadioPanel-DVXgrHI1.js";import{H as x}from"./Help-B3VaoaG5.js";import{R as C}from"./RadioButton-CsC9Xcav.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-s9dgKWKg.js";import"./clsx-B-dksMZM.js";import"./Flex-C1NEebnQ.js";import"./SlotComponent-BGFHTCi_.js";import"./mergeRefs-CLS59bfE.js";import"./Button-BhCa3A9z.js";import"./usePreviousValue-ASln7Urp.js";import"./Loader-t_FdoBuj.js";import"./useDelayedRender-rRwkFJSG.js";import"./useId-CFxpH1nk.js";import"./Label-BXqjCTqQ.js";import"./SupportLabel-CjZarMOv.js";import"./SuccessIcon-jb7mdtqc.js";import"./Icon-CDSVqNRB.js";import"./WarningIcon-B45yaMEJ.js";import"./BaseRadioButton.stories-BiX27WLY.js";import"./BaseRadioButton-Bmua4pwI.js";import"./Title-DWNum69z.js";import"./Card-D4HGssf2.js";import"./Text-DfTJovFX.js";import"./Tag-CfL7erZ5.js";import"./ExpandablePanel-CPRKg2eZ.js";import"./useAnimatedHeightBetween-Bvw01f8D.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D7hHf3o2.js";import"./Expander-CVGSZJST.js";import"./ChevronUpIcon-uY3Tid3d.js";import"./ListItem-CQxJX7T0.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
