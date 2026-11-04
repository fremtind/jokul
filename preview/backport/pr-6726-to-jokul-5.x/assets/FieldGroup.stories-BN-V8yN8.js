import{r as p,j as i}from"./iframe-DnPksqQY.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-1Ot5O30i.js";import{CheckboxStory as c}from"./Checkbox.stories-zh4TJDkR.js";import d from"./Help.stories-BCy-sn0z.js";import k from"./RadioButton.stories-CeeoaoX8.js";import{RadioPanel as u}from"./RadioPanel.stories-CY-33yb_.js";import{F as g}from"./FieldGroup-BEAxHlzf.js";import{C as h}from"./Checkbox-D9YRE4sq.js";import{R as b}from"./RadioPanel-CJXWS8mD.js";import{H as x}from"./Help-BLOzfgAU.js";import{R as C}from"./RadioButton-ByoZePMa.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BU1ndDeC.js";import"./clsx-B-dksMZM.js";import"./Flex-D0V1C2Oo.js";import"./SlotComponent-B57yDTAW.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-PDQxU0BG.js";import"./usePreviousValue-CCR_n0k_.js";import"./Loader-aeE-Wa29.js";import"./useDelayedRender-CTM14jLN.js";import"./BaseRadioButton.stories-BIcUaQ9v.js";import"./BaseRadioButton-DNnTllT_.js";import"./useId-wOffNkIQ.js";import"./Title-C6MXiqst.js";import"./Card-DWlGfm4-.js";import"./Text-hl521JYw.js";import"./Tag-BBdbijmn.js";import"./ExpandablePanel-BFvjMDWB.js";import"./useAnimatedHeightBetween-Ds2KFtjG.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C_Eb2LAy.js";import"./Expander-B-tEbpiP.js";import"./ChevronDownIcon-DUhz7ZZp.js";import"./Icon-NSBMx9J8.js";import"./ChevronUpIcon-CMpz4Mc_.js";import"./ListItem-DOEyuzly.js";import"./Label-Dxyvup6o.js";import"./SupportLabel-w8GocdPi.js";import"./SuccessIcon-CXZ-EGdn.js";import"./WarningIcon-zzN2vqr5.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
