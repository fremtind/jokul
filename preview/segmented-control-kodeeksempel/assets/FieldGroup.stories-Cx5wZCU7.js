import{r as n,j as i}from"./iframe-CIOLMutx.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C6OK4uFO.js";import{CheckboxStory as c}from"./Checkbox.stories-CBNHU1Fk.js";import d from"./Help.stories-D6lnvdGH.js";import k from"./RadioButton.stories-CL1wTu8W.js";import{RadioPanel as u}from"./RadioPanel.stories-CXKBOwUO.js";import{F as g}from"./FieldGroup-D_jzkkOR.js";import{C as h}from"./Checkbox-ClMCA2U0.js";import{R as b}from"./RadioPanel-DlLxZdGu.js";import{H as x}from"./Help-BBri9bOX.js";import{R as C}from"./RadioButton-Bbt47foh.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CeE_skXO.js";import"./clsx-B-dksMZM.js";import"./Flex-CoeccMX8.js";import"./SlotComponent-Yu7wEOiC.js";import"./mergeRefs-BW7uM0jW.js";import"./Button-BCVY3AVs.js";import"./usePreviousValue-Cy5BiPRu.js";import"./Loader-CKZZhDxC.js";import"./useDelayedRender-CtFNWS0t.js";import"./useId-DK2074m8.js";import"./Label-DBAOVTri.js";import"./SupportLabel-BOHv0NtA.js";import"./SuccessIcon-BB5U-9ZP.js";import"./Icon-DPg7yywr.js";import"./WarningIcon-BtpB1UVE.js";import"./BaseRadioButton.stories-BDRdxP0f.js";import"./BaseRadioButton-D0X6FIS0.js";import"./Title-8VXC4QZx.js";import"./Card-DrYMgfUj.js";import"./Text-C5Ev5wc-.js";import"./Tag-DTil4h4-.js";import"./ExpandablePanel-D4rjUHst.js";import"./useAnimatedHeightBetween-8yVcz4od.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CjpYbL7v.js";import"./Expander-BN1VOEsF.js";import"./ChevronUpIcon-mw60D1RR.js";import"./ListItem-CP0DbTfQ.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
