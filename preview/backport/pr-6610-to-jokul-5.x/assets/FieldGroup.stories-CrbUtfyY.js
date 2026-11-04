import{r as p,j as i}from"./iframe-BUw8fml-.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-hepKZy-K.js";import{CheckboxStory as c}from"./Checkbox.stories-B0WU7uRY.js";import d from"./Help.stories-LBPPX84I.js";import k from"./RadioButton.stories-DGYCtGNX.js";import{RadioPanel as u}from"./RadioPanel.stories-BHcfvXgt.js";import{F as g}from"./FieldGroup-36ctHUDb.js";import{C as h}from"./Checkbox-BwintME9.js";import{R as b}from"./RadioPanel-CqZLSt6c.js";import{H as x}from"./Help-COp37Ef-.js";import{R as C}from"./RadioButton-BXyZI9Mh.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BSNGiu27.js";import"./clsx-B-dksMZM.js";import"./Flex-DC7HrrjP.js";import"./SlotComponent-BPMfrFNK.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-D4nVzBFi.js";import"./usePreviousValue-BJtHOEnm.js";import"./Loader-Pqsr_Zi9.js";import"./useDelayedRender-CvcdAhKp.js";import"./BaseRadioButton.stories-DB3ldPWO.js";import"./BaseRadioButton-DYZS9g8s.js";import"./useId-BMEG0lZa.js";import"./Title-ByQw6pKP.js";import"./Card-CwKVW6F9.js";import"./Text-CG5QE9FJ.js";import"./Tag-DbqeMq2P.js";import"./ExpandablePanel-Cc3wGkff.js";import"./useAnimatedHeightBetween-vRkO5eVg.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-B6N6aW5r.js";import"./Expander-BPwyQ2Co.js";import"./ChevronDownIcon-Drc90apc.js";import"./Icon-BZGR0LXX.js";import"./ChevronUpIcon-N1pAI53Z.js";import"./ListItem-B49uc03O.js";import"./Label-DQ3G0ctj.js";import"./SupportLabel-CRS0vmDK.js";import"./SuccessIcon-DuIxYgFi.js";import"./WarningIcon-B7lFNCme.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
