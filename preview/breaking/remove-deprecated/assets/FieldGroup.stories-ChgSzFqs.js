import{r as p,j as i}from"./iframe-Dpidr6Xr.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-D4QxLyHU.js";import l from"./Help.stories-DB41a5Jz.js";import c from"./RadioButton.stories-UgBSpcox.js";import{F as d}from"./FieldGroup-kjY0D2W4.js";import{C as k,a as u}from"./CheckboxPanel.stories-hmmcvAyB.js";import{RadioPanel as g}from"./RadioPanel.stories-Qo7e3z6L.js";import{C as h}from"./Checkbox-Cvg9Imeh.js";import{R as b}from"./RadioPanel-DpHAUbfi.js";import{H as x}from"./Help-BJj-iBg0.js";import{R as C}from"./RadioButton-DrsYLi4t.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-D9-k1RJU.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CL-FSIbG.js";import"./mergeRefs-CqlmYKSU.js";import"./BaseRadioButton.stories-BzDama-h.js";import"./BaseRadioButton-C2WL9hf8.js";import"./useId-DI7vsG_X.js";import"./Label-Cvy5UxY6.js";import"./SupportLabel-nf0w9u_2.js";import"./SuccessIcon-CHSnEns5.js";import"./Icon-Cz-dWNcG.js";import"./WarningIcon-D1pZgsvo.js";import"./InputPanel-DRVI9hFj.js";import"./Button-CntbSlY0.js";import"./usePreviousValue-aC2CFoWg.js";import"./Loader-Bo9A8Cxl.js";import"./useDelayedRender-DaUvdwWm.js";import"./Title-BWmGTAFv.js";import"./Card-BJYpDWsI.js";import"./Text-CDnO1Ng3.js";import"./Tag-Bzt-n7aw.js";import"./ExpandablePanel-Cy0r1nyi.js";import"./useAnimatedHeightBetween-Bd9dqIqy.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-UesH9t_x.js";import"./Expander-DpaF5v6q.js";import"./ChevronDownIcon-CzQsTpwJ.js";import"./ChevronUpIcon-Cwl0bx3x.js";import"./ListItem-CTu1TVIg.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
