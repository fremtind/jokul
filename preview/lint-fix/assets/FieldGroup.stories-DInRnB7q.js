import{r as n,j as i}from"./iframe-BFf6mg22.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BN9HPFlX.js";import{CheckboxStory as c}from"./Checkbox.stories-BNN7ccB_.js";import d from"./Help.stories-YBggeHH7.js";import k from"./RadioButton.stories-CsMcveso.js";import{RadioPanel as u}from"./RadioPanel.stories-Dnh_L8PV.js";import{F as g}from"./FieldGroup-vY9quxH0.js";import{C as h}from"./Checkbox-BOmpeAOD.js";import{R as b}from"./RadioPanel-pzWJONmJ.js";import{H as x}from"./Help-LFx9se8s.js";import{R as C}from"./RadioButton-BQsHstzC.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BV0_8ONU.js";import"./clsx-B-dksMZM.js";import"./Flex-VROMSKYq.js";import"./SlotComponent-BtMn6zLo.js";import"./mergeRefs-CM-iF76L.js";import"./Button-CT4xoPad.js";import"./usePreviousValue-0CK3qNcE.js";import"./Loader-DIFvE0Ja.js";import"./useDelayedRender-BAVA_HYq.js";import"./useId-Bu_t371C.js";import"./Label-DzipsJUy.js";import"./SupportLabel-D2nFoekJ.js";import"./SuccessIcon-C7C3DhSm.js";import"./Icon-Dn9TmRO6.js";import"./WarningIcon-DfKrVsOE.js";import"./BaseRadioButton.stories-B6GKX5Pt.js";import"./BaseRadioButton-DrGyR2Nd.js";import"./Title-C-OhdvzU.js";import"./Card-CznSxD9x.js";import"./Text-BZCyE8dB.js";import"./Tag-DD_fa3nU.js";import"./ExpandablePanel-CVjqyf6z.js";import"./useAnimatedHeightBetween-CkKKDfDl.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C8W4FGDq.js";import"./Expander-dVqKi5lb.js";import"./ChevronUpIcon-Bzdr1Q_q.js";import"./ListItem-Cc-QwhyG.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
