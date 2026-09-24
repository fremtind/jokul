import{r as n,j as i}from"./iframe-CJ_YRqrh.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BSRKpDJF.js";import{CheckboxStory as c}from"./Checkbox.stories-DdKS8t-Y.js";import d from"./Help.stories-cTXZEQfk.js";import k from"./RadioButton.stories-DVo9-Qc7.js";import{RadioPanel as u}from"./RadioPanel.stories-wToT5u2l.js";import{F as g}from"./FieldGroup-BEtx1_1h.js";import{C as h}from"./Checkbox-DARd9rcP.js";import{R as b}from"./RadioPanel-Bxzbt7KJ.js";import{H as x}from"./Help-B4D5j0Jk.js";import{R as C}from"./RadioButton-BRZIRi3D.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-if7yfUsh.js";import"./clsx-B-dksMZM.js";import"./Flex-BQAsbl2F.js";import"./SlotComponent-DfFI5w2w.js";import"./mergeRefs-qeo1fWyj.js";import"./Button-Ch-AKQJD.js";import"./usePreviousValue-Lo4q0fnI.js";import"./Loader-VYSDKfrb.js";import"./useDelayedRender-CQ36d8kA.js";import"./useId-Bd68ajHp.js";import"./Label-D_0rpg_Y.js";import"./SupportLabel-DveM9eyw.js";import"./SuccessIcon-d980i90z.js";import"./Icon-CT2AkY6r.js";import"./WarningIcon-gRnqbHvL.js";import"./BaseRadioButton.stories-C4FSSFpP.js";import"./BaseRadioButton-DVRpYdnh.js";import"./Title-D4awzy7B.js";import"./Card-Czo8ZyEH.js";import"./Text-CHHRqBPi.js";import"./Tag-xDV8h05n.js";import"./ExpandablePanel-tyl8s7Xw.js";import"./useAnimatedHeightBetween-CcnGPDE0.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B_iHvevm.js";import"./Expander-CcIuCpTJ.js";import"./ChevronUpIcon-CrLPy524.js";import"./ListItem-x7hrSACu.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
