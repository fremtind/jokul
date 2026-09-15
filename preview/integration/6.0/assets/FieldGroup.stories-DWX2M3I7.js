import{r as n,j as i}from"./iframe-CrAlGkz6.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DADiAMag.js";import{CheckboxStory as c}from"./Checkbox.stories-D8_okb_M.js";import d from"./Help.stories-C_jt9kwZ.js";import k from"./RadioButton.stories-BFj49pVr.js";import{RadioPanel as u}from"./RadioPanel.stories-BfTzdvH4.js";import{F as g}from"./FieldGroup-aBjy7i4s.js";import{C as h}from"./Checkbox-C5W1cQRl.js";import{R as b}from"./RadioPanel-DnSRx0LO.js";import{H as x}from"./Help-ByNXvRWg.js";import{R as C}from"./RadioButton-CuYSx9g9.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CklKZxbv.js";import"./clsx-B-dksMZM.js";import"./Flex-DchZ9ADl.js";import"./SlotComponent-DeJGiLb-.js";import"./mergeRefs-YHBMvrSa.js";import"./Button-C32MuyBJ.js";import"./usePreviousValue-DGlTtCiP.js";import"./Loader-DeEsj6wz.js";import"./useDelayedRender-zxXwBV78.js";import"./useId-kQv0KtBK.js";import"./Label-BmD2ZFhm.js";import"./SupportLabel-DkDridM7.js";import"./SuccessIcon-DERSOUAD.js";import"./Icon-Chctu2sN.js";import"./WarningIcon-rCcmbNCf.js";import"./BaseRadioButton.stories-Cram_XGr.js";import"./BaseRadioButton-BFTIGvIv.js";import"./Title-DnLr3Qfm.js";import"./Card-D0m94oKi.js";import"./Text-D5621f-V.js";import"./Tag-DtHFC0lt.js";import"./ExpandablePanel-DW2IoiK_.js";import"./useAnimatedHeightBetween-6wLosmun.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-krcmpJCx.js";import"./Expander-BJ7DeNNz.js";import"./ChevronUpIcon-Bfk3B2bF.js";import"./ListItem-kDBE-N8c.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
