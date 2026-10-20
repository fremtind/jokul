import{r as n,j as i}from"./iframe-1ffnmLT_.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Ta_grWB3.js";import{CheckboxStory as c}from"./Checkbox.stories-Crcf8siE.js";import d from"./Help.stories-2XBJIWaf.js";import k from"./RadioButton.stories-BnSytd22.js";import{RadioPanel as u}from"./RadioPanel.stories-dZR1LLhy.js";import{F as g}from"./FieldGroup-BAb1SlQs.js";import{C as h}from"./Checkbox-B91hyyps.js";import{R as b}from"./RadioPanel-C2rXxlbc.js";import{H as x}from"./Help-gb8qTvzZ.js";import{R as C}from"./RadioButton-qAWmB4l8.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Vfiuj-Jc.js";import"./clsx-B-dksMZM.js";import"./Flex-RWZ32G2D.js";import"./SlotComponent-OoyranDD.js";import"./mergeRefs-B6sgCD8e.js";import"./Button-BxWlYtbc.js";import"./usePreviousValue-DTnPmkC9.js";import"./Loader-D3uk9gUw.js";import"./useDelayedRender-zLKME6WS.js";import"./useId-Fs0FsRV4.js";import"./Label-7BHNybe5.js";import"./SupportLabel-Z2YkQDEJ.js";import"./SuccessIcon-B38grMQP.js";import"./Icon-oZqmbVJA.js";import"./WarningIcon-D_kzO5US.js";import"./BaseRadioButton.stories-CGeF1ETJ.js";import"./BaseRadioButton-D9JUv4bY.js";import"./Title-BKG6ZHKf.js";import"./Card-xxCLMoKE.js";import"./Text-BvwLJsEm.js";import"./Tag-9dvGDN2z.js";import"./ExpandablePanel-C6r14LqZ.js";import"./useAnimatedHeightBetween-MrloOgop.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DPtpm4MA.js";import"./Expander-BxdfFQof.js";import"./ChevronUpIcon-DAPkkj4d.js";import"./ListItem-C9DN6hx9.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
