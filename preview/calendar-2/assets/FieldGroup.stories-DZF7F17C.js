import{r as n,j as i}from"./iframe-DOBCU8kQ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DAPTarsz.js";import l from"./Help.stories-sQjmTHvX.js";import c from"./RadioButton.stories-GcJjIwKv.js";import{F as d}from"./FieldGroup-DE9qXDg1.js";import{C as k,a as u}from"./CheckboxPanel.stories-B4NbBaH6.js";import{RadioPanel as g}from"./RadioPanel.stories-CmvvFPih.js";import{C as h}from"./Checkbox-xSqZYJIB.js";import{R as b}from"./RadioPanel-B5dJN7dV.js";import{H as x}from"./Help-Cmx0sO9X.js";import{R as C}from"./RadioButton-CxfGRYDG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CXB3Zr3G.js";import"./Label-C3z8vwrB.js";import"./SupportLabel-BBSXTZoR.js";import"./SuccessIcon-BKieQBzw.js";import"./Icon-DS9DME7z.js";import"./WarningIcon-7n3zjhXd.js";import"./BaseRadioButton.stories-D71yo7l2.js";import"./BaseRadioButton-DDZ2Mnne.js";import"./InputPanel-BipwVeQJ.js";import"./Flex-C3QXZzLR.js";import"./SlotComponent-LPy4z1O-.js";import"./mergeRefs-Cx2LyOk4.js";import"./Button-ZR3eazAQ.js";import"./usePreviousValue-BEEbzweb.js";import"./Loader-D9rgRTKi.js";import"./useDelayedRender-DnM1z0OC.js";import"./Title-CJ-icipi.js";import"./Card-ed-K1Cl2.js";import"./Text-QRJ0ZzdI.js";import"./Tag-BotA4wnz.js";import"./ExpandablePanel-DhPfLA1k.js";import"./useAnimatedHeightBetween-BwGKcABC.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BZBGFp_6.js";import"./Expander-D-CwXTxm.js";import"./ChevronUpIcon-DXwD3R0w.js";import"./ListItem-D9z3M1_z.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
