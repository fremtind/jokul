import{r as p,j as i}from"./iframe-BGGgvuoR.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DwwWaCNe.js";import l from"./Help.stories-nOr6ldnI.js";import c from"./RadioButton.stories-TZ2EBcIM.js";import{F as d}from"./FieldGroup-DPtC99en.js";import{C as k,a as u}from"./CheckboxPanel.stories-nErHMOfH.js";import{RadioPanel as g}from"./RadioPanel.stories-DPxpBjsO.js";import{C as h}from"./Checkbox-CjTZayOi.js";import{R as b}from"./RadioPanel-AwdIWnaT.js";import{H as x}from"./Help-DJOhZSZ1.js";import{R as C}from"./RadioButton-BzUoeAD4.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-C4SsVVV9.js";import"./BaseRadioButton-r9CnUQOw.js";import"./clsx-B-dksMZM.js";import"./useId-B_HqJxfJ.js";import"./Label-XkyHLwUl.js";import"./SupportLabel-BlCSZl67.js";import"./SuccessIcon-B_jK2oYm.js";import"./Icon-Cw_pdAF6.js";import"./WarningIcon-BmAkrkBZ.js";import"./InputPanel-BZMABJGQ.js";import"./Flex-ByjPZQ_9.js";import"./SlotComponent-8CQeJqfj.js";import"./mergeRefs-SzH7VM5d.js";import"./Button-BC-5Toej.js";import"./usePreviousValue-DrUm8RHV.js";import"./Loader-CtTbaVEd.js";import"./useDelayedRender-hF0m6CBq.js";import"./Title-DqQh_lno.js";import"./Card-8U7pz36j.js";import"./Text-ogMPHPne.js";import"./Tag-CnYUoQ4h.js";import"./ExpandablePanel-CXvhZ_pU.js";import"./useAnimatedHeightBetween-DOux36_k.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-tmlA-oPN.js";import"./Expander-CW-590C2.js";import"./ChevronDownIcon-CZ1M2iJi.js";import"./ChevronUpIcon-DCwPdAs6.js";import"./ListItem-_FQ1_Avs.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
