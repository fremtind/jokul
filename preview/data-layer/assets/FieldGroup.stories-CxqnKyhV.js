import{r as p,j as i}from"./iframe-BUbBSyiw.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C9KJxo3Z.js";import{CheckboxStory as c}from"./Checkbox.stories-Bi7caGFg.js";import d from"./Help.stories-Jyxjya7S.js";import k from"./RadioButton.stories-BngD5jwP.js";import{RadioPanel as u}from"./RadioPanel.stories-2nmqSD6t.js";import{F as g}from"./FieldGroup-DhKHWOBn.js";import{C as h}from"./Checkbox-CRaOF7zd.js";import{R as b}from"./RadioPanel-TUXR6sac.js";import{H as x}from"./Help-C56ORjZe.js";import{R as C}from"./RadioButton-B__rfS45.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-S3uMwJ7T.js";import"./clsx-B-dksMZM.js";import"./types-YjSsgwWY.js";import"./Flex-ZJ7ENCoC.js";import"./SlotComponent-wF8n1cD3.js";import"./mergeRefs-BRb42Tlc.js";import"./Button-Cs4uBu2S.js";import"./usePreviousValue-BHO3qPzR.js";import"./Loader-BWspS2NN.js";import"./useDelayedRender-3Rp08eCg.js";import"./useId-DaXUHhtD.js";import"./Label-BvDrY9Fk.js";import"./SupportLabel-B-VOgB55.js";import"./SuccessIcon-BcZ3HLj5.js";import"./Icon-htbjGrII.js";import"./WarningIcon-COjD6mvs.js";import"./BaseRadioButton.stories-CcjPtAdX.js";import"./BaseRadioButton-r6mbQb4Y.js";import"./Title-NfVZLNX7.js";import"./Card-DcO-Tj2K.js";import"./Text-BQFyaz9s.js";import"./Tag-CLVSpPGj.js";import"./ExpandablePanel-BwNxSDDZ.js";import"./useAnimatedHeightBetween-Br1D0cbZ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-TnJ4C37x.js";import"./Expander-BBGnMzP5.js";import"./ChevronUpIcon-B_cjzhx9.js";import"./ListItem-_p1qNvAy.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
