import{r as n,j as i}from"./iframe-CuBW0rq2.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C_Bh_QyA.js";import{CheckboxStory as c}from"./Checkbox.stories-Bkv-FhJz.js";import d from"./Help.stories-kJkokjtr.js";import k from"./RadioButton.stories-8RNDuJx4.js";import{RadioPanel as u}from"./RadioPanel.stories-BuUtXoyc.js";import{F as g}from"./FieldGroup-DQnZDpPu.js";import{C as h}from"./Checkbox-BDzksi99.js";import{R as b}from"./RadioPanel-D2cHkEhm.js";import{H as x}from"./Help-d0gtmqsl.js";import{R as C}from"./RadioButton-BC0s_f8K.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CuYGdlwL.js";import"./clsx-B-dksMZM.js";import"./Flex-CmMOOkLf.js";import"./SlotComponent-BCuBbPOv.js";import"./mergeRefs-BtYx8LQ5.js";import"./Button-lEqTI_m4.js";import"./usePreviousValue-DeKlGNiA.js";import"./Loader-Che5Rn44.js";import"./useDelayedRender-D3c9VSrf.js";import"./useId--kUd0__q.js";import"./Label-DiNlHX53.js";import"./SupportLabel-DlxxdsrV.js";import"./SuccessIcon-CBiSxNWq.js";import"./Icon-dpGkSZJ3.js";import"./WarningIcon-B8W8N3WG.js";import"./BaseRadioButton.stories-BCbKvuVD.js";import"./BaseRadioButton-urLTPRaI.js";import"./Title-uO78rXZS.js";import"./Card-BA8TS1Ab.js";import"./Text-DxH262Do.js";import"./Tag-BKrTzuiX.js";import"./ExpandablePanel-DUSmQP-I.js";import"./useAnimatedHeightBetween-Du4HUdE_.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-rBqOZ0Kx.js";import"./Expander-Def5LhVD.js";import"./ChevronUpIcon-DSDnLQnP.js";import"./ListItem-Ct5vhmmP.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
