import{r as n,j as i}from"./iframe-CmNYqM8v.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BFnxS_vb.js";import{CheckboxStory as c}from"./Checkbox.stories-HRswwwdi.js";import d from"./Help.stories-DdmB_7mH.js";import k from"./RadioButton.stories-Cta8HsKf.js";import{RadioPanel as u}from"./RadioPanel.stories-CSoKpAUT.js";import{F as g}from"./FieldGroup-BH4UXvVG.js";import{C as h}from"./Checkbox-DGxhROFk.js";import{R as b}from"./RadioPanel-B_BfL3Wx.js";import{H as x}from"./Help-DbIPM8uy.js";import{R as C}from"./RadioButton-C0XgXKmU.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CoAcdg95.js";import"./clsx-B-dksMZM.js";import"./Flex-Ce32Ok4X.js";import"./SlotComponent-DbvNiTyg.js";import"./mergeRefs-Cflw0eCC.js";import"./Button-DyWV3yM6.js";import"./usePreviousValue-Bsm-WdmL.js";import"./Loader-BJaewbTT.js";import"./useDelayedRender-Cg5EGmBP.js";import"./useId-B-TxhbV9.js";import"./Label-Cw6Z8f1z.js";import"./SupportLabel-CH2mW8dj.js";import"./SuccessIcon-B8N-4xA8.js";import"./Icon-C7q6JHEa.js";import"./WarningIcon-UX-_YZoo.js";import"./BaseRadioButton.stories-BqnDW_Sp.js";import"./BaseRadioButton-Bf7AeoLk.js";import"./Title-qr2s-7sU.js";import"./Card-dkVFhQWV.js";import"./Text-2Z1R9Vl2.js";import"./Tag-Z_3nLmTo.js";import"./ExpandablePanel-CztCRFw8.js";import"./useAnimatedHeightBetween-Db799s93.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DRMSIgTQ.js";import"./Expander-0OBvZOG6.js";import"./ChevronUpIcon-CapQorMJ.js";import"./ListItem-pV40x96T.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
