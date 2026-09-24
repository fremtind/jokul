import{r as n,j as i}from"./iframe-DtPVkdr3.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BezGUE9A.js";import{CheckboxStory as c}from"./Checkbox.stories-D2sriwyp.js";import d from"./Help.stories-D9H7JiDg.js";import k from"./RadioButton.stories-BJoRMyZY.js";import{RadioPanel as u}from"./RadioPanel.stories-r4nToj2I.js";import{F as g}from"./FieldGroup-C04Fs04U.js";import{C as h}from"./Checkbox-D1a1VjQ9.js";import{R as b}from"./RadioPanel-BFdg3UUo.js";import{H as x}from"./Help-BOBwKKdr.js";import{R as C}from"./RadioButton-Cq49KLsD.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-88GNwbph.js";import"./clsx-B-dksMZM.js";import"./Flex-B0-gwDmQ.js";import"./SlotComponent-i0PcY1s4.js";import"./mergeRefs-PcGdP3RP.js";import"./Button-D_2EsOoD.js";import"./usePreviousValue-zW08sBHO.js";import"./Loader-B1iJT05K.js";import"./useDelayedRender-Ww7nbtFV.js";import"./useId-BgcSyvEi.js";import"./Label-B9rTV_wg.js";import"./SupportLabel-hadzvf9C.js";import"./SuccessIcon-Cs-cqob1.js";import"./Icon-DGsaYX3Q.js";import"./WarningIcon-BngOzl_n.js";import"./BaseRadioButton.stories-DKMYxXen.js";import"./BaseRadioButton-aoAferFU.js";import"./Title-CDNFJ8P5.js";import"./Card-FN7DTrbR.js";import"./Text-BpYN4wIJ.js";import"./Tag-DJ6F-YdA.js";import"./ExpandablePanel-DS3ME7KH.js";import"./useAnimatedHeightBetween-UtSemPaG.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CsqStkYM.js";import"./Expander-7XGx7Wi4.js";import"./ChevronUpIcon-BMmXRwsc.js";import"./ListItem-CMHLw3VW.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
