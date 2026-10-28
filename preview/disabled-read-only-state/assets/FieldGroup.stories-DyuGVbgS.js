import{r as n,j as i}from"./iframe-BtDSgjSo.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-vESNZ7Dz.js";import{CheckboxStory as c}from"./Checkbox.stories-CWuTOrb_.js";import d from"./Help.stories-BnKO6xl-.js";import k from"./RadioButton.stories-CBUSm_qK.js";import{RadioPanel as u}from"./RadioPanel.stories-D79UE9O8.js";import{F as g}from"./FieldGroup-C6Qsr8DC.js";import{C as h}from"./Checkbox-DqFogzWy.js";import{R as b}from"./RadioPanel-DeNcBHxj.js";import{H as x}from"./Help-JJSFEWmc.js";import{R as C}from"./RadioButton-B5H_XTp3.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-6KGbnAT4.js";import"./clsx-B-dksMZM.js";import"./Flex-LppjuD0Y.js";import"./SlotComponent-BX8CzWOI.js";import"./mergeRefs-g6nJfhtD.js";import"./Button-C2-vtRAI.js";import"./usePreviousValue-CCA-jls4.js";import"./Loader-SzA8oX_l.js";import"./useDelayedRender-Ci-z4AWw.js";import"./useId-BdftHoHp.js";import"./Label-vFZVJR_r.js";import"./SupportLabel-i8VITltx.js";import"./SuccessIcon-WMLnp3Ph.js";import"./Icon-Nb3dwUIe.js";import"./WarningIcon-BbUO-YPr.js";import"./BaseRadioButton.stories-DQXvuc6N.js";import"./BaseRadioButton-DYGYG6dd.js";import"./Title-41tghXKk.js";import"./Card-D4JuAtyv.js";import"./Text-CoPOoabY.js";import"./Tag-CXZiZn9B.js";import"./ExpandablePanel-DgS4D_3m.js";import"./useAnimatedHeightBetween-CjnLMdam.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-lL4cmXR-.js";import"./Expander-KcpdLXw_.js";import"./ChevronUpIcon-DHW-CYwW.js";import"./ListItem---0-d-gL.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
