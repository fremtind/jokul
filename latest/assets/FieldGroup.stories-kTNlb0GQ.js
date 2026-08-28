import{r as p,j as i}from"./iframe-CoFMuH9Y.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Bru9psko.js";import l from"./Help.stories-BEMR1duB.js";import c from"./RadioButton.stories-DKEjCbr-.js";import{F as d}from"./FieldGroup-B7ocxon1.js";import{C as k,a as u}from"./CheckboxPanel.stories-CgcfW1ih.js";import{RadioPanel as g}from"./RadioPanel.stories-Dgjgmfzq.js";import{C as h}from"./Checkbox-_0iCDOjT.js";import{R as b}from"./RadioPanel-Y0T72rhP.js";import{H as x}from"./Help-2QodzCdi.js";import{R as C}from"./RadioButton-CxkVKcz1.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-D8cQaymp.js";import"./BaseRadioButton-BgSMDY7O.js";import"./clsx-B-dksMZM.js";import"./useId-zstuJjJ1.js";import"./Label-Dz_Z1gy0.js";import"./SupportLabel-vt8MDKlu.js";import"./SuccessIcon-D2IeMGXy.js";import"./Icon-C2dEl2rv.js";import"./WarningIcon-BCSFodvX.js";import"./InputPanel-BNkL8IuX.js";import"./Flex-Bcf-VCZb.js";import"./SlotComponent-DwrV6_QW.js";import"./mergeRefs-DNwgXA2T.js";import"./Button-CKXukF3x.js";import"./usePreviousValue-ByPt7gKS.js";import"./Loader-rRii36kF.js";import"./useDelayedRender-BhAryG9n.js";import"./Title-C0Aa2RBL.js";import"./Card-_ooup6nl.js";import"./Text-gH4QICGg.js";import"./Tag-CSYTrYGC.js";import"./ExpandablePanel-BY6rhSxe.js";import"./useAnimatedHeightBetween-C0IVV4du.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-wajaGlyr.js";import"./Expander-BOfisFuW.js";import"./ChevronDownIcon-DeNwK0JT.js";import"./ChevronUpIcon-BbqHFAH7.js";import"./ListItem-BM1QEwA9.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
