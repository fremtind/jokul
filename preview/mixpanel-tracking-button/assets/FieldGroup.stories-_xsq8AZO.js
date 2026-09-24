import{r as n,j as i}from"./iframe-CaOTu9UQ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-fb682HMS.js";import{CheckboxStory as c}from"./Checkbox.stories-DRoeasPg.js";import d from"./Help.stories-DxgCpzXQ.js";import k from"./RadioButton.stories-BeuIR0d0.js";import{RadioPanel as u}from"./RadioPanel.stories-DU9nSKHZ.js";import{F as g}from"./FieldGroup-BG-H5BBk.js";import{C as h}from"./Checkbox-Dyo2-5vM.js";import{R as b}from"./RadioPanel-BQQozMMm.js";import{H as x}from"./Help-CCNoxTUR.js";import{R as C}from"./RadioButton-ZfiWaU86.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B9n8L4mm.js";import"./clsx-B-dksMZM.js";import"./Flex-BNgCW0WP.js";import"./SlotComponent-CQfQsoY_.js";import"./mergeRefs-C5Kv_wWd.js";import"./Button-DF7zjyVQ.js";import"./usePreviousValue-BL8DEkhy.js";import"./Loader-YxUugnVj.js";import"./useDelayedRender-B4KHCgA5.js";import"./useId-DY6a1q6E.js";import"./Label-BPqrtZmj.js";import"./SupportLabel-CO9YLr9u.js";import"./SuccessIcon-DEnqrz7C.js";import"./Icon-BwoEOxJc.js";import"./WarningIcon-DyqsDIhr.js";import"./BaseRadioButton.stories-BnpaS9xs.js";import"./BaseRadioButton-apHD8vJg.js";import"./Title-Zme7Y_kr.js";import"./Card-CxU8He7r.js";import"./Text-BedpgNsS.js";import"./Tag-CNdR8JnY.js";import"./ExpandablePanel-BcoJhc77.js";import"./useAnimatedHeightBetween-vM_6kmC1.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-iprP0mQ-.js";import"./Expander-B2hmROSP.js";import"./ChevronUpIcon-BWK7F23z.js";import"./ListItem-BwRrkOm2.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
