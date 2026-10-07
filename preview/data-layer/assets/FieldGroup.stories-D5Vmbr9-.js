import{r as p,j as i}from"./iframe-C5mqiCLF.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CTXqUXkz.js";import{CheckboxStory as c}from"./Checkbox.stories-BODzjht3.js";import d from"./Help.stories-CjyJQi3W.js";import k from"./RadioButton.stories-aQJKGG0X.js";import{RadioPanel as u}from"./RadioPanel.stories-DSoHj9Ea.js";import{F as g}from"./FieldGroup-pac7nFRV.js";import{C as h}from"./Checkbox-DxUc4ZJj.js";import{R as b}from"./RadioPanel-BO7D4-hL.js";import{H as x}from"./Help-BgB-j4wH.js";import{R as C}from"./RadioButton-D7JKxMgD.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-NNxfpLZI.js";import"./clsx-B-dksMZM.js";import"./types-YjSsgwWY.js";import"./Flex-CZmtP9Dk.js";import"./SlotComponent-caqVP8EM.js";import"./mergeRefs-BlpLjbDu.js";import"./Button-1LkMbjoO.js";import"./usePreviousValue-Sh4cdfzP.js";import"./Loader-CnOMqVGx.js";import"./useDelayedRender-D1D5cNNG.js";import"./useId-DtC_nmmh.js";import"./Label-XUot8IJ4.js";import"./SupportLabel-IUODpl5q.js";import"./SuccessIcon-CWAgkxzi.js";import"./Icon-CSRiLZ8e.js";import"./WarningIcon-CXvAnsoL.js";import"./BaseRadioButton.stories-Cnd2txMj.js";import"./BaseRadioButton-D2VGNGUO.js";import"./Title-BSfyVm1A.js";import"./Card-qMNgFN3O.js";import"./Text-C-WU8Dzm.js";import"./Tag-CjEeSHPe.js";import"./ExpandablePanel-ebRSUUQy.js";import"./useAnimatedHeightBetween-BQGvBq7Q.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-mvg8hUrc.js";import"./Expander-DRf-X8XJ.js";import"./ChevronUpIcon-DrJpYg2N.js";import"./ListItem-CwIMf6tF.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
