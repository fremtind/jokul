import{r as n,j as i}from"./iframe-BB8VBLdf.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D3c37lCG.js";import{CheckboxStory as c}from"./Checkbox.stories-CTmlTTqx.js";import d from"./Help.stories-BV1GS9_a.js";import k from"./RadioButton.stories-BbLeCOrM.js";import{RadioPanel as u}from"./RadioPanel.stories-DdbBx9zt.js";import{F as g}from"./FieldGroup-D91XtlEj.js";import{C as h}from"./Checkbox-CHU2WhIF.js";import{R as b}from"./RadioPanel-DiOXA_DF.js";import{H as x}from"./Help-B78sgUCc.js";import{R as C}from"./RadioButton-Booc7Tpg.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CiyhIpVA.js";import"./clsx-B-dksMZM.js";import"./Flex-mCudvkvM.js";import"./SlotComponent-7ZZokMCt.js";import"./mergeRefs-BbFW_4pK.js";import"./Button-CcokQAJW.js";import"./usePreviousValue-BKiMz3wl.js";import"./Loader-DDrkG6U9.js";import"./useDelayedRender-DDoq54aL.js";import"./useId-n8LHKOoG.js";import"./Label-Bafoy6R9.js";import"./SupportLabel-ccywVs6u.js";import"./SuccessIcon-CwU34x0o.js";import"./Icon-BvHmRYDA.js";import"./WarningIcon-BGAuQLJB.js";import"./BaseRadioButton.stories-BEJWkemW.js";import"./BaseRadioButton-B_FNu2lP.js";import"./Title-DBohlX4z.js";import"./Card-DpMvCq_h.js";import"./Text-bF66rAK1.js";import"./Tag-DfPw8yDB.js";import"./ExpandablePanel-C-3Zd7hk.js";import"./useAnimatedHeightBetween-CIexZvwj.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C_UIxW8C.js";import"./Expander-_vITpAA3.js";import"./ChevronUpIcon-cMKGMmzj.js";import"./ListItem-D7o70OMY.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
