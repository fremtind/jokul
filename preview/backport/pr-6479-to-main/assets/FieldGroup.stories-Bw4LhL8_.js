import{r as p,j as i}from"./iframe-BijQN6gr.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B8zoHJL1.js";import l from"./Help.stories-CZAbpcs8.js";import c from"./RadioButton.stories-CXEk2RxE.js";import{F as d}from"./FieldGroup-BirketAu.js";import{C as k,a as u}from"./CheckboxPanel.stories-NZ58vrkJ.js";import{RadioPanel as g}from"./RadioPanel.stories-DMxbIAiZ.js";import{C as h}from"./Checkbox-DLfyTJWH.js";import{R as b}from"./RadioPanel-D-yVzLgA.js";import{H as x}from"./Help-CiW2ISpK.js";import{R as C}from"./RadioButton-NQSCxXFc.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-K4Mlna7r.js";import"./BaseRadioButton-DZj1i766.js";import"./clsx-B-dksMZM.js";import"./useId-t-Zd41-l.js";import"./Label-BYbyLnLr.js";import"./SupportLabel-DV5-7dyi.js";import"./SuccessIcon-BkZIKOTu.js";import"./Icon-pFlX71tu.js";import"./WarningIcon-DYHxpm7t.js";import"./InputPanel-oEhokls-.js";import"./Flex-C2oqMpu0.js";import"./SlotComponent-BVAydEUK.js";import"./mergeRefs-gfrLwER8.js";import"./Button-CJRAStiB.js";import"./usePreviousValue-B_7uhcYx.js";import"./Loader-Bii3Pgoe.js";import"./useDelayedRender-yHV4LVT_.js";import"./Title-CXKpzyM2.js";import"./Card-Di7uAdak.js";import"./Text-BoK8I_47.js";import"./Tag-BHbe6hbR.js";import"./ExpandablePanel-By1B2zol.js";import"./useAnimatedHeightBetween-Bzh624CK.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D_87JPZQ.js";import"./Expander-DqOim6Dt.js";import"./ChevronDownIcon-BiT4KpO0.js";import"./ChevronUpIcon-BnfRmMH4.js";import"./ListItem-Br4bwOK8.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
