import{r as p,j as i}from"./iframe-B6k9lRij.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D2fZUTDt.js";import{CheckboxStory as c}from"./Checkbox.stories-CW0G8-pa.js";import d from"./Help.stories-BwnRuHup.js";import k from"./RadioButton.stories-aRD0zpxd.js";import{RadioPanel as u}from"./RadioPanel.stories-CiZNz9gp.js";import{F as g}from"./FieldGroup-CnIOL_bo.js";import{C as h}from"./Checkbox-f_b4UkYd.js";import{R as b}from"./RadioPanel-6g2-iBJ1.js";import{H as x}from"./Help-CvRx7jt7.js";import{R as C}from"./RadioButton-DiiaMVyZ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DQ2sgArK.js";import"./clsx-B-dksMZM.js";import"./Flex-DEpHjGA8.js";import"./SlotComponent-BqrO3P7y.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Da0QXqkd.js";import"./usePreviousValue-DWDKBDFZ.js";import"./Loader-DW-vcBH_.js";import"./useDelayedRender-NKFG-4Xz.js";import"./BaseRadioButton.stories-CJyzXZBp.js";import"./BaseRadioButton-CK4Bb_5a.js";import"./useId-CQJPYI6X.js";import"./Title-DDaY6bhD.js";import"./Card-Ce39LQO9.js";import"./Text-dEKqUgg4.js";import"./Tag-lRlNrxcj.js";import"./ExpandablePanel-Bgi0KvpR.js";import"./useAnimatedHeightBetween-qR9k9O7C.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CEwfNowF.js";import"./Expander-yHw-DL6-.js";import"./ChevronDownIcon-CmGcPqiQ.js";import"./Icon-Dw9f8tDh.js";import"./ChevronUpIcon-DL46MT-L.js";import"./ListItem-DU2xlxlc.js";import"./Label-BoEAbTRW.js";import"./SupportLabel-CrPlahIy.js";import"./SuccessIcon-CY7y84It.js";import"./WarningIcon-_yP-tVE3.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
