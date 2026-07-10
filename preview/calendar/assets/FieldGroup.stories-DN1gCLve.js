import{r as p,j as i}from"./iframe-DNE93SOr.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C3G-q3Xw.js";import l from"./Help.stories-DY6zbIRm.js";import c from"./RadioButton.stories-80BEhDuI.js";import{F as d}from"./FieldGroup-qFSrOtQ4.js";import{C as k,a as u}from"./CheckboxPanel.stories-xLtZ12zF.js";import{RadioPanel as g}from"./RadioPanel.stories-DIScgXud.js";import{C as h}from"./Checkbox-C1adHHIT.js";import{R as b}from"./RadioPanel-D-o1Q2aa.js";import{H as x}from"./Help-CvlA4fck.js";import{R as C}from"./RadioButton-ZoyetU7Y.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-bhoYwI7C.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CuHwfuie.js";import"./mergeRefs-CpXLH9DK.js";import"./BaseRadioButton.stories-CINGeIHV.js";import"./BaseRadioButton-BfHY6QJ9.js";import"./useId-Jj0qVZT0.js";import"./Label-BR-Y1uKW.js";import"./SupportLabel-Ba859kf8.js";import"./SuccessIcon-BC7riFSY.js";import"./Icon-CzdnVlXv.js";import"./WarningIcon-DiAiI6xq.js";import"./InputPanel-IqvTT_vO.js";import"./Button-CJqOPxwV.js";import"./usePreviousValue-lXJke6GN.js";import"./Loader-CWbtjQcK.js";import"./useDelayedRender-BHXSDIFN.js";import"./Title-CCIegzsC.js";import"./Card-I4ckBeVT.js";import"./Text-BubGi4-F.js";import"./Tag-CD3hZFZJ.js";import"./ExpandablePanel-APHIMD5n.js";import"./useAnimatedHeightBetween-UpDxDYO_.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BX9wu975.js";import"./Expander-B4mS4vwN.js";import"./ChevronDownIcon-BienCyx_.js";import"./ChevronUpIcon-BGds-YC8.js";import"./ListItem-DABzOZru.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
