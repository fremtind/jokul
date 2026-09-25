import{r as n,j as i}from"./iframe-BMlLyzfG.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CJZMOQYY.js";import{CheckboxStory as c}from"./Checkbox.stories-BfQ69dxx.js";import d from"./Help.stories-DHnHtDwo.js";import k from"./RadioButton.stories-B01BXG3z.js";import{RadioPanel as u}from"./RadioPanel.stories-DTBvwMnv.js";import{F as g}from"./FieldGroup-DUrPHd9k.js";import{C as h}from"./Checkbox-DC5NCBKX.js";import{R as b}from"./RadioPanel-l4oS5VwB.js";import{H as x}from"./Help-PA1KtUet.js";import{R as C}from"./RadioButton-CJervHH-.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BsROqigP.js";import"./clsx-B-dksMZM.js";import"./Flex-Dc08AuC-.js";import"./SlotComponent-fTNt5aVe.js";import"./mergeRefs-Bx6sanG_.js";import"./Button-BkLukgN5.js";import"./usePreviousValue-BjrKKeCJ.js";import"./Loader-zVY-JlWz.js";import"./useDelayedRender-SDphfvTN.js";import"./useId-C-j9VgEQ.js";import"./Label-t4HpMhQo.js";import"./SupportLabel-ClFc9VER.js";import"./SuccessIcon-BoJDCzcW.js";import"./Icon-Dpc09SCI.js";import"./WarningIcon-KKyWLr58.js";import"./BaseRadioButton.stories-B7kg5ygg.js";import"./BaseRadioButton-BSIfrY_x.js";import"./Title-B7YLEKSZ.js";import"./Card-CFClg9rC.js";import"./Text-DOFIY03-.js";import"./Tag-Gu2frAZo.js";import"./ExpandablePanel-fZqLyqr2.js";import"./useAnimatedHeightBetween-BUJzEXLz.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BRarCXOl.js";import"./Expander-DIemyoMe.js";import"./ChevronUpIcon-DeO0nn0O.js";import"./ListItem-CnrKbg8H.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
