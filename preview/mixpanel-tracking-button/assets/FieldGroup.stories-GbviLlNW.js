import{r as n,j as i}from"./iframe-CvYxFB_Z.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CThRUqKC.js";import{CheckboxStory as c}from"./Checkbox.stories-CmM2Jd9z.js";import d from"./Help.stories-hluUMmZ4.js";import k from"./RadioButton.stories-CGLOIj1Z.js";import{RadioPanel as u}from"./RadioPanel.stories-1laZ8RKM.js";import{F as g}from"./FieldGroup-fvdLql0E.js";import{C as h}from"./Checkbox-B8rQMJld.js";import{R as b}from"./RadioPanel-BMjACvKM.js";import{H as x}from"./Help-4ouPmGKP.js";import{R as C}from"./RadioButton-DE-9b112.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bu_JVhc6.js";import"./clsx-B-dksMZM.js";import"./Flex-D5Zv0s8t.js";import"./SlotComponent-CON_KXxI.js";import"./mergeRefs-DtWSviaI.js";import"./Button-DTsz9nzA.js";import"./usePreviousValue-CYgUJrsy.js";import"./Loader-DRqNfJKW.js";import"./useDelayedRender-D4f4VfhW.js";import"./useId-CuVDoEC9.js";import"./Label-DQnm3uxZ.js";import"./SupportLabel-9fW4QT8S.js";import"./SuccessIcon-PiUecXDo.js";import"./Icon-3R9yjjV2.js";import"./WarningIcon-CIE1HXEl.js";import"./BaseRadioButton.stories-CNElwsa2.js";import"./BaseRadioButton-CWIUiot4.js";import"./Title-BAhIx4SF.js";import"./Card-Cc3MQU_x.js";import"./Text-BtPeoow_.js";import"./Tag-B1yMNDWM.js";import"./ExpandablePanel-D4jweTg7.js";import"./useAnimatedHeightBetween-fm_zRXQx.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C-9dMXk7.js";import"./Expander-c094lrKd.js";import"./ChevronUpIcon-CGez730R.js";import"./ListItem-CMrLJPs2.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
