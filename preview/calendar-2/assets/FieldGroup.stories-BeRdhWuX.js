import{r as n,j as i}from"./iframe-BZtx7Gpq.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B2t-b__q.js";import l from"./Help.stories-CpdK00Il.js";import c from"./RadioButton.stories-C__K9xRa.js";import{F as d}from"./FieldGroup-CfaF5gOk.js";import{C as k,a as u}from"./CheckboxPanel.stories-DqP9U8kG.js";import{RadioPanel as g}from"./RadioPanel.stories-DlZHA4U3.js";import{C as h}from"./Checkbox-De1b80na.js";import{R as b}from"./RadioPanel-DJ_X-k3j.js";import{H as x}from"./Help-FQhFOCn1.js";import{R as C}from"./RadioButton-Ce5lw0jX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId--nZMxYEd.js";import"./Label-COez3Dy4.js";import"./SupportLabel-B2snNPHG.js";import"./SuccessIcon-YUQFTxEn.js";import"./Icon-Dkw04KCU.js";import"./WarningIcon-wEkZsFNg.js";import"./BaseRadioButton.stories-CL_K2k7u.js";import"./BaseRadioButton-gJxT-lk_.js";import"./InputPanel-BTGuJBda.js";import"./Flex-D3dfnJLb.js";import"./SlotComponent-fnNZSVoA.js";import"./mergeRefs-BBNjyEGN.js";import"./Button-pg6Wkd6S.js";import"./usePreviousValue-DTBbVS2I.js";import"./Loader-C4VPlMkU.js";import"./useDelayedRender-D7umlP13.js";import"./Title-C03TSALK.js";import"./Card-BaVcdQ0_.js";import"./Text-eK0-_dAR.js";import"./Tag-C57PuBL1.js";import"./ExpandablePanel-CnCiiqMb.js";import"./useAnimatedHeightBetween-B9UNVxYV.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-MkQ74kca.js";import"./Expander-DADmp2hM.js";import"./ChevronUpIcon-8z2fXPan.js";import"./ListItem-Cj_8IUbP.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
