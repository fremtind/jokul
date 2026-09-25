import{r as n,j as i}from"./iframe-CXteJTRR.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BVRIl3HV.js";import{CheckboxStory as c}from"./Checkbox.stories-Bdy1kY9I.js";import d from"./Help.stories-BrV3eD8Z.js";import k from"./RadioButton.stories-BiYcCO2q.js";import{RadioPanel as u}from"./RadioPanel.stories-CNFyPYbc.js";import{F as g}from"./FieldGroup-GUnoID1V.js";import{C as h}from"./Checkbox-p8NbbmgS.js";import{R as b}from"./RadioPanel-CtV2kCMO.js";import{H as x}from"./Help-8hasjT7n.js";import{R as C}from"./RadioButton-DLoBxLuB.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-fZ8S0H34.js";import"./clsx-B-dksMZM.js";import"./Flex-C2z1Kj27.js";import"./SlotComponent-B7JpQWhB.js";import"./mergeRefs-jqRj87xl.js";import"./Button-CRR6fCRV.js";import"./usePreviousValue-D8L0DORM.js";import"./Loader-CuZknLU4.js";import"./useDelayedRender-DR8IfWQd.js";import"./useId-Dv4m07kC.js";import"./Label-B15Gewo9.js";import"./SupportLabel-CfgX_DVX.js";import"./SuccessIcon-BjSgZK7y.js";import"./Icon-DDdltCT5.js";import"./WarningIcon-bMXgWxg8.js";import"./BaseRadioButton.stories-D-GNSqNY.js";import"./BaseRadioButton-Chu3LoZV.js";import"./Title-DZBv7UTw.js";import"./Card-DThYkHVf.js";import"./Text-_adZawrn.js";import"./Tag-Dxfz0DJW.js";import"./ExpandablePanel-BltCFf7i.js";import"./useAnimatedHeightBetween-DhWGNyhQ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DPG0jFun.js";import"./Expander-CPLgaf2E.js";import"./ChevronUpIcon-BKxFWbnE.js";import"./ListItem-YHKbo3N1.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
