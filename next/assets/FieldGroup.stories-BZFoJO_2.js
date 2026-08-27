import{r as n,j as i}from"./iframe-C8PavQ4S.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B89IZBwG.js";import l from"./Help.stories-L3J-tKfU.js";import c from"./RadioButton.stories-BF-5kgsX.js";import{F as d}from"./FieldGroup-Cs7H3xfM.js";import{C as k,a as u}from"./CheckboxPanel.stories-DJCgeImU.js";import{RadioPanel as g}from"./RadioPanel.stories-DgzEJK7m.js";import{C as h}from"./Checkbox-DKmSzsWO.js";import{R as b}from"./RadioPanel-B7vQ8XrH.js";import{H as x}from"./Help-DN7IZOP_.js";import{R as C}from"./RadioButton-BNra6VSm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B2WbXKAM.js";import"./Label-BlWHP-iF.js";import"./SupportLabel-BhQFbHLq.js";import"./SuccessIcon-BPzNRhCY.js";import"./Icon-BRgDz6hB.js";import"./WarningIcon-GWxwhnWP.js";import"./BaseRadioButton.stories-B6wo80Dh.js";import"./BaseRadioButton-Dp6Kz20r.js";import"./InputPanel-BcZ4FUHb.js";import"./Flex-DASr2a6t.js";import"./SlotComponent-BkKa7HSh.js";import"./mergeRefs-B7F_cWf9.js";import"./Button-BPEp9hi5.js";import"./usePreviousValue-CUBG5K1v.js";import"./Loader-Cr9KBCHE.js";import"./useDelayedRender-EI2KQwCd.js";import"./Title-hqXB-Jhh.js";import"./Card-DXMx_ZjK.js";import"./Text-DI-Z24Us.js";import"./Tag-B9XUkew2.js";import"./ExpandablePanel-C6BCdeHC.js";import"./useAnimatedHeightBetween-xfcnGhDi.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DSWFztIp.js";import"./Expander-D4g7bqlI.js";import"./ChevronUpIcon-DJWcpOHW.js";import"./ListItem-Do5nmICw.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
