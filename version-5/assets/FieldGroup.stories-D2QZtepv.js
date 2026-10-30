import{r as p,j as i}from"./iframe-BGaBJ1ys.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-E9lKWBE1.js";import{CheckboxStory as c}from"./Checkbox.stories-Vc4_klFF.js";import d from"./Help.stories-G_qXyiIb.js";import k from"./RadioButton.stories-65pscou-.js";import{RadioPanel as u}from"./RadioPanel.stories-Q69bjPSv.js";import{F as g}from"./FieldGroup-Bo6ppGoz.js";import{C as h}from"./Checkbox-CbhReIho.js";import{R as b}from"./RadioPanel-CLxUlwtZ.js";import{H as x}from"./Help-BcIHLmdt.js";import{R as C}from"./RadioButton-qZ87h6E6.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-p9iuvNxr.js";import"./clsx-B-dksMZM.js";import"./Flex-qt3UGmY4.js";import"./SlotComponent-C_4bRle4.js";import"./mergeRefs-CJbqZHUc.js";import"./Button-_sgK4Tv0.js";import"./usePreviousValue-fLIJetGC.js";import"./Loader-BNlv-6jz.js";import"./useDelayedRender-DkMvmZBT.js";import"./BaseRadioButton.stories-Bd4-PB0n.js";import"./BaseRadioButton-C77tyDAW.js";import"./useId-Cr0_R8OP.js";import"./Title-BxCHB3BQ.js";import"./Card-BTMCZeOi.js";import"./Text-BcBhp3gk.js";import"./Tag-DiswLRJb.js";import"./ExpandablePanel-ComVBwQ3.js";import"./useAnimatedHeightBetween-C5ikmKy1.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-m48_R-OJ.js";import"./Expander-GAypzlPk.js";import"./ChevronDownIcon-BlUOf2gh.js";import"./Icon-Cf3fY8pJ.js";import"./ChevronUpIcon-CHQRevbA.js";import"./ListItem-B02P9oYG.js";import"./Label-D7VCm1U8.js";import"./SupportLabel-DpRTcJHs.js";import"./SuccessIcon-x48MCFhe.js";import"./WarningIcon-BC6yM_cn.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
