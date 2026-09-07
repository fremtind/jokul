import{r as n,j as i}from"./iframe-DnRExBud.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CDXeE5qb.js";import l from"./Help.stories-CkrgVxXu.js";import c from"./RadioButton.stories-DTCX2eWq.js";import{F as d}from"./FieldGroup-D-ZpkdA0.js";import{C as k,a as u}from"./CheckboxPanel.stories-CT1ezmo7.js";import{RadioPanel as g}from"./RadioPanel.stories-srh1q108.js";import{C as h}from"./Checkbox-CBOs-QtP.js";import{R as b}from"./RadioPanel-BjKnn-fG.js";import{H as x}from"./Help-D9HPP9hz.js";import{R as C}from"./RadioButton-BdKEe5hT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Lck2z_DJ.js";import"./Label-CmpEAZsq.js";import"./SupportLabel-CelV0EeM.js";import"./SuccessIcon-DCqlBIn4.js";import"./Icon-CLXkx6jQ.js";import"./WarningIcon-YAijWfWH.js";import"./BaseRadioButton.stories-COy1y_74.js";import"./BaseRadioButton-tFpKDmWg.js";import"./InputPanel-BsR3n9HF.js";import"./Flex-C-WOQ05m.js";import"./SlotComponent-B9X1XYZn.js";import"./mergeRefs-BN-50vhA.js";import"./Button-DsAn8mSk.js";import"./usePreviousValue-B_KPbwHu.js";import"./Loader-CnOilW-W.js";import"./useDelayedRender-BhgVB_Gj.js";import"./Title-BKeDD6E0.js";import"./Card-CswNjZ5v.js";import"./Text-B8fJqWSj.js";import"./Tag-Bwo-NNj4.js";import"./ExpandablePanel-C9zAaBsK.js";import"./useAnimatedHeightBetween-Boucq0Qa.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BCVlB5a4.js";import"./Expander-DNKPXdNc.js";import"./ChevronUpIcon-Dq6J0d9-.js";import"./ListItem-BN7M1T5y.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
