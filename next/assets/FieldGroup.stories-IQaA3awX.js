import{r as n,j as i}from"./iframe-ConuVp4c.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DDRQ7cer.js";import{CheckboxStory as c}from"./Checkbox.stories-grAEBMlV.js";import d from"./Help.stories-DZUI3BNz.js";import k from"./RadioButton.stories-DOrzO1JD.js";import{RadioPanel as u}from"./RadioPanel.stories-CBYynXTF.js";import{F as g}from"./FieldGroup-BTlFRKwV.js";import{C as h}from"./Checkbox-XQtro9mH.js";import{R as b}from"./RadioPanel-dHa4Xn-L.js";import{H as x}from"./Help-tts8lHL4.js";import{R as C}from"./RadioButton-Cnv6j9iG.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BqtSpfuO.js";import"./clsx-B-dksMZM.js";import"./Flex-CEJ1nrPN.js";import"./SlotComponent-BI1jSRyQ.js";import"./mergeRefs-CaXPicPQ.js";import"./Button-Cg9lS_ZE.js";import"./usePreviousValue-bTzS6NZh.js";import"./Loader-SlVYOWgL.js";import"./useDelayedRender-DvsgWYMW.js";import"./useId-BU8mB7Vl.js";import"./Label-lqNFCtL5.js";import"./SupportLabel-CYmL6leB.js";import"./SuccessIcon-CRlriY24.js";import"./Icon-DbXTBHUo.js";import"./WarningIcon-WCqs-vqM.js";import"./BaseRadioButton.stories-BaaaYWUb.js";import"./BaseRadioButton-DnKrnj3P.js";import"./Title-D7z0JHIH.js";import"./Card-D3bGNRa9.js";import"./Text-BACOFemI.js";import"./Tag-DX1m1JK8.js";import"./ExpandablePanel-YF2AnaHo.js";import"./useAnimatedHeightBetween-DjFxrKxq.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BGmdYO4C.js";import"./Expander-B8a1Xvt9.js";import"./ChevronUpIcon-Dl-mRA34.js";import"./ListItem-CYVfYoio.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
