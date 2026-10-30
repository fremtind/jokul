import{r as n,j as i}from"./iframe-0NfDhzIt.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DaKIrIxP.js";import{CheckboxStory as c}from"./Checkbox.stories-DAV0qwtA.js";import d from"./Help.stories-FYFKIQL_.js";import k from"./RadioButton.stories-1H65GvVL.js";import{RadioPanel as u}from"./RadioPanel.stories-Cvb_PDDL.js";import{F as g}from"./FieldGroup-B5Ai9Mz8.js";import{C as h}from"./Checkbox-22SMIp8m.js";import{R as b}from"./RadioPanel-BqmOBKfq.js";import{H as x}from"./Help-Bj7m0yqk.js";import{R as C}from"./RadioButton-C4SvUPqB.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BG2Aa4WG.js";import"./clsx-B-dksMZM.js";import"./Flex-CY6Ynvyq.js";import"./SlotComponent-BZMH3ofq.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DbLarB3L.js";import"./usePreviousValue-CNvPnQzV.js";import"./Loader-C8YaIjmT.js";import"./useDelayedRender-dEoSsUs4.js";import"./useId-CYFmze6q.js";import"./Label-DxKaM3x-.js";import"./SupportLabel-DFOwp_1b.js";import"./SuccessIcon-B_K_3w8M.js";import"./Icon-doX1XryJ.js";import"./WarningIcon-CeLtkF4T.js";import"./BaseRadioButton.stories-D-_E6Yep.js";import"./BaseRadioButton-_daJyphv.js";import"./Title-CufDkKEg.js";import"./Card-CQ0_Gi7F.js";import"./Text-SxKXfNWl.js";import"./Tag-DPpxMD-Z.js";import"./ExpandablePanel-Ipjsbh-I.js";import"./useAnimatedHeightBetween-RygXYEVw.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-tYCyXE04.js";import"./Expander-BqKOhoHe.js";import"./ChevronUpIcon-jM-Dnmel.js";import"./ListItem-FVQNaVFy.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
