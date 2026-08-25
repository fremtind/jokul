import{r as n,j as i}from"./iframe-DUSK3EL0.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DiHFy3iV.js";import l from"./Help.stories-BX1H6exV.js";import c from"./RadioButton.stories-CNbzMgXt.js";import{F as d}from"./FieldGroup-CSpAY2FA.js";import{C as k,a as u}from"./CheckboxPanel.stories-CXdL_dX-.js";import{RadioPanel as g}from"./RadioPanel.stories-CBkW-iC2.js";import{C as h}from"./Checkbox-DwgG7Lvl.js";import{R as b}from"./RadioPanel-B3xCfYan.js";import{H as x}from"./Help-C8pQgRSG.js";import{R as C}from"./RadioButton-Dt5ga1We.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BWR4YtCt.js";import"./Label-CGfkNRAN.js";import"./SupportLabel-BWHNu2on.js";import"./SuccessIcon-31L3ixE1.js";import"./Icon-OvV2KghW.js";import"./WarningIcon-CwQuELVA.js";import"./BaseRadioButton.stories-D4YBX8DY.js";import"./BaseRadioButton-Bu-eyWlv.js";import"./InputPanel-DTyI05G5.js";import"./Flex-DUquMeXH.js";import"./SlotComponent-D-XCActz.js";import"./mergeRefs-BGvpb6pC.js";import"./Button-Cenx_Ne3.js";import"./usePreviousValue-2Ty8ukGF.js";import"./Loader-B40sQrz-.js";import"./useDelayedRender-C68oFPg3.js";import"./Title-D0BvmPIH.js";import"./Card-BBYkhCOx.js";import"./Text-pw_vefsz.js";import"./Tag-CjvAkAi6.js";import"./ExpandablePanel-BUXeKN_7.js";import"./useAnimatedHeightBetween-xNsItT6R.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-wyxRewLb.js";import"./Expander-B99I0kkM.js";import"./ChevronUpIcon-DYqW85Q_.js";import"./ListItem-CY2FQSxX.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
