import{r as n,j as i}from"./iframe-C00GwemB.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-YpxIpx0w.js";import{CheckboxStory as c}from"./Checkbox.stories-B2LmlhEh.js";import d from"./Help.stories-Comi__nw.js";import k from"./RadioButton.stories-BMOgB5Kb.js";import{RadioPanel as u}from"./RadioPanel.stories-vef0JUH3.js";import{F as g}from"./FieldGroup-sM4p0ZrL.js";import{C as h}from"./Checkbox-oSsRhg17.js";import{R as b}from"./RadioPanel-s5yl-2v0.js";import{H as x}from"./Help-DUOZGyYd.js";import{R as C}from"./RadioButton-D6WiIA7l.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CjRn2TLh.js";import"./clsx-B-dksMZM.js";import"./Flex-jEWe5g91.js";import"./SlotComponent-BwnTrqY2.js";import"./mergeRefs-XDVb2ZW2.js";import"./Button-CSBqkmS6.js";import"./usePreviousValue-Bb_zIK2m.js";import"./Loader-lZa_3UEk.js";import"./useDelayedRender-uGLhfEOo.js";import"./useId-DepeaZtw.js";import"./Label-DGzGSd4a.js";import"./SupportLabel-DpzQbeZa.js";import"./SuccessIcon-CamR9-tx.js";import"./Icon-DNfHBJmy.js";import"./WarningIcon-CU9g0gBy.js";import"./BaseRadioButton.stories-CcB_dQlD.js";import"./BaseRadioButton-3C6CZwLo.js";import"./Title-CwCu4myp.js";import"./Card-NvsKNiKs.js";import"./Text-mjMt7-ry.js";import"./Tag-BUbkYPqQ.js";import"./ExpandablePanel-DgjLzdrG.js";import"./useAnimatedHeightBetween-CoVpiY-E.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CdeIF5Iu.js";import"./Expander-DZ2-0OJf.js";import"./ChevronUpIcon-Bp2CiW0W.js";import"./ListItem-D2VJ3R-g.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
