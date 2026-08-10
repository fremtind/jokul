import{r as p,j as i}from"./iframe-mDI-ERzW.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DRkXtQmv.js";import l from"./Help.stories-C_oqjJvw.js";import c from"./RadioButton.stories-B1UDu4Oi.js";import{F as d}from"./FieldGroup-kj6knRi-.js";import{C as k,a as u}from"./CheckboxPanel.stories-CfMCfX9t.js";import{RadioPanel as g}from"./RadioPanel.stories-q6FjJiam.js";import{C as h}from"./Checkbox-CUwCriFc.js";import{R as b}from"./RadioPanel-B1NuqHM0.js";import{H as x}from"./Help-Ct1d97YR.js";import{R as C}from"./RadioButton-Bmh-jbxL.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-B91o-x_8.js";import"./BaseRadioButton-BZZnjpTM.js";import"./clsx-B-dksMZM.js";import"./useId-C6FBGtR_.js";import"./Label-BWjgAUAs.js";import"./SupportLabel-Dr6rVcsi.js";import"./SuccessIcon-TfCAhuTN.js";import"./Icon-DqmZpaiT.js";import"./WarningIcon-Bhlvnqmm.js";import"./InputPanel-BX0QZ1zB.js";import"./Flex-DS0nuRyp.js";import"./SlotComponent-Ut8aYBB9.js";import"./mergeRefs-D2070bu0.js";import"./Button-DXTlQcko.js";import"./usePreviousValue-DXmte9c9.js";import"./Loader-BscjeYEQ.js";import"./useDelayedRender-DJ3XfUuw.js";import"./Title-D_pgNYLK.js";import"./Card-xCkZzXZY.js";import"./Text-l_EyMVAS.js";import"./Tag-BOL8Cnbc.js";import"./ExpandablePanel-DP6xExCR.js";import"./useAnimatedHeightBetween-_x6b4iVe.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-qvsG8Rr6.js";import"./Expander-BKOabVgC.js";import"./ChevronDownIcon-CbE9nIIO.js";import"./ChevronUpIcon-BO3lcJFT.js";import"./ListItem-CzPCru77.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
