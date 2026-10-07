import{r as n,j as i}from"./iframe-DlbO5vOB.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C9Pk-lPw.js";import{CheckboxStory as c}from"./Checkbox.stories-aI5C8jUt.js";import d from"./Help.stories-BFE3tuX4.js";import k from"./RadioButton.stories-Bgd2QIOE.js";import{RadioPanel as u}from"./RadioPanel.stories-C6_RAiI0.js";import{F as g}from"./FieldGroup-C-W4QPB_.js";import{C as h}from"./Checkbox-Bn_L82_g.js";import{R as b}from"./RadioPanel-JPVlpnhb.js";import{H as x}from"./Help-DATUvVp9.js";import{R as C}from"./RadioButton-GPri5RaI.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BNfPdKlx.js";import"./clsx-B-dksMZM.js";import"./Flex-CcvwORZC.js";import"./SlotComponent-LImix3I-.js";import"./mergeRefs-jC8VXVz4.js";import"./Button-DLf-BBoX.js";import"./usePreviousValue-eeRLIFSJ.js";import"./Loader-BYgyZXRB.js";import"./useDelayedRender-CZzLBs36.js";import"./useId-nZJDttar.js";import"./Label-C3Suf-xk.js";import"./SupportLabel-DpfWuZSz.js";import"./SuccessIcon-DIUW2Deg.js";import"./Icon-CwV8zqI1.js";import"./WarningIcon-_SDdhZYa.js";import"./BaseRadioButton.stories-B4n3SFnX.js";import"./BaseRadioButton-B2-9DA4-.js";import"./Title-k44dhJBK.js";import"./Card-_gtonhiw.js";import"./Text-CTdQPq-Q.js";import"./Tag-BB74Kt_O.js";import"./ExpandablePanel-BShgY_KY.js";import"./useAnimatedHeightBetween-Dwwx0nQn.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C8w_KfyW.js";import"./Expander-Dg0CgxZL.js";import"./ChevronUpIcon-XUJ8G2SJ.js";import"./ListItem-DMEB3YMP.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
