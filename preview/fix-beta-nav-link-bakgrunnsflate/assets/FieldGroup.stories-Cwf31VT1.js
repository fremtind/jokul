import{r as n,j as i}from"./iframe-BZ0fzjWP.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BaswEuRe.js";import{CheckboxStory as c}from"./Checkbox.stories-C5RgEdzL.js";import d from"./Help.stories-Cpu80vfb.js";import k from"./RadioButton.stories-DIWbwf0c.js";import{RadioPanel as u}from"./RadioPanel.stories-BzXLASKL.js";import{F as g}from"./FieldGroup-B7E5GGBW.js";import{C as h}from"./Checkbox-B62R0Gp6.js";import{R as b}from"./RadioPanel-C6rglSfP.js";import{H as x}from"./Help-C8INEDfr.js";import{R as C}from"./RadioButton-CEAMiCp_.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BTfsbiuV.js";import"./clsx-B-dksMZM.js";import"./Flex-DMT33J-m.js";import"./SlotComponent-CwCt6_ej.js";import"./mergeRefs-yNdYoUfE.js";import"./Button-BKXnIC9j.js";import"./usePreviousValue-BR_LYlAy.js";import"./Loader-hkg6tCgE.js";import"./useDelayedRender-C_1x4Q-Z.js";import"./useId-CQ9rwJ2T.js";import"./Label-D_iaWhE6.js";import"./SupportLabel-BGJb1iTB.js";import"./SuccessIcon-DztIMhnX.js";import"./Icon-Ci3Scux4.js";import"./WarningIcon-BLCBKtF4.js";import"./BaseRadioButton.stories-C7XzfM0Z.js";import"./BaseRadioButton-sZndzBL-.js";import"./Title-CpclhxIc.js";import"./Card-FIlIK7N_.js";import"./Text-BnpZ34QB.js";import"./Tag-amL-Iy8a.js";import"./ExpandablePanel-DblY01TD.js";import"./useAnimatedHeightBetween-DCTCwGLl.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-5CFI1KOZ.js";import"./Expander-BECBOWXw.js";import"./ChevronUpIcon-oU0w1ei-.js";import"./ListItem-CPAtEDll.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
