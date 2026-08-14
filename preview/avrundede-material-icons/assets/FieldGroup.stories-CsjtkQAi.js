import{r as p,j as i}from"./iframe-C7zHfsx1.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-vfw9L5PP.js";import l from"./Help.stories-BDS0nZ5D.js";import c from"./RadioButton.stories-kSdq7VWl.js";import{F as d}from"./FieldGroup-NULoNIx-.js";import{C as k,a as u}from"./CheckboxPanel.stories-BGfOlzmw.js";import{RadioPanel as g}from"./RadioPanel.stories-BoQ_O-65.js";import{C as h}from"./Checkbox-BXteAJU2.js";import{R as b}from"./RadioPanel-B9CGYBf-.js";import{H as x}from"./Help-C-D9Lj8-.js";import{R as C}from"./RadioButton-CzvwkoaY.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-PjIPx8e9.js";import"./BaseRadioButton-B_sBpHKT.js";import"./clsx-B-dksMZM.js";import"./useId-CnnTf_vl.js";import"./Label-C-PL7IWK.js";import"./SupportLabel-DPzc8x7b.js";import"./SuccessIcon-hy3nMgGq.js";import"./Icon-CyDoACM2.js";import"./WarningIcon-f7pV_U16.js";import"./InputPanel-Csiy7zwF.js";import"./Flex-p_wjaFTK.js";import"./SlotComponent-DOC5uKhu.js";import"./mergeRefs-CGa5Wo1J.js";import"./Button-D5LSSh-P.js";import"./usePreviousValue-DSa5gVPO.js";import"./Loader-ClYTOHZ9.js";import"./useDelayedRender-Djlh8Qqt.js";import"./Title-BPwnaA3B.js";import"./Card-DwD5xYDv.js";import"./Text-CWmv3AVr.js";import"./Tag-DD2g2H38.js";import"./ExpandablePanel-B48kGMJG.js";import"./useAnimatedHeightBetween-Cn_6YaA0.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BlYDO96W.js";import"./Expander-Cmu90quc.js";import"./ChevronDownIcon-BuS5J-XJ.js";import"./ChevronUpIcon-DsLbttE3.js";import"./ListItem-CXpEhuTg.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
