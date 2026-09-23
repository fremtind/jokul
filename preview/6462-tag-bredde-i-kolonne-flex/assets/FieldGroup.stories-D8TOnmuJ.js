import{r as n,j as i}from"./iframe-C_gPa2a-.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-doWYAzA-.js";import{CheckboxStory as c}from"./Checkbox.stories-3hyyLyzc.js";import d from"./Help.stories-BoTb07rM.js";import k from"./RadioButton.stories-CxKDNB5J.js";import{RadioPanel as u}from"./RadioPanel.stories-Ms3cejRC.js";import{F as g}from"./FieldGroup-Q4ObfK8i.js";import{C as h}from"./Checkbox-_7nUDBav.js";import{R as b}from"./RadioPanel-BI_RN9f0.js";import{H as x}from"./Help-Bz0v6x9C.js";import{R as C}from"./RadioButton-CDAYqgX7.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BOOBQgDv.js";import"./clsx-B-dksMZM.js";import"./Flex-B3aJWO1e.js";import"./SlotComponent-DFrSdkVh.js";import"./mergeRefs-DSovm8c1.js";import"./Button-y1yhpkAk.js";import"./usePreviousValue-CyklFK7f.js";import"./Loader-BGqfN_pX.js";import"./useDelayedRender-DY3Kz2qU.js";import"./useId-CZ8Yd14n.js";import"./Label-wuKeOAHQ.js";import"./SupportLabel-kQDgtVWY.js";import"./SuccessIcon-wnv8wmNK.js";import"./Icon-BnmCUyIH.js";import"./WarningIcon-BrpW_yp3.js";import"./BaseRadioButton.stories-B0ufg_Ot.js";import"./BaseRadioButton-C9MkUmr-.js";import"./Title-DxYjkmWB.js";import"./Card-CbKqc5Ea.js";import"./Text-CrGDXxqb.js";import"./Tag-znD3vK1s.js";import"./ExpandablePanel-Bzv9RlD-.js";import"./useAnimatedHeightBetween-CkcBBfpv.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-97azXTw-.js";import"./Expander-CSkXweet.js";import"./ChevronUpIcon-s3nSBzBK.js";import"./ListItem-BPNtDhJW.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
