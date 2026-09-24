import{r as n,j as i}from"./iframe-BdIrVqzM.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-9-JM3Ziw.js";import{CheckboxStory as c}from"./Checkbox.stories-seLZHMIl.js";import d from"./Help.stories-1XFICs7M.js";import k from"./RadioButton.stories-BC5md0Rz.js";import{RadioPanel as u}from"./RadioPanel.stories-DRf1Qx0G.js";import{F as g}from"./FieldGroup-CKefhOaB.js";import{C as h}from"./Checkbox-DtkebIqu.js";import{R as b}from"./RadioPanel-CUIGys93.js";import{H as x}from"./Help-WuMhGizq.js";import{R as C}from"./RadioButton-DId2Knsz.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Jgol4XBb.js";import"./clsx-B-dksMZM.js";import"./Flex-CX_PdECB.js";import"./SlotComponent-D_y_e60b.js";import"./mergeRefs-_TUaWtbm.js";import"./Button-BPC6G1WC.js";import"./usePreviousValue-DGJSs1hO.js";import"./Loader-CqN9cLY8.js";import"./useDelayedRender-BRspF-oz.js";import"./useId-Dj2Mq57t.js";import"./Label-DQDtwM1k.js";import"./SupportLabel-GEYR-FPx.js";import"./SuccessIcon-BoeK-BMG.js";import"./Icon-0_MgDjGX.js";import"./WarningIcon-C1iwehkN.js";import"./BaseRadioButton.stories-BClA-PAJ.js";import"./BaseRadioButton-B3GSLbMb.js";import"./Title-C1GNvED-.js";import"./Card-DLp1oTZ9.js";import"./Text-DC6YJeu8.js";import"./Tag--a3Oxp3z.js";import"./ExpandablePanel-D4hIL8qe.js";import"./useAnimatedHeightBetween-CrmBVIiP.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D2zgUPg5.js";import"./Expander-BBAb-sJs.js";import"./ChevronUpIcon-BH2KbJJ9.js";import"./ListItem-qwd91b_t.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
