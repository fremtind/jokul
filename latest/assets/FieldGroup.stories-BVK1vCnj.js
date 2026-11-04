import{r as n,j as i}from"./iframe-DDRcwYpW.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-P5Id3JLe.js";import{CheckboxStory as c}from"./Checkbox.stories-B4HDZyZU.js";import d from"./Help.stories-DJV2hlzP.js";import k from"./RadioButton.stories-BWHjeyCH.js";import{RadioPanel as u}from"./RadioPanel.stories-DcRZO8zC.js";import{F as g}from"./FieldGroup-BdzWb4BH.js";import{C as h}from"./Checkbox-DwqTK9Bs.js";import{R as b}from"./RadioPanel-_F932nKd.js";import{H as x}from"./Help-d_OqLsxF.js";import{R as C}from"./RadioButton-DO09OAAl.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BocxbIK7.js";import"./clsx-B-dksMZM.js";import"./Flex-ClUp-TwF.js";import"./SlotComponent-D7hvu8VH.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Tf_HYwXe.js";import"./usePreviousValue-gyoUi9Xc.js";import"./Loader-Dy0sg3_P.js";import"./useDelayedRender-Dj4TpR4H.js";import"./useId-4xWtQ8O6.js";import"./Label--dBEScNU.js";import"./SupportLabel-Dvm1bKff.js";import"./SuccessIcon-CN-PQlKX.js";import"./Icon-BPs7t1dO.js";import"./WarningIcon-CN4CXg7_.js";import"./BaseRadioButton.stories-Brl4rczY.js";import"./BaseRadioButton-CqR2BRc3.js";import"./Title-CuiJyQbh.js";import"./Card-Cpk62x1l.js";import"./Text-D_dg9KE3.js";import"./Tag-CaR-I2Cf.js";import"./ExpandablePanel-D64GfgBV.js";import"./useAnimatedHeightBetween-DAiBCQga.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D9fDaHf8.js";import"./Expander-B7NxPhDT.js";import"./ChevronUpIcon-XJH8zSFl.js";import"./ListItem-CfXM46j6.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
