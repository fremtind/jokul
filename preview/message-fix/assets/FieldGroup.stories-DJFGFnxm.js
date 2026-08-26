import{r as n,j as i}from"./iframe-DJMxtNWd.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CjGy3sth.js";import l from"./Help.stories-DHvnpZj4.js";import c from"./RadioButton.stories-DqTRbe1e.js";import{F as d}from"./FieldGroup-BVRS2TGl.js";import{C as k,a as u}from"./CheckboxPanel.stories-Tlwd2ocl.js";import{RadioPanel as g}from"./RadioPanel.stories-CaMn6apI.js";import{C as h}from"./Checkbox-MmlJgptZ.js";import{R as b}from"./RadioPanel-CfrXQnDU.js";import{H as x}from"./Help-DTO_COIW.js";import{R as C}from"./RadioButton-DjrmTmMq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D_bKw5QI.js";import"./Label-ubq-7wUv.js";import"./SupportLabel-iARZQ_iv.js";import"./SuccessIcon-CK1M2AtI.js";import"./Icon-B7y-ND2W.js";import"./WarningIcon-BYXr81Rt.js";import"./BaseRadioButton.stories-XLWl_ger.js";import"./BaseRadioButton-DoNj7E2M.js";import"./InputPanel-zZblFstW.js";import"./Flex-DdQgL3ad.js";import"./SlotComponent-Cn-8yBIz.js";import"./mergeRefs-YmCIeWpA.js";import"./Button-DAXCIiRi.js";import"./usePreviousValue-DuWkgI2L.js";import"./Loader-D53P07VZ.js";import"./useDelayedRender-CbwRK04G.js";import"./Title-wTQpSE4f.js";import"./Card-DYckx3wl.js";import"./Text-CWpBLBfn.js";import"./Tag-JORnZlbc.js";import"./ExpandablePanel-BbsK5lSw.js";import"./useAnimatedHeightBetween-CZLmeN4M.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-wuES_6Fw.js";import"./Expander-rJcFTR7w.js";import"./ChevronUpIcon-bAn3mqX_.js";import"./ListItem-BdxmE_0S.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
