import{r as n,j as i}from"./iframe-CKctZbuh.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B2_XqAyZ.js";import{CheckboxStory as c}from"./Checkbox.stories-CvAVZjIK.js";import d from"./Help.stories-CPMHmunS.js";import k from"./RadioButton.stories-BNhw_T1W.js";import{RadioPanel as u}from"./RadioPanel.stories-7X2lYy8d.js";import{F as g}from"./FieldGroup-Cn7dnk8P.js";import{C as h}from"./Checkbox-BwbYdXPC.js";import{R as b}from"./RadioPanel-BF_oxSNN.js";import{H as x}from"./Help-DREeXHp8.js";import{R as C}from"./RadioButton-C-AQcQtK.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CoIm0_2B.js";import"./clsx-B-dksMZM.js";import"./Flex-DYKhzfKJ.js";import"./SlotComponent-aOC30oZr.js";import"./mergeRefs-LDWEDi7d.js";import"./Button-FlmS4d3d.js";import"./usePreviousValue-DyKXfSqz.js";import"./Loader-m7zuSHUQ.js";import"./useDelayedRender-CHV-pDY-.js";import"./useId-Cmo6NJ09.js";import"./Label-Dqroi1y0.js";import"./SupportLabel-DLcAC9t8.js";import"./SuccessIcon-YZvicYlq.js";import"./Icon-B5V63cLD.js";import"./WarningIcon-IffBICG6.js";import"./BaseRadioButton.stories-ByaOMulj.js";import"./BaseRadioButton-B48gPb-o.js";import"./Title-DFOYsIw0.js";import"./Card-mLmhJQId.js";import"./Text-yA8y1LNU.js";import"./Tag-DTVzPuLu.js";import"./ExpandablePanel-DyrF6jQ0.js";import"./useAnimatedHeightBetween-BnoFMrnp.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CD3m1UPY.js";import"./Expander-BspTwETZ.js";import"./ChevronUpIcon-DU5CkphY.js";import"./ListItem-CWlRz7Bc.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
