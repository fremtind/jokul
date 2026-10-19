import{r as n,j as i}from"./iframe-BK24M5Oe.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CxkqCH-P.js";import{CheckboxStory as c}from"./Checkbox.stories-D7CxoiAb.js";import d from"./Help.stories-BZQjy_Xj.js";import k from"./RadioButton.stories-CZLn3zX4.js";import{RadioPanel as u}from"./RadioPanel.stories-Cxifhozn.js";import{F as g}from"./FieldGroup-DXOwVK5V.js";import{C as h}from"./Checkbox-cYKa5C_b.js";import{R as b}from"./RadioPanel-buC1V1aZ.js";import{H as x}from"./Help-DY60T-OL.js";import{R as C}from"./RadioButton-CXECx3Dk.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C0bBjtdV.js";import"./clsx-B-dksMZM.js";import"./Flex-CtmWpnaf.js";import"./SlotComponent-RKf43eom.js";import"./mergeRefs-DdPSoY4m.js";import"./Button-BXxm3ag3.js";import"./usePreviousValue-Dm7-2-b1.js";import"./Loader-DYpw2Bm-.js";import"./useDelayedRender-BP9XK7Zk.js";import"./useId-JCj1BlW-.js";import"./Label-D454D0nm.js";import"./SupportLabel-D5LsSob8.js";import"./SuccessIcon-yEJbChJp.js";import"./Icon-CW7-MYqB.js";import"./WarningIcon-D8VLpzqT.js";import"./BaseRadioButton.stories-BrbZhM_z.js";import"./BaseRadioButton-kuApLFPS.js";import"./Title-GEpLXO2M.js";import"./Card-CtCd9Lll.js";import"./Text-D8cXO25o.js";import"./Tag-4Y-0CDyK.js";import"./ExpandablePanel-yGT4V9m8.js";import"./useAnimatedHeightBetween-DxuHDjFP.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BQpK0O4f.js";import"./Expander-C8ldt6qq.js";import"./ChevronUpIcon-Bpt1WRoW.js";import"./ListItem-BDXbnLl8.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
