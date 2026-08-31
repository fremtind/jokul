import{r as n,j as i}from"./iframe-Dumc8r-1.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CjCgDbA2.js";import l from"./Help.stories-wbQy2s30.js";import c from"./RadioButton.stories-DzzoO6Hd.js";import{F as d}from"./FieldGroup-BavQTMha.js";import{C as k,a as u}from"./CheckboxPanel.stories-lZbjZnTf.js";import{RadioPanel as g}from"./RadioPanel.stories-B45TivDO.js";import{C as h}from"./Checkbox-B8ear8bJ.js";import{R as b}from"./RadioPanel-DPrTFuZ1.js";import{H as x}from"./Help-B8gatB9P.js";import{R as C}from"./RadioButton-CKBRo1mi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Bol5vsRe.js";import"./Label-az7ejUzD.js";import"./SupportLabel-DCg-0BVf.js";import"./SuccessIcon-D3U5sgj0.js";import"./Icon-hJp7EKqM.js";import"./WarningIcon-CE9Q8INp.js";import"./BaseRadioButton.stories-DUPtx36F.js";import"./BaseRadioButton-BlH3y-aG.js";import"./InputPanel-DzGxVCS4.js";import"./Flex-Dxsgcb2d.js";import"./SlotComponent-CVwQrlOl.js";import"./mergeRefs-CsnYrnI1.js";import"./Button-Ctuaazeo.js";import"./usePreviousValue-CL4PDJAy.js";import"./Loader-CpJ2hFp3.js";import"./useDelayedRender-DWBaikRP.js";import"./Title-DLY03y04.js";import"./Card-DWYyqgW9.js";import"./Text-B5pB9EwE.js";import"./Tag-DxYeP_9m.js";import"./ExpandablePanel-D7g-CGiV.js";import"./useAnimatedHeightBetween-OZjdcrzX.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-TAJMI1uF.js";import"./Expander-DaP_f_gg.js";import"./ChevronUpIcon-CFNle4Sl.js";import"./ListItem-CY044Jm7.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
