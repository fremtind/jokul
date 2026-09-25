import{r as n,j as i}from"./iframe-h1E6QDzg.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DXhtKoxP.js";import{CheckboxStory as c}from"./Checkbox.stories-C7pSx_Sl.js";import d from"./Help.stories-wRAS6-bL.js";import k from"./RadioButton.stories-CFDC9qYq.js";import{RadioPanel as u}from"./RadioPanel.stories-Dxh7JPqS.js";import{F as g}from"./FieldGroup-DwHJ75mx.js";import{C as h}from"./Checkbox-5cykSDDV.js";import{R as b}from"./RadioPanel-IgZqmfSI.js";import{H as x}from"./Help-CFPyVgDK.js";import{R as C}from"./RadioButton-CEOkkwug.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Do-7cwkJ.js";import"./clsx-B-dksMZM.js";import"./Flex-CT-gjCAG.js";import"./SlotComponent-DeutYDHI.js";import"./mergeRefs-Dv2ShNeu.js";import"./Button-Be-00q6_.js";import"./usePreviousValue-Yt1h1DXN.js";import"./Loader-DQtdxkub.js";import"./useDelayedRender-WETI09R2.js";import"./useId-Djj_4nYv.js";import"./Label-DIDSL5kV.js";import"./SupportLabel-BQdWUnRD.js";import"./SuccessIcon-WvXFD5pJ.js";import"./Icon-vHGO0lh0.js";import"./WarningIcon-2jnemetF.js";import"./BaseRadioButton.stories-DCwRkHs7.js";import"./BaseRadioButton-C6xmkMnm.js";import"./Title-Cb1WvX4Y.js";import"./Card-mGQW6BxJ.js";import"./Text-v7hNAv2t.js";import"./Tag-Dat9KUkM.js";import"./ExpandablePanel-BecJ6h23.js";import"./useAnimatedHeightBetween-D4SXOZK9.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DtY47GzM.js";import"./Expander-B6dp3UJ3.js";import"./ChevronUpIcon-Cw2Sn4uv.js";import"./ListItem-B5YG6h2q.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
