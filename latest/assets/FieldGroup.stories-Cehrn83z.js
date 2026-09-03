import{r as p,j as i}from"./iframe-DYX5L1tz.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-rRjMWlGh.js";import l from"./Help.stories-BY04v4H2.js";import c from"./RadioButton.stories-FhjQR930.js";import{F as d}from"./FieldGroup-Cd-pWEwm.js";import{C as k,a as u}from"./CheckboxPanel.stories-CeO54wPU.js";import{RadioPanel as g}from"./RadioPanel.stories-Cu7MeLUe.js";import{C as h}from"./Checkbox-if3awTC8.js";import{R as b}from"./RadioPanel-D781R_UQ.js";import{H as x}from"./Help-BExjoAtq.js";import{R as C}from"./RadioButton-CDUvjK4W.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-DbrpCqIK.js";import"./BaseRadioButton-B3GtaJ5I.js";import"./clsx-B-dksMZM.js";import"./useId-C1DxfGTU.js";import"./Label-C403Yzhu.js";import"./SupportLabel-CwkjqFCZ.js";import"./SuccessIcon-DHzNx0s4.js";import"./Icon-DQVhn6gw.js";import"./WarningIcon-pnDFFXmq.js";import"./InputPanel-o_g8OOfD.js";import"./Flex-CM1oRz1x.js";import"./SlotComponent-BOuKMuOn.js";import"./mergeRefs-CNe_zb5T.js";import"./Button-QAEqLoIl.js";import"./usePreviousValue-DJH8URbW.js";import"./Loader-BUfLNfWf.js";import"./useDelayedRender-DUnalXY6.js";import"./Title-LR94WVzi.js";import"./Card-CSPaFV6d.js";import"./Text-Bu_kOAsz.js";import"./Tag-taDOKBoG.js";import"./ExpandablePanel-BiRiBT63.js";import"./useAnimatedHeightBetween-R7JAOp2x.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Dco5RK37.js";import"./Expander-DGKJb4fy.js";import"./ChevronDownIcon-DZepI-PP.js";import"./ChevronUpIcon-BOrwqiUx.js";import"./ListItem-BbQWZO2b.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
