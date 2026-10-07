import{r as p,j as i}from"./iframe-CDa7pJma.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CaPgcRss.js";import{CheckboxStory as c}from"./Checkbox.stories-CkJUkxnC.js";import d from"./Help.stories-wX42COhI.js";import k from"./RadioButton.stories-CEHzTUJR.js";import{RadioPanel as u}from"./RadioPanel.stories-D2wffD2t.js";import{F as g}from"./FieldGroup-D70_83yk.js";import{C as h}from"./Checkbox-Dru0ngqT.js";import{R as b}from"./RadioPanel-D90i4oZR.js";import{H as x}from"./Help-CyktFr5w.js";import{R as C}from"./RadioButton-fdy6p1KM.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DHuFBgOZ.js";import"./clsx-B-dksMZM.js";import"./types-YjSsgwWY.js";import"./Flex-CWnLdXBE.js";import"./SlotComponent-CpGAMfLY.js";import"./mergeRefs-n2brYZWD.js";import"./Button-CFUv8Zis.js";import"./usePreviousValue-ImjzenmM.js";import"./Loader-BworsGNj.js";import"./useDelayedRender-DVyyCK5S.js";import"./useId-DTJ5Q7tR.js";import"./Label-BR6gLBM4.js";import"./SupportLabel-DFPHlsxV.js";import"./SuccessIcon-CkajFwBn.js";import"./Icon-BFTeEGxG.js";import"./WarningIcon-DkyhFYvJ.js";import"./BaseRadioButton.stories-BnrBqwoA.js";import"./BaseRadioButton-CbjPMqMM.js";import"./Title-DwGKiJFo.js";import"./Card-BOqisww2.js";import"./Text-OzFw203v.js";import"./Tag-CFhadhZv.js";import"./ExpandablePanel-ofbS-imz.js";import"./useAnimatedHeightBetween-BKbjvnIV.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DSLMgpfy.js";import"./Expander-BQe3Taz_.js";import"./ChevronUpIcon-CsPk5-nq.js";import"./ListItem-DQP_2fOz.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
