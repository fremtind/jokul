import{r as n,j as i}from"./iframe-Da7JoP_p.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-cwN2S5No.js";import{CheckboxStory as c}from"./Checkbox.stories-C1Jg9R0S.js";import d from"./Help.stories-B8CH_V0_.js";import k from"./RadioButton.stories-B3om1jVW.js";import{RadioPanel as u}from"./RadioPanel.stories-Cs7PdNkE.js";import{F as g}from"./FieldGroup-C4mJSzZK.js";import{C as h}from"./Checkbox-C8qRS8e9.js";import{R as b}from"./RadioPanel-CYc8y7km.js";import{H as x}from"./Help-BbiHrsou.js";import{R as C}from"./RadioButton-y9Fm-zfm.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CxDVeLEp.js";import"./clsx-B-dksMZM.js";import"./Flex-BpG-IEgr.js";import"./SlotComponent-BaBTInbq.js";import"./mergeRefs-L13tUEz2.js";import"./Button-CXufEWvU.js";import"./usePreviousValue-CXJQ4IfA.js";import"./Loader-BAUu-ady.js";import"./useDelayedRender-BRoGZ8L6.js";import"./useId-CxkCm1Fe.js";import"./Label-DUG3Ys_V.js";import"./SupportLabel-BFEttEuz.js";import"./SuccessIcon-U1mP5r33.js";import"./Icon-MZI4oCD2.js";import"./WarningIcon-2jSL6rnR.js";import"./BaseRadioButton.stories-BLpig6qi.js";import"./BaseRadioButton-_49nkagy.js";import"./Title-BkwEQP7o.js";import"./Card-CjG-Eet5.js";import"./Text-sQ2A9QLq.js";import"./Tag-Cq350D-g.js";import"./ExpandablePanel-CdqvJeIA.js";import"./useAnimatedHeightBetween-Bp0pnjw_.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-70ZBJJUL.js";import"./Expander-BtCS4SDz.js";import"./ChevronUpIcon-VajLi5UV.js";import"./ListItem-jyZZvWyB.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
