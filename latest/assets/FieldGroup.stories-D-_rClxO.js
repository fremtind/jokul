import{r as p,j as i}from"./iframe-DLQRFuRu.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BzoQk8S7.js";import l from"./Help.stories-D1abHbo9.js";import c from"./RadioButton.stories-CNct9oAI.js";import{F as d}from"./FieldGroup-C7c-SDGQ.js";import{C as k,a as u}from"./CheckboxPanel.stories-D5a-uPKj.js";import{RadioPanel as g}from"./RadioPanel.stories-CZpnhcFr.js";import{C as h}from"./Checkbox-BeuyF2i5.js";import{R as b}from"./RadioPanel-BzOtRuX_.js";import{H as x}from"./Help-CwiFzFEn.js";import{R as C}from"./RadioButton-CNI-rhMz.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CAxbTa3g.js";import"./BaseRadioButton-D3yffbkK.js";import"./clsx-B-dksMZM.js";import"./useId-CyP4rD9-.js";import"./Label-CL_cA6vL.js";import"./SupportLabel-8E_dZTLj.js";import"./SuccessIcon-yZX4g4Yk.js";import"./Icon-MpdY__nX.js";import"./WarningIcon-E6zVN4J6.js";import"./InputPanel-_i9UXLPv.js";import"./Flex-BrlZnVCO.js";import"./SlotComponent-BMqZ57yW.js";import"./mergeRefs-Bv4HUwBp.js";import"./Button-COm2JjOf.js";import"./usePreviousValue-DVEeaUMC.js";import"./Loader-Di54B58F.js";import"./useDelayedRender-BOKmLadx.js";import"./Title-CW__lOGl.js";import"./Card-DUMlLgZ_.js";import"./Text-D7XJvRwz.js";import"./Tag-Bu93DCJ7.js";import"./ExpandablePanel-DSN221yS.js";import"./useAnimatedHeightBetween-DyVol2bP.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CZ1f1x1g.js";import"./Expander-DICeI6yg.js";import"./ChevronDownIcon-BeRnyEJB.js";import"./ChevronUpIcon-qgm2FV1T.js";import"./ListItem-Y8WDF0S4.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
