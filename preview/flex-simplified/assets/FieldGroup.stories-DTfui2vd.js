import{r as n,j as i}from"./iframe-uPNgk1Tq.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DtLgBz8s.js";import l from"./Help.stories-LCNf8AGt.js";import c from"./RadioButton.stories-Blu2Gquy.js";import{F as d}from"./FieldGroup-DA1ykIkC.js";import{C as k,a as u}from"./CheckboxPanel.stories-Bnlj-kvV.js";import{RadioPanel as g}from"./RadioPanel.stories-DZ2xTy-T.js";import{C as h}from"./Checkbox-BmKKoJxz.js";import{R as b}from"./RadioPanel-DuPLKU9_.js";import{H as x}from"./Help-DY03uYwY.js";import{R as C}from"./RadioButton-CZFDns7U.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B891SsP4.js";import"./Label-DATiPrrX.js";import"./SupportLabel-B1ByXM8X.js";import"./SuccessIcon-DUyIxYqh.js";import"./Icon-NTmVKsgF.js";import"./WarningIcon-CaPkp4OG.js";import"./BaseRadioButton.stories-CVsIhVCY.js";import"./BaseRadioButton-DL0OQuj2.js";import"./InputPanel-CR4NM6dg.js";import"./Flex-DTJ46e5r.js";import"./SlotComponent-DmXTtcAc.js";import"./mergeRefs-DnYCYYKk.js";import"./Button-Bx7RLA4h.js";import"./usePreviousValue-iO6hNSPn.js";import"./Loader-C2HLXk7H.js";import"./useDelayedRender-DKqkDAiz.js";import"./Title-BFrmmZ6j.js";import"./Card-DryaCtc6.js";import"./Text-DsFt4T4T.js";import"./Tag-CJCsXBx4.js";import"./ExpandablePanel-cQcSiaRe.js";import"./useAnimatedHeightBetween-BPH0ZwBp.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences--ZuIYUea.js";import"./Expander-CgOPlukV.js";import"./ChevronUpIcon-C_Ms0VRZ.js";import"./ListItem-B1T1ToRs.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
