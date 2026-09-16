import{r as n,j as i}from"./iframe-CvelZ1_d.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Db7fWEbx.js";import{CheckboxStory as c}from"./Checkbox.stories-CyNpI6K2.js";import d from"./Help.stories-288Jn_rC.js";import k from"./RadioButton.stories-Cj2dPYam.js";import{RadioPanel as u}from"./RadioPanel.stories-BOQMaY6i.js";import{F as g}from"./FieldGroup-DaTlbPzL.js";import{C as h}from"./Checkbox-CF7xynCm.js";import{R as b}from"./RadioPanel-Ce3-UVQ8.js";import{H as x}from"./Help-5ti48Dr3.js";import{R as C}from"./RadioButton-pR_rMaAq.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-rk17uklR.js";import"./clsx-B-dksMZM.js";import"./Flex-Bhhk5Ks4.js";import"./SlotComponent-96-6eiv4.js";import"./mergeRefs-DPJ6XbFp.js";import"./Button-Dfihs1iV.js";import"./usePreviousValue-DWHy1eAN.js";import"./Loader-BfYOqWAK.js";import"./useDelayedRender-CkyAbM2o.js";import"./useId-CkblNdKY.js";import"./Label-BEmaJGfd.js";import"./SupportLabel-Blr11soo.js";import"./SuccessIcon-Cx_eOakg.js";import"./Icon-DlpuIL2p.js";import"./WarningIcon-V_f07mIH.js";import"./BaseRadioButton.stories-BPMRwZVH.js";import"./BaseRadioButton-CllyGfdm.js";import"./Title-Co5gGyOc.js";import"./Card-C-BjRTOh.js";import"./Text-BNolLb1t.js";import"./Tag-DLobiNOa.js";import"./ExpandablePanel-C2dYggbU.js";import"./useAnimatedHeightBetween-Dr_U-bYO.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DpfbrLDn.js";import"./Expander-D4NOeJLw.js";import"./ChevronUpIcon-ltyC2lPa.js";import"./ListItem-D3ApyUj-.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
