import{r as n,j as i}from"./iframe-CcHYkW_S.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CP498myX.js";import{CheckboxStory as c}from"./Checkbox.stories-CWp6eK9T.js";import d from"./Help.stories-Db36Rmks.js";import k from"./RadioButton.stories-BX0zmRBb.js";import{RadioPanel as u}from"./RadioPanel.stories-CEGi60nE.js";import{F as g}from"./FieldGroup-BmGf8zdJ.js";import{C as h}from"./Checkbox-C1i45fUI.js";import{R as b}from"./RadioPanel-D6PVm6d8.js";import{H as x}from"./Help-DcBiSiBl.js";import{R as C}from"./RadioButton-C-nls_6S.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-mPOxzuEO.js";import"./clsx-B-dksMZM.js";import"./Flex-CnjiTwDr.js";import"./SlotComponent-jpLkPRWP.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CW_lF0Gi.js";import"./usePreviousValue-kQ8nV7t5.js";import"./Loader-DhaOrxz8.js";import"./useDelayedRender-CHDg47kL.js";import"./useId-CM18xsE7.js";import"./Label-DB9gPxdm.js";import"./SupportLabel--8UDA9Ze.js";import"./SuccessIcon-B6A4gz1a.js";import"./Icon-BtXABXpx.js";import"./WarningIcon-vMOjxeJm.js";import"./BaseRadioButton.stories-BiZu3WlR.js";import"./BaseRadioButton-BBsxLmDb.js";import"./Title-BTDM7fjK.js";import"./Card-DAtRZDrO.js";import"./Text-CdNeP4UL.js";import"./Tag-CT2aX7Mr.js";import"./ExpandablePanel-C1vjaj9w.js";import"./useAnimatedHeightBetween-De6WQlmP.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CXJsKzbd.js";import"./Expander-C1Az5Pgu.js";import"./ChevronUpIcon-BxZlVtha.js";import"./ListItem-B8Wko1ka.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
