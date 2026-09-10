import{r as n,j as i}from"./iframe-DJDg-dnK.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Dq3vnSTc.js";import{CheckboxStory as c}from"./Checkbox.stories-B52NUdk9.js";import d from"./Help.stories-C0CcFJLx.js";import k from"./RadioButton.stories-C-QF1_4V.js";import{RadioPanel as u}from"./RadioPanel.stories-BesHXUhi.js";import{F as g}from"./FieldGroup-2qhIqACD.js";import{C as h}from"./Checkbox-YqGGRXsX.js";import{R as b}from"./RadioPanel-8NO5_zWp.js";import{H as x}from"./Help-eEK_RfHl.js";import{R as C}from"./RadioButton-BtMmYhcN.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-MjoOchGE.js";import"./clsx-B-dksMZM.js";import"./Flex-ClCiHS_E.js";import"./SlotComponent-DOH7zvEB.js";import"./mergeRefs-Cv0slsfX.js";import"./Button-Cy2x8NAw.js";import"./usePreviousValue-B33dn_xw.js";import"./Loader-ClkWCAX4.js";import"./useDelayedRender-BaNUArKZ.js";import"./useId-hd5W3uSm.js";import"./Label-C0FbgFq6.js";import"./SupportLabel-bhJxeUfc.js";import"./SuccessIcon-CTzUShSe.js";import"./Icon-CGuRHfAx.js";import"./WarningIcon-BYv-Hz-j.js";import"./BaseRadioButton.stories-EGmSvOsu.js";import"./BaseRadioButton-DwQI-_xe.js";import"./Title-CwHKw3RZ.js";import"./Card-DrC9g2Hl.js";import"./Text-CNRA1sEo.js";import"./Tag-BiHLWbX-.js";import"./ExpandablePanel-DGqE0Nd8.js";import"./useAnimatedHeightBetween-GSByqDId.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BFRM2Jd8.js";import"./Expander-BDIzdg94.js";import"./ChevronUpIcon-CGt4GOZd.js";import"./ListItem-c9fwZ2PJ.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
