import{r as n,j as i}from"./iframe-DFYilmda.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-rDEA5OK-.js";import l from"./Help.stories-DInboNM9.js";import c from"./RadioButton.stories-CmOYNRBX.js";import{F as d}from"./FieldGroup-BLYQxaH9.js";import{C as k,a as u}from"./CheckboxPanel.stories-DBttpHlp.js";import{RadioPanel as g}from"./RadioPanel.stories-BaB3SXBs.js";import{C as h}from"./Checkbox-B7wIbM4K.js";import{R as b}from"./RadioPanel-CVBdtr3Z.js";import{H as x}from"./Help-H-7C1hKn.js";import{R as C}from"./RadioButton-DvcT3x0L.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BZ0LmZpC.js";import"./Label-0KA88Hi4.js";import"./SupportLabel-DsEmiH1H.js";import"./SuccessIcon-ALBUGROa.js";import"./Icon-DdZwclia.js";import"./WarningIcon-WvDENPwA.js";import"./BaseRadioButton.stories-DGxOqxEh.js";import"./BaseRadioButton-D7Pk-6d6.js";import"./InputPanel-fUq3YYOp.js";import"./Flex-Djs8qx7r.js";import"./SlotComponent-7UfZ29eB.js";import"./mergeRefs-anKcfEnU.js";import"./Button-BkFErIc7.js";import"./usePreviousValue-DzyWNXCt.js";import"./Loader-y6NOItUt.js";import"./useDelayedRender-g4dPVVPK.js";import"./Title-DZui1aGl.js";import"./Card-COmLahAx.js";import"./Text-vuppwMIO.js";import"./Tag-Nc8SA-BX.js";import"./ExpandablePanel-BAiNRfTN.js";import"./useAnimatedHeightBetween-CViBHZm3.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-3V3llEci.js";import"./Expander-DAunXCxN.js";import"./ChevronUpIcon-CUdvxQcO.js";import"./ListItem-DP-tmBMC.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
