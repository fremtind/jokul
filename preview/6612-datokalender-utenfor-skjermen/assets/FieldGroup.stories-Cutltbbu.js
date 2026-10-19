import{r as p,j as i}from"./iframe-CoT7f7eo.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B-9VCvVo.js";import{CheckboxStory as c}from"./Checkbox.stories-DI4Ve3Bo.js";import d from"./Help.stories-Czh1QRuv.js";import k from"./RadioButton.stories-mrFVvx4F.js";import{RadioPanel as u}from"./RadioPanel.stories-CtdzyBY2.js";import{F as g}from"./FieldGroup-BAjgZQmN.js";import{C as h}from"./Checkbox-DzeU-dsn.js";import{R as b}from"./RadioPanel-BLd9Ik1I.js";import{H as x}from"./Help-COsD2vtp.js";import{R as C}from"./RadioButton-DsT1FsyH.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-6i3PU-a6.js";import"./clsx-B-dksMZM.js";import"./Flex-CkFi258F.js";import"./SlotComponent-ClDDi5Aj.js";import"./mergeRefs-PlKUtgCs.js";import"./Button-DjUjg5_r.js";import"./usePreviousValue-C6K1Mmuc.js";import"./Loader-DkoK2c_X.js";import"./useDelayedRender-Z6tY4J21.js";import"./BaseRadioButton.stories-CzdYAxHt.js";import"./BaseRadioButton-BFabDTZY.js";import"./useId-CTQiHLpI.js";import"./Title-r31yFzml.js";import"./Card-DRkKJiU7.js";import"./Text-eUmLetHT.js";import"./Tag-C3bNCMZf.js";import"./ExpandablePanel-CX2bUB-m.js";import"./useAnimatedHeightBetween-DktUQQKK.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Gg8bUfDE.js";import"./Expander-CUn1s3Wh.js";import"./ChevronDownIcon-_36fYjAm.js";import"./Icon-Dxg_kXvf.js";import"./ChevronUpIcon-DnS9ElkZ.js";import"./ListItem-CdWYGCH-.js";import"./Label-C0KyODP6.js";import"./SupportLabel-CtA9T41d.js";import"./SuccessIcon-BFe8gOVR.js";import"./WarningIcon-CDYOD50t.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
