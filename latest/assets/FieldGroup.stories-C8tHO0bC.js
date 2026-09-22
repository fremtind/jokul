import{r as n,j as i}from"./iframe-BYKpOB8y.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D5QCs279.js";import{CheckboxStory as c}from"./Checkbox.stories-DwTg7kJR.js";import d from"./Help.stories-DtGaJNYf.js";import k from"./RadioButton.stories-9UURXvPk.js";import{RadioPanel as u}from"./RadioPanel.stories-lYyljIf-.js";import{F as g}from"./FieldGroup-CA4pD81L.js";import{C as h}from"./Checkbox-DMQ4VYpy.js";import{R as b}from"./RadioPanel-DProwMDX.js";import{H as x}from"./Help-JQHN-vz2.js";import{R as C}from"./RadioButton-DZD_pReN.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-e7Yh3Z2M.js";import"./clsx-B-dksMZM.js";import"./Flex-BFO5PqRp.js";import"./SlotComponent-C5BmNQLj.js";import"./mergeRefs-CnVw28b6.js";import"./Button-BX-iPD_4.js";import"./usePreviousValue-C5vYGOAg.js";import"./Loader-DqtNyCrZ.js";import"./useDelayedRender-OYZBUGb4.js";import"./useId-CCTxfy_d.js";import"./Label-Cp03AnwE.js";import"./SupportLabel-QRwqCHVW.js";import"./SuccessIcon-ByoX3cHi.js";import"./Icon-DNRVz9Wp.js";import"./WarningIcon-CXK4z3sT.js";import"./BaseRadioButton.stories-DPYAbC7b.js";import"./BaseRadioButton-Cog7nyow.js";import"./Title-CM3EdbX5.js";import"./Card-DYvG_wau.js";import"./Text-Sqhlzmep.js";import"./Tag-C66OXRM2.js";import"./ExpandablePanel-CS3jT4h8.js";import"./useAnimatedHeightBetween-XowGjaOR.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CfilUyak.js";import"./Expander-DWGyrxmD.js";import"./ChevronUpIcon-DcNCgDU1.js";import"./ListItem-PVaPuhJD.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
