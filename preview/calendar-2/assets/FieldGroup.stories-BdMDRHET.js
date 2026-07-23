import{r as p,j as i}from"./iframe-Cp86lBAL.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-D8p17amr.js";import l from"./Help.stories-C_vQw6yJ.js";import c from"./RadioButton.stories-BJ8m7JTa.js";import{F as d}from"./FieldGroup-Cj4xRW16.js";import{C as k,a as u}from"./CheckboxPanel.stories-DfTrqKXO.js";import{RadioPanel as g}from"./RadioPanel.stories-CfJ3lLhf.js";import{C as h}from"./Checkbox-BG59O2ED.js";import{R as b}from"./RadioPanel-RS69wZD0.js";import{H as x}from"./Help-DRpQBCy1.js";import{R as C}from"./RadioButton-DLLkCOup.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CIlRHfFb.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-COkUhzmn.js";import"./mergeRefs-ezjkseJ9.js";import"./BaseRadioButton.stories-k50980FC.js";import"./BaseRadioButton-BFsHxj0l.js";import"./useId-DXjpdJol.js";import"./Label-CJ3rQXbU.js";import"./SupportLabel-IjFg-Rlk.js";import"./SuccessIcon-BswGm4f1.js";import"./Icon-BnvmPiPE.js";import"./WarningIcon-CWRGLn1z.js";import"./InputPanel-D0fwgM_4.js";import"./Button-DzV8GKxh.js";import"./usePreviousValue-DwJZHjF4.js";import"./Loader-px0NaIZT.js";import"./useDelayedRender-B1quFjY1.js";import"./Title-eVN_Ls3z.js";import"./Card-DR8yQa4e.js";import"./Text-htP-kGxf.js";import"./Tag-C4D_b41e.js";import"./ExpandablePanel-BhwL_2-4.js";import"./useAnimatedHeightBetween-CUXtEHog.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CF1xK2Re.js";import"./Expander-B98EDRTw.js";import"./ChevronUpIcon-7yyUdVAn.js";import"./ListItem-C8hKkwq7.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
