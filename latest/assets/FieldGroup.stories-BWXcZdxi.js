import{r as n,j as i}from"./iframe-Bk_G0Y5W.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CNCHcOFd.js";import{CheckboxStory as c}from"./Checkbox.stories-CJSoyVJD.js";import d from"./Help.stories-CwPQiGzK.js";import k from"./RadioButton.stories-DZ2qZ3Mg.js";import{RadioPanel as u}from"./RadioPanel.stories-DEpZXN5X.js";import{F as g}from"./FieldGroup-BG_X_90w.js";import{C as h}from"./Checkbox-CdUgrrtv.js";import{R as b}from"./RadioPanel-DGPoWr5d.js";import{H as x}from"./Help-wOjOctx-.js";import{R as C}from"./RadioButton-DKVxYR25.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DlfQM5Bu.js";import"./clsx-B-dksMZM.js";import"./Flex-UOgF88p_.js";import"./SlotComponent-BbAjZljW.js";import"./mergeRefs-BcvWc4WC.js";import"./Button-Cc5h5pT_.js";import"./usePreviousValue-sfqx7y-F.js";import"./Loader-CJCA2I2o.js";import"./useDelayedRender-BDUph09q.js";import"./useId-CoZKKXaE.js";import"./Label-Vi-8Ut-J.js";import"./SupportLabel-DhwRrRTM.js";import"./SuccessIcon-DQNHSI47.js";import"./Icon-DYCpFpiw.js";import"./WarningIcon-DElok-2N.js";import"./BaseRadioButton.stories-oJeQaDNx.js";import"./BaseRadioButton-Dslb-TRQ.js";import"./Title-CaBnPaPO.js";import"./Card-a6zIEKz6.js";import"./Text-z409wOD_.js";import"./Tag-BpYWBQRD.js";import"./ExpandablePanel-D2oM7o-Q.js";import"./useAnimatedHeightBetween-Butoz0-X.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DFQ1uF98.js";import"./Expander-X4EUmRib.js";import"./ChevronUpIcon-gQAalHlS.js";import"./ListItem-ZOz9F3cw.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
