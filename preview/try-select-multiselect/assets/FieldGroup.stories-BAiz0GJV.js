import{r as p,j as i}from"./iframe-DDhwjY90.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DE-sgkjP.js";import l from"./Help.stories-DpQUkES0.js";import c from"./RadioButton.stories-DkQFu20T.js";import{F as d}from"./FieldGroup-CZrnAmhl.js";import{C as k,a as u}from"./CheckboxPanel.stories-D9vecjR7.js";import{RadioPanel as g}from"./RadioPanel.stories-DRi0Ui4z.js";import{C as h}from"./Checkbox-C62I5Nxv.js";import{R as b}from"./RadioPanel-BUWbNUVl.js";import{H as x}from"./Help-CW_eYgIQ.js";import{R as C}from"./RadioButton-DFEuxgBP.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-Be_le8Hj.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DaY7M99q.js";import"./mergeRefs-BWekWp7g.js";import"./BaseRadioButton.stories-QSHMz-QR.js";import"./BaseRadioButton-DCmNXRBA.js";import"./useId-GDmJuMEg.js";import"./Label-C1EB1Ayi.js";import"./SupportLabel-D_7IdaQG.js";import"./SuccessIcon-r5B8vJpX.js";import"./Icon-jtW6xqtC.js";import"./WarningIcon-DSvnD9ex.js";import"./InputPanel-CeOlq_ZX.js";import"./Button-Dd-RHYJA.js";import"./usePreviousValue-BJLqm55r.js";import"./Loader-C-tX5dNr.js";import"./useDelayedRender-BEpdvVpl.js";import"./Title-CsvpCHHi.js";import"./Card-Du33hA3x.js";import"./Text-k8NR___U.js";import"./Tag-CWOgC4aD.js";import"./ExpandablePanel-CD4exeC8.js";import"./useAnimatedHeightBetween-BoNnX5-q.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CleSU_W8.js";import"./Expander-Behx4E05.js";import"./ChevronDownIcon-D_g8DUMe.js";import"./ChevronUpIcon-BZrTGDuK.js";import"./ListItem-B0TqDVdV.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
