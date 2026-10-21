import{r as n,j as i}from"./iframe-Bn0ZkiIR.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D3WTcJ1v.js";import{CheckboxStory as c}from"./Checkbox.stories-C0BT7lUj.js";import d from"./Help.stories-C2JDDnw7.js";import k from"./RadioButton.stories-SUOeJBxs.js";import{RadioPanel as u}from"./RadioPanel.stories-DaeFEHfx.js";import{F as g}from"./FieldGroup-Bwx6rtcH.js";import{C as h}from"./Checkbox-DAsIwEbm.js";import{R as b}from"./RadioPanel-CGTh-i-V.js";import{H as x}from"./Help-GeT29o_o.js";import{R as C}from"./RadioButton-QJnNnUsj.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C77fAdQd.js";import"./clsx-B-dksMZM.js";import"./Flex-D8KaHHsq.js";import"./SlotComponent-CPpXtROy.js";import"./mergeRefs-BdXeBRhG.js";import"./Button-Ch8WbV_E.js";import"./usePreviousValue-CRruulwY.js";import"./Loader-BlG2TXt5.js";import"./useDelayedRender-CuCj5d6u.js";import"./useId-D3y2Tk0Q.js";import"./Label-CKI5pYA0.js";import"./SupportLabel-uGSTvQaP.js";import"./SuccessIcon-OfiQCLUU.js";import"./Icon-BiwrzqPC.js";import"./WarningIcon-Cx19SITa.js";import"./BaseRadioButton.stories-c6mKez1K.js";import"./BaseRadioButton-B4ySe1l9.js";import"./Title-DPQUrltc.js";import"./Card-CbhZhHRU.js";import"./Text-cyb-ebB4.js";import"./Tag-D91j26Zq.js";import"./ExpandablePanel-BjxGNgF2.js";import"./useAnimatedHeightBetween-5WZiWhq5.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-7nPzXfpj.js";import"./Expander-tC4KNzMz.js";import"./ChevronUpIcon-CcTIPHNw.js";import"./ListItem-CisATc2S.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
