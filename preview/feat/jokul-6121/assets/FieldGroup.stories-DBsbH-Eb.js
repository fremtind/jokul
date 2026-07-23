import{r as p,j as i}from"./iframe-BY4l5AQT.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-9NZi1nXn.js";import l from"./Help.stories-CwtQlHBr.js";import c from"./RadioButton.stories-Lnt-rB58.js";import{F as d}from"./FieldGroup-DGKLVS1Q.js";import{C as k,a as u}from"./CheckboxPanel.stories-CNW2FXyX.js";import{RadioPanel as g}from"./RadioPanel.stories-VU9lk2w6.js";import{C as h}from"./Checkbox-B1d9Dqe0.js";import{R as b}from"./RadioPanel-DJKIdmCm.js";import{H as x}from"./Help-DZ8-msz7.js";import{R as C}from"./RadioButton-B6nvxJaK.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-lQ3eqXZW.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DPl1AB6o.js";import"./mergeRefs-B2WD0-0u.js";import"./BaseRadioButton.stories-CdJwrv8Q.js";import"./BaseRadioButton-cIUOjJky.js";import"./useId-DGCzjJj8.js";import"./Label-Xe7jATVQ.js";import"./SupportLabel-CEek2byc.js";import"./SuccessIcon-CGRHrg33.js";import"./Icon-vBADFVVG.js";import"./WarningIcon-LEkevAZz.js";import"./InputPanel-CBt1IcS-.js";import"./Button-DkCXRU2f.js";import"./usePreviousValue-BygTuPlF.js";import"./Loader-BhaGTY8l.js";import"./useDelayedRender-DP8KlfRD.js";import"./Title-BrKBXhhD.js";import"./Card-BFx0r62z.js";import"./Text-DFyDmYXq.js";import"./Tag-CAsqB_Ch.js";import"./ExpandablePanel-CC-2IY4z.js";import"./useAnimatedHeightBetween-Ct2YsSlr.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C4hKkyix.js";import"./Expander-CfC4ZRPB.js";import"./ChevronDownIcon-DyKF3KPE.js";import"./ChevronUpIcon-FOSD8G0j.js";import"./ListItem-_fXSYLRT.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
