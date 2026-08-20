import{r as n,j as i}from"./iframe-CFpyWcZO.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Bbkg1h0i.js";import l from"./Help.stories-BONODr-M.js";import c from"./RadioButton.stories-bsElQNof.js";import{F as d}from"./FieldGroup-BeeoPQaH.js";import{C as k,a as u}from"./CheckboxPanel.stories-CECgeVyr.js";import{RadioPanel as g}from"./RadioPanel.stories-CIhXuut9.js";import{C as h}from"./Checkbox-C-QYojri.js";import{R as b}from"./RadioPanel-UbD69vpj.js";import{H as x}from"./Help-BBkuuPve.js";import{R as C}from"./RadioButton-DRrlObqR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-o1urWYOd.js";import"./Label-Qf3_QM92.js";import"./SupportLabel-aeWJzMQ8.js";import"./SuccessIcon-B1r_Q0Et.js";import"./Icon-DsczttUB.js";import"./WarningIcon-DLGgcFEu.js";import"./BaseRadioButton.stories-fl-TyT9q.js";import"./BaseRadioButton-C9AMf1tk.js";import"./InputPanel-DWwcDVJ5.js";import"./Flex-v3ieCz0Q.js";import"./SlotComponent-BwJbg2S0.js";import"./mergeRefs-CemUoRzq.js";import"./Button-BnGrkcCb.js";import"./usePreviousValue-gmcPI170.js";import"./Loader-Da2q4OXK.js";import"./useDelayedRender-cLVI01gf.js";import"./Title-Ct12JViq.js";import"./Card-CpON7Dxf.js";import"./Text-BipEZytG.js";import"./Tag-DMWP1spM.js";import"./ExpandablePanel-DhHPcyIT.js";import"./useAnimatedHeightBetween-DvbYzABz.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DCMcfi6G.js";import"./Expander-BXdcwkEj.js";import"./ChevronUpIcon-Bfd3G3lJ.js";import"./ListItem-CEc4sMB0.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
