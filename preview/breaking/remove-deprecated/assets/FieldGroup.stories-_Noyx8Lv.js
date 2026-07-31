import{r as p,j as i}from"./iframe-B4qfHNax.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BcooqvDz.js";import l from"./Help.stories-Cs5N45Ft.js";import c from"./RadioButton.stories-DgteW4IW.js";import{F as d}from"./FieldGroup-Cp0mosae.js";import{C as k,a as u}from"./CheckboxPanel.stories-liWfHTnG.js";import{RadioPanel as g}from"./RadioPanel.stories-DItclEOj.js";import{C as h}from"./Checkbox-BjlCOBLv.js";import{R as b}from"./RadioPanel-CEuil6_a.js";import{H as x}from"./Help-Cf2GPF6G.js";import{R as C}from"./RadioButton-DTv9_StB.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-LcYSffDE.js";import"./BaseRadioButton-CcxkAeFr.js";import"./clsx-B-dksMZM.js";import"./useId-BjklQzm_.js";import"./Label-DD4V071t.js";import"./SupportLabel-Dsj-GKyc.js";import"./SuccessIcon-X9YtPabQ.js";import"./Icon-C2zJAMrV.js";import"./WarningIcon-BvGTbVk5.js";import"./InputPanel-5VX8DN0s.js";import"./Flex-D-vPiJXF.js";import"./SlotComponent-DI3zRSF2.js";import"./mergeRefs-2uGJIAp0.js";import"./Button-BzADR3Pa.js";import"./usePreviousValue-CkWYlcrQ.js";import"./Loader-yhHA5zer.js";import"./useDelayedRender-ClswvZHY.js";import"./Title-BEED5XiM.js";import"./Card-CdaYAHPS.js";import"./Text-DNrJBQPQ.js";import"./Tag-Bi-1yHZH.js";import"./ExpandablePanel-CD1rE20D.js";import"./useAnimatedHeightBetween-CgJWp3XX.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BT2G5uG1.js";import"./Expander-Cr9Zap0A.js";import"./ChevronDownIcon-D990dWFT.js";import"./ChevronUpIcon-4ts0xHhi.js";import"./ListItem-BPMCC79z.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
