import{r as n,j as i}from"./iframe-DuqhP5_r.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BF5jqGqv.js";import{CheckboxStory as c}from"./Checkbox.stories-Dptan-ZQ.js";import d from"./Help.stories-Ds-yOUvO.js";import k from"./RadioButton.stories-xCnrvViM.js";import{RadioPanel as u}from"./RadioPanel.stories-CVfmuFm9.js";import{F as g}from"./FieldGroup-Dy__zHHG.js";import{C as h}from"./Checkbox-Ds5QCCJT.js";import{R as b}from"./RadioPanel-C2hwFoqL.js";import{H as x}from"./Help-8vsNo_IY.js";import{R as C}from"./RadioButton-A0Yku8A0.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CMzT1cez.js";import"./clsx-B-dksMZM.js";import"./Flex-BQ1GqwrB.js";import"./SlotComponent-BRgdJzmx.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-B9zPQhXO.js";import"./usePreviousValue-D5qgWhpF.js";import"./Loader-CRE4aauv.js";import"./useDelayedRender-CjA_TiNp.js";import"./useId-VSppgZ50.js";import"./Label-CwruTl4C.js";import"./SupportLabel-B8Pgafdp.js";import"./SuccessIcon-DhOwKK17.js";import"./Icon-BIKlUb38.js";import"./WarningIcon-MMjkS-ns.js";import"./BaseRadioButton.stories-BpoS-iPw.js";import"./BaseRadioButton-CPp53Od-.js";import"./Title-DWsXi5tD.js";import"./Card-BRgHzLKv.js";import"./Text-BjEKubqQ.js";import"./Tag-Bx1asGXK.js";import"./ExpandablePanel-ByMqmH-U.js";import"./useAnimatedHeightBetween-CIoU_5gi.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-wp4uz8D8.js";import"./Expander-BLnaG5Ym.js";import"./ChevronUpIcon-C9zZp-c1.js";import"./ListItem-bQgdr_LC.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
