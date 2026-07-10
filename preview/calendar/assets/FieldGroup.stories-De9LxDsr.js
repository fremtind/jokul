import{r as p,j as i}from"./iframe-n3WU9YTo.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-De8Yhkvd.js";import l from"./Help.stories-BTmv3jjG.js";import c from"./RadioButton.stories-BHj-niPh.js";import{F as d}from"./FieldGroup-BWpoB2qY.js";import{C as k,a as u}from"./CheckboxPanel.stories-CNC8SRlH.js";import{RadioPanel as g}from"./RadioPanel.stories-Bx0oEDdk.js";import{C as h}from"./Checkbox-SjL9X2sU.js";import{R as b}from"./RadioPanel-Bep5Z6BR.js";import{H as x}from"./Help-D8b8CnPO.js";import{R as C}from"./RadioButton-Br7ZA0k6.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-Br0X1vD8.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CBDJ9Nng.js";import"./mergeRefs-C6-a-08k.js";import"./BaseRadioButton.stories-BljoDYYh.js";import"./BaseRadioButton-DPXw66bU.js";import"./useId-FCti06Xf.js";import"./Label-g48--br5.js";import"./SupportLabel-Bj2MnU_U.js";import"./SuccessIcon-DhXgjBcY.js";import"./Icon-DWsfwSZE.js";import"./WarningIcon-D1xzeNKK.js";import"./InputPanel-BllbNwuq.js";import"./Button-Dt9-Q05T.js";import"./usePreviousValue-DNbAkWMi.js";import"./Loader-C8esYlIr.js";import"./useDelayedRender-D1SM454M.js";import"./Title-hgP9LAUG.js";import"./Card-CpAT_0Ro.js";import"./Text-pF0Jv-15.js";import"./Tag-CahLJZHF.js";import"./ExpandablePanel-DpKk-Ph4.js";import"./useAnimatedHeightBetween-CRgt-X-J.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DLN9B-pf.js";import"./Expander-DwRC1t7G.js";import"./ChevronDownIcon-CKK27DD0.js";import"./ChevronUpIcon-C_5DTdsa.js";import"./ListItem-CReROMX3.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
