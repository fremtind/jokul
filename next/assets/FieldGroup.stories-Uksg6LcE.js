import{r as n,j as i}from"./iframe-DDvj2mX9.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Br62husB.js";import{CheckboxStory as c}from"./Checkbox.stories-CwWUT51Z.js";import d from"./Help.stories-5LGliv0W.js";import k from"./RadioButton.stories-QKEs_byD.js";import{RadioPanel as u}from"./RadioPanel.stories-DWEPE44H.js";import{F as g}from"./FieldGroup-N18wzHLi.js";import{C as h}from"./Checkbox-r7gUlKWn.js";import{R as b}from"./RadioPanel-BtHZl2Zz.js";import{H as x}from"./Help-GxHUcl24.js";import{R as C}from"./RadioButton-OcVI-VEc.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DGdiwbXy.js";import"./clsx-B-dksMZM.js";import"./Flex-BtiIufUp.js";import"./SlotComponent-BiVjwDyt.js";import"./mergeRefs-zk8Bn-om.js";import"./Button-DJIwpQU_.js";import"./usePreviousValue-DyNn_0g9.js";import"./Loader-CufXBAfE.js";import"./useDelayedRender-DG377Olo.js";import"./useId-DIGxS97u.js";import"./Label-CVDq_oRL.js";import"./SupportLabel-nIvkU_DT.js";import"./SuccessIcon-DQ7VRhyN.js";import"./Icon-DC1Zj3Vf.js";import"./WarningIcon-ByVHFqBx.js";import"./BaseRadioButton.stories-e_1WgSfH.js";import"./BaseRadioButton-DP1UU0Vz.js";import"./Title-utoCL2bl.js";import"./Card-C-zqBI31.js";import"./Text-DUPuXLgX.js";import"./Tag-C-WZmOJQ.js";import"./ExpandablePanel-B2LnWlCt.js";import"./useAnimatedHeightBetween-C0dnyjqf.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-fHlr1S2l.js";import"./Expander-Ci24sgxF.js";import"./ChevronUpIcon-BQ4TOwQZ.js";import"./ListItem-B9d8NhL4.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
