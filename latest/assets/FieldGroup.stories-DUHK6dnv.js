import{r as n,j as i}from"./iframe-CMh9D78E.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-_jqVxWa0.js";import{CheckboxStory as c}from"./Checkbox.stories-By-qrb9-.js";import d from"./Help.stories-DH2A0jey.js";import k from"./RadioButton.stories-D5AVeVR9.js";import{RadioPanel as u}from"./RadioPanel.stories-C2Gs2X7G.js";import{F as g}from"./FieldGroup-CX18E8VX.js";import{C as h}from"./Checkbox-B_JGApQs.js";import{R as b}from"./RadioPanel-CwilOBAa.js";import{H as x}from"./Help-B0JhuNDA.js";import{R as C}from"./RadioButton-BouV2Ccy.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-VHYuUSHZ.js";import"./clsx-B-dksMZM.js";import"./Flex-BZtZHP-l.js";import"./SlotComponent-DAEVvFBD.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C_udnBYa.js";import"./usePreviousValue-Bj1npgNl.js";import"./Loader-XawThx7b.js";import"./useDelayedRender-CRfNgOTZ.js";import"./useId-KCngitWY.js";import"./Label-BfTu1n6N.js";import"./SupportLabel-Br2DEvJa.js";import"./SuccessIcon-CFj_OqD6.js";import"./Icon-DYUnmMnn.js";import"./WarningIcon-CbHS5Rbp.js";import"./BaseRadioButton.stories-CofPeBGI.js";import"./BaseRadioButton-BB2wzTi2.js";import"./Title-B6J2eK3O.js";import"./Card-CzS5P2Uz.js";import"./Text-DB3lr-fV.js";import"./Tag-Bh5qaLzq.js";import"./ExpandablePanel-DHqgKvDS.js";import"./useAnimatedHeightBetween-kzc6ZmNt.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BCDhVzfI.js";import"./Expander-Db7DbcPO.js";import"./ChevronUpIcon-DnrfAcnN.js";import"./ListItem-BtYqlJJN.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
