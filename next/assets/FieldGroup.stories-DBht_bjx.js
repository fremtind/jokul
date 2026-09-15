import{r as n,j as i}from"./iframe-C58mhg2S.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DqyoU8EI.js";import{CheckboxStory as c}from"./Checkbox.stories-pYXs3x3p.js";import d from"./Help.stories-DXGKko6E.js";import k from"./RadioButton.stories-_sjEy4jb.js";import{RadioPanel as u}from"./RadioPanel.stories-BRt9YXEK.js";import{F as g}from"./FieldGroup-BGFfNUGJ.js";import{C as h}from"./Checkbox-BLVv3SV1.js";import{R as b}from"./RadioPanel-Dln6KE_V.js";import{H as x}from"./Help-D1qtwH23.js";import{R as C}from"./RadioButton-CKf49U9W.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BmejU90n.js";import"./clsx-B-dksMZM.js";import"./Flex-CMUfWeqL.js";import"./SlotComponent-BsAooNNy.js";import"./mergeRefs-CzoH1rTs.js";import"./Button-CRH_nppG.js";import"./usePreviousValue-BhnPUfpn.js";import"./Loader-HsOPfV3H.js";import"./useDelayedRender-BQIveWG_.js";import"./useId-CnCSsVT1.js";import"./Label-DE8pFFp9.js";import"./SupportLabel-DKq9P41k.js";import"./SuccessIcon-BAt04Y5c.js";import"./Icon-VsgLK83y.js";import"./WarningIcon-kckq3pDx.js";import"./BaseRadioButton.stories-BX7Xazu4.js";import"./BaseRadioButton-CDPsdxTv.js";import"./Title-BtOvZian.js";import"./Card-CE3Jmh3X.js";import"./Text-DDJrlB9a.js";import"./Tag-BHpjymQr.js";import"./ExpandablePanel-BLM_6HXg.js";import"./useAnimatedHeightBetween-othuhbdi.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CpU9Pt6Q.js";import"./Expander-BDn-16vM.js";import"./ChevronUpIcon-BfUgTGOo.js";import"./ListItem-BUi9bj3s.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
