import{r as n,j as i}from"./iframe-D2AmJwBk.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-WnMOx8uX.js";import l from"./Help.stories-BHoNKz_x.js";import c from"./RadioButton.stories-CQFouwy6.js";import{F as d}from"./FieldGroup-D3ElSacT.js";import{C as k,a as u}from"./CheckboxPanel.stories-KH2dcyxB.js";import{RadioPanel as g}from"./RadioPanel.stories-B9OX6QLb.js";import{C as h}from"./Checkbox-DsZSPz6o.js";import{R as b}from"./RadioPanel-AWH0H_wo.js";import{H as x}from"./Help-DJrOkG5h.js";import{R as C}from"./RadioButton-5-bGQxAF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C6uhcE7a.js";import"./Label-DEAINvVt.js";import"./SupportLabel-DncnRvae.js";import"./SuccessIcon-Pfu4BAaV.js";import"./Icon-ZyWmcKC_.js";import"./WarningIcon-BgtgQxqE.js";import"./BaseRadioButton.stories-CiNHBiCQ.js";import"./BaseRadioButton-C7VcBdY2.js";import"./InputPanel-Wuzprcbg.js";import"./Flex-bhmIZK7r.js";import"./SlotComponent-DE-y9Qp-.js";import"./mergeRefs-BdHmJysb.js";import"./Button-vRuMKsFo.js";import"./usePreviousValue-D8qpCKtL.js";import"./Loader-58iLoPg4.js";import"./useDelayedRender-BQg5Tbk0.js";import"./Title-C_KTMN_b.js";import"./Card-DsVyAU4V.js";import"./Text-CPwVkWAA.js";import"./Tag-BqUkOO0s.js";import"./ExpandablePanel-CHSnQ7j9.js";import"./useAnimatedHeightBetween-CEHr7A06.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DRNesszb.js";import"./Expander-B_i5AVCs.js";import"./ChevronUpIcon-DzLymyvm.js";import"./ListItem-DWfpUryZ.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
