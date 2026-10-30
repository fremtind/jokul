import{r as p,j as i}from"./iframe-BN4TBQAU.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CYCd2GP6.js";import{CheckboxStory as c}from"./Checkbox.stories-0m1q-lvF.js";import d from"./Help.stories-CXmNquA8.js";import k from"./RadioButton.stories-BAA5Nxkp.js";import{RadioPanel as u}from"./RadioPanel.stories-DuY9xRse.js";import{F as g}from"./FieldGroup-72PISydS.js";import{C as h}from"./Checkbox-B3OaeiVb.js";import{R as b}from"./RadioPanel-BEyyQRTw.js";import{H as x}from"./Help-DBI6kRB_.js";import{R as C}from"./RadioButton-kLStAVio.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DBGUT2Jv.js";import"./clsx-B-dksMZM.js";import"./Flex-C-ag4aLK.js";import"./SlotComponent-C9YI77aG.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CPbNvOyf.js";import"./usePreviousValue-CXM9tbtT.js";import"./Loader-Bh--J2Zt.js";import"./useDelayedRender-308ngFkg.js";import"./BaseRadioButton.stories-qXxHeCQ6.js";import"./BaseRadioButton-CJ3rLxm_.js";import"./useId-Bs9Kc41b.js";import"./Title-ODyOm2wR.js";import"./Card-BUz5GB0c.js";import"./Text-Dq0dG6pW.js";import"./Tag-yggMfkUy.js";import"./ExpandablePanel-Dp9Cg2Zk.js";import"./useAnimatedHeightBetween-B5BOqd12.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BKO1mUrf.js";import"./Expander-C3aEiLBf.js";import"./ChevronDownIcon-Z9GiCdZY.js";import"./Icon-CcUFsEN9.js";import"./ChevronUpIcon-CufqANw6.js";import"./ListItem-JSvdQ9xM.js";import"./Label-CVv32Nbs.js";import"./SupportLabel-DzCtSUT5.js";import"./SuccessIcon-DaYADDfP.js";import"./WarningIcon-DRfZjcze.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
