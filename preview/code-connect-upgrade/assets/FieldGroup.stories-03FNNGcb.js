import{r as n,j as i}from"./iframe-ot-30PJH.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DlW6BF7V.js";import l from"./Help.stories-DX510ZRv.js";import c from"./RadioButton.stories-iKOAHK14.js";import{F as d}from"./FieldGroup-oygE7Knw.js";import{C as k,a as u}from"./CheckboxPanel.stories-BKPo3i2z.js";import{RadioPanel as g}from"./RadioPanel.stories-BazcHFwe.js";import{C as h}from"./Checkbox-Mfn8p06Q.js";import{R as b}from"./RadioPanel-BThqKZD0.js";import{H as x}from"./Help-D18-Cd9k.js";import{R as C}from"./RadioButton--9Mrx3Yn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-NV7sC4Mc.js";import"./Label-9OMi940j.js";import"./SupportLabel-BHj4pd4q.js";import"./SuccessIcon-DCIrkE1P.js";import"./Icon-Z0bG178u.js";import"./WarningIcon-BiSB6I1j.js";import"./BaseRadioButton.stories-hVh5XYvw.js";import"./BaseRadioButton-BV4trvWI.js";import"./InputPanel-mhENPK5I.js";import"./Flex-BnZxp9jA.js";import"./SlotComponent-BUVtTebW.js";import"./mergeRefs-DJXMwTXr.js";import"./Button-BBx8xu1h.js";import"./usePreviousValue-5gxBRrX2.js";import"./Loader-YqIB17oY.js";import"./useDelayedRender-B1OJd3jW.js";import"./Title-DxoF-qMZ.js";import"./Card-Cm7zrOyu.js";import"./Text-D3t1y8h1.js";import"./Tag-DQlEPLn8.js";import"./ExpandablePanel-C9tHY7Fo.js";import"./useAnimatedHeightBetween-B-hWPjsl.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Bjf6t2Dw.js";import"./Expander-DIWbji7S.js";import"./ChevronUpIcon-DqWCDblO.js";import"./ListItem-BXktjRy-.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
