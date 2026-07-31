import{r as n,j as i}from"./iframe-DiBCTRt_.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DvMa7LH9.js";import l from"./Help.stories-DSKiukPd.js";import c from"./RadioButton.stories-IhDqrVVC.js";import{F as d}from"./FieldGroup-BNEDR6-q.js";import{C as k,a as u}from"./CheckboxPanel.stories-BoMrwvYs.js";import{RadioPanel as g}from"./RadioPanel.stories-DLqa66Al.js";import{C as h}from"./Checkbox-Cyg5U4xb.js";import{R as b}from"./RadioPanel-C6t1B2mY.js";import{H as x}from"./Help-QlG7GMDd.js";import{R as C}from"./RadioButton-BsBHWL_I.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-gL4i6n-Z.js";import"./Label-Cnd_Z9JB.js";import"./SupportLabel-Db-Axhzu.js";import"./SuccessIcon-C32_bLGn.js";import"./Icon-B1P5Dof_.js";import"./WarningIcon-CtsazS9i.js";import"./BaseRadioButton.stories-BC0_ba5g.js";import"./BaseRadioButton-CEETzWIb.js";import"./InputPanel-8yu-UFFR.js";import"./Flex-CMWTLHcS.js";import"./SlotComponent-CPIfpyZQ.js";import"./mergeRefs-DDCXdoav.js";import"./Button-D2-LbmvX.js";import"./usePreviousValue-pT0PMmFx.js";import"./Loader-Cs6-lf6R.js";import"./useDelayedRender-CCDHtNK6.js";import"./Title-fkMIcybo.js";import"./Card-C6sQv2SM.js";import"./Text-BQnqPh_L.js";import"./Tag-O4mtJwzz.js";import"./ExpandablePanel-DLCt6o_7.js";import"./useAnimatedHeightBetween-DTqsrgIh.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C5EvpKAv.js";import"./Expander-D5h569FU.js";import"./ChevronUpIcon-CC8k0ERi.js";import"./ListItem-BvXS9440.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
