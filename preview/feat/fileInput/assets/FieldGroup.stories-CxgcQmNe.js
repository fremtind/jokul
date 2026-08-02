import{r as p,j as i}from"./iframe-Co20lHln.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BXo7BGj-.js";import l from"./Help.stories-BDJnsEor.js";import c from"./RadioButton.stories-9hiFXi-g.js";import{F as d}from"./FieldGroup-vksyufY5.js";import{C as k,a as u}from"./CheckboxPanel.stories-PO6gJ3WN.js";import{RadioPanel as g}from"./RadioPanel.stories-CnH3rn_N.js";import{C as h}from"./Checkbox-BVtfoDe8.js";import{R as b}from"./RadioPanel-q5_Tc_oo.js";import{H as x}from"./Help-BUqtqKUq.js";import{R as C}from"./RadioButton-CkGiYibd.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-C9tqOx6r.js";import"./BaseRadioButton-BR1XM63Q.js";import"./clsx-B-dksMZM.js";import"./useId-BQGXY8yz.js";import"./Label-CujXmxlp.js";import"./SupportLabel-DEl7gAeS.js";import"./SuccessIcon-VvtpZblF.js";import"./Icon-6Mvxmq0I.js";import"./WarningIcon-Cu_Nd03u.js";import"./InputPanel-BcHxvTsP.js";import"./Flex-D7LVFOvR.js";import"./SlotComponent-CR3_oijx.js";import"./mergeRefs-DX-ZR5EA.js";import"./Button-z1tJPgi5.js";import"./usePreviousValue-B-EbCQpW.js";import"./Loader-azyDNGBg.js";import"./useDelayedRender-DwVHogQm.js";import"./Title-DHJBFLTC.js";import"./Card-DqFsJf2b.js";import"./Text-Vd0hQZDV.js";import"./Tag-NLdzaEFw.js";import"./ExpandablePanel-Ba52RHZM.js";import"./useAnimatedHeightBetween-g7b-YHag.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CLqBtZIY.js";import"./Expander-ShWIeZwz.js";import"./ChevronDownIcon-CjBmvn_H.js";import"./ChevronUpIcon-xZ2Piiqi.js";import"./ListItem-DhBseXQE.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
