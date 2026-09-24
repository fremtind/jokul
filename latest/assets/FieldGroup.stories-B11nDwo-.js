import{r as n,j as i}from"./iframe-bRmfUjI8.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BQlH8o7G.js";import{CheckboxStory as c}from"./Checkbox.stories-OpZTaEkD.js";import d from"./Help.stories-L49WnxF-.js";import k from"./RadioButton.stories-Nxy7PzJr.js";import{RadioPanel as u}from"./RadioPanel.stories-fnZrCBxb.js";import{F as g}from"./FieldGroup-CjXHiz82.js";import{C as h}from"./Checkbox-EIsT3X5B.js";import{R as b}from"./RadioPanel-BcHXH-mU.js";import{H as x}from"./Help-CLQYhc4l.js";import{R as C}from"./RadioButton-D8fCS3kV.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Cz9OzjZQ.js";import"./clsx-B-dksMZM.js";import"./Flex-BTSFqLp2.js";import"./SlotComponent-Dxpit7vj.js";import"./mergeRefs-8eyz8xhK.js";import"./Button-CULWB18q.js";import"./usePreviousValue-C3m_e4w0.js";import"./Loader-B0DpnGw9.js";import"./useDelayedRender-C2GZHRs3.js";import"./useId-BGZUki8m.js";import"./Label-Ce12ZJ2X.js";import"./SupportLabel-DWmYDJXK.js";import"./SuccessIcon-DSI_2ZR7.js";import"./Icon-wPLJOhF6.js";import"./WarningIcon-Cvg1hCra.js";import"./BaseRadioButton.stories-j0fdGc-K.js";import"./BaseRadioButton-D6FujvxC.js";import"./Title-DgLvHDDk.js";import"./Card-BtN0fReS.js";import"./Text-DySIZE_Y.js";import"./Tag-Dg18o3y3.js";import"./ExpandablePanel-qg2ad7Ou.js";import"./useAnimatedHeightBetween-CcCHftWC.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DVDV00k2.js";import"./Expander-DwN_S_X9.js";import"./ChevronUpIcon-Bqx1NrxY.js";import"./ListItem-DRxeqF0O.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
