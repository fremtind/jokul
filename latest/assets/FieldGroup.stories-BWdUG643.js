import{r as n,j as i}from"./iframe-CYf1IikA.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CDAjqe_f.js";import{CheckboxStory as c}from"./Checkbox.stories-BJVouxXF.js";import d from"./Help.stories-BUprMJUm.js";import k from"./RadioButton.stories-DfK1fyA9.js";import{RadioPanel as u}from"./RadioPanel.stories-tCtCZKPO.js";import{F as g}from"./FieldGroup-hsIhgfbb.js";import{C as h}from"./Checkbox-w2tgfZCG.js";import{R as b}from"./RadioPanel-Bt2xwBdk.js";import{H as x}from"./Help-Ceqifr87.js";import{R as C}from"./RadioButton-4dUUP_vU.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-xkyxkwhx.js";import"./clsx-B-dksMZM.js";import"./Flex-1nHgBh0D.js";import"./SlotComponent-BbPqdjB7.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CyBRrzYt.js";import"./usePreviousValue-xGDdF_ii.js";import"./Loader-DN4EJgCy.js";import"./useDelayedRender-CGL0FLEy.js";import"./useId-BNAp61Ww.js";import"./Label-8EjTLJNx.js";import"./SupportLabel-BM3LCsAA.js";import"./SuccessIcon-CxW_dppo.js";import"./Icon-CTRJJclX.js";import"./WarningIcon-CLbHXdd1.js";import"./BaseRadioButton.stories-DzcD2MEI.js";import"./BaseRadioButton-LCIPjWvj.js";import"./Title-BPGxA7S1.js";import"./Card-Bm-TTlxV.js";import"./Text-BAKzUtHK.js";import"./Tag-CDpYDuIP.js";import"./ExpandablePanel-BL5Cfq4c.js";import"./useAnimatedHeightBetween-CIgw0typ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Dur2etAo.js";import"./Expander-BNzfMg9o.js";import"./ChevronUpIcon-BUl9Ban0.js";import"./ListItem-DFqbLgVK.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
