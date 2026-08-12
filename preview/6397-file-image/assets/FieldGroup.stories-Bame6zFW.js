import{r as p,j as i}from"./iframe-DTxGWsmV.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BbDw-0Pw.js";import l from"./Help.stories-8eDFk8uU.js";import c from"./RadioButton.stories-CR3tkzX1.js";import{F as d}from"./FieldGroup-ByAZN1t6.js";import{C as k,a as u}from"./CheckboxPanel.stories-0e-zWijy.js";import{RadioPanel as g}from"./RadioPanel.stories-DtiN24Fp.js";import{C as h}from"./Checkbox-CC6yY_Rr.js";import{R as b}from"./RadioPanel-aP7hatRu.js";import{H as x}from"./Help-DiMWuTL5.js";import{R as C}from"./RadioButton-mNY4k69y.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-4ixgHN0q.js";import"./BaseRadioButton-CZ-kGffZ.js";import"./clsx-B-dksMZM.js";import"./useId-L9g3EfZ5.js";import"./Label-wNBeG8_l.js";import"./SupportLabel-DYuIFJt9.js";import"./SuccessIcon-CtG88OZr.js";import"./Icon-C94Ue9eR.js";import"./WarningIcon-8ZubMYTs.js";import"./InputPanel-Br0NdSas.js";import"./Flex-D_UHfgar.js";import"./SlotComponent-BJAPSRQL.js";import"./mergeRefs-B82S6fJL.js";import"./Button-Bq5tZf2n.js";import"./usePreviousValue-CEahofjt.js";import"./Loader-CF5GrY2H.js";import"./useDelayedRender-CSGwaYKx.js";import"./Title-aoNshWEG.js";import"./Card-nJRTyi3S.js";import"./Text-RcGwK2rI.js";import"./Tag-0kqmTZBi.js";import"./ExpandablePanel-ATFHQAg8.js";import"./useAnimatedHeightBetween-C89_ujTC.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DJ9Mo1S7.js";import"./Expander-BuoR8isj.js";import"./ChevronDownIcon-BYoMm8qR.js";import"./ChevronUpIcon-Ch5Q6STK.js";import"./ListItem-BmVuCAOY.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
