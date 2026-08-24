import{r as n,j as i}from"./iframe-Ce1037hD.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-EO5v1O4k.js";import l from"./Help.stories-JUIGh3nN.js";import c from"./RadioButton.stories-Bh_nfseh.js";import{F as d}from"./FieldGroup-CkfLIO5r.js";import{C as k,a as u}from"./CheckboxPanel.stories-DOFzNro4.js";import{RadioPanel as g}from"./RadioPanel.stories-C0rE4ayQ.js";import{C as h}from"./Checkbox-ByRVpl6V.js";import{R as b}from"./RadioPanel-B753GSm6.js";import{H as x}from"./Help-zRA22fpg.js";import{R as C}from"./RadioButton-Ba46ni0s.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DE7Bh5g1.js";import"./Label-BPe4OIb3.js";import"./SupportLabel-iOyIdFF8.js";import"./SuccessIcon-C2KDyf4h.js";import"./Icon-Cbfm2iqq.js";import"./WarningIcon-CGzaMTS8.js";import"./BaseRadioButton.stories-DbVhovxt.js";import"./BaseRadioButton-B1KulNMN.js";import"./InputPanel-B0D3fkfe.js";import"./Flex-9Kf8Fx9k.js";import"./SlotComponent-CPiPrrBn.js";import"./mergeRefs-Dm93bb2q.js";import"./Button-xpKH1Ofm.js";import"./usePreviousValue-BXQSl5id.js";import"./Loader-CgRsAonV.js";import"./useDelayedRender-BnDXN6Wq.js";import"./Title-B-YTeBXP.js";import"./Card-TLdnAIl9.js";import"./Text-CzEiFri6.js";import"./Tag-CVhD3GoO.js";import"./ExpandablePanel-C089jaHe.js";import"./useAnimatedHeightBetween-2HvN4kwM.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BpsbUps9.js";import"./Expander-CH2DvRpJ.js";import"./ChevronUpIcon-BEf28Z99.js";import"./ListItem-blf0ZM0v.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
