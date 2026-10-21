import{r as n,j as i}from"./iframe-Cx70xiMg.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Z6BAmuG-.js";import{CheckboxStory as c}from"./Checkbox.stories-CP4TVkBl.js";import d from"./Help.stories-D_5NJHke.js";import k from"./RadioButton.stories-fi_-BmVt.js";import{RadioPanel as u}from"./RadioPanel.stories-B_UPNnvd.js";import{F as g}from"./FieldGroup-DF6Ng0qE.js";import{C as h}from"./Checkbox-BxVcZLq-.js";import{R as b}from"./RadioPanel-BkBcqCH8.js";import{H as x}from"./Help-Bgbe3uyg.js";import{R as C}from"./RadioButton-bqi2UvQy.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-wpmAWv9Z.js";import"./clsx-B-dksMZM.js";import"./Flex-B9KIr_vX.js";import"./SlotComponent-1k9K_awE.js";import"./mergeRefs-lcgULuLA.js";import"./Button-CN0rp5Rl.js";import"./usePreviousValue-bZi5XsEw.js";import"./Loader-BAT5ahbI.js";import"./useDelayedRender-BzKcOIFx.js";import"./useId-CuhTZAtN.js";import"./Label-BKCKPsAi.js";import"./SupportLabel-D2EW_-GC.js";import"./SuccessIcon-Dl2FTaji.js";import"./Icon-Dx1gILGr.js";import"./WarningIcon-Cl09IAj1.js";import"./BaseRadioButton.stories-BtpcY7W8.js";import"./BaseRadioButton-5A86hRA-.js";import"./Title-CN8XkWNO.js";import"./Card-CX8fSMjD.js";import"./Text-D4rrZXEX.js";import"./Tag-Cla7CM32.js";import"./ExpandablePanel-0EmAo4Qd.js";import"./useAnimatedHeightBetween-DjtvktQd.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bn6V1x4s.js";import"./Expander-zz0xj4rr.js";import"./ChevronUpIcon-DcZGMAJC.js";import"./ListItem-DLtTGLPl.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
