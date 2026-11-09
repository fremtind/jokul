import{r as n,j as i}from"./iframe-emgDk84Q.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Cc_M_u9r.js";import{CheckboxStory as c}from"./Checkbox.stories-BqnlVujq.js";import d from"./Help.stories-Bx0pwdNy.js";import k from"./RadioButton.stories-Ba1Dohmr.js";import{RadioPanel as u}from"./RadioPanel.stories-Co28rECZ.js";import{F as g}from"./FieldGroup-4o_OVFFC.js";import{C as h}from"./Checkbox-BuCrNmMh.js";import{R as b}from"./RadioPanel-DqaiSkhK.js";import{H as x}from"./Help-BCfugoBu.js";import{R as C}from"./RadioButton-BOXLsaZ2.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-fH8piqQH.js";import"./clsx-B-dksMZM.js";import"./Flex-Dx6XpzlL.js";import"./SlotComponent-DaE17NG-.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-va334Cd-.js";import"./usePreviousValue-dosyBWUL.js";import"./Loader-DwUsrrlM.js";import"./useDelayedRender-tIX7Av6d.js";import"./useId-B3WQAMOj.js";import"./Label-U2-B-_jR.js";import"./SupportLabel-Br_uNfci.js";import"./SuccessIcon-CBcpgbM-.js";import"./Icon-D0A10AZI.js";import"./WarningIcon-BhklCEtr.js";import"./BaseRadioButton.stories-DfYAfoCz.js";import"./BaseRadioButton-CA8lgXxG.js";import"./Title-wzisCnl8.js";import"./Card-BoNGMgux.js";import"./Text-Bj6iLbDz.js";import"./Tag-C5tkVc2h.js";import"./ExpandablePanel-DGOIRtbG.js";import"./useAnimatedHeightBetween-CSVj2XU2.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-E7tqo2Oz.js";import"./Expander-BbCshyKQ.js";import"./ChevronUpIcon-Clyyc68B.js";import"./ListItem-CI6fA0wj.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
