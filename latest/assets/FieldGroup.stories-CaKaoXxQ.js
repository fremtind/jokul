import{r as n,j as i}from"./iframe-_1pRzrQ9.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CviOTDye.js";import{CheckboxStory as c}from"./Checkbox.stories-DmQN_UEk.js";import d from"./Help.stories-Mb8AGZQy.js";import k from"./RadioButton.stories-Uo4rXNBo.js";import{RadioPanel as u}from"./RadioPanel.stories-CzYoAfVY.js";import{F as g}from"./FieldGroup-9M4bEzO8.js";import{C as h}from"./Checkbox-c5H9pNga.js";import{R as b}from"./RadioPanel-BuU4Y-_x.js";import{H as x}from"./Help-Dza7xgrQ.js";import{R as C}from"./RadioButton-5J9Vppc0.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DGZ0uQnF.js";import"./clsx-B-dksMZM.js";import"./Flex-Chp3QVsQ.js";import"./SlotComponent-DrtnC0Eb.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Dy_fxLWN.js";import"./usePreviousValue-BBuITeSr.js";import"./Loader-iTmLCYbu.js";import"./useDelayedRender-DKI_7PyL.js";import"./useId-BggOyPF8.js";import"./Label-C_VNdTG_.js";import"./SupportLabel-qdVZ4KEu.js";import"./SuccessIcon-DhJLGs3I.js";import"./Icon-Ds656LLA.js";import"./WarningIcon-BcLLj30z.js";import"./BaseRadioButton.stories-Cn1tpyVn.js";import"./BaseRadioButton-DrHPsySF.js";import"./Title-DOuzDu8P.js";import"./Card-Cx9cCz3w.js";import"./Text-CUHl0dBr.js";import"./Tag-CNN4lk5U.js";import"./ExpandablePanel-IHgYnTZG.js";import"./useAnimatedHeightBetween-CeZr3r5X.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DpurDiRh.js";import"./Expander-CRxDVfmP.js";import"./ChevronUpIcon-BtZlwgOz.js";import"./ListItem-D_8avW9C.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
