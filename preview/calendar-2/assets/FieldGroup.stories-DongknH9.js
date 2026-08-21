import{r as n,j as i}from"./iframe-D3J2_g0M.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C7Z9PlBR.js";import l from"./Help.stories-Be9P3rzd.js";import c from"./RadioButton.stories-BZHPIvpJ.js";import{F as d}from"./FieldGroup-C_dL-NU9.js";import{C as k,a as u}from"./CheckboxPanel.stories-CXUp7VJq.js";import{RadioPanel as g}from"./RadioPanel.stories-DyU7-tdD.js";import{C as h}from"./Checkbox-C16JnX-V.js";import{R as b}from"./RadioPanel-CUm9IjdV.js";import{H as x}from"./Help-dG18r_1S.js";import{R as C}from"./RadioButton-Djo1nFa8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ryfhRN2p.js";import"./Label-D-K4YhW9.js";import"./SupportLabel-BB_aX62A.js";import"./SuccessIcon-CaPc-HrJ.js";import"./Icon-CyH0b_AD.js";import"./WarningIcon-BgSX5bH-.js";import"./BaseRadioButton.stories-B8CA0VG7.js";import"./BaseRadioButton-CjK4Gi6f.js";import"./InputPanel-RArXphZw.js";import"./Flex-ByZkCMr0.js";import"./SlotComponent-CXRWgB1M.js";import"./mergeRefs-8nQdAYk7.js";import"./Button-Bx4NOXqj.js";import"./usePreviousValue-BIg6wp22.js";import"./Loader-BJnBgpZ5.js";import"./useDelayedRender-MdAq_RuR.js";import"./Title-DpEVtISr.js";import"./Card-l_0p3CKz.js";import"./Text-DwSGJkEH.js";import"./Tag-ArE21yU2.js";import"./ExpandablePanel-C5pP93lw.js";import"./useAnimatedHeightBetween-WB0qWecp.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-F3_ZH-h0.js";import"./Expander-Bh9imeJS.js";import"./ChevronUpIcon-CPqDCqei.js";import"./ListItem-DWtwAMTe.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
