import{r as n,j as i}from"./iframe-CrwSKhf-.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CnEIE-MT.js";import{CheckboxStory as c}from"./Checkbox.stories-DJxss86e.js";import d from"./Help.stories-CYtucmfL.js";import k from"./RadioButton.stories-dCcq-OAg.js";import{RadioPanel as u}from"./RadioPanel.stories-CrgJ7nYK.js";import{F as g}from"./FieldGroup-WDihUVpM.js";import{C as h}from"./Checkbox-CeEE2hm7.js";import{R as b}from"./RadioPanel-B2HWRAtx.js";import{H as x}from"./Help-BakyA_zy.js";import{R as C}from"./RadioButton-BYwhtUSN.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CXZ5aCzC.js";import"./clsx-B-dksMZM.js";import"./Flex-9yVyBnub.js";import"./SlotComponent-CD_bFjL7.js";import"./mergeRefs-Dste4RJ3.js";import"./Button-tOUTrag_.js";import"./usePreviousValue-CLzw18u_.js";import"./Loader-DBAsTAtT.js";import"./useDelayedRender-a00BwVI7.js";import"./useId-Bustq2OT.js";import"./Label-BT9EF2hq.js";import"./SupportLabel-_HzUxYTd.js";import"./SuccessIcon-D55vmQe2.js";import"./Icon-DFT6oFys.js";import"./WarningIcon-B6Yg-7gl.js";import"./BaseRadioButton.stories-Bzg1Wj11.js";import"./BaseRadioButton-BgxDaWGw.js";import"./Title-DA9tY91Z.js";import"./Card-DLWPkOIj.js";import"./Text-lQG7g0Wn.js";import"./Tag-CnaQPnup.js";import"./ExpandablePanel-BQcwmOdb.js";import"./useAnimatedHeightBetween-CEoswbRk.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CzCsCwHc.js";import"./Expander-CmO7zzIL.js";import"./ChevronUpIcon-Cd63Ni2Q.js";import"./ListItem-CC8kKZv_.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
