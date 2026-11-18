import{r as n,j as i}from"./iframe-CNJEdzjQ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-nyHhRhc4.js";import{CheckboxStory as c}from"./Checkbox.stories-CJkju6sX.js";import d from"./Help.stories-B02jNKym.js";import k from"./RadioButton.stories-YuflqOOb.js";import{RadioPanel as u}from"./RadioPanel.stories-ObACcG3s.js";import{F as g}from"./FieldGroup-CzFCZEh6.js";import{C as h}from"./Checkbox-Bq0NS0P8.js";import{R as b}from"./RadioPanel-CUjIddDI.js";import{H as x}from"./Help-C-xL07RU.js";import{R as C}from"./RadioButton-BZrmcROC.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Ch2fEKx5.js";import"./clsx-B-dksMZM.js";import"./Flex-HcdOF_Eb.js";import"./SlotComponent-dG6ICPtI.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-ikQApQxM.js";import"./usePreviousValue-BsiJmEXy.js";import"./Loader-BzTOA9xn.js";import"./useDelayedRender-qUJtq1H8.js";import"./useId-64hJZ9wV.js";import"./Label-cMQ6cwo6.js";import"./SupportLabel-ikDJAq8g.js";import"./SuccessIcon-78lCoh1X.js";import"./Icon-CDVOw3dB.js";import"./WarningIcon-Cc8WTJP-.js";import"./BaseRadioButton.stories-bai1AeiN.js";import"./BaseRadioButton-DOdvKcA3.js";import"./Title-Dgn0hVGo.js";import"./Card-IHzhBSvY.js";import"./Text-C6hHc6W6.js";import"./Tag-RdZ4GTK7.js";import"./ExpandablePanel-CVHEyUaB.js";import"./useAnimatedHeightBetween-CaJl6DL_.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CwdQppGc.js";import"./Expander-BFGTixjm.js";import"./ChevronUpIcon-DVZ3sYHA.js";import"./ListItem-D-LxFCIx.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
