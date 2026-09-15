import{r as p,j as i}from"./iframe-C1IsWWfc.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CgU5jvfQ.js";import{CheckboxStory as c}from"./Checkbox.stories-BWnyf_mZ.js";import d from"./Help.stories-D9KWKsH_.js";import k from"./RadioButton.stories-CAF-LrIQ.js";import{RadioPanel as u}from"./RadioPanel.stories-LlLe0-0D.js";import{F as g}from"./FieldGroup-F6IPzsnt.js";import{C as h}from"./Checkbox-CE4-ltTz.js";import{R as b}from"./RadioPanel-D8N4h3XH.js";import{H as x}from"./Help-bcYkZPPE.js";import{R as C}from"./RadioButton-DbgwbkGs.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BDA_Q3HV.js";import"./clsx-B-dksMZM.js";import"./Flex-DB4Ak5yz.js";import"./SlotComponent-CM4hWpAx.js";import"./mergeRefs-CLQwSaeA.js";import"./Button-TvkGTkSD.js";import"./usePreviousValue-DJn6iMxe.js";import"./Loader-JVPNn0LT.js";import"./useDelayedRender-BVGZiYe2.js";import"./BaseRadioButton.stories-DtFXnwml.js";import"./BaseRadioButton-CGNBOFlR.js";import"./useId-JSZmh_7i.js";import"./Title-DnOrkFds.js";import"./Card-Dk_izWCV.js";import"./Text-n8r56HpI.js";import"./Tag-Bg8OXJCM.js";import"./ExpandablePanel-C-pD-wRn.js";import"./useAnimatedHeightBetween-2IOkWLrN.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DtM-Ao_T.js";import"./Expander-Da2atsYq.js";import"./ChevronDownIcon-D8xDusjq.js";import"./Icon-B9Ax_45J.js";import"./ChevronUpIcon-B-kFey3f.js";import"./ListItem-B31flX4g.js";import"./Label-B0u2DmNy.js";import"./SupportLabel-Buo-Rlhn.js";import"./SuccessIcon-BdN4mTbU.js";import"./WarningIcon-B_sMokb2.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
