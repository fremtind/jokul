import{r as n,j as i}from"./iframe-0ZB4oRb9.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DOLWedL8.js";import{CheckboxStory as c}from"./Checkbox.stories-BZpo8AWx.js";import d from"./Help.stories-DeDQxDzM.js";import k from"./RadioButton.stories-liWSd4iN.js";import{RadioPanel as u}from"./RadioPanel.stories-oYnR-gOJ.js";import{F as g}from"./FieldGroup-CdlEGNyd.js";import{C as h}from"./Checkbox-J9UNi7AF.js";import{R as b}from"./RadioPanel-CoHZGBep.js";import{H as x}from"./Help-DQq-tpdj.js";import{R as C}from"./RadioButton-Bo9bQW-a.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-bA-z1FT8.js";import"./clsx-B-dksMZM.js";import"./Flex-DmtuCOai.js";import"./SlotComponent-UQZUj88c.js";import"./mergeRefs-BKmA9Zqj.js";import"./Button-Cmr6iWqs.js";import"./usePreviousValue-D4mnY11u.js";import"./Loader-DXDT4bO3.js";import"./useDelayedRender-bm_SwVF2.js";import"./useId-8Auicuwd.js";import"./Label-DFV5NPs1.js";import"./SupportLabel-CN9mkqeI.js";import"./SuccessIcon-DSiRLwce.js";import"./Icon-0UZbaLo5.js";import"./WarningIcon-p4Q4W2Fl.js";import"./BaseRadioButton.stories-CcK9GGsO.js";import"./BaseRadioButton-96S9UCZf.js";import"./Title-DE_2WX-4.js";import"./Card-BCrnclXJ.js";import"./Text-C05eyXnV.js";import"./Tag-CVTQNVNA.js";import"./ExpandablePanel-4gl2jlRs.js";import"./useAnimatedHeightBetween-Dyir1o7V.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-ilhMkfi_.js";import"./Expander-B3YfbXpK.js";import"./ChevronUpIcon-CPkS_f1Y.js";import"./ListItem-Ljoj0QoT.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
