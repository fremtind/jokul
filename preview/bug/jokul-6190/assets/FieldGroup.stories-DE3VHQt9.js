import{r as p,j as i}from"./iframe-Ce7vqFI8.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CBPKBArj.js";import l from"./Help.stories-DN4S2NjX.js";import c from"./RadioButton.stories-CrYYHJeE.js";import{F as d}from"./FieldGroup-cpHb4qxB.js";import{C as k,a as u}from"./CheckboxPanel.stories-Cxu2k86K.js";import{RadioPanel as g}from"./RadioPanel.stories-B5oUKTsD.js";import{C as h}from"./Checkbox-CxVO-lc0.js";import{R as b}from"./RadioPanel-J0s0Rlo3.js";import{H as x}from"./Help-Cpz7K18A.js";import{R as C}from"./RadioButton-BfDsOsy4.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CVEIk5GB.js";import"./BaseRadioButton-CMW8SXgP.js";import"./clsx-B-dksMZM.js";import"./useId-BJDOuPnz.js";import"./Label-CuVcnr1h.js";import"./SupportLabel-BhhvFw-G.js";import"./SuccessIcon-CebIjgzX.js";import"./Icon-aRkUlLSN.js";import"./WarningIcon-zk6nGAff.js";import"./InputPanel-BWvf6G2p.js";import"./Flex-Dca58_w2.js";import"./SlotComponent-B8AXSjaa.js";import"./mergeRefs-DRjpCoKC.js";import"./Button-D59FTHX9.js";import"./usePreviousValue-Bg0OHlue.js";import"./Loader-CmlQaVPV.js";import"./useDelayedRender-DL2DWpgL.js";import"./Title-AW7TBb1W.js";import"./Card-Chzbtu7z.js";import"./Text-lrDBbUN3.js";import"./Tag-BcMrxuq5.js";import"./ExpandablePanel-CFKyW_Br.js";import"./useAnimatedHeightBetween-CpV_0jMS.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CXKDxnU6.js";import"./Expander-BrxJi0n2.js";import"./ChevronDownIcon-CyaEVv2y.js";import"./ChevronUpIcon-C-2pEt83.js";import"./ListItem-BNTngxAQ.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
