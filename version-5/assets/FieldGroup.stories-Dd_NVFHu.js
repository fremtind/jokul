import{r as p,j as i}from"./iframe-BbQ5U--h.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Bh-6NNax.js";import{CheckboxStory as c}from"./Checkbox.stories-i6bxWD0F.js";import d from"./Help.stories-tCz36Ee1.js";import k from"./RadioButton.stories-BZTS2qED.js";import{RadioPanel as u}from"./RadioPanel.stories-CrAV_9KM.js";import{F as g}from"./FieldGroup-B6RpPwrM.js";import{C as h}from"./Checkbox-scWYM7r2.js";import{R as b}from"./RadioPanel-DZEmJ0RB.js";import{H as x}from"./Help-QucNQ_zh.js";import{R as C}from"./RadioButton-D9PpGNnK.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-5lI0ppaf.js";import"./clsx-B-dksMZM.js";import"./Flex-JFJE-8k5.js";import"./SlotComponent-C0bdp-tR.js";import"./mergeRefs-NkHWc1mC.js";import"./Button-CjlPD2fY.js";import"./usePreviousValue-BDIBcB0X.js";import"./Loader-BcRL4Xv5.js";import"./useDelayedRender-Cg647LpH.js";import"./BaseRadioButton.stories-CfJFnmN1.js";import"./BaseRadioButton-C_qMgNyI.js";import"./useId-BtMPSFX0.js";import"./Title-CSbHFbiq.js";import"./Card-BPeFNXH6.js";import"./Text-Bj3GRNUf.js";import"./Tag-06uEC0IZ.js";import"./ExpandablePanel-BSdDrJyJ.js";import"./useAnimatedHeightBetween-Cr-CQKnT.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-lzXP2T8x.js";import"./Expander-BGzbhhkc.js";import"./ChevronDownIcon-yIasuG6Z.js";import"./Icon-Deo-XdIE.js";import"./ChevronUpIcon-D5QQZrTF.js";import"./ListItem-3CMLWxZv.js";import"./Label-C_OabtC_.js";import"./SupportLabel-B9ojgusZ.js";import"./SuccessIcon-BQ1xo0kS.js";import"./WarningIcon-C6OkMVeg.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
