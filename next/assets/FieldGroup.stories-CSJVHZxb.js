import{r as n,j as i}from"./iframe-DPWZO8Y8.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CfJdLadl.js";import{CheckboxStory as c}from"./Checkbox.stories-BCHj7S1O.js";import d from"./Help.stories-Y9L2rvB7.js";import k from"./RadioButton.stories-Em3XGbad.js";import{RadioPanel as u}from"./RadioPanel.stories-EXeoG2sO.js";import{F as g}from"./FieldGroup-Bmj3u9Cz.js";import{C as h}from"./Checkbox-CCOMThz8.js";import{R as b}from"./RadioPanel-Cy7KdYHT.js";import{H as x}from"./Help-ByzVrCUT.js";import{R as C}from"./RadioButton-DNWba85b.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CikAZ6NX.js";import"./clsx-B-dksMZM.js";import"./Flex-DppOARSq.js";import"./SlotComponent-BhwCSxG9.js";import"./mergeRefs-D7WeerMA.js";import"./Button-CWhIs06J.js";import"./usePreviousValue-DT8MCgOO.js";import"./Loader-CWTPzZqq.js";import"./useDelayedRender-BvHBdl2x.js";import"./useId-B-ur-ogy.js";import"./Label-CpE2UMsX.js";import"./SupportLabel-ZUQa8OdB.js";import"./SuccessIcon-v6yQZ0xR.js";import"./Icon-C5QPShCS.js";import"./WarningIcon-2b1Hpkrg.js";import"./BaseRadioButton.stories-D3KvSH2g.js";import"./BaseRadioButton-BHwSsAYF.js";import"./Title-Cw7SBCKA.js";import"./Card-CxUJCdLK.js";import"./Text-Co4UGCkE.js";import"./Tag-BUbvWh2J.js";import"./ExpandablePanel-ApMyzur6.js";import"./useAnimatedHeightBetween-ygBZLIyJ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Cw2hcWrC.js";import"./Expander-ClN_hWCf.js";import"./ChevronUpIcon-DCLnFKVK.js";import"./ListItem-CFlP_mOP.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
