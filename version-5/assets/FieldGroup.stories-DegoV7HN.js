import{r as p,j as i}from"./iframe-l7t4L8AC.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DGwhWRqP.js";import{CheckboxStory as c}from"./Checkbox.stories-Dax9-u9-.js";import d from"./Help.stories-DNLX6Swl.js";import k from"./RadioButton.stories-CZ2Q_fqD.js";import{RadioPanel as u}from"./RadioPanel.stories-D4AsGH8P.js";import{F as g}from"./FieldGroup-DIu1yDBn.js";import{C as h}from"./Checkbox-BWqeoUU5.js";import{R as b}from"./RadioPanel-Cqouzq4y.js";import{H as x}from"./Help-BAZy-zb-.js";import{R as C}from"./RadioButton-j6MGXq__.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DOJBeYsp.js";import"./clsx-B-dksMZM.js";import"./Flex-DpnNTYNc.js";import"./SlotComponent-SMMXFE3o.js";import"./mergeRefs-B-U0iEAP.js";import"./Button-fYTuLcZy.js";import"./usePreviousValue-BGZ0ZWd7.js";import"./Loader-DLoPOwQz.js";import"./useDelayedRender-DEp29E0A.js";import"./BaseRadioButton.stories-qHgpv7qf.js";import"./BaseRadioButton-CjZVTFiF.js";import"./useId-Ms0PgKfk.js";import"./Title-BBen0OZj.js";import"./Card-BtNt73eD.js";import"./Text-C9qWjZpP.js";import"./Tag-Dkw81aQP.js";import"./ExpandablePanel-DSc7A-bO.js";import"./useAnimatedHeightBetween-BrKBGLX3.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DV-57A-K.js";import"./Expander-CgoXgKBB.js";import"./ChevronDownIcon-Dpnz4jXu.js";import"./Icon-QPS3mz59.js";import"./ChevronUpIcon-DM3fEzvz.js";import"./ListItem-CdZHVT3a.js";import"./Label-BgfQ3Dxz.js";import"./SupportLabel-DeA-NlcT.js";import"./SuccessIcon-2Hnlfjg6.js";import"./WarningIcon-BJYRH8wF.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
