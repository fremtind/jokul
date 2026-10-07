import{r as p,j as i}from"./iframe-CZL5QpJP.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-fVhr5rru.js";import{CheckboxStory as c}from"./Checkbox.stories-Cng1XZcL.js";import d from"./Help.stories-BhiqKBuq.js";import k from"./RadioButton.stories-BCMW3I4L.js";import{RadioPanel as u}from"./RadioPanel.stories-0BswEAPv.js";import{F as g}from"./FieldGroup-B8OBwHdR.js";import{C as h}from"./Checkbox-BtTIWnOk.js";import{R as b}from"./RadioPanel-C3j5LNy5.js";import{H as x}from"./Help-Bx_gA4rE.js";import{R as C}from"./RadioButton-C4YwVSwb.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BxkNWrRQ.js";import"./clsx-B-dksMZM.js";import"./Flex-QllCuGFI.js";import"./SlotComponent-DSKINQt4.js";import"./mergeRefs-y38XBLs0.js";import"./Button-CjOz-OeH.js";import"./usePreviousValue-BiI-VvQ8.js";import"./Loader-Co7O7Ovp.js";import"./useDelayedRender-Cyink7Ym.js";import"./BaseRadioButton.stories-cW1RDE8Y.js";import"./BaseRadioButton-DUrwKcK6.js";import"./useId-5rI8IeJH.js";import"./Title-D-Nw0OLr.js";import"./Card-DmEtBgQ4.js";import"./Text-BQLpsGWT.js";import"./Tag-BZk5vWMI.js";import"./ExpandablePanel-TrIduRcX.js";import"./useAnimatedHeightBetween-CmlT221Y.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DVJCMDyr.js";import"./Expander-6VBYnF26.js";import"./ChevronDownIcon-DT_v4eM3.js";import"./Icon-_0Rb8KBj.js";import"./ChevronUpIcon-BjZIm9Gj.js";import"./ListItem-BOxdIiJF.js";import"./Label-C_Ac9ykU.js";import"./SupportLabel-4N9g7WJl.js";import"./SuccessIcon-Lm25257a.js";import"./WarningIcon-DMQH1fMw.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
