import{r as n,j as i}from"./iframe-ABcdBM4x.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CVcTmjgB.js";import{CheckboxStory as c}from"./Checkbox.stories-Deh7hGeq.js";import d from"./Help.stories-DRTVs_z4.js";import k from"./RadioButton.stories-8_nn3RW3.js";import{RadioPanel as u}from"./RadioPanel.stories-CRJLK0No.js";import{F as g}from"./FieldGroup-CRN-u9HS.js";import{C as h}from"./Checkbox-20dGctzd.js";import{R as b}from"./RadioPanel-TRo8Rg1c.js";import{H as x}from"./Help-CerrdhJn.js";import{R as C}from"./RadioButton-QfyHteBz.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CdWksl88.js";import"./clsx-B-dksMZM.js";import"./Flex-C4lbcWdH.js";import"./SlotComponent-DwkgwFPY.js";import"./mergeRefs-Da9QzCPw.js";import"./Button-DA7P8ruy.js";import"./usePreviousValue-Btib2wbf.js";import"./Loader-CUu232pG.js";import"./useDelayedRender-DlL0OmmG.js";import"./useId-hGYxaszK.js";import"./Label-CYA5bqQE.js";import"./SupportLabel-Bkcz78fw.js";import"./SuccessIcon-Dkt0aIOY.js";import"./Icon-rqmLYKzD.js";import"./WarningIcon-BSYMzdYZ.js";import"./BaseRadioButton.stories-DmsjxBxd.js";import"./BaseRadioButton-CAhv1IKZ.js";import"./Title-DFEpetP0.js";import"./Card-DrNqPUF2.js";import"./Text-7eBBDYMx.js";import"./Tag-rDbXNcow.js";import"./ExpandablePanel-ClWt-m9P.js";import"./useAnimatedHeightBetween-V5CH-1vC.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Ccs_eMA2.js";import"./Expander-BNhITbXd.js";import"./ChevronUpIcon-D0SOJjqB.js";import"./ListItem-VPOjs-N1.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
