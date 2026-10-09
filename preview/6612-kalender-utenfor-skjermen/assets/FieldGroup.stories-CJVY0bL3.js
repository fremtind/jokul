import{r as n,j as i}from"./iframe-BwkVf8HS.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Blwtj6V_.js";import{CheckboxStory as c}from"./Checkbox.stories-ysc0E6fL.js";import d from"./Help.stories-Vol1morC.js";import k from"./RadioButton.stories-T13W7BSV.js";import{RadioPanel as u}from"./RadioPanel.stories-DVPqTVDk.js";import{F as g}from"./FieldGroup-XfrjwUah.js";import{C as h}from"./Checkbox-Do7uaw8R.js";import{R as b}from"./RadioPanel-DxsGNs_k.js";import{H as x}from"./Help-B_nzVzlD.js";import{R as C}from"./RadioButton-50HQXDgD.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-ByBGbOna.js";import"./clsx-B-dksMZM.js";import"./Flex-BWcahJSS.js";import"./SlotComponent-DeBxuUj4.js";import"./mergeRefs-C3rzeL7E.js";import"./Button-CDqkZ-ts.js";import"./usePreviousValue-XS2zbzpo.js";import"./Loader-BDeudmsz.js";import"./useDelayedRender-foiVh2KM.js";import"./useId-D2Gib_Lw.js";import"./Label-CzrMKc58.js";import"./SupportLabel-CqiH7ePF.js";import"./SuccessIcon-BZAC2q9o.js";import"./Icon-B8CXOd5T.js";import"./WarningIcon-V-hjaUq0.js";import"./BaseRadioButton.stories-gdP0kGMw.js";import"./BaseRadioButton-OR92Cf2Y.js";import"./Title-DdG6UOAO.js";import"./Card-Cwcw66y4.js";import"./Text-BNP4D2NE.js";import"./Tag-Ct6tySAi.js";import"./ExpandablePanel-CcxhiNb4.js";import"./useAnimatedHeightBetween-UoVod3N6.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DKcsSE7H.js";import"./Expander-CFy74nVs.js";import"./ChevronUpIcon-BmDiYC23.js";import"./ListItem-CgPX5I_i.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
