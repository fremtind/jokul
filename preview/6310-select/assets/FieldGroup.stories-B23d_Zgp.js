import{r as p,j as i}from"./iframe-D9kSFuA9.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C0wMqJX8.js";import l from"./Help.stories-kIwGlnfX.js";import c from"./RadioButton.stories-l_N_m9lk.js";import{F as d}from"./FieldGroup-DuHWlwOf.js";import{C as k,a as u}from"./CheckboxPanel.stories-BViGQCiS.js";import{RadioPanel as g}from"./RadioPanel.stories-DUuIi0cm.js";import{C as h}from"./Checkbox-BpuKCnTt.js";import{R as b}from"./RadioPanel-nuMeL56w.js";import{H as x}from"./Help-CEsbtw2q.js";import{R as C}from"./RadioButton-BKhikdVE.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-DRhELqQS.js";import"./BaseRadioButton-CFjQ7SV2.js";import"./clsx-B-dksMZM.js";import"./useId-D22LZ5n7.js";import"./Label-D8ZibVYC.js";import"./SupportLabel-bo2zjcax.js";import"./SuccessIcon-CIFt1Ycj.js";import"./Icon-BLapKwvt.js";import"./WarningIcon-BtWrpef4.js";import"./InputPanel-ChkEyple.js";import"./Flex-CNVujxkH.js";import"./SlotComponent-BJRTw0R0.js";import"./mergeRefs-Dxsv5MCg.js";import"./Button-B8V-wdNl.js";import"./usePreviousValue-Bu6BhQu0.js";import"./Loader-CyCOnNb1.js";import"./useDelayedRender-DAamotdo.js";import"./Title-BWeJ8CDw.js";import"./Card-BCbk4cZi.js";import"./Text-DiTIxHpJ.js";import"./Tag-BqDgJtLa.js";import"./ExpandablePanel-BCxX0gtz.js";import"./useAnimatedHeightBetween-nm9ks2HA.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-B8Oyex0o.js";import"./Expander-D-PJlo-X.js";import"./ChevronDownIcon-BprJ0k6m.js";import"./ChevronUpIcon-B-HnLx0S.js";import"./ListItem-CV6ExH8D.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
