import{r as p,j as i}from"./iframe-CE2TGHfE.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C5OHm0VN.js";import l from"./Help.stories-C6juukwg.js";import c from"./RadioButton.stories-DmLzsIww.js";import{F as d}from"./FieldGroup--sycrNtN.js";import{C as k,a as u}from"./CheckboxPanel.stories-BVrrGn5W.js";import{RadioPanel as g}from"./RadioPanel.stories-BLocSK4a.js";import{C as h}from"./Checkbox-CmlhwKGI.js";import{R as b}from"./RadioPanel-CQJARbbJ.js";import{H as x}from"./Help-CTMTZZAd.js";import{R as C}from"./RadioButton-CflnR-dg.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-4j0xAmby.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-Bk7zUpDR.js";import"./mergeRefs-BdvyopZE.js";import"./BaseRadioButton.stories-gTjbROTA.js";import"./BaseRadioButton-DEQ8weml.js";import"./useId-CZJz2ln4.js";import"./Label-B8XMbroq.js";import"./SupportLabel-YbhWDJ8G.js";import"./SuccessIcon-_X8Y4pi0.js";import"./Icon-AcSprluj.js";import"./WarningIcon-Bkss4WIP.js";import"./InputPanel-BZi5OV4b.js";import"./Button-PrL7W0qK.js";import"./usePreviousValue-BnKm30Ja.js";import"./Loader-ClF7yykp.js";import"./useDelayedRender-DdladrNH.js";import"./Title-CXbKmamf.js";import"./Card-BI1CjxDe.js";import"./Text-CcF9mS_P.js";import"./Tag-CuwJL0Px.js";import"./ExpandablePanel-DxXLKHx0.js";import"./useAnimatedHeightBetween-D0GbcjlZ.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Cs_4VmLQ.js";import"./Expander-D_V4yP0D.js";import"./ChevronUpIcon-i4oIDla8.js";import"./ListItem-DIXDCnyT.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
