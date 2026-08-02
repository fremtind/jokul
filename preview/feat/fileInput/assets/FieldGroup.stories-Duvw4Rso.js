import{r as p,j as i}from"./iframe-DUO0Prub.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CIi0SlgS.js";import l from"./Help.stories-oV4y-2Op.js";import c from"./RadioButton.stories-Bjrr-MOI.js";import{F as d}from"./FieldGroup-rOJ3-iU0.js";import{C as k,a as u}from"./CheckboxPanel.stories-BeQMGcSP.js";import{RadioPanel as g}from"./RadioPanel.stories-CfwgX2od.js";import{C as h}from"./Checkbox-BIl4mzkx.js";import{R as b}from"./RadioPanel-YCt2-NWF.js";import{H as x}from"./Help-DueO-YxM.js";import{R as C}from"./RadioButton-CUQ4czsM.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CLGwHkBZ.js";import"./BaseRadioButton-j5YHF-di.js";import"./clsx-B-dksMZM.js";import"./useId-B7pzm72k.js";import"./Label-BehjC_Wt.js";import"./SupportLabel-D17FcdVd.js";import"./SuccessIcon-CxYeiKL6.js";import"./Icon-Ch58P3r8.js";import"./WarningIcon-BESjCQ3m.js";import"./InputPanel-CSZFJuJ8.js";import"./Flex-DOQcb894.js";import"./SlotComponent-5DbqpgOi.js";import"./mergeRefs-D0SesQL3.js";import"./Button-BmT8x9C_.js";import"./usePreviousValue-BbUrPO14.js";import"./Loader-DCbenC-e.js";import"./useDelayedRender-CFNp-9dk.js";import"./Title-6oNErEqw.js";import"./Card-CeRhWwQs.js";import"./Text-9EZAJw1S.js";import"./Tag-BA1cLYfr.js";import"./ExpandablePanel-Bn5toMDm.js";import"./useAnimatedHeightBetween-CT4ExzH3.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-osOSB9fJ.js";import"./Expander--hFFH6-S.js";import"./ChevronDownIcon-CNFPW-TI.js";import"./ChevronUpIcon-Bo1sAokR.js";import"./ListItem-HIBmzJ-2.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
