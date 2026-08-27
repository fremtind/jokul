import{r as p,j as i}from"./iframe-Nuh93MSL.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-RH95Hw1t.js";import l from"./Help.stories-C3LZHBao.js";import c from"./RadioButton.stories-BsTp9r4T.js";import{F as d}from"./FieldGroup-CAKBCXmo.js";import{C as k,a as u}from"./CheckboxPanel.stories-BT7dV6MW.js";import{RadioPanel as g}from"./RadioPanel.stories-MhesaoUI.js";import{C as h}from"./Checkbox-BRPdSEMk.js";import{R as b}from"./RadioPanel-DFHtMAUf.js";import{H as x}from"./Help-BH_rhWLY.js";import{R as C}from"./RadioButton-CtoTP58t.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BhJOXQKH.js";import"./BaseRadioButton-DSz7LzgB.js";import"./clsx-B-dksMZM.js";import"./useId-COKWK-mY.js";import"./Label-DPRFEjYq.js";import"./SupportLabel--joF35Er.js";import"./SuccessIcon-Dl_Ha6Kr.js";import"./Icon-Bab4jLj7.js";import"./WarningIcon-QveQmFWu.js";import"./InputPanel-D-9Oj9Bi.js";import"./Flex-BegxfH7J.js";import"./SlotComponent-BYpJg90g.js";import"./mergeRefs-PTgFAs9i.js";import"./Button-D6nyPwwT.js";import"./usePreviousValue-C-TPUxze.js";import"./Loader-BtMFOFVO.js";import"./useDelayedRender-9qbVK81k.js";import"./Title-BtZ-m68z.js";import"./Card-BC5tnDZi.js";import"./Text-DddewOOk.js";import"./Tag-C8Iidsto.js";import"./ExpandablePanel-BOMsNpq1.js";import"./useAnimatedHeightBetween-BnRGCBcw.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DTux-g29.js";import"./Expander-uYMYVI2t.js";import"./ChevronDownIcon-DIAU_7vq.js";import"./ChevronUpIcon-_av0f-vK.js";import"./ListItem-BuQx_BVf.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
