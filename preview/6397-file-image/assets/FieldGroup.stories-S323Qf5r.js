import{r as p,j as i}from"./iframe-Bujj6pka.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BBryEqH3.js";import l from"./Help.stories-B5jci0wI.js";import c from"./RadioButton.stories-sZSiwFn4.js";import{F as d}from"./FieldGroup-BOGeLtnF.js";import{C as k,a as u}from"./CheckboxPanel.stories-DCHf_mp_.js";import{RadioPanel as g}from"./RadioPanel.stories-UND5hCPF.js";import{C as h}from"./Checkbox-CjzNbWmw.js";import{R as b}from"./RadioPanel-CDHKW5HX.js";import{H as x}from"./Help-CVz9ecVU.js";import{R as C}from"./RadioButton-NhZ0Ik5a.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BboKlYRG.js";import"./BaseRadioButton-CO0wLTow.js";import"./clsx-B-dksMZM.js";import"./useId-ByiUhLxt.js";import"./Label-D-Gf42Cs.js";import"./SupportLabel-B-aR0ojb.js";import"./SuccessIcon-C4VACVOw.js";import"./Icon-5AIO5nUL.js";import"./WarningIcon-Dxg7_wxe.js";import"./InputPanel-C7REyQ4d.js";import"./Flex-CeLEg2U_.js";import"./SlotComponent-D6zkCQfQ.js";import"./mergeRefs-Kf-g7hgY.js";import"./Button-jtg4pCti.js";import"./usePreviousValue-8GDshFze.js";import"./Loader-BHEaRoE9.js";import"./useDelayedRender-B2vCSKYc.js";import"./Title-C1WNJEf9.js";import"./Card-BivqxZz7.js";import"./Text-CvyIbOHD.js";import"./Tag-mSC7tbVU.js";import"./ExpandablePanel-ysKu6Sxa.js";import"./useAnimatedHeightBetween-Ba7iLdR8.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BHHwVKgp.js";import"./Expander-BZVNXAvJ.js";import"./ChevronDownIcon-BGneZgpI.js";import"./ChevronUpIcon-sKZmyl_F.js";import"./ListItem-DQwTJt_2.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
