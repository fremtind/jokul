import{r as p,j as i}from"./iframe-Djq3W03i.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BTTfQ0p-.js";import{CheckboxStory as c}from"./Checkbox.stories-CgBoiFzb.js";import d from"./Help.stories-B-y1udoM.js";import k from"./RadioButton.stories-D7bPeTds.js";import{RadioPanel as u}from"./RadioPanel.stories-B37DoaoC.js";import{F as g}from"./FieldGroup-CA50UKb3.js";import{C as h}from"./Checkbox-DwUlEdpB.js";import{R as b}from"./RadioPanel-BC1ZSECX.js";import{H as x}from"./Help-BVGzY7U0.js";import{R as C}from"./RadioButton-DDlfOH51.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C_qKlzxb.js";import"./clsx-B-dksMZM.js";import"./Flex-C0a-4mTQ.js";import"./SlotComponent-CRCjbeD2.js";import"./mergeRefs-D0df15dX.js";import"./Button-D9skF69A.js";import"./usePreviousValue-F3-x8o0o.js";import"./Loader-Cu6Zn8E-.js";import"./useDelayedRender-GDpCI_bR.js";import"./BaseRadioButton.stories-BqK3XJPg.js";import"./BaseRadioButton-BPVnGP95.js";import"./useId-Bm1MUQ-F.js";import"./Title-Cvw_p6BU.js";import"./Card-czFh3_Gx.js";import"./Text-BIyBSZyy.js";import"./Tag-CFJdkBDq.js";import"./ExpandablePanel-CtlWYE-t.js";import"./useAnimatedHeightBetween-DTt07mia.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DRYx4tYk.js";import"./Expander-DuDc2Ve8.js";import"./ChevronDownIcon-D-bDEsNq.js";import"./Icon-rUvoVfqS.js";import"./ChevronUpIcon-rjIySwFu.js";import"./ListItem-CSKgMr7G.js";import"./Label-EjYeeWJB.js";import"./SupportLabel-xG_BcUJD.js";import"./SuccessIcon-Bi_B2FUy.js";import"./WarningIcon-CxqVEOn9.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
