import{r as p,j as i}from"./iframe-CT62Sfwj.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-ic3ctJGN.js";import l from"./Help.stories-DnZCpT2_.js";import c from"./RadioButton.stories-Bcz-_Jc1.js";import{F as d}from"./FieldGroup-D1Y636SY.js";import{C as k,a as u}from"./CheckboxPanel.stories-jhxIf5mB.js";import{RadioPanel as g}from"./RadioPanel.stories-7mkb1QKo.js";import{C as h}from"./Checkbox-CMJAIuF2.js";import{R as b}from"./RadioPanel-DAYDzpHa.js";import{H as x}from"./Help-oO9JoCVr.js";import{R as C}from"./RadioButton-ClDmkfdU.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BT2lDK_v.js";import"./BaseRadioButton-CyfZ_H-4.js";import"./clsx-B-dksMZM.js";import"./useId-XTstPFYp.js";import"./Label-B0GQq2RL.js";import"./SupportLabel-DyIvrju7.js";import"./SuccessIcon-EE1ugPXL.js";import"./Icon-2FTdHYut.js";import"./WarningIcon-CE89W6iF.js";import"./InputPanel-DLZ6p_r1.js";import"./Flex-82UpjY_U.js";import"./SlotComponent-C2rsaVD2.js";import"./mergeRefs-BckV8V6X.js";import"./Button-DIXKzeXc.js";import"./usePreviousValue-Chj-xgTS.js";import"./Loader-DbeawF1B.js";import"./useDelayedRender-JINuYaLA.js";import"./Title-Dc60PJUk.js";import"./Card-CxVFWQpE.js";import"./Text-BI3NjSQk.js";import"./Tag-BBOqOfIY.js";import"./ExpandablePanel-CZIcVnZs.js";import"./useAnimatedHeightBetween-BRnjOvsc.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DW_ia-v8.js";import"./Expander-DtnsDPXX.js";import"./ChevronDownIcon-DNpTgRl2.js";import"./ChevronUpIcon-D_BlSoQB.js";import"./ListItem-tL6G-NdD.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
