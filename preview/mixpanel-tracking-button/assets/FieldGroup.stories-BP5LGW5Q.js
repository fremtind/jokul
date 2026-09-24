import{r as n,j as i}from"./iframe-BaF8H7Ap.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DRIoi3fT.js";import{CheckboxStory as c}from"./Checkbox.stories-DRRD0lhc.js";import d from"./Help.stories-CCMUP6_0.js";import k from"./RadioButton.stories-D5ZhkTgc.js";import{RadioPanel as u}from"./RadioPanel.stories-Cob_h9kJ.js";import{F as g}from"./FieldGroup-BbPGg3vj.js";import{C as h}from"./Checkbox-Bv7Ff3nV.js";import{R as b}from"./RadioPanel-COtxfr0Z.js";import{H as x}from"./Help-D6ljkTsE.js";import{R as C}from"./RadioButton-0MbM3pk4.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-JwHrqlB_.js";import"./clsx-B-dksMZM.js";import"./Flex-DU4Aqcmx.js";import"./SlotComponent-CQSJwdwa.js";import"./mergeRefs-DJ3mhAHf.js";import"./Button-CZpwOv6p.js";import"./usePreviousValue-BZuuYFks.js";import"./Loader-DcNcnzwY.js";import"./useDelayedRender-DDIuNtQD.js";import"./useId-C08FyA_S.js";import"./Label-cVb9HkEc.js";import"./SupportLabel-5Us-ppHQ.js";import"./SuccessIcon-BS68v-w2.js";import"./Icon-eS2heO-V.js";import"./WarningIcon-GIgFV64w.js";import"./BaseRadioButton.stories-BguD7Chu.js";import"./BaseRadioButton-GwpafNIv.js";import"./Title-BEZ7eIw0.js";import"./Card-BRVGN04c.js";import"./Text-C7kB12zG.js";import"./Tag-DMwNA9dH.js";import"./ExpandablePanel-B05h25YF.js";import"./useAnimatedHeightBetween-CIxIOQ2p.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CqnT0nYG.js";import"./Expander-D-dRnvpc.js";import"./ChevronUpIcon-Cyq8eHQ3.js";import"./ListItem-D_LqeZHT.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
