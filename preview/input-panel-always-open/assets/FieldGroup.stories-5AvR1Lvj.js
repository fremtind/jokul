import{r as n,j as i}from"./iframe-DuVvMCoj.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-0JnvAvt3.js";import{CheckboxStory as c}from"./Checkbox.stories-BVQy7L7b.js";import d from"./Help.stories-Csx1TVSd.js";import k from"./RadioButton.stories-CkwWPr9g.js";import{RadioPanel as u}from"./RadioPanel.stories-oF6i8_Xu.js";import{F as g}from"./FieldGroup-C9xcxrNi.js";import{C as h}from"./Checkbox-DQvmgqQ8.js";import{R as b}from"./RadioPanel-Dqr0nrqb.js";import{H as x}from"./Help-Bwa0w-iz.js";import{R as C}from"./RadioButton-DqaIM6oS.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CDimbjl0.js";import"./clsx-B-dksMZM.js";import"./Flex-haktbM7W.js";import"./SlotComponent-rWIDRSXl.js";import"./mergeRefs-DagzEdvX.js";import"./Button-CHpaCpl1.js";import"./usePreviousValue-APRQW5y4.js";import"./Loader-DXYOAVw6.js";import"./useDelayedRender-CwxQOpWx.js";import"./useId-DJJG437W.js";import"./Label-FzfrulBG.js";import"./SupportLabel-COJSI25J.js";import"./SuccessIcon-6I6N9BOH.js";import"./Icon-wFN6bLfD.js";import"./WarningIcon-D78Sw5sW.js";import"./BaseRadioButton.stories-Cic3b-Wo.js";import"./BaseRadioButton-feG5UT7R.js";import"./Title-BAHMzr5f.js";import"./Card-CsJR9Iav.js";import"./Text-DzYzX6at.js";import"./Tag-CejAhxaD.js";import"./ExpandablePanel-C9iu6sP3.js";import"./useAnimatedHeightBetween-Dgxml-Vv.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-2VraLHqu.js";import"./Expander-DKf5Epm1.js";import"./ChevronUpIcon-Bgt2pqgN.js";import"./ListItem-uiSk_HSC.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
