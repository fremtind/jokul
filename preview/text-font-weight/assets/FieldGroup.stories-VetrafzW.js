import{r as p,j as i}from"./iframe-CBkkuE7i.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BFmV2QJl.js";import l from"./Help.stories-DSb-Bm4K.js";import c from"./RadioButton.stories-CQokrbeT.js";import{F as d}from"./FieldGroup-CDXUQMjC.js";import{C as k,a as u}from"./CheckboxPanel.stories--MJCmYMN.js";import{RadioPanel as g}from"./RadioPanel.stories-CFrhcc4q.js";import{C as h}from"./Checkbox-0xwQzQ5H.js";import{R as b}from"./RadioPanel-B_shTP5j.js";import{H as x}from"./Help-CqT8FL2k.js";import{R as C}from"./RadioButton-CINgahQV.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-D_Db8N6W.js";import"./BaseRadioButton-BfIMdxvV.js";import"./clsx-B-dksMZM.js";import"./useId-CH41XZDD.js";import"./Label-CVtwXNqD.js";import"./SupportLabel-D3EPS7Cp.js";import"./SuccessIcon-DQytzW2D.js";import"./Icon-wJwzCtCc.js";import"./WarningIcon-CwdN8Zl6.js";import"./InputPanel-Db4eRA-E.js";import"./Flex-Dl_uDQMI.js";import"./SlotComponent-c1znOQVG.js";import"./mergeRefs-CDOUpH3y.js";import"./Button-DZwDoqFF.js";import"./usePreviousValue-D47hT_MV.js";import"./Loader-B9AwXSFV.js";import"./useDelayedRender-nVwEEnn2.js";import"./Title-Doohzyr4.js";import"./Card-DQHHCsWj.js";import"./Text-1f4PVVIA.js";import"./Tag-CdO0bGRO.js";import"./ExpandablePanel-Vgaw6Zvm.js";import"./useAnimatedHeightBetween-jc-8oMP9.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Bs_Km47N.js";import"./Expander-lCuSTkvo.js";import"./ChevronDownIcon-BCzgJKXS.js";import"./ChevronUpIcon-yL7fyf-L.js";import"./ListItem-4uNj4fZP.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
