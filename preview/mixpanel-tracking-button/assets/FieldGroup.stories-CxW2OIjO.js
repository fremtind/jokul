import{r as n,j as i}from"./iframe-C6yd7wbC.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B04KpxaR.js";import{CheckboxStory as c}from"./Checkbox.stories-CuT_akXX.js";import d from"./Help.stories-B7gZrnBs.js";import k from"./RadioButton.stories-HxlasvWC.js";import{RadioPanel as u}from"./RadioPanel.stories-BZ7Gyym7.js";import{F as g}from"./FieldGroup-n16gAgWa.js";import{C as h}from"./Checkbox-MQ50wbE4.js";import{R as b}from"./RadioPanel-BDBhZ04F.js";import{H as x}from"./Help-D6Pgy4qf.js";import{R as C}from"./RadioButton-YQy_GWFS.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DcDcbwDV.js";import"./clsx-B-dksMZM.js";import"./Flex-BNGGqoSq.js";import"./SlotComponent-DPcXtM_q.js";import"./mergeRefs-eiyGaSzV.js";import"./Button-aKeTMTOY.js";import"./usePreviousValue-CO8Qazqk.js";import"./Loader-CXSm39Nt.js";import"./useDelayedRender-C9D06tPZ.js";import"./useId-CbDQIIZJ.js";import"./Label-CrozHtQX.js";import"./SupportLabel-Dcd179jo.js";import"./SuccessIcon-ztngF9uq.js";import"./Icon-B9sJ9tr5.js";import"./WarningIcon-BH4-OqVB.js";import"./BaseRadioButton.stories-hM_dcllT.js";import"./BaseRadioButton-Cd7KHD7t.js";import"./Title-C-KezT3E.js";import"./Card-DYsnTnfh.js";import"./Text-CzVVx7u0.js";import"./Tag-ClrooaBN.js";import"./ExpandablePanel-BZks7LXU.js";import"./useAnimatedHeightBetween-aQyf3eWj.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BL6XU22y.js";import"./Expander-DgSmUAV2.js";import"./ChevronUpIcon-a935TX8P.js";import"./ListItem-sXq57s2y.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
