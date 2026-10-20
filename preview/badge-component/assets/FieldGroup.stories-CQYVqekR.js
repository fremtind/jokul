import{r as n,j as i}from"./iframe-CfUEMfU7.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-KS2SJc9s.js";import{CheckboxStory as c}from"./Checkbox.stories-DfjPW4NH.js";import d from"./Help.stories-DU_B4pSl.js";import k from"./RadioButton.stories-yfAEDqR3.js";import{RadioPanel as u}from"./RadioPanel.stories-BigMjRHk.js";import{F as g}from"./FieldGroup-5PK1ucT4.js";import{C as h}from"./Checkbox-CasuYeXO.js";import{R as b}from"./RadioPanel-CrGZpVpK.js";import{H as x}from"./Help-D-jm8t_W.js";import{R as C}from"./RadioButton-B62Yl6-z.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C0mO6A5N.js";import"./clsx-B-dksMZM.js";import"./Flex-Dekyhgar.js";import"./SlotComponent-DYbDkr5T.js";import"./mergeRefs-CBI3zFGr.js";import"./Button-D-vu1QAj.js";import"./usePreviousValue-C3YtWb7k.js";import"./Loader-CTGu9eW-.js";import"./useDelayedRender-CHR3nUvx.js";import"./useId-BQjIKEU4.js";import"./Label-Dx5OPKjo.js";import"./SupportLabel-BW3WpePu.js";import"./SuccessIcon-DtxGEnYD.js";import"./Icon-DjnECpDJ.js";import"./WarningIcon-CNU-DpX7.js";import"./BaseRadioButton.stories-DgB-4Lpj.js";import"./BaseRadioButton-B8oSjWkl.js";import"./Title-DcGGqUSw.js";import"./Card-DTcY9V9E.js";import"./Text-C5QbtVX7.js";import"./Tag-G2bmyQex.js";import"./ExpandablePanel-DfNWjFq6.js";import"./useAnimatedHeightBetween-BVZshNCd.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DKgHN-45.js";import"./Expander-B8HWSFwL.js";import"./ChevronUpIcon-CKeywjbB.js";import"./ListItem-Ccb7WhBV.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
