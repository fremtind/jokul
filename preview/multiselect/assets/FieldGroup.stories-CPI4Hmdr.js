import{r as p,j as i}from"./iframe-CZlElHO0.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CRd4OM7D.js";import l from"./Help.stories-C0vWyV_n.js";import c from"./RadioButton.stories-DK8BTCSU.js";import{F as d}from"./FieldGroup-7GoafMSB.js";import{C as k,a as u}from"./CheckboxPanel.stories-80y8rwFW.js";import{RadioPanel as g}from"./RadioPanel.stories-DjeVFSxJ.js";import{C as h}from"./Checkbox-CdORc5zz.js";import{R as b}from"./RadioPanel-B3yvrca6.js";import{H as x}from"./Help-C3G9QJOy.js";import{R as C}from"./RadioButton-Cpd-eCzq.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CZbZC_pp.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BbVH7kR2.js";import"./mergeRefs-K08BmiaH.js";import"./BaseRadioButton.stories-lN1prrJ_.js";import"./BaseRadioButton-B0bCfS1B.js";import"./useId-BTvD4Y_5.js";import"./Label-ki28Kxko.js";import"./SupportLabel-DM54nzaK.js";import"./SuccessIcon-9HLz9Iv2.js";import"./Icon-DzxIk3De.js";import"./WarningIcon-DyrZLjMg.js";import"./InputPanel-ccgV18oC.js";import"./Button-l9EBm3FP.js";import"./usePreviousValue-DbnqLmp7.js";import"./Loader-DBt2IG0N.js";import"./useDelayedRender-CI9OYFpF.js";import"./Title-By3yirHm.js";import"./Card-Bjis7QXo.js";import"./Text-hH0g_ezK.js";import"./Tag-vi3yJVvO.js";import"./ExpandablePanel-DKzQXpsO.js";import"./useAnimatedHeightBetween-DbRMqZhW.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Dv2FMxuW.js";import"./Expander-CBjsy1rh.js";import"./ChevronDownIcon-VHDObz4X.js";import"./ChevronUpIcon-BuKJXalV.js";import"./ListItem-C8ni_Mfl.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
