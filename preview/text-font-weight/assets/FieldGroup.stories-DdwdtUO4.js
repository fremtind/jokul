import{r as p,j as i}from"./iframe-CgQef7Se.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CzcR0O54.js";import l from"./Help.stories-B2EvKZ8B.js";import c from"./RadioButton.stories-hHeeacgb.js";import{F as d}from"./FieldGroup-pY3g3Ulk.js";import{C as k,a as u}from"./CheckboxPanel.stories-C_4PuQC7.js";import{RadioPanel as g}from"./RadioPanel.stories-BUlk0zcS.js";import{C as h}from"./Checkbox-QsE9Jm9T.js";import{R as b}from"./RadioPanel-Cc_gcrZz.js";import{H as x}from"./Help-BPED9KAF.js";import{R as C}from"./RadioButton-CivA3Sis.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-SiqR3r2F.js";import"./BaseRadioButton-Dis3fQwR.js";import"./clsx-B-dksMZM.js";import"./useId-BR2Dqx8h.js";import"./Label-BnOxf6xg.js";import"./SupportLabel-CAs3TpwR.js";import"./SuccessIcon-BFtCjQ7T.js";import"./Icon-CB1p32SI.js";import"./WarningIcon-tPyzfaEu.js";import"./InputPanel-CFdJ92tX.js";import"./Flex-a-YMVeUF.js";import"./SlotComponent-BI58ELDV.js";import"./mergeRefs-Wl5SJY1z.js";import"./Button-YfHLn_Ya.js";import"./usePreviousValue-DhPF3pDR.js";import"./Loader-CjRJ_TkE.js";import"./useDelayedRender-m7dcZOLa.js";import"./Title-CtmaL4qF.js";import"./Card-BpWuZa2h.js";import"./Text-36HkMlb3.js";import"./Tag-CIli5eKA.js";import"./ExpandablePanel-0yX_9jbA.js";import"./useAnimatedHeightBetween-X5KXp48t.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C92xjXXw.js";import"./Expander-CaZ4fChF.js";import"./ChevronDownIcon-DvNxOtmR.js";import"./ChevronUpIcon-BgP2182c.js";import"./ListItem-BI_6N55T.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
