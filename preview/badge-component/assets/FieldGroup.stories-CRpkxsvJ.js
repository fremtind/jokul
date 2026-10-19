import{r as n,j as i}from"./iframe-gmoleg0b.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CgRQrl7T.js";import{CheckboxStory as c}from"./Checkbox.stories-DCSqt6fd.js";import d from"./Help.stories-DzPcf7p1.js";import k from"./RadioButton.stories-CQ7UE6Pw.js";import{RadioPanel as u}from"./RadioPanel.stories-COLa-YwJ.js";import{F as g}from"./FieldGroup-7PIzbNSY.js";import{C as h}from"./Checkbox-3iyzbTr5.js";import{R as b}from"./RadioPanel-BpyY4i5q.js";import{H as x}from"./Help-DDNHZri9.js";import{R as C}from"./RadioButton-BXDBdHv7.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BSAXCo32.js";import"./clsx-B-dksMZM.js";import"./Flex-r3yzwbQ2.js";import"./SlotComponent-BFseyuIx.js";import"./mergeRefs-Dkdh_U9X.js";import"./Button-Bi6cHMWR.js";import"./usePreviousValue-C2cuT60W.js";import"./Loader-Bt-SOY2j.js";import"./useDelayedRender-C-QlwP2e.js";import"./useId-BGgnFczm.js";import"./Label-D0TmBH5c.js";import"./SupportLabel-Bo-XWrkN.js";import"./SuccessIcon-HGndnNmh.js";import"./Icon-Cju8NOZR.js";import"./WarningIcon-qXZpBS5G.js";import"./BaseRadioButton.stories-BruArEpV.js";import"./BaseRadioButton-B_Ag3TfR.js";import"./Title-CWjYnhq5.js";import"./Card-CD3evL9Q.js";import"./Text-CGhYDChp.js";import"./Tag-agFRH6Is.js";import"./ExpandablePanel-BCIG_32S.js";import"./useAnimatedHeightBetween-Do05y7Tc.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DRrJNXjL.js";import"./Expander-Cio1PbuP.js";import"./ChevronUpIcon-CioqRFIF.js";import"./ListItem-u_E0-x3c.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
