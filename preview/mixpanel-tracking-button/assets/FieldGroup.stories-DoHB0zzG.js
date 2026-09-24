import{r as n,j as i}from"./iframe-KW-HOjRh.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-JDrObCN4.js";import{CheckboxStory as c}from"./Checkbox.stories-BsmKNY84.js";import d from"./Help.stories-DuLF0CWp.js";import k from"./RadioButton.stories-ClfsUBmd.js";import{RadioPanel as u}from"./RadioPanel.stories-DMZjd1L-.js";import{F as g}from"./FieldGroup-jOAk3mGU.js";import{C as h}from"./Checkbox-BaBM6eoR.js";import{R as b}from"./RadioPanel-hUGLA4Sx.js";import{H as x}from"./Help-GtvQMUsp.js";import{R as C}from"./RadioButton-mw4VHLrf.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BtlnsmcR.js";import"./clsx-B-dksMZM.js";import"./Flex-CMCop1AI.js";import"./SlotComponent-CKlFB_Pi.js";import"./mergeRefs-B5XcEywK.js";import"./Button--fUuv_PQ.js";import"./usePreviousValue-Bgpw58YV.js";import"./Loader-BBPJjvS7.js";import"./useDelayedRender-DCAfYZAc.js";import"./useId-BJMYntvj.js";import"./Label-DFNkewW8.js";import"./SupportLabel-CuQZ9oI7.js";import"./SuccessIcon-DPWBdpws.js";import"./Icon-BMi67cCt.js";import"./WarningIcon-CPxO51zY.js";import"./BaseRadioButton.stories-BAx0YdWk.js";import"./BaseRadioButton-E_ibMNYW.js";import"./Title-BwyhaG4s.js";import"./Card-D4sZDJxY.js";import"./Text-BKclMkmP.js";import"./Tag-D9u6JzBN.js";import"./ExpandablePanel-sEgXcjki.js";import"./useAnimatedHeightBetween-Dq2a-iFw.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CJObx3xI.js";import"./Expander-D_TbPz0r.js";import"./ChevronUpIcon-CZgfyyXa.js";import"./ListItem-CmP7j8QX.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
