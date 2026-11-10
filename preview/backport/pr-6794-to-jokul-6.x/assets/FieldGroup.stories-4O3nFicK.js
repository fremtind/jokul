import{r as n,j as i}from"./iframe-P1fcWeU-.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BVnVmdUP.js";import{CheckboxStory as c}from"./Checkbox.stories-DwgFPMd8.js";import d from"./Help.stories-CzbcjOKo.js";import k from"./RadioButton.stories-CaqsOLoE.js";import{RadioPanel as u}from"./RadioPanel.stories-Btj9S71C.js";import{F as g}from"./FieldGroup-Dmm8m9ED.js";import{C as h}from"./Checkbox-CQSNE72B.js";import{R as b}from"./RadioPanel-lxuoJ5fP.js";import{H as x}from"./Help-DYq93kkX.js";import{R as C}from"./RadioButton-_0gFPBFQ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-8LMFiE_0.js";import"./clsx-B-dksMZM.js";import"./Flex-Cf_Cb8EQ.js";import"./SlotComponent-Bjy7wnj4.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-p4iS434p.js";import"./usePreviousValue-Bqb7Bndx.js";import"./Loader-CCAF6-El.js";import"./useDelayedRender-B0AzGuA3.js";import"./useId-Badg02m7.js";import"./Label-DB28uTkh.js";import"./SupportLabel-SzwrbaQt.js";import"./SuccessIcon-DbpNqF5C.js";import"./Icon-DsEcBYv1.js";import"./WarningIcon-i8hYq61m.js";import"./BaseRadioButton.stories-DpHRqjuB.js";import"./BaseRadioButton-DsnSLGE2.js";import"./Title-BMuG7W-f.js";import"./Card-cjScPfDF.js";import"./Text-B3eWOBVw.js";import"./Tag-iz6xfIt4.js";import"./ExpandablePanel-DaErqUqn.js";import"./useAnimatedHeightBetween-DEk2pUWv.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-VtBldyjK.js";import"./Expander-CieJaNwz.js";import"./ChevronUpIcon-CeEhITvF.js";import"./ListItem-BJGJf4lc.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
