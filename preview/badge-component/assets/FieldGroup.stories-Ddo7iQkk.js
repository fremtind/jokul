import{r as n,j as i}from"./iframe-NX5MwhMi.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-6m0d6YPS.js";import{CheckboxStory as c}from"./Checkbox.stories-Cn2_BmO-.js";import d from"./Help.stories-CPR6aBVG.js";import k from"./RadioButton.stories-Bs-ZMM3C.js";import{RadioPanel as u}from"./RadioPanel.stories-UFiSgbS2.js";import{F as g}from"./FieldGroup-BWqWUtLj.js";import{C as h}from"./Checkbox-CIufn24h.js";import{R as b}from"./RadioPanel-B9xlYbme.js";import{H as x}from"./Help-UcUG_fxo.js";import{R as C}from"./RadioButton-BAVdwQEJ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-zk-MSrm3.js";import"./clsx-B-dksMZM.js";import"./Flex-Dn3nftxW.js";import"./SlotComponent-eiKO-2fM.js";import"./mergeRefs-C71dUN_b.js";import"./Button-6cKQZ1PZ.js";import"./usePreviousValue-CeXVoapK.js";import"./Loader-Bx8y-kK2.js";import"./useDelayedRender-Bp0W3iCf.js";import"./useId-BCgGgIvj.js";import"./Label-rEwV2C_G.js";import"./SupportLabel-CSY8XCXi.js";import"./SuccessIcon-CnfpdlfQ.js";import"./Icon-Dcg139aq.js";import"./WarningIcon-yM1q9cvw.js";import"./BaseRadioButton.stories-QA6XVg4y.js";import"./BaseRadioButton-C1s1oy6a.js";import"./Title-CbnVUOc_.js";import"./Card-edWR5YH2.js";import"./Text--pWJLm7n.js";import"./Tag-C8spUmWI.js";import"./ExpandablePanel-BDC3t4CQ.js";import"./useAnimatedHeightBetween-C4zhuvOR.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CrEyYfym.js";import"./Expander-C7c_ySjV.js";import"./ChevronUpIcon-BunoduHz.js";import"./ListItem-C3o6X7p6.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
