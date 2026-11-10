import{r as n,j as i}from"./iframe-Bcnz8Hwy.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BKmz0J9j.js";import{CheckboxStory as c}from"./Checkbox.stories-DMYHZyJe.js";import d from"./Help.stories-Cul3IHQI.js";import k from"./RadioButton.stories-DJRH0c-k.js";import{RadioPanel as u}from"./RadioPanel.stories-CRR0Rf5A.js";import{F as g}from"./FieldGroup-B9qnO4sN.js";import{C as h}from"./Checkbox-g1JOECQs.js";import{R as b}from"./RadioPanel-Ma2lsflU.js";import{H as x}from"./Help-Dc59oczW.js";import{R as C}from"./RadioButton-Cop2NfHn.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BnE75x9y.js";import"./clsx-B-dksMZM.js";import"./Flex-DlrapUt5.js";import"./SlotComponent-DgDr1oaU.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-rsNFK-Wg.js";import"./usePreviousValue--mJvsebk.js";import"./Loader-iCm69-cz.js";import"./useDelayedRender-CmTenpvG.js";import"./useId-CrN6botZ.js";import"./Label-dbNEGAZd.js";import"./SupportLabel-abz3pzgu.js";import"./SuccessIcon-CIaEkV2I.js";import"./Icon-Rjr2sZhZ.js";import"./WarningIcon-DRA4hDwN.js";import"./BaseRadioButton.stories-Dg9ib5Q5.js";import"./BaseRadioButton-CJrbfVlC.js";import"./Title-w2PVPBlz.js";import"./Card-S8DSwnfB.js";import"./Text-WpiNLoTq.js";import"./Tag-DeyekCV6.js";import"./ExpandablePanel-Cn1u2laL.js";import"./useAnimatedHeightBetween-RKuNSOmz.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CHHmhGl4.js";import"./Expander-82h1PYby.js";import"./ChevronUpIcon-CT86ZrtO.js";import"./ListItem-DuDqxUsh.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
