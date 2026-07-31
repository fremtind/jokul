import{r as p,j as i}from"./iframe-DS5jWHMc.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-QLBByJ06.js";import l from"./Help.stories-DBRh2-Fn.js";import c from"./RadioButton.stories-CjCA-u95.js";import{F as d}from"./FieldGroup-CKEizpYB.js";import{C as k,a as u}from"./CheckboxPanel.stories-Dr-IVEAy.js";import{RadioPanel as g}from"./RadioPanel.stories-BKjgdc_4.js";import{C as h}from"./Checkbox-mqoRRw63.js";import{R as b}from"./RadioPanel-DdbnC-SQ.js";import{H as x}from"./Help-DDRuNCNz.js";import{R as C}from"./RadioButton-BL8fNPxT.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BOGY4QuN.js";import"./BaseRadioButton-CZCVmp2Z.js";import"./clsx-B-dksMZM.js";import"./useId-cDkoBkZ8.js";import"./Label-BaiqBdmy.js";import"./SupportLabel-CYN-1ZXk.js";import"./SuccessIcon-Ceg4Xzaz.js";import"./Icon-Bo8ildnN.js";import"./WarningIcon-DoYUZ1D-.js";import"./InputPanel-n3hHgL4A.js";import"./Flex-Dnvc4vQ7.js";import"./SlotComponent-BjBqxjmJ.js";import"./mergeRefs-CkV-3k1q.js";import"./Button-BvtRAh5Q.js";import"./usePreviousValue-TP4WJy9G.js";import"./Loader-1DWioNMj.js";import"./useDelayedRender-O0hhPo3p.js";import"./Title-DRgimlas.js";import"./Card-BMrHxHNd.js";import"./Text-CQ2MMTDE.js";import"./Tag-CX_y9vDP.js";import"./ExpandablePanel-BZwNaQNe.js";import"./useAnimatedHeightBetween-DXX_uCCa.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CMiLsxCY.js";import"./Expander-C1LnyoVU.js";import"./ChevronDownIcon-BfTAbdOO.js";import"./ChevronUpIcon-DYjAitbA.js";import"./ListItem-CZzP_8pk.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
