import{r as n,j as i}from"./iframe-Nrz7JFlq.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C9cHWQ1v.js";import l from"./Help.stories-Dp2laDP5.js";import c from"./RadioButton.stories-CasMLKgB.js";import{F as d}from"./FieldGroup-DsWlkRQF.js";import{C as k,a as u}from"./CheckboxPanel.stories-DvzosA7e.js";import{RadioPanel as g}from"./RadioPanel.stories-DTT_BzsL.js";import{C as h}from"./Checkbox-olj42TTj.js";import{R as b}from"./RadioPanel-BRriRPYi.js";import{H as x}from"./Help-D7LZZj-O.js";import{R as C}from"./RadioButton-CA9_qB2N.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B_unQdkN.js";import"./Label-DfCgc5hL.js";import"./SupportLabel-C-cKWH7T.js";import"./SuccessIcon-57mL6tdI.js";import"./Icon-CFU2ZQ2t.js";import"./WarningIcon-Cl1L--wv.js";import"./BaseRadioButton.stories-DVabDSDr.js";import"./BaseRadioButton-CkKVqtoY.js";import"./InputPanel-D0C0i0fa.js";import"./Flex-DPE7aN-I.js";import"./SlotComponent-D21GA8LQ.js";import"./mergeRefs-BOQTS7Bw.js";import"./Button-DAICfHSC.js";import"./usePreviousValue-d8nlzhS8.js";import"./Loader-CYxKVygT.js";import"./useDelayedRender-BkJEvx82.js";import"./Title-PP2uwACc.js";import"./Card-DjF3Ymx9.js";import"./Text-C_vP23Tv.js";import"./Tag-h5ZsOKnw.js";import"./ExpandablePanel-MmOADNuR.js";import"./useAnimatedHeightBetween-8AdO2iXa.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Dwt7bZmx.js";import"./Expander-CNDLpmi_.js";import"./ChevronUpIcon-CZ3zA7Uq.js";import"./ListItem-CueGkpWZ.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
