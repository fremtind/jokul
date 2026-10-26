import{r as n,j as i}from"./iframe-B253gQz5.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BkupGwYN.js";import{CheckboxStory as c}from"./Checkbox.stories-DiaGqEzA.js";import d from"./Help.stories-Y7l95RId.js";import k from"./RadioButton.stories-Bxm7REdY.js";import{RadioPanel as u}from"./RadioPanel.stories-D5dRn4GM.js";import{F as g}from"./FieldGroup-BqQm3RAI.js";import{C as h}from"./Checkbox-Daw2wXat.js";import{R as b}from"./RadioPanel-BfnDsE7c.js";import{H as x}from"./Help-D6mrSVDB.js";import{R as C}from"./RadioButton-CTYn32LI.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CxKE_jic.js";import"./clsx-B-dksMZM.js";import"./Flex-DoOfeiHy.js";import"./SlotComponent-K3ft9CZM.js";import"./mergeRefs-gdrUurqB.js";import"./Button-BNrA4tdn.js";import"./usePreviousValue-D9TzeXYJ.js";import"./Loader-COkLCZ61.js";import"./useDelayedRender-CRihzcax.js";import"./useId-CSiHipd-.js";import"./Label-BEjAibyP.js";import"./SupportLabel-DXRQtGMv.js";import"./SuccessIcon-i6V-xjPa.js";import"./Icon-Ba_Sietz.js";import"./WarningIcon-Cy9w4GUe.js";import"./BaseRadioButton.stories-KIqOlm0Y.js";import"./BaseRadioButton-BMeb5caL.js";import"./Title-943lTHTe.js";import"./Card-BIw44VNh.js";import"./Text-C7LDQzKl.js";import"./Tag-B5XZ0Pu-.js";import"./ExpandablePanel-Bm8fGiuQ.js";import"./useAnimatedHeightBetween-Bp1BOO5R.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CXdD9a4X.js";import"./Expander-D_CCYFwQ.js";import"./ChevronUpIcon-l_9_CWVq.js";import"./ListItem-CXLZR97O.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
