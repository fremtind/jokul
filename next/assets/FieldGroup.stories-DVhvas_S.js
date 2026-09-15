import{r as n,j as i}from"./iframe-C8V52Ibp.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CthDLPjd.js";import{CheckboxStory as c}from"./Checkbox.stories-CuhYb2vB.js";import d from"./Help.stories-bA4MAPIP.js";import k from"./RadioButton.stories-B8MFUu1Y.js";import{RadioPanel as u}from"./RadioPanel.stories-6reiB8gx.js";import{F as g}from"./FieldGroup-B0zoQR-s.js";import{C as h}from"./Checkbox-B8US_rcJ.js";import{R as b}from"./RadioPanel-2MdpDOIj.js";import{H as x}from"./Help-6RbZubYr.js";import{R as C}from"./RadioButton-hLPYzbnK.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-9aCt6siB.js";import"./clsx-B-dksMZM.js";import"./Flex-DO1M7HL1.js";import"./SlotComponent-Cq0XsgFy.js";import"./mergeRefs-CGGqtpvH.js";import"./Button-okH9I2mv.js";import"./usePreviousValue-otlXic-g.js";import"./Loader-CjmS9C9K.js";import"./useDelayedRender-BzAF7ts6.js";import"./useId-DOU9f7V-.js";import"./Label-BlcH7Al7.js";import"./SupportLabel-DeCSAoCy.js";import"./SuccessIcon-DUDh4ijg.js";import"./Icon-Ddgc2bMY.js";import"./WarningIcon-Caxi3Gr7.js";import"./BaseRadioButton.stories-0_6rVjNJ.js";import"./BaseRadioButton-B7LWck-y.js";import"./Title-I9CEZ1n7.js";import"./Card-BfA9Y5D8.js";import"./Text-CMr_VZ-u.js";import"./Tag-dxkVRSVa.js";import"./ExpandablePanel-B51BrQUK.js";import"./useAnimatedHeightBetween-BpZGNo55.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BnLxvnSJ.js";import"./Expander-BC5gGSA5.js";import"./ChevronUpIcon-BNVOE5MS.js";import"./ListItem-BSdImF6M.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
