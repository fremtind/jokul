import{r as n,j as i}from"./iframe-CoyBcSLH.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Dx3t_lQQ.js";import{CheckboxStory as c}from"./Checkbox.stories-Crs3Nluu.js";import d from"./Help.stories-B7rezX8c.js";import k from"./RadioButton.stories-CAhCnRyU.js";import{RadioPanel as u}from"./RadioPanel.stories--Ud7kOsj.js";import{F as g}from"./FieldGroup-BEZ78_Mm.js";import{C as h}from"./Checkbox-B7x52sIm.js";import{R as b}from"./RadioPanel-BRoHXAP7.js";import{H as x}from"./Help-M05PqRhE.js";import{R as C}from"./RadioButton-DYsJlzyY.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-iFmpwrO7.js";import"./clsx-B-dksMZM.js";import"./Flex-DCusTw_n.js";import"./SlotComponent-C79tMx7-.js";import"./mergeRefs-DOnebLiv.js";import"./Button-BSNThOsV.js";import"./usePreviousValue-B5YBLiIl.js";import"./Loader-BJSp_SAH.js";import"./useDelayedRender-DldnRCxf.js";import"./useId-DS7qQ2Ov.js";import"./Label-B-C5yXQ9.js";import"./SupportLabel-BYQ9G36s.js";import"./SuccessIcon-Dm7po2t2.js";import"./Icon-Dt96Ro48.js";import"./WarningIcon-p7dFOrLC.js";import"./BaseRadioButton.stories-BxFlFF-2.js";import"./BaseRadioButton-C3fWx8AJ.js";import"./Title-BsvopeP0.js";import"./Card-D-f0pM2g.js";import"./Text-75Y2RrbN.js";import"./Tag-s0hWFhuB.js";import"./ExpandablePanel-B1eCKb1f.js";import"./useAnimatedHeightBetween-CEXv6Xrt.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-j9RVOFcL.js";import"./Expander-Dx4BQwQz.js";import"./ChevronUpIcon-B30N7WgT.js";import"./ListItem-C-BLj9aE.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
