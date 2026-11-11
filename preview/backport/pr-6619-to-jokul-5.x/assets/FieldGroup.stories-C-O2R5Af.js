import{r as p,j as i}from"./iframe-B9dYvTtQ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BlvMKD0d.js";import{CheckboxStory as c}from"./Checkbox.stories-BmhJ2xbo.js";import d from"./Help.stories-ClknA2Y5.js";import k from"./RadioButton.stories-DKn8xhAD.js";import{RadioPanel as u}from"./RadioPanel.stories-C09eZJwk.js";import{F as g}from"./FieldGroup-B1Lpm3nX.js";import{C as h}from"./Checkbox-CxH9ssND.js";import{R as b}from"./RadioPanel-CEB94z3r.js";import{H as x}from"./Help-CdRC205T.js";import{R as C}from"./RadioButton-BpDIKrSb.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CY8Fn10D.js";import"./clsx-B-dksMZM.js";import"./Flex-Cmj8nuKq.js";import"./SlotComponent-D9wXaQ8f.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BydWb-u6.js";import"./usePreviousValue-Corn-zfT.js";import"./Loader-DLkWIjTo.js";import"./useDelayedRender-COUFaxzb.js";import"./BaseRadioButton.stories-DWQCv7u-.js";import"./BaseRadioButton-CwyZEHwI.js";import"./useId-Cq40KW5t.js";import"./Title-Dw59KQV3.js";import"./Card-s2xvNgSt.js";import"./Text-Xx2Jszjf.js";import"./Tag-COWRjwtP.js";import"./ExpandablePanel-ZCZ-9ckP.js";import"./useAnimatedHeightBetween-DQP5TgyT.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D5IZRstg.js";import"./Expander-N-EZqv_h.js";import"./ChevronDownIcon-BAsycL08.js";import"./Icon-BZwC4-W-.js";import"./ChevronUpIcon-DwCtohtW.js";import"./ListItem-CHPEYczu.js";import"./Label-VvKg_kjk.js";import"./SupportLabel-CzyV5qEm.js";import"./SuccessIcon-DHnwXWmg.js";import"./WarningIcon-D293PPJT.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
