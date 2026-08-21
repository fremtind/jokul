import{r as n,j as i}from"./iframe-Bg0MGZ5v.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DjAKtYtW.js";import l from"./Help.stories-AfSELJxz.js";import c from"./RadioButton.stories-BxZFXKgF.js";import{F as d}from"./FieldGroup-CGd6Ds88.js";import{C as k,a as u}from"./CheckboxPanel.stories-BF4M804E.js";import{RadioPanel as g}from"./RadioPanel.stories-B-Gd_K0a.js";import{C as h}from"./Checkbox-DYTzSxPZ.js";import{R as b}from"./RadioPanel-CWEWnYec.js";import{H as x}from"./Help-Ctn4zFMb.js";import{R as C}from"./RadioButton-CXrs24QV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CfmjQ67k.js";import"./Label-Cwt8dkLB.js";import"./SupportLabel-D3EcLaXx.js";import"./SuccessIcon-CuGvMGkI.js";import"./Icon-D1LbeNJi.js";import"./WarningIcon-BaYSqROX.js";import"./BaseRadioButton.stories-CLeZxYI9.js";import"./BaseRadioButton-BU8I5z4L.js";import"./InputPanel-DhnG_UE-.js";import"./Flex-t1g5E6pL.js";import"./SlotComponent-CzUN9-zG.js";import"./mergeRefs-BRQM3oqG.js";import"./Button-Beke9sYB.js";import"./usePreviousValue-DfJnSkHh.js";import"./Loader-iNKyclvm.js";import"./useDelayedRender-CmG8HZA_.js";import"./Title-liKMyNFH.js";import"./Card-DAf3Eu7h.js";import"./Text-VVX22ZNN.js";import"./Tag-BSkT6XAL.js";import"./ExpandablePanel-Dt9mPSZa.js";import"./useAnimatedHeightBetween-BkDX1Fn4.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-B8RF1WmA.js";import"./Expander-BzknXtq3.js";import"./ChevronUpIcon-CmjzuhWo.js";import"./ListItem-B44_sIGu.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
