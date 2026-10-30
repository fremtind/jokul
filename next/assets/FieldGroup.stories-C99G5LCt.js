import{r as n,j as i}from"./iframe-Be4FwfBN.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Ct5-9i8x.js";import{CheckboxStory as c}from"./Checkbox.stories-C0c2rLvO.js";import d from"./Help.stories-BYesLotT.js";import k from"./RadioButton.stories-DkpzQyXk.js";import{RadioPanel as u}from"./RadioPanel.stories-BtuHhXFN.js";import{F as g}from"./FieldGroup-CqZawYXn.js";import{C as h}from"./Checkbox-B_7BBSrC.js";import{R as b}from"./RadioPanel-B5XI9gdl.js";import{H as x}from"./Help-B2N4CNjK.js";import{R as C}from"./RadioButton-C4lL1dde.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DwTZm-e_.js";import"./clsx-B-dksMZM.js";import"./Flex-bAsufkCA.js";import"./SlotComponent-Dh-dJ0LC.js";import"./mergeRefs-PnaADBC-.js";import"./Button-CpLL5Vux.js";import"./usePreviousValue-DI2EXaj-.js";import"./Loader-K00SCbsd.js";import"./useDelayedRender-BobT8X-k.js";import"./useId-YZuQZIdm.js";import"./Label-CCKYZiNE.js";import"./SupportLabel-CcRPn3d-.js";import"./SuccessIcon-BcqReUr_.js";import"./Icon-BVI9L6Mb.js";import"./WarningIcon-BgE6AbZg.js";import"./BaseRadioButton.stories-DWGUf3p3.js";import"./BaseRadioButton-BQkKW3tW.js";import"./Title-nJn_w5XP.js";import"./Card-CIPSS3R-.js";import"./Text-DFHbEYES.js";import"./Tag-DYMRBMRR.js";import"./ExpandablePanel-BP4kF1SA.js";import"./useAnimatedHeightBetween-B9R7EW8r.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-XyxW3ROY.js";import"./Expander-3TQ6ZLHa.js";import"./ChevronUpIcon-b_jJTnB1.js";import"./ListItem-DEplqRho.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
