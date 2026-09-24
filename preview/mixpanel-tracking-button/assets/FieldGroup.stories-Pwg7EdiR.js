import{r as n,j as i}from"./iframe-Djqlfj0e.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B0zyGQPE.js";import{CheckboxStory as c}from"./Checkbox.stories-vMTnC7FO.js";import d from"./Help.stories-CUpG1PNN.js";import k from"./RadioButton.stories-BDq-kCzg.js";import{RadioPanel as u}from"./RadioPanel.stories-CFkNPKEu.js";import{F as g}from"./FieldGroup-DgG4Q7Mt.js";import{C as h}from"./Checkbox-BG2zdzMZ.js";import{R as b}from"./RadioPanel-DropgTTj.js";import{H as x}from"./Help-aK-KuB70.js";import{R as C}from"./RadioButton-BHwO01KE.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C55eXzkw.js";import"./clsx-B-dksMZM.js";import"./Flex-Da-UT_Oc.js";import"./SlotComponent-C03mmIio.js";import"./mergeRefs-DipsdNtB.js";import"./Button--qLi8Wnw.js";import"./usePreviousValue-BCLvb7Iy.js";import"./Loader-DfBY9JvP.js";import"./useDelayedRender-yU4hzO5Z.js";import"./useId-Dxt3HQG0.js";import"./Label-dFrmr9YO.js";import"./SupportLabel-DUASFfu5.js";import"./SuccessIcon-f5NsD79y.js";import"./Icon-qiUL04sw.js";import"./WarningIcon-C430Q8-w.js";import"./BaseRadioButton.stories-CWMHT61R.js";import"./BaseRadioButton-BQSpglF2.js";import"./Title-BuPdCj_j.js";import"./Card-Bp4FFLBK.js";import"./Text-CrgDu_kv.js";import"./Tag-Bg-5TGIr.js";import"./ExpandablePanel-BDHdFVuj.js";import"./useAnimatedHeightBetween-C0cxjImn.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DTP2vyDI.js";import"./Expander-EPtgQ76B.js";import"./ChevronUpIcon-nC_yzVAt.js";import"./ListItem-DEicmYok.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
