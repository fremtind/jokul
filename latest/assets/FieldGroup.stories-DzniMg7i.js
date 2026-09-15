import{r as n,j as i}from"./iframe-DpzJ_Ra5.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CincD9l_.js";import{CheckboxStory as c}from"./Checkbox.stories-CJHQAagL.js";import d from"./Help.stories-MSpBjiKs.js";import k from"./RadioButton.stories-BW20qybp.js";import{RadioPanel as u}from"./RadioPanel.stories-pOXN-O6i.js";import{F as g}from"./FieldGroup-DHoh2Mz1.js";import{C as h}from"./Checkbox-DydFA4a5.js";import{R as b}from"./RadioPanel-_PkPmJpb.js";import{H as x}from"./Help-BolBn8RL.js";import{R as C}from"./RadioButton-7SJRTv4y.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BGDZzs13.js";import"./clsx-B-dksMZM.js";import"./Flex-D7KbQO-1.js";import"./SlotComponent-Dy6ohSoi.js";import"./mergeRefs-CTaXWAj0.js";import"./Button-CWp2CHha.js";import"./usePreviousValue-BImXMo9d.js";import"./Loader-iVga57IL.js";import"./useDelayedRender-DkrJfEPd.js";import"./useId-BAX1JwBq.js";import"./Label-CoTKqTN_.js";import"./SupportLabel-CZhnBXtx.js";import"./SuccessIcon-CEZgYFps.js";import"./Icon-DF3GFhAJ.js";import"./WarningIcon-CxrIwUne.js";import"./BaseRadioButton.stories-4J4rAOMO.js";import"./BaseRadioButton-BNKwqQSt.js";import"./Title-B3uKaay0.js";import"./Card-CP8LYClr.js";import"./Text-Ci9OvGqU.js";import"./Tag-DkCm85ZW.js";import"./ExpandablePanel-DOH00Z27.js";import"./useAnimatedHeightBetween-C579GVL8.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CZXWMP_J.js";import"./Expander-DyaeOSNY.js";import"./ChevronUpIcon-BduCdpro.js";import"./ListItem-UTsjPUiW.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
