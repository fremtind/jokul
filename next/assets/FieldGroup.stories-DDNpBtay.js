import{r as n,j as i}from"./iframe-C7uVWTA2.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BDQJciMG.js";import{CheckboxStory as c}from"./Checkbox.stories-CaZPSvS5.js";import d from"./Help.stories-z8qdZe6_.js";import k from"./RadioButton.stories-y8Ql_rSZ.js";import{RadioPanel as u}from"./RadioPanel.stories-DUnKe0W7.js";import{F as g}from"./FieldGroup-CcYthqoe.js";import{C as h}from"./Checkbox-Cy1c4vYa.js";import{R as b}from"./RadioPanel-CcN2YGtc.js";import{H as x}from"./Help-C0qV7jbP.js";import{R as C}from"./RadioButton-DTDfc3kR.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C6rLhyGN.js";import"./clsx-B-dksMZM.js";import"./Flex-DQHSFU3D.js";import"./SlotComponent-CdH-AQMm.js";import"./mergeRefs-CIC6-MOs.js";import"./Button-DZD2DHCT.js";import"./usePreviousValue-Blnq4Ub8.js";import"./Loader-BTPVBu8_.js";import"./useDelayedRender-CCD_HTMn.js";import"./useId-DX3cK7EB.js";import"./Label-CSwdBQsh.js";import"./SupportLabel-BTAO2r9D.js";import"./SuccessIcon-_LN56chc.js";import"./Icon-KuSLeMX2.js";import"./WarningIcon-Cw-tFJ-x.js";import"./BaseRadioButton.stories-CuSY9m4_.js";import"./BaseRadioButton-CsB-K9lO.js";import"./Title-B4ajFW9b.js";import"./Card-CAopJanZ.js";import"./Text-CfWBttW6.js";import"./Tag-Jk1g0YDj.js";import"./ExpandablePanel-D2m7JvaA.js";import"./useAnimatedHeightBetween-HvqlNpfn.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CYlcBL0R.js";import"./Expander-CuG8YrJD.js";import"./ChevronUpIcon-DtpJu2WX.js";import"./ListItem-BIlXHWFv.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
