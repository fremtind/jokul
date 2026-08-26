import{r as p,j as i}from"./iframe-B_D-Yn_i.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DVX0eCtl.js";import l from"./Help.stories-Du2i0-Ft.js";import c from"./RadioButton.stories-BRm1nUzJ.js";import{F as d}from"./FieldGroup-Ce8PLPg0.js";import{C as k,a as u}from"./CheckboxPanel.stories-CYwlhSEs.js";import{RadioPanel as g}from"./RadioPanel.stories-DgQo-jIU.js";import{C as h}from"./Checkbox-CS-4DOh1.js";import{R as b}from"./RadioPanel-BkWdJjmB.js";import{H as x}from"./Help-qjQcZ0Gc.js";import{R as C}from"./RadioButton-C7n2D66D.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-c0XSpLM7.js";import"./BaseRadioButton-ebbQUGIl.js";import"./clsx-B-dksMZM.js";import"./useId-1mPO-Ij8.js";import"./Label-Dre8fBOY.js";import"./SupportLabel-BvvMUq5M.js";import"./SuccessIcon-38lGBLgk.js";import"./Icon-CHxAH6Hv.js";import"./WarningIcon-YjELxZqt.js";import"./InputPanel-B9aJ2CSW.js";import"./Flex-jwfpmOZr.js";import"./SlotComponent-CGfu9UMk.js";import"./mergeRefs-HxCfe7Up.js";import"./Button-s20C66JT.js";import"./usePreviousValue-D_yNZE-z.js";import"./Loader-DyF70Gg8.js";import"./useDelayedRender-BiruqQWH.js";import"./Title-Bq8JoBf8.js";import"./Card-Cj8EiJFQ.js";import"./Text-5q1s4Zcr.js";import"./Tag-C2fA_8Ch.js";import"./ExpandablePanel-CTPmem5_.js";import"./useAnimatedHeightBetween-BVvPuMSJ.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Ckwwff45.js";import"./Expander-D3olJ2mc.js";import"./ChevronDownIcon-BvVS5iK2.js";import"./ChevronUpIcon-BMWYl5gG.js";import"./ListItem-DkDoJ0Ur.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
