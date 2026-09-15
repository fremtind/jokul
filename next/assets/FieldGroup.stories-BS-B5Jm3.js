import{r as n,j as i}from"./iframe-BByvH0c-.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DRCIItku.js";import{CheckboxStory as c}from"./Checkbox.stories-Ctxb7xQe.js";import d from"./Help.stories-CRwmECNZ.js";import k from"./RadioButton.stories-BEE3FvWW.js";import{RadioPanel as u}from"./RadioPanel.stories-B3lWnvfx.js";import{F as g}from"./FieldGroup-yhPvWy2J.js";import{C as h}from"./Checkbox-6Skk3zwj.js";import{R as b}from"./RadioPanel-B9JpVzXv.js";import{H as x}from"./Help-Czn1vfHO.js";import{R as C}from"./RadioButton-BmefHDzp.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CX-xXyKe.js";import"./clsx-B-dksMZM.js";import"./Flex-BqoJPxb1.js";import"./SlotComponent-CLstUdJk.js";import"./mergeRefs-DbyzXxTD.js";import"./Button-D95BSsT6.js";import"./usePreviousValue-CC3642z4.js";import"./Loader-RDIh7QVJ.js";import"./useDelayedRender-C7-litbq.js";import"./useId-qofzPWgO.js";import"./Label-DTPip4YG.js";import"./SupportLabel-CdM8GmDe.js";import"./SuccessIcon-kKyg8RFT.js";import"./Icon-CCjDFxOI.js";import"./WarningIcon-EbiWQsib.js";import"./BaseRadioButton.stories-CaauSAMu.js";import"./BaseRadioButton-BahBTd5G.js";import"./Title-Vjet4pNt.js";import"./Card-CLltqiaj.js";import"./Text-BYJUW1Qh.js";import"./Tag-CgaNM1Hi.js";import"./ExpandablePanel-ChrpxDq1.js";import"./useAnimatedHeightBetween-BoK_jLCe.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-T23t1ex3.js";import"./Expander-COFWRjdX.js";import"./ChevronUpIcon-CZham-5B.js";import"./ListItem-DfzYJbV-.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
