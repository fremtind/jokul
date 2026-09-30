import{r as n,j as i}from"./iframe-DWxbWt70.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-ZDkNC6_k.js";import{CheckboxStory as c}from"./Checkbox.stories-CBagvRR4.js";import d from"./Help.stories-CZqcSIcj.js";import k from"./RadioButton.stories-CnjGGYod.js";import{RadioPanel as u}from"./RadioPanel.stories-CL_ei9eS.js";import{F as g}from"./FieldGroup-C70dbKpW.js";import{C as h}from"./Checkbox-6zcJhJFc.js";import{R as b}from"./RadioPanel-DApDo65Q.js";import{H as x}from"./Help-DLVeo2rp.js";import{R as C}from"./RadioButton-CR7uVQMv.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-E3QhR21k.js";import"./clsx-B-dksMZM.js";import"./Flex-lltE-HE9.js";import"./SlotComponent-DYM-dWvd.js";import"./mergeRefs-BkuqJ-BC.js";import"./Button-IODZdWg7.js";import"./usePreviousValue-Bsg7GDXn.js";import"./Loader-Dg2UPqbd.js";import"./useDelayedRender-CNE74hWn.js";import"./useId-D1tX5FZM.js";import"./Label-BcupHvVW.js";import"./SupportLabel-DxJuaj79.js";import"./SuccessIcon-phR0SfCw.js";import"./Icon-C3RGkisD.js";import"./WarningIcon-nGje9yUV.js";import"./BaseRadioButton.stories-B0k_tjrM.js";import"./BaseRadioButton-ql6ZTcQD.js";import"./Title-CmqaV9Bx.js";import"./Card-_Shfd4AP.js";import"./Text-rusiBt5_.js";import"./Tag-DtEuJ0fq.js";import"./ExpandablePanel-DKSOXxpn.js";import"./useAnimatedHeightBetween-CJKMwnv4.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DoSBXvpC.js";import"./Expander-C68AqJog.js";import"./ChevronUpIcon-BbiOY0ub.js";import"./ListItem-DIwNYMON.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
