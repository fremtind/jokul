import{r as n,j as i}from"./iframe-DNlyx_tI.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BwnojmKq.js";import{CheckboxStory as c}from"./Checkbox.stories-1uFmWf6A.js";import d from"./Help.stories-B9CaoJNe.js";import k from"./RadioButton.stories-DXai0Z8z.js";import{RadioPanel as u}from"./RadioPanel.stories-BfrqqyH0.js";import{F as g}from"./FieldGroup-C5d_OEn-.js";import{C as h}from"./Checkbox-BEMpU90Q.js";import{R as b}from"./RadioPanel-DxZg3KRs.js";import{H as x}from"./Help-C9GyIemZ.js";import{R as C}from"./RadioButton-ByqmrYM1.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BynpPrLQ.js";import"./clsx-B-dksMZM.js";import"./Flex-BcMg9dmU.js";import"./SlotComponent-Bi_Gk0_T.js";import"./mergeRefs-tPSJYOlF.js";import"./Button-UA6UHFtS.js";import"./usePreviousValue-mE7FR59H.js";import"./Loader-BVKwG2JH.js";import"./useDelayedRender-lJ8xtxGA.js";import"./useId-tFl9oDjg.js";import"./Label-BVEtrlZG.js";import"./SupportLabel-CLVd2b15.js";import"./SuccessIcon-AxeGWCG5.js";import"./Icon-mG3k-rxp.js";import"./WarningIcon-B78_aJnF.js";import"./BaseRadioButton.stories-B7xKrk-e.js";import"./BaseRadioButton-CM0FyFci.js";import"./Title-F8gdRBam.js";import"./Card-QSBkgej3.js";import"./Text-egxysFS6.js";import"./Tag-dOvLivz-.js";import"./ExpandablePanel-DYSdTWK8.js";import"./useAnimatedHeightBetween-BjMWUWVc.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DZRR4Vb6.js";import"./Expander-BM6h36du.js";import"./ChevronUpIcon-Cv9QW3hM.js";import"./ListItem-COBJaAej.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
