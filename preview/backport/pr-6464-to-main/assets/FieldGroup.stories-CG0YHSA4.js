import{r as p,j as i}from"./iframe-DFdol4GL.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DxSLIZbX.js";import l from"./Help.stories-VA5uE0OD.js";import c from"./RadioButton.stories-ASa1hx10.js";import{F as d}from"./FieldGroup-B533BOrI.js";import{C as k,a as u}from"./CheckboxPanel.stories-ETiztkwj.js";import{RadioPanel as g}from"./RadioPanel.stories-Da-WZi_C.js";import{C as h}from"./Checkbox-DGoLn-fO.js";import{R as b}from"./RadioPanel-DCzSLD-D.js";import{H as x}from"./Help-LTa_cZtZ.js";import{R as C}from"./RadioButton-ti0miOl_.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BaZ6RYmf.js";import"./BaseRadioButton-D7FvLkK6.js";import"./clsx-B-dksMZM.js";import"./useId-DcVhGnhB.js";import"./Label-BVXb2yq7.js";import"./SupportLabel-DDslyYDW.js";import"./SuccessIcon-CKXb8RPd.js";import"./Icon-l6Fq44AV.js";import"./WarningIcon-BgaS4G-B.js";import"./InputPanel-diYjN4Pl.js";import"./Flex-Dy5uoJPY.js";import"./SlotComponent-CybyU-Cs.js";import"./mergeRefs-B5FQ1IGL.js";import"./Button-DLx6h19J.js";import"./usePreviousValue-Byc48Z6C.js";import"./Loader-BgsQXADq.js";import"./useDelayedRender-ZCmtz7f-.js";import"./Title-DTaXQuT9.js";import"./Card-CPJgMZ_0.js";import"./Text-L1ywrnzD.js";import"./Tag-8B2dOb5H.js";import"./ExpandablePanel-CcUneJ9C.js";import"./useAnimatedHeightBetween-CBg17UJb.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-X5JS7ABv.js";import"./Expander-D2eF2vcj.js";import"./ChevronDownIcon-B98AmFuN.js";import"./ChevronUpIcon-BQywyfjo.js";import"./ListItem-Cx8HaXyc.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
