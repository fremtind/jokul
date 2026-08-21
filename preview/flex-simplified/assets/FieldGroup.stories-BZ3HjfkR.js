import{r as n,j as i}from"./iframe-CjhOYAjm.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CXGbrE98.js";import l from"./Help.stories-D6sdapSW.js";import c from"./RadioButton.stories-DKir6g41.js";import{F as d}from"./FieldGroup-efw-yoi4.js";import{C as k,a as u}from"./CheckboxPanel.stories-BSkuVJeQ.js";import{RadioPanel as g}from"./RadioPanel.stories-C7NPM_Dl.js";import{C as h}from"./Checkbox-638FvgAh.js";import{R as b}from"./RadioPanel-BDLl1kQW.js";import{H as x}from"./Help-CzQkBv3v.js";import{R as C}from"./RadioButton-zLkkmFuJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BN9niFOX.js";import"./Label-DRMjpr1B.js";import"./SupportLabel-GIEiFZvt.js";import"./SuccessIcon-Bt4PTcoQ.js";import"./Icon-CqRapZls.js";import"./WarningIcon-DYsGWqlb.js";import"./BaseRadioButton.stories-Dm2rDb1R.js";import"./BaseRadioButton-IW4y-0RX.js";import"./InputPanel-CVVZ8D1s.js";import"./Flex-B1RN7dDk.js";import"./SlotComponent-Boc56lp2.js";import"./mergeRefs-D5cOfkrA.js";import"./Button-DEF8fr-M.js";import"./usePreviousValue-CIM55qh4.js";import"./Loader-B2z-mgWd.js";import"./useDelayedRender-Ci1uhvRH.js";import"./Title-B-YwDz02.js";import"./Card-1RDPsHgO.js";import"./Text-Ch45O7Eo.js";import"./Tag-BHW9lftV.js";import"./ExpandablePanel-CM2_EYpz.js";import"./useAnimatedHeightBetween-BkLfrqsR.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CbD7-yyC.js";import"./Expander-B0D-VDjX.js";import"./ChevronUpIcon-BdBmyBTi.js";import"./ListItem-CargbWXb.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
