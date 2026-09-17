import{r as n,j as i}from"./iframe-CKpfuYUG.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-lVNUz4AH.js";import{CheckboxStory as c}from"./Checkbox.stories-C4dBto8x.js";import d from"./Help.stories-DMdnrxsy.js";import k from"./RadioButton.stories-b5Jiakyk.js";import{RadioPanel as u}from"./RadioPanel.stories-Dt5an0w5.js";import{F as g}from"./FieldGroup-BF9nADPu.js";import{C as h}from"./Checkbox-DAg5_izJ.js";import{R as b}from"./RadioPanel-BT8268yp.js";import{H as x}from"./Help-CjglDHnS.js";import{R as C}from"./RadioButton-3QM8JZRJ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B0T7u1Yw.js";import"./clsx-B-dksMZM.js";import"./Flex-BgbuhUNG.js";import"./SlotComponent-CqgXRx6S.js";import"./mergeRefs-DENxze0E.js";import"./Button-C4jGqSDB.js";import"./usePreviousValue-DOleAHeq.js";import"./Loader-kN_lrB4c.js";import"./useDelayedRender-DsShrjWV.js";import"./useId-_5du4Bvo.js";import"./Label-CEBKQ9H5.js";import"./SupportLabel-BClzPkth.js";import"./SuccessIcon-BwZ6nFr9.js";import"./Icon-BL3uuFKw.js";import"./WarningIcon-mvEno8LM.js";import"./BaseRadioButton.stories-CIljeaMB.js";import"./BaseRadioButton-BNTSElyQ.js";import"./Title-CA9WpLlw.js";import"./Card-i7YaieeB.js";import"./Text-BAMXFCqz.js";import"./Tag-D44IrmV0.js";import"./ExpandablePanel-Dt95HigV.js";import"./useAnimatedHeightBetween-KLoySHId.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CBua6YDr.js";import"./Expander-CvsknsK8.js";import"./ChevronUpIcon-BDLY5fij.js";import"./ListItem-BYemC4K7.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
