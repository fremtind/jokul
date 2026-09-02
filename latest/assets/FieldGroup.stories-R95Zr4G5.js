import{r as p,j as i}from"./iframe-Sva4nrQ0.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B9C7P4aG.js";import l from"./Help.stories-CO5EQUVg.js";import c from"./RadioButton.stories-CcqJOC_x.js";import{F as d}from"./FieldGroup-DVoDZw98.js";import{C as k,a as u}from"./CheckboxPanel.stories-eUxPGZ1P.js";import{RadioPanel as g}from"./RadioPanel.stories-DL94LgXO.js";import{C as h}from"./Checkbox-CcQSX-_4.js";import{R as b}from"./RadioPanel-DyYdLacD.js";import{H as x}from"./Help-DOqQje7V.js";import{R as C}from"./RadioButton-CFR8EqEm.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BnkpGd7k.js";import"./BaseRadioButton-BOJEUl4H.js";import"./clsx-B-dksMZM.js";import"./useId-DBiZt4Nx.js";import"./Label-D_QhuZKC.js";import"./SupportLabel-DqF0WhYp.js";import"./SuccessIcon-DHYR0RL_.js";import"./Icon-CnTMvwyF.js";import"./WarningIcon-D25xS8yi.js";import"./InputPanel-F5w0cShU.js";import"./Flex-BFYh3iLu.js";import"./SlotComponent-Bp8jOqeP.js";import"./mergeRefs-DPTm5ze3.js";import"./Button-Dk4RTF9l.js";import"./usePreviousValue-DrNHLrYI.js";import"./Loader-CBmJccxu.js";import"./useDelayedRender-Zc25EU0p.js";import"./Title-C8M-x4Qe.js";import"./Card-B3lOnrFB.js";import"./Text-hiHu3BN9.js";import"./Tag-DJYKjq_k.js";import"./ExpandablePanel-BNXVKzS3.js";import"./useAnimatedHeightBetween-ivbQc2aV.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DYqJDfXR.js";import"./Expander-DGWrfr5G.js";import"./ChevronDownIcon-CCCuZWGe.js";import"./ChevronUpIcon-CJYMG4SP.js";import"./ListItem-ZHWPnySa.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
