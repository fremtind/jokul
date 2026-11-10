import{r as p,j as i}from"./iframe-CUI5cQsi.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-MEt8o988.js";import{CheckboxStory as c}from"./Checkbox.stories-CQdCDsGT.js";import d from"./Help.stories-Dy1yQBen.js";import k from"./RadioButton.stories-DZJgwgho.js";import{RadioPanel as u}from"./RadioPanel.stories-Cr3ziVQe.js";import{F as g}from"./FieldGroup-DxmnpMUW.js";import{C as h}from"./Checkbox-e-6HSa1f.js";import{R as b}from"./RadioPanel-BcDVeoge.js";import{H as x}from"./Help-DQbfCSdO.js";import{R as C}from"./RadioButton-CnXXASHO.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BGkmuo9s.js";import"./clsx-B-dksMZM.js";import"./Flex-BAkG_3oa.js";import"./SlotComponent-C9SFyEqu.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DjW2yoDz.js";import"./usePreviousValue-lPKWso5C.js";import"./Loader-BgQyDMwV.js";import"./useDelayedRender-CrNABsrH.js";import"./BaseRadioButton.stories-D1_gDLD_.js";import"./BaseRadioButton-CJjkE880.js";import"./useId-WDF391dB.js";import"./Title-iXHZuPBB.js";import"./Card-Dud1PakF.js";import"./Text-C8OYgMqt.js";import"./Tag-CMI1NpYD.js";import"./ExpandablePanel-BkwYyOvi.js";import"./useAnimatedHeightBetween-g29yCXtz.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CLX94yTA.js";import"./Expander-DQ2Pwj29.js";import"./ChevronDownIcon-30-STrfH.js";import"./Icon-LtMpoTI-.js";import"./ChevronUpIcon-DaO3ud0T.js";import"./ListItem-DP1n-Wqo.js";import"./Label-B4K0Oxno.js";import"./SupportLabel-B_v9V75n.js";import"./SuccessIcon-Btb5oJzt.js";import"./WarningIcon-CNeATpqs.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
