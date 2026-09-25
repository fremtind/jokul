import{r as n,j as i}from"./iframe-CWbURapE.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-cuF5yvXf.js";import{CheckboxStory as c}from"./Checkbox.stories-DXdgQXWo.js";import d from"./Help.stories-B0gcJTpI.js";import k from"./RadioButton.stories-DAyp3Xu5.js";import{RadioPanel as u}from"./RadioPanel.stories-B-KtVWcG.js";import{F as g}from"./FieldGroup-D0_JpfVa.js";import{C as h}from"./Checkbox-tcCz3_5G.js";import{R as b}from"./RadioPanel-0x0PNFSS.js";import{H as x}from"./Help-g_iIsGRr.js";import{R as C}from"./RadioButton-BMYnoEBf.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BVsMfzxh.js";import"./clsx-B-dksMZM.js";import"./Flex-iotPtusY.js";import"./SlotComponent-BZwoj8oo.js";import"./mergeRefs-SwaaYz9g.js";import"./Button-BZcstn-s.js";import"./usePreviousValue-CknlO7_W.js";import"./Loader-CEtuCIjp.js";import"./useDelayedRender-Dp8zVklj.js";import"./useId-DfyXXT_I.js";import"./Label-eSPAk_8J.js";import"./SupportLabel-C3zAzX1I.js";import"./SuccessIcon-DrGcsT3w.js";import"./Icon-Cb0otd3z.js";import"./WarningIcon-BCcwKm7i.js";import"./BaseRadioButton.stories-CpocpQhz.js";import"./BaseRadioButton-CJyh_-KT.js";import"./Title-BBuVqJPk.js";import"./Card-CWbeQTRu.js";import"./Text-GXdSGlzO.js";import"./Tag-CHUGPtbJ.js";import"./ExpandablePanel-BxVGY2DS.js";import"./useAnimatedHeightBetween-eg8GHf5e.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Cn8VVqwP.js";import"./Expander-BMQgGSWe.js";import"./ChevronUpIcon-wNA_q8Dt.js";import"./ListItem-Bpqk9OF1.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
