import{r as p,j as i}from"./iframe-Bkoz9kGE.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CTxSIg9L.js";import l from"./Help.stories-CfZkfEzT.js";import c from"./RadioButton.stories-Cb8Lo226.js";import{F as d}from"./FieldGroup-C3fjFUJN.js";import{C as k,a as u}from"./CheckboxPanel.stories-CoFzTD8J.js";import{RadioPanel as g}from"./RadioPanel.stories-svWfndHs.js";import{C as h}from"./Checkbox-CGJq-R8Q.js";import{R as b}from"./RadioPanel-BdgwgCrL.js";import{H as x}from"./Help-pDUy2jh8.js";import{R as C}from"./RadioButton-bcD6m3Lb.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BepkGXB6.js";import"./BaseRadioButton-BYmvxgTi.js";import"./clsx-B-dksMZM.js";import"./useId-DfVzw2kn.js";import"./Label-B25e_Pm5.js";import"./SupportLabel-9l0geRZw.js";import"./SuccessIcon-BJCQMOZo.js";import"./Icon-BUb_AyZD.js";import"./WarningIcon-s-0DHFVE.js";import"./InputPanel-BZxIf_sN.js";import"./Flex-B1H1U_W8.js";import"./SlotComponent-QNid4Oaw.js";import"./mergeRefs-Dw-1TFqS.js";import"./Button-B9SE5d9_.js";import"./usePreviousValue-BrgwCqXI.js";import"./Loader-pySertuT.js";import"./useDelayedRender-BGLPo6Cs.js";import"./Title-Bjn2l0i2.js";import"./Card-BYD_ScFX.js";import"./Text-vqE3lJHt.js";import"./Tag-GWcWJuOu.js";import"./ExpandablePanel-CPCdCmzK.js";import"./useAnimatedHeightBetween-DECjOVHp.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DA-d9Dj0.js";import"./Expander-CdLj2NYZ.js";import"./ChevronDownIcon-DtwX_njG.js";import"./ChevronUpIcon-DM3tUY8I.js";import"./ListItem-fX1SeitN.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
