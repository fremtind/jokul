import{r as n,j as i}from"./iframe-BHotWgxa.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-v93wkA6d.js";import{CheckboxStory as c}from"./Checkbox.stories-BNFDaqIs.js";import d from"./Help.stories-BOOL2WPZ.js";import k from"./RadioButton.stories--H_h5pd-.js";import{RadioPanel as u}from"./RadioPanel.stories-tV_IRh23.js";import{F as g}from"./FieldGroup-DxC9TCGq.js";import{C as h}from"./Checkbox-mQyMVn9l.js";import{R as b}from"./RadioPanel-CaQX4KVY.js";import{H as x}from"./Help-CTlyfxf-.js";import{R as C}from"./RadioButton-CUGDlLHS.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C4zgQNgH.js";import"./clsx-B-dksMZM.js";import"./Flex-CyG3-zjK.js";import"./SlotComponent-BCZVth_-.js";import"./mergeRefs-CAtpy---.js";import"./Button-BuqIC9id.js";import"./usePreviousValue-Byu3Y8Wh.js";import"./Loader-CCAQ82fL.js";import"./useDelayedRender-D1obbdKa.js";import"./useId-DOYgyXMh.js";import"./Label-CET3zrE_.js";import"./SupportLabel-CAkRxk1A.js";import"./SuccessIcon-CjqRZseD.js";import"./Icon-BDaSTrYc.js";import"./WarningIcon-C4sRCZ7B.js";import"./BaseRadioButton.stories-DxhO2BIh.js";import"./BaseRadioButton-BuYohaDP.js";import"./Title-B0sgSTGT.js";import"./Card-C3_6-GIb.js";import"./Text-BLpUIrHB.js";import"./Tag-CNQ7wli4.js";import"./ExpandablePanel-b2IcR1N5.js";import"./useAnimatedHeightBetween-C3fMVhWm.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Cmu0Q9Mo.js";import"./Expander-DmsL0ol6.js";import"./ChevronUpIcon-COlSjJA8.js";import"./ListItem-BvKejjWD.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
