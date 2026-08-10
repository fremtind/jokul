import{r as p,j as i}from"./iframe-BIsu_vi5.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-D-atMdtn.js";import l from"./Help.stories-BPPqLIRp.js";import c from"./RadioButton.stories-BArg0LgT.js";import{F as d}from"./FieldGroup-BRRbRNo1.js";import{C as k,a as u}from"./CheckboxPanel.stories-Bsy1T_P-.js";import{RadioPanel as g}from"./RadioPanel.stories-CssUZkxC.js";import{C as h}from"./Checkbox-C0I6cMYM.js";import{R as b}from"./RadioPanel-B4m9p6lU.js";import{H as x}from"./Help-DdmhGfam.js";import{R as C}from"./RadioButton-BdPMrLkp.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-L4VzryQs.js";import"./BaseRadioButton-Ctb_4Szi.js";import"./clsx-B-dksMZM.js";import"./useId-B-JT6Lp6.js";import"./Label-iqJWIyEt.js";import"./SupportLabel-CNUURbTn.js";import"./SuccessIcon-B7WqfD8O.js";import"./Icon-8Qx5snTz.js";import"./WarningIcon-yAp2DUym.js";import"./InputPanel-Bjgfh6Ro.js";import"./Flex-Dyl_QH_T.js";import"./SlotComponent-2_un1zB4.js";import"./mergeRefs-CAc-Xgk2.js";import"./Button-B8U59PjH.js";import"./usePreviousValue-Dfdp4Ql0.js";import"./Loader-DD2ZYP93.js";import"./useDelayedRender-BwyBohnB.js";import"./Title-CtUmILCC.js";import"./Card-FFa8MpCR.js";import"./Text-AUplgZ6N.js";import"./Tag-BN9dwPIU.js";import"./ExpandablePanel-CEfX3C3X.js";import"./useAnimatedHeightBetween-CmRqwwEE.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CWDr3g65.js";import"./Expander-DI0gdWx0.js";import"./ChevronDownIcon-COqBDpNw.js";import"./ChevronUpIcon-C05nplvp.js";import"./ListItem-DevHECml.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
