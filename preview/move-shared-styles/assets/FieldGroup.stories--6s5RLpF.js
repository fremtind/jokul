import{r as p,j as i}from"./iframe-B4aUOhV_.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DM-F7JqY.js";import l from"./Help.stories-DcGZBQzY.js";import c from"./RadioButton.stories-8k1DR8ir.js";import{F as d}from"./FieldGroup-Cri6Nxzx.js";import{C as k,a as u}from"./CheckboxPanel.stories-ClS44dFE.js";import{RadioPanel as g}from"./RadioPanel.stories-DoDjVryD.js";import{C as h}from"./Checkbox-CWx9mq9F.js";import{R as b}from"./RadioPanel-QADwqQPK.js";import{H as x}from"./Help-C0ecP9Xw.js";import{R as C}from"./RadioButton-B3yjuYFT.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CKUehDN1.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DcAQg1WC.js";import"./mergeRefs-CFe15ymU.js";import"./BaseRadioButton.stories-CEKUzBjA.js";import"./BaseRadioButton-DQYhCg__.js";import"./useId-B8veZyXb.js";import"./Label-DP5rxdRW.js";import"./SupportLabel-Ba8m10bl.js";import"./SuccessIcon-BcIuJbvV.js";import"./Icon-BfVsYEoz.js";import"./WarningIcon-Ble_k59J.js";import"./InputPanel-CE3L7ml9.js";import"./Button-BYDfUUO-.js";import"./usePreviousValue-CZBd5VFC.js";import"./Loader-BRb0wgly.js";import"./useDelayedRender-C-HSJT1U.js";import"./Title-B87u-yyT.js";import"./Card-CVURb4G1.js";import"./Text-DMKLd5L7.js";import"./Tag-CvirF8bA.js";import"./ExpandablePanel-LxilDZeh.js";import"./useAnimatedHeightBetween-tc-2knRI.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CgKQTHAe.js";import"./Expander-BPX_m9SP.js";import"./ChevronDownIcon-BEaIQ7nf.js";import"./ChevronUpIcon-BJaCPu0t.js";import"./ListItem-C6Q-lLEy.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
