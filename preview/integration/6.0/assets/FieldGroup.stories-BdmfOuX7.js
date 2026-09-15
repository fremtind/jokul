import{r as n,j as i}from"./iframe-C-coLB8C.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DWFGedkB.js";import{CheckboxStory as c}from"./Checkbox.stories-C3ZGqJVS.js";import d from"./Help.stories-45SDavif.js";import k from"./RadioButton.stories-BUCCwQHX.js";import{RadioPanel as u}from"./RadioPanel.stories-CYv0wwnq.js";import{F as g}from"./FieldGroup-Ck8zTauQ.js";import{C as h}from"./Checkbox-Jy_AxOV-.js";import{R as b}from"./RadioPanel-Bb0bG2Du.js";import{H as x}from"./Help-Db2hxIlF.js";import{R as C}from"./RadioButton-DoctWTWH.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CSvfl9AO.js";import"./clsx-B-dksMZM.js";import"./Flex-cj5IqjTJ.js";import"./SlotComponent-X34NqhEO.js";import"./mergeRefs-B5jhE5o9.js";import"./Button-C2KOTIrr.js";import"./usePreviousValue-BAFm5zT_.js";import"./Loader-B8-LiyTB.js";import"./useDelayedRender-Chir_NYD.js";import"./useId-BNJ8Q4ui.js";import"./Label-BNAStSrl.js";import"./SupportLabel-C5WQCCU7.js";import"./SuccessIcon-PwygU81l.js";import"./Icon-CKqdB1HQ.js";import"./WarningIcon-Co8xTw0Y.js";import"./BaseRadioButton.stories-B3ruXYxL.js";import"./BaseRadioButton-DdoEzfmo.js";import"./Title-CpfhWFWC.js";import"./Card-CsrpuGqy.js";import"./Text-rVzC1xlW.js";import"./Tag-94YudrmO.js";import"./ExpandablePanel-D19Uy0RZ.js";import"./useAnimatedHeightBetween-8WrtjEqr.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CgiJYd4m.js";import"./Expander-D4D5g0lT.js";import"./ChevronUpIcon-B4jflKE4.js";import"./ListItem-CckURCqi.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
