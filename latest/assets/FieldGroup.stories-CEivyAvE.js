import{r as n,j as i}from"./iframe-CXjF-JhC.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BNCyuzIy.js";import{CheckboxStory as c}from"./Checkbox.stories-bQRwpBvU.js";import d from"./Help.stories-3AR0tiAs.js";import k from"./RadioButton.stories-BOflMqV0.js";import{RadioPanel as u}from"./RadioPanel.stories-BQ5KlLTm.js";import{F as g}from"./FieldGroup-C5Wkj_Ye.js";import{C as h}from"./Checkbox-BnfCw7TA.js";import{R as b}from"./RadioPanel-C7ywi_gv.js";import{H as x}from"./Help-BZgdvTTi.js";import{R as C}from"./RadioButton-nPWg78CD.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CMN_cJ50.js";import"./clsx-B-dksMZM.js";import"./Flex-CZIjY4h1.js";import"./SlotComponent-CFxVtiGn.js";import"./mergeRefs-B7Tzyeie.js";import"./Button-DgfQc1uU.js";import"./usePreviousValue-DCSOtPFa.js";import"./Loader-DyL6DhpM.js";import"./useDelayedRender-Cosjspb6.js";import"./useId-CEtgulq3.js";import"./Label-wSBXzoTk.js";import"./SupportLabel-2dZtO5ys.js";import"./SuccessIcon-QvUUORb0.js";import"./Icon-BInyoinA.js";import"./WarningIcon-Cihr1wfH.js";import"./BaseRadioButton.stories-BhehFFeq.js";import"./BaseRadioButton-DID8MWtL.js";import"./Title-pItrkbqv.js";import"./Card-CasareyA.js";import"./Text-Bc7XviDn.js";import"./Tag-BUS_SVWS.js";import"./ExpandablePanel-D80qYKo9.js";import"./useAnimatedHeightBetween-CjcfCXk8.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BIVded86.js";import"./Expander-3GD7jn7O.js";import"./ChevronUpIcon-Dt0RiByb.js";import"./ListItem-ggSjuKUn.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
