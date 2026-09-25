import{r as n,j as i}from"./iframe-BX9ccPb9.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-br-T0XTT.js";import{CheckboxStory as c}from"./Checkbox.stories-C_SEKodV.js";import d from"./Help.stories-CLqVDAn4.js";import k from"./RadioButton.stories-9COG-lY-.js";import{RadioPanel as u}from"./RadioPanel.stories-CAIQZmBX.js";import{F as g}from"./FieldGroup-C1V_8b2L.js";import{C as h}from"./Checkbox-CXFIJqTw.js";import{R as b}from"./RadioPanel-BygngUEI.js";import{H as x}from"./Help-CTBA476u.js";import{R as C}from"./RadioButton-B8K9xX14.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CLKlpbgO.js";import"./clsx-B-dksMZM.js";import"./Flex-BXHR5Vp9.js";import"./SlotComponent-CKyqNLb2.js";import"./mergeRefs-nFlp9iUu.js";import"./Button-FpREVVw_.js";import"./usePreviousValue-kTzlrHVx.js";import"./Loader-BBI8XsHe.js";import"./useDelayedRender-hzxFz0p5.js";import"./useId-C1kV_SkH.js";import"./Label-ChTIfpuj.js";import"./SupportLabel-DEvdeV-y.js";import"./SuccessIcon-C0muTrHn.js";import"./Icon-DA08IBPg.js";import"./WarningIcon-D8aPw-sM.js";import"./BaseRadioButton.stories-na-RV1Xe.js";import"./BaseRadioButton-DfNRQ5SM.js";import"./Title-BAQAEbSR.js";import"./Card-Cmhqu4fx.js";import"./Text-EtMp0ScO.js";import"./Tag-CXYuyHSC.js";import"./ExpandablePanel-Dx6aXEtD.js";import"./useAnimatedHeightBetween-wKVFhTQK.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CdKZgff7.js";import"./Expander-CnIMVe0c.js";import"./ChevronUpIcon-B7QPx_9A.js";import"./ListItem-CdPeBf2Z.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
