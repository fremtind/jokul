import{r as n,j as i}from"./iframe-0u691B2V.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BBPufwcZ.js";import l from"./Help.stories-B3SECR6f.js";import c from"./RadioButton.stories-CS44tGV0.js";import{F as d}from"./FieldGroup-97jVu7Q1.js";import{C as k,a as u}from"./CheckboxPanel.stories-otOXYHPw.js";import{RadioPanel as g}from"./RadioPanel.stories-D62LKX4c.js";import{C as h}from"./Checkbox-Cr4RAooq.js";import{R as b}from"./RadioPanel-BvLe6Q8a.js";import{H as x}from"./Help-BAoUN45U.js";import{R as C}from"./RadioButton-C2Scwhg9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CDDm69rQ.js";import"./Label-DaVBMbDf.js";import"./SupportLabel-Bndz-nD6.js";import"./SuccessIcon-mBLl3EsO.js";import"./Icon-DEZjO3eT.js";import"./WarningIcon-BKlnYvtH.js";import"./BaseRadioButton.stories-BFvAOlSG.js";import"./BaseRadioButton-CsqXfeVS.js";import"./InputPanel-CM38RcHQ.js";import"./Flex-DUEPX0YW.js";import"./SlotComponent-CuBqIwqL.js";import"./mergeRefs-G1mRpzUZ.js";import"./Button-BzdWVyH0.js";import"./usePreviousValue-C-BdCUST.js";import"./Loader-BgtvZ8Bk.js";import"./useDelayedRender-B38RLiI4.js";import"./Title-Dkrx3IWM.js";import"./Card-D5W4eaU5.js";import"./Text-BW2KM_6P.js";import"./Tag-CkRvTe5o.js";import"./ExpandablePanel-CN_jzRPF.js";import"./useAnimatedHeightBetween-DP6kI8ce.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-jniIobI0.js";import"./Expander-DZt77egh.js";import"./ChevronUpIcon-A1dZ9Sdh.js";import"./ListItem-D-zprCVj.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
