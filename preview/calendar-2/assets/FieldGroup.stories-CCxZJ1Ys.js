import{r as p,j as i}from"./iframe-DxYlN7nq.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-NoA8JypC.js";import l from"./Help.stories-C2rH_B1i.js";import c from"./RadioButton.stories-C5noGbI7.js";import{F as d}from"./FieldGroup-CGta8ljd.js";import{C as k,a as u}from"./CheckboxPanel.stories-p-H1sKLM.js";import{RadioPanel as g}from"./RadioPanel.stories-CaQD2d8s.js";import{C as h}from"./Checkbox-BXhrxs83.js";import{R as b}from"./RadioPanel-2k4X0oSm.js";import{H as x}from"./Help-DWBz9hPz.js";import{R as C}from"./RadioButton-DeOE6ziB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dcq2o0V2.js";import"./Label-VCDfnGxr.js";import"./SupportLabel-DJpuwltU.js";import"./SuccessIcon-dMtpW5y_.js";import"./Icon-CXmdW7MR.js";import"./WarningIcon-D7Wl25q-.js";/* empty css               *//* empty css               */import"./Flex-C_djToRd.js";import"./SlotComponent-B9_Z_TVR.js";import"./mergeRefs-1ER95Lb_.js";import"./BaseRadioButton.stories-B83Bfhat.js";import"./BaseRadioButton-RgOBGDPE.js";import"./InputPanel-CNX-sTVS.js";import"./Button-CB-EMXsJ.js";import"./usePreviousValue-DSEJxdc0.js";import"./Loader-BBt6OLHx.js";import"./useDelayedRender-DAcsp19A.js";import"./Title-CClTTFW8.js";import"./Card-Crhs0toD.js";import"./Text-B-n6R61W.js";import"./Tag-C4RGwF4o.js";import"./ExpandablePanel-Dg_zn3FB.js";import"./useAnimatedHeightBetween-DZRVy8j1.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BM5AkK8a.js";import"./Expander-BUZPWQyA.js";import"./ChevronUpIcon-CUNvHKDV.js";import"./ListItem-DtGQx0c9.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
