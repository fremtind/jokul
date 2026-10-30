import{r as n,j as i}from"./iframe-6194UuiE.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-n0qonAaO.js";import{CheckboxStory as c}from"./Checkbox.stories-DZgnFVRa.js";import d from"./Help.stories-BnEjcHK_.js";import k from"./RadioButton.stories-BpLOPvvB.js";import{RadioPanel as u}from"./RadioPanel.stories-WhXyzbBi.js";import{F as g}from"./FieldGroup-DfFSbOBY.js";import{C as h}from"./Checkbox-C4Z3kGex.js";import{R as b}from"./RadioPanel-CM4rzG4x.js";import{H as x}from"./Help-C-6b_dZF.js";import{R as C}from"./RadioButton-CwZjuctW.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-O_kEOfSn.js";import"./clsx-B-dksMZM.js";import"./Flex-BCzDOvcL.js";import"./SlotComponent-4kVtRQaP.js";import"./mergeRefs-DwVQipM5.js";import"./Button-c0cg68qm.js";import"./usePreviousValue-DT9zPV1y.js";import"./Loader-BarquxHd.js";import"./useDelayedRender-x65-PUJz.js";import"./useId-tzIXILwY.js";import"./Label-DTOMOrLF.js";import"./SupportLabel-rPtEKtj3.js";import"./SuccessIcon-kDB8SJDt.js";import"./Icon-cKeb2o8z.js";import"./WarningIcon-CbGYm6PH.js";import"./BaseRadioButton.stories-I0nw5G4k.js";import"./BaseRadioButton-D_NNeAY8.js";import"./Title-DUp6gWa_.js";import"./Card-DO0ntl-4.js";import"./Text-CcsEQp6-.js";import"./Tag-C8LOIHJU.js";import"./ExpandablePanel-C_qcmzkb.js";import"./useAnimatedHeightBetween-BcRi2lP8.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DidswncZ.js";import"./Expander-Dz60qXJa.js";import"./ChevronUpIcon-DN8Vd-2u.js";import"./ListItem-CIb0y8O1.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
