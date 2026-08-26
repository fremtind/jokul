import{r as n,j as i}from"./iframe-CIpTeFLS.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BTaayCnl.js";import l from"./Help.stories-B2e-173Q.js";import c from"./RadioButton.stories-BjQIxYD2.js";import{F as d}from"./FieldGroup-BQCB8XmL.js";import{C as k,a as u}from"./CheckboxPanel.stories-CtWYVHT5.js";import{RadioPanel as g}from"./RadioPanel.stories-CvSMHhhh.js";import{C as h}from"./Checkbox-ChyfZjL6.js";import{R as b}from"./RadioPanel-Ds5cW4y9.js";import{H as x}from"./Help-qMy87W8y.js";import{R as C}from"./RadioButton-C5R-GRYi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-aST94rpK.js";import"./Label-fc7B67MA.js";import"./SupportLabel-Dx8FTZiC.js";import"./SuccessIcon-DY4tQWKR.js";import"./Icon-BMMwHE7R.js";import"./WarningIcon-xj9xAPBr.js";import"./BaseRadioButton.stories-BRdtq3L5.js";import"./BaseRadioButton-Cz-C8ku3.js";import"./InputPanel-BrUbjrfg.js";import"./Flex-BEHh41LL.js";import"./SlotComponent-CZ54pCcT.js";import"./mergeRefs-DM0UfPcA.js";import"./Button-BgEFnomI.js";import"./usePreviousValue-7VLTS2hk.js";import"./Loader-pBBaQ3wx.js";import"./useDelayedRender-vRT2ohL4.js";import"./Title-BYg--doZ.js";import"./Card-fizWDsWx.js";import"./Text-Xbjy4TS8.js";import"./Tag-PM6WAOun.js";import"./ExpandablePanel-ZSjHjWsR.js";import"./useAnimatedHeightBetween-DKvAJzOb.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BilH5k9C.js";import"./Expander-D0MTyUH_.js";import"./ChevronUpIcon-DRDV0Ko0.js";import"./ListItem-CG_EMwTO.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
