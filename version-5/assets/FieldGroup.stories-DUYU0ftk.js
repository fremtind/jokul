import{r as p,j as i}from"./iframe-DBH5pEsm.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DTh1ySbh.js";import{CheckboxStory as c}from"./Checkbox.stories-CALq1ESO.js";import d from"./Help.stories-DizI3_Rn.js";import k from"./RadioButton.stories-W-X1Hobr.js";import{RadioPanel as u}from"./RadioPanel.stories-CX0ibrvv.js";import{F as g}from"./FieldGroup-zm_Pda74.js";import{C as h}from"./Checkbox-Dxb7qsEB.js";import{R as b}from"./RadioPanel-Bz21mEeS.js";import{H as x}from"./Help-DeLWcGOy.js";import{R as C}from"./RadioButton-C8YUu7gA.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B-TDv8nh.js";import"./clsx-B-dksMZM.js";import"./Flex-DRPSI1pz.js";import"./SlotComponent-Bhx1QwpG.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C8KXh_m3.js";import"./usePreviousValue-lC2Q9idp.js";import"./Loader-CylJ7arj.js";import"./useDelayedRender-DIuWtuht.js";import"./BaseRadioButton.stories-DzXrtmT2.js";import"./BaseRadioButton-DS_ct1Oa.js";import"./useId-DNu0Ug6G.js";import"./Title-BrEsfSVJ.js";import"./Card-DJE7mzv1.js";import"./Text-DO063FaL.js";import"./Tag-f0SgcuCy.js";import"./ExpandablePanel-Dna4Masf.js";import"./useAnimatedHeightBetween-Bsmg-crh.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BSnufgZU.js";import"./Expander-C0PaqYDq.js";import"./ChevronDownIcon-CcS-ck3n.js";import"./Icon-Dkg2ASOF.js";import"./ChevronUpIcon-B0CceKzz.js";import"./ListItem-ByRvK6iA.js";import"./Label-DS1bDqqo.js";import"./SupportLabel-CcrDK0gE.js";import"./SuccessIcon-DCQrOJdy.js";import"./WarningIcon-DOrDhgOv.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
