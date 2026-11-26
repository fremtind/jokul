import{r as p,j as i}from"./iframe-CGTjqcp9.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BqrZzHsr.js";import{CheckboxStory as c}from"./Checkbox.stories-BFsHnK-8.js";import d from"./Help.stories-BHZAxD6N.js";import k from"./RadioButton.stories-DIWeLPfH.js";import{RadioPanel as u}from"./RadioPanel.stories-rbHEGuy7.js";import{F as g}from"./FieldGroup-u1eTl1a5.js";import{C as h}from"./Checkbox-CC-iktRH.js";import{R as b}from"./RadioPanel-CsyoYIFC.js";import{H as x}from"./Help-CbW6gKPt.js";import{R as C}from"./RadioButton-C_08LO6S.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C8_FHmAy.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CIUYxxlv.js";import"./SlotComponent-CdpRm-xl.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-ecTWq0Eb.js";import"./usePreviousValue-fqaD21S3.js";import"./Loader-BhTJVXQr.js";import"./useDelayedRender-C7fQm4XR.js";import"./useId-CV6MMr4g.js";import"./Label-GYSGG5IK.js";import"./SupportLabel-DYH1Nd13.js";import"./SuccessIcon-CXF6PTXe.js";import"./Icon-CiUQzZUP.js";import"./WarningIcon-CXPwwtjc.js";import"./BaseRadioButton.stories-CkwG3_bQ.js";import"./BaseRadioButton-M7E_cGtq.js";import"./Title-QiCOnx1H.js";import"./Card-BN3Tyi3z.js";import"./Text-Cc_s98s3.js";import"./Tag-BhxQTgTX.js";import"./ExpandablePanel-DL45i230.js";import"./useAnimatedHeightBetween-r2v7Vx7E.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BptKYCBx.js";import"./Expander-DMpWeab3.js";import"./ChevronUpIcon-C69bAMsI.js";import"./ListItem-Dgt__w05.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
