import{r as n,j as i}from"./iframe-BnNwtD6d.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DPWFPXHq.js";import{CheckboxStory as c}from"./Checkbox.stories-BOLleawa.js";import d from"./Help.stories-DWkUmbMi.js";import k from"./RadioButton.stories-C_VJkswa.js";import{RadioPanel as u}from"./RadioPanel.stories-CUcR9TPk.js";import{F as g}from"./FieldGroup-syX3XzMt.js";import{C as h}from"./Checkbox-DE-50scg.js";import{R as b}from"./RadioPanel-C1KsQSDv.js";import{H as x}from"./Help-dydjx3I4.js";import{R as C}from"./RadioButton-9Z5V0mxJ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Xms_PqW7.js";import"./clsx-B-dksMZM.js";import"./Flex-CCYnX0Q3.js";import"./SlotComponent-TPhmamzs.js";import"./mergeRefs-Byd5DFBY.js";import"./Button-C91pUX_n.js";import"./usePreviousValue-0oBbtvMM.js";import"./Loader-DjgubrLs.js";import"./useDelayedRender-CjPEgd5p.js";import"./useId-Doi9kP89.js";import"./Label-fFKlWS4I.js";import"./SupportLabel-C3wlhdkd.js";import"./SuccessIcon-DZI2_JVB.js";import"./Icon-Bivm725_.js";import"./WarningIcon-C2T6tFoB.js";import"./BaseRadioButton.stories-BEENbCCS.js";import"./BaseRadioButton-BMzh5GXi.js";import"./Title-BrhvLnlf.js";import"./Card-D0emhPIL.js";import"./Text-D8OlhFo5.js";import"./Tag-CfeNnGN2.js";import"./ExpandablePanel-BTt6E4OW.js";import"./useAnimatedHeightBetween-CYHwUKqw.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DJTEoY-g.js";import"./Expander-C2lkDq22.js";import"./ChevronUpIcon-DjJo2VSr.js";import"./ListItem-BPvaQPZs.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
