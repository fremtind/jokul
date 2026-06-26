import{r as p,j as i}from"./iframe-Dw87ThH7.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Vc1Ck_qk.js";import l from"./Help.stories-DJ-pdP0V.js";import c from"./RadioButton.stories-BOYojExL.js";import{F as d}from"./FieldGroup-Ca9a_qir.js";import{C as k,a as u}from"./CheckboxPanel.stories-C5Fd4wMY.js";import{RadioPanel as g}from"./RadioPanel.stories-BLk4y-kl.js";import{C as h}from"./Checkbox-TU9A8Q5o.js";import{R as b}from"./RadioPanel-DxD7XBkK.js";import{H as x}from"./Help-DPFMTSM5.js";import{R as C}from"./RadioButton-BB-RSm73.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-9fWOjmN1.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-Ckr5Zq1B.js";import"./mergeRefs-JcXmDQA7.js";import"./BaseRadioButton.stories-XHH0kV8v.js";import"./BaseRadioButton-CpA5W_I5.js";import"./useId-BamvAN1T.js";import"./Label-CaPRK2i8.js";import"./SupportLabel-BDhCslb-.js";import"./SuccessIcon-DaVhnq91.js";import"./Icon-CB1xFF7_.js";import"./WarningIcon-BlWJQIkG.js";import"./InputPanel-DblxJbhb.js";import"./Button-Dhb1a_tK.js";import"./usePreviousValue-CExSg0ir.js";import"./Loader-XyQ8erHh.js";import"./useDelayedRender-CZXg6OSb.js";import"./Title-BHsbjHsK.js";import"./Card-B7epxaCl.js";import"./Text-CUSkzY-x.js";import"./Tag-dFxlDNHm.js";import"./ExpandablePanel-CtaDn35d.js";import"./useAnimatedHeightBetween-CuOBda92.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DHTrm7Lg.js";import"./Expander-De5oKmFc.js";import"./ChevronDownIcon-DxV9lWIM.js";import"./ChevronUpIcon-BUADKPQd.js";import"./ListItem-CLwZZxOP.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
