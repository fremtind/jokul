import{r as p,j as i}from"./iframe-CAnlUYhN.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Dw8p2a1Y.js";import l from"./Help.stories-C8hFGD4K.js";import c from"./RadioButton.stories-eZ3KYJoQ.js";import{F as d}from"./FieldGroup-BfAu85XD.js";import{C as k,a as u}from"./CheckboxPanel.stories-DNcYzGZq.js";import{RadioPanel as g}from"./RadioPanel.stories-DmX9qLYe.js";import{C as h}from"./Checkbox-CmUgT0__.js";import{R as b}from"./RadioPanel-Dk6N8qF4.js";import{H as x}from"./Help-DVi2itmJ.js";import{R as C}from"./RadioButton-ByaA7xDe.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CPVm3p9u.js";import"./BaseRadioButton-DHOBpjY4.js";import"./clsx-B-dksMZM.js";import"./useId-CLpp182v.js";import"./Label-DriYl09N.js";import"./SupportLabel-BhrG8I-K.js";import"./SuccessIcon-Ca2m7ARS.js";import"./Icon-BgKILhcf.js";import"./WarningIcon-BJbKqsnp.js";import"./InputPanel-BdMOsSj3.js";import"./Flex-6Yh0h7wg.js";import"./SlotComponent-CQTcaSs9.js";import"./mergeRefs-FfxlUm_m.js";import"./Button-DID6vpEv.js";import"./usePreviousValue-DHkxlCmi.js";import"./Loader-ajq3-jZQ.js";import"./useDelayedRender-BN4_Q9jA.js";import"./Title-0auHiXp6.js";import"./Card-HfZ1ry5w.js";import"./Text-DRoFBsFe.js";import"./Tag-BQ13UDSP.js";import"./ExpandablePanel-CULeLj68.js";import"./useAnimatedHeightBetween-ClGIXJIU.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BTxhRe4D.js";import"./Expander-DtXZ_qyQ.js";import"./ChevronDownIcon-CbsbSelY.js";import"./ChevronUpIcon-xWCGaXBq.js";import"./ListItem-B8pAzYgd.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
