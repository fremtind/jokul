import{r as n,j as i}from"./iframe-jg5XoKNS.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DXyzEJRJ.js";import{CheckboxStory as c}from"./Checkbox.stories-9nIFli6c.js";import d from"./Help.stories-jzQ8vquE.js";import k from"./RadioButton.stories-BY04lvIa.js";import{RadioPanel as u}from"./RadioPanel.stories-DyEhIdum.js";import{F as g}from"./FieldGroup-DQUVkGWM.js";import{C as h}from"./Checkbox-BH76IrXW.js";import{R as b}from"./RadioPanel-D9ZnKFA5.js";import{H as x}from"./Help-TILt6i9a.js";import{R as C}from"./RadioButton-pZxSqLTD.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CDmjnNwx.js";import"./clsx-B-dksMZM.js";import"./Flex-BRNkguz8.js";import"./SlotComponent-BkOnCVAs.js";import"./mergeRefs-DJfMmZkb.js";import"./Button-C1oZxTwC.js";import"./usePreviousValue-Cn1gxV2N.js";import"./Loader-BstDeGrF.js";import"./useDelayedRender-BnjWFvYK.js";import"./useId-CymTfCCJ.js";import"./Label-8Tm30--N.js";import"./SupportLabel-Bzbqm0ht.js";import"./SuccessIcon-Bqpo6_9K.js";import"./Icon-DVRJrGcN.js";import"./WarningIcon-Cnbdl-7K.js";import"./BaseRadioButton.stories-CdxDirRp.js";import"./BaseRadioButton-BXv_Y3NO.js";import"./Title-d2rU5CRE.js";import"./Card-Ca7jniVx.js";import"./Text-C41zS4Am.js";import"./Tag-CuQXz6hC.js";import"./ExpandablePanel-DHvi2LP8.js";import"./useAnimatedHeightBetween-BY0h7fMv.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BZI5Jp03.js";import"./Expander-DolhiPOg.js";import"./ChevronUpIcon-2moPOMF0.js";import"./ListItem-DgxzvbfB.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
