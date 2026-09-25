import{r as n,j as i}from"./iframe-BHVNXWC0.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D2fBWvK9.js";import{CheckboxStory as c}from"./Checkbox.stories-CPBYequL.js";import d from"./Help.stories-05Q--S1w.js";import k from"./RadioButton.stories-D7bMcy5p.js";import{RadioPanel as u}from"./RadioPanel.stories-DLS05xfu.js";import{F as g}from"./FieldGroup-ByjVkzWB.js";import{C as h}from"./Checkbox-DC1nfwRo.js";import{R as b}from"./RadioPanel-jlQZVUAi.js";import{H as x}from"./Help-DaUH8u_g.js";import{R as C}from"./RadioButton-BQXVYGgi.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BCoyXQhE.js";import"./clsx-B-dksMZM.js";import"./Flex-Br9BJssv.js";import"./SlotComponent-BlluqKlN.js";import"./mergeRefs-DIkTecFL.js";import"./Button-2tryLUfP.js";import"./usePreviousValue-BLTvEOjc.js";import"./Loader-BTFuo0eh.js";import"./useDelayedRender-BzC1ccEE.js";import"./useId-DujS4V_U.js";import"./Label-vSIibSXe.js";import"./SupportLabel-CfGZ_fAk.js";import"./SuccessIcon-CwLKuoaw.js";import"./Icon-0x92Wr0j.js";import"./WarningIcon-DETL_8Sq.js";import"./BaseRadioButton.stories-C_YjOS4m.js";import"./BaseRadioButton-DJQ0wYcB.js";import"./Title-GUZ6sCve.js";import"./Card-SNX-O7h1.js";import"./Text-BGHLJqzp.js";import"./Tag-CNIAGGxR.js";import"./ExpandablePanel-Dy_2npzy.js";import"./useAnimatedHeightBetween-DvDkBwQE.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bn2CwFzn.js";import"./Expander-iVqtif7Y.js";import"./ChevronUpIcon-C75wmLcW.js";import"./ListItem-oDoksoVJ.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
