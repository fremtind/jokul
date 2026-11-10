import{r as n,j as i}from"./iframe-BrFIT77Y.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Dj2t6G0_.js";import{CheckboxStory as c}from"./Checkbox.stories-BQ5GsRLb.js";import d from"./Help.stories-BVUKbLCt.js";import k from"./RadioButton.stories-DgXK82Wa.js";import{RadioPanel as u}from"./RadioPanel.stories-DfriKWDk.js";import{F as g}from"./FieldGroup-DsoDuMBA.js";import{C as h}from"./Checkbox-D6Vk8MF0.js";import{R as b}from"./RadioPanel-DQw6npzc.js";import{H as x}from"./Help-7UUVJObx.js";import{R as C}from"./RadioButton-CQ7TnAys.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-M1AlHMj-.js";import"./clsx-B-dksMZM.js";import"./Flex-BO3t8KSj.js";import"./SlotComponent-E73Ai6QR.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-B7lXM4DU.js";import"./usePreviousValue-2kjgYBTu.js";import"./Loader-BLrf7zTM.js";import"./useDelayedRender-DjAbrgez.js";import"./useId-CsRQK4qu.js";import"./Label-CSvZuohP.js";import"./SupportLabel-C6aodhO1.js";import"./SuccessIcon-DKtyQLGC.js";import"./Icon-B2lefLg7.js";import"./WarningIcon-C7ukgIU8.js";import"./BaseRadioButton.stories-B_pn0naQ.js";import"./BaseRadioButton-BiKcXQC1.js";import"./Title-BrP2QKTB.js";import"./Card-Bli8CdO6.js";import"./Text-DrCNVgTe.js";import"./Tag-CZ7k2-hZ.js";import"./ExpandablePanel-CtKln7o1.js";import"./useAnimatedHeightBetween-QrHG-U8H.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DGuMtxDh.js";import"./Expander-BSBpiI1B.js";import"./ChevronUpIcon-Tc7ZlKzB.js";import"./ListItem-D6ISz21p.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
