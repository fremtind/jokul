import{r as n,j as i}from"./iframe-CexVzwd7.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Bh94VGsC.js";import{CheckboxStory as c}from"./Checkbox.stories-C2xcI1rs.js";import d from"./Help.stories-DyRCqzOT.js";import k from"./RadioButton.stories-D7s3keCD.js";import{RadioPanel as u}from"./RadioPanel.stories-_p8hH19e.js";import{F as g}from"./FieldGroup-BIzM_DkL.js";import{C as h}from"./Checkbox-Bf5xeROF.js";import{R as b}from"./RadioPanel-BhYG-rgH.js";import{H as x}from"./Help-BSajya12.js";import{R as C}from"./RadioButton-CGQGzTX3.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-UWZ8RZnh.js";import"./clsx-B-dksMZM.js";import"./Flex-DZWiXom4.js";import"./SlotComponent-uLQkvGz3.js";import"./mergeRefs-CayazKJN.js";import"./Button-DUhAK_5-.js";import"./usePreviousValue-DbOOj46w.js";import"./Loader-D5VrfEcr.js";import"./useDelayedRender-CRDe9z4e.js";import"./useId-COtfxG-T.js";import"./Label-LUEM1DW-.js";import"./SupportLabel-BEyPyX4g.js";import"./SuccessIcon-C_ifIwpX.js";import"./Icon-DQF3MWin.js";import"./WarningIcon-DwW5V2uY.js";import"./BaseRadioButton.stories-fzwvj-Ib.js";import"./BaseRadioButton-C3lUX28A.js";import"./Title-CDEthQa1.js";import"./Card-C9jkTH8A.js";import"./Text-Bv0g_TVU.js";import"./Tag-Bboiur3m.js";import"./ExpandablePanel-ox-cOeuB.js";import"./useAnimatedHeightBetween-CS6j6zf8.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CmtXehZY.js";import"./Expander-X04-Jf7T.js";import"./ChevronUpIcon-CGWTxTb-.js";import"./ListItem-7kE7EqTY.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
