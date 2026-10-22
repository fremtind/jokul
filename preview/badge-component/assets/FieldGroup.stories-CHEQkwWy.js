import{r as n,j as i}from"./iframe-aA0p6r9-.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DrbauK7a.js";import{CheckboxStory as c}from"./Checkbox.stories-FZOK4IFA.js";import d from"./Help.stories-CXS5oShU.js";import k from"./RadioButton.stories-DPpH_Nxf.js";import{RadioPanel as u}from"./RadioPanel.stories-7h17ZIPB.js";import{F as g}from"./FieldGroup-E-EiDxL6.js";import{C as h}from"./Checkbox-XpTN1L4M.js";import{R as b}from"./RadioPanel-DG8nJzoR.js";import{H as x}from"./Help-Ciho57hf.js";import{R as C}from"./RadioButton-9eNJkh2F.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D7Gd6NwN.js";import"./clsx-B-dksMZM.js";import"./Flex-DsUrarOr.js";import"./SlotComponent-BnCqk5vE.js";import"./mergeRefs-BPd1H58I.js";import"./Button-CdYLx6ZN.js";import"./usePreviousValue-IfhV82Fh.js";import"./Loader-DQ5Gcow2.js";import"./useDelayedRender-B9M9aGfC.js";import"./useId-B_2pWImO.js";import"./Label-DXqbslAE.js";import"./SupportLabel-DJ4BJ0rY.js";import"./SuccessIcon-Dx0xVnBH.js";import"./Icon-D0i0JE_A.js";import"./WarningIcon-w6FDkGov.js";import"./BaseRadioButton.stories-CE1zHvVE.js";import"./BaseRadioButton-kdxek_td.js";import"./Title-BBmmqhHV.js";import"./Card-BMbm6_HI.js";import"./Text-ojEYY4zz.js";import"./Tag-DSIqX5Fo.js";import"./ExpandablePanel-CFhZht6w.js";import"./useAnimatedHeightBetween-BwY01ktg.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BvUXglgP.js";import"./Expander-D6L00C5i.js";import"./ChevronUpIcon-BQsRSg1v.js";import"./ListItem-_Pevu7Fy.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
