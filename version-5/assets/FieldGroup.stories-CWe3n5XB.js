import{r as p,j as i}from"./iframe-xr8QZbXV.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Cy41DRV3.js";import{CheckboxStory as c}from"./Checkbox.stories-BbEdzYxF.js";import d from"./Help.stories-14daaX43.js";import k from"./RadioButton.stories-CUFaZw4i.js";import{RadioPanel as u}from"./RadioPanel.stories-CCAv-JDl.js";import{F as g}from"./FieldGroup-Bgxeqy2p.js";import{C as h}from"./Checkbox-CeTVCDzf.js";import{R as b}from"./RadioPanel-2qYL0Wmm.js";import{H as x}from"./Help-Df7niBeH.js";import{R as C}from"./RadioButton-9qFo_DtB.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BoIllChx.js";import"./clsx-B-dksMZM.js";import"./Flex-5zN4wO6Z.js";import"./SlotComponent-CMpsXsd6.js";import"./mergeRefs-xoOuZMc-.js";import"./Button-CYNYkhJy.js";import"./usePreviousValue-D6S6YTsw.js";import"./Loader-BWjl3cEU.js";import"./useDelayedRender-ChUJ9pja.js";import"./BaseRadioButton.stories-YSNqf4Hn.js";import"./BaseRadioButton-Cv36nHlW.js";import"./useId-CPQ7E86z.js";import"./Title-CgXVvxYx.js";import"./Card-BMm-ZHcb.js";import"./Text-BtzDImg9.js";import"./Tag-079fizfx.js";import"./ExpandablePanel-D5zdZhoV.js";import"./useAnimatedHeightBetween-DiL8wTx4.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BFCWGOH_.js";import"./Expander-BN4DiUls.js";import"./ChevronDownIcon-CKIu4cgk.js";import"./Icon-NwIqtF4C.js";import"./ChevronUpIcon-Bvr4lTCf.js";import"./ListItem-DwUNcsvs.js";import"./Label-BAOdgBFR.js";import"./SupportLabel-imS2Z3ot.js";import"./SuccessIcon-Db-bsP1L.js";import"./WarningIcon-kYjntusl.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
