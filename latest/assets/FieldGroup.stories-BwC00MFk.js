import{r as p,j as i}from"./iframe-CE9B5t9K.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C1VPxVqb.js";import{CheckboxStory as c}from"./Checkbox.stories-BJY3wIBr.js";import d from"./Help.stories-D3PrPfSp.js";import k from"./RadioButton.stories-C-aWdPhU.js";import{RadioPanel as u}from"./RadioPanel.stories-SkLDiMOx.js";import{F as g}from"./FieldGroup-DRrQqkKB.js";import{C as h}from"./Checkbox-Dq0BB80d.js";import{R as b}from"./RadioPanel-jS6e02M_.js";import{H as x}from"./Help-BGJN13s_.js";import{R as C}from"./RadioButton-B3sN9qyX.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BnpC22-k.js";import"./clsx-B-dksMZM.js";import"./Flex-CZ3Xy_h2.js";import"./SlotComponent-C_xhG78D.js";import"./mergeRefs-D001q6qH.js";import"./Button-DV4krFPa.js";import"./usePreviousValue-BvwT8Z9z.js";import"./Loader-CbFQYPD3.js";import"./useDelayedRender-7hFFKd2q.js";import"./BaseRadioButton.stories-C1rl3_hH.js";import"./BaseRadioButton-ChGgpdsy.js";import"./useId-CLtKM0n4.js";import"./Title-CjPtU0dw.js";import"./Card-C2rT4GgH.js";import"./Text-D3TWs9XZ.js";import"./Tag-CdGHljeU.js";import"./ExpandablePanel-DWyR6XlY.js";import"./useAnimatedHeightBetween-CvLRyrn1.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DZafjiSW.js";import"./Expander-DhsmZm6T.js";import"./ChevronDownIcon-TQ7qW_In.js";import"./Icon-B9zjyT0e.js";import"./ChevronUpIcon-BE5NSQ5k.js";import"./ListItem-CbG3uC0Q.js";import"./Label-CnD2dbLN.js";import"./SupportLabel-DYYyQQhB.js";import"./SuccessIcon-CM8l4MaE.js";import"./WarningIcon-IU9D8cbp.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
