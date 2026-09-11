import{r as n,j as i}from"./iframe-8yqxqoJu.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D5O2Euko.js";import{CheckboxStory as c}from"./Checkbox.stories-RwgFIHpq.js";import d from"./Help.stories-Cf0H42mC.js";import k from"./RadioButton.stories-DYz80ROx.js";import{RadioPanel as u}from"./RadioPanel.stories-DI16lbw-.js";import{F as g}from"./FieldGroup-Dzbk9HMR.js";import{C as h}from"./Checkbox-CTAL557r.js";import{R as b}from"./RadioPanel-CXF_KGaZ.js";import{H as x}from"./Help-DGFiOJ7i.js";import{R as C}from"./RadioButton-Sixg8mEi.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CpsTWcBs.js";import"./clsx-B-dksMZM.js";import"./Flex-D6ZJTViC.js";import"./SlotComponent-CW0N-GUs.js";import"./mergeRefs-yvyCsg5J.js";import"./Button-B2y9WQeJ.js";import"./usePreviousValue-CtkpFxNY.js";import"./Loader-B-Qr4oeA.js";import"./useDelayedRender-d-VZSjxQ.js";import"./useId-SNAhZQ4f.js";import"./Label-LUJ6oK87.js";import"./SupportLabel-KqOYX_HJ.js";import"./SuccessIcon-CB9pjdbn.js";import"./Icon-UdeEzISX.js";import"./WarningIcon-Cango9VG.js";import"./BaseRadioButton.stories-Ch8g_MS3.js";import"./BaseRadioButton-DucVn98T.js";import"./Title-LKDMyQdd.js";import"./Card-Bbhm_Thc.js";import"./Text-CnxtV-Mz.js";import"./Tag-Be4QY6Yj.js";import"./ExpandablePanel-DZacARCy.js";import"./useAnimatedHeightBetween-Rm9gowfS.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DDB4gBD2.js";import"./Expander-DMd4b8zS.js";import"./ChevronUpIcon-DcIkiViK.js";import"./ListItem-CVpy2luB.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
