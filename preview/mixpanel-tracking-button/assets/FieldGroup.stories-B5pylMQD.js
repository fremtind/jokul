import{r as n,j as i}from"./iframe-CvTMq1TR.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Cw3FkugM.js";import{CheckboxStory as c}from"./Checkbox.stories-BqcnCysZ.js";import d from"./Help.stories-C5CA6mtI.js";import k from"./RadioButton.stories-CpSA5lcn.js";import{RadioPanel as u}from"./RadioPanel.stories-C2k4bgyv.js";import{F as g}from"./FieldGroup-hg1w6_dR.js";import{C as h}from"./Checkbox-dEBJxKwh.js";import{R as b}from"./RadioPanel-DsYVlVig.js";import{H as x}from"./Help-BssnS3t9.js";import{R as C}from"./RadioButton-bFRVA3gl.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CIWn1UaO.js";import"./clsx-B-dksMZM.js";import"./Flex-DB3LIcWc.js";import"./SlotComponent-CxFgKxTg.js";import"./mergeRefs-DVhSrSEo.js";import"./Button-BzMuhJV2.js";import"./usePreviousValue-CXaKVj7N.js";import"./Loader-DKSkkj1Q.js";import"./useDelayedRender-DsKdnITk.js";import"./useId-D-Lq0egd.js";import"./Label-BHYM3Oc3.js";import"./SupportLabel-deWgE9LE.js";import"./SuccessIcon-BQBAWkTt.js";import"./Icon-DrXrzYz9.js";import"./WarningIcon-CFjhg37Q.js";import"./BaseRadioButton.stories-DcoqfHEB.js";import"./BaseRadioButton-BjlLGgd6.js";import"./Title-CgIjV6kc.js";import"./Card-D0T0TLn1.js";import"./Text-BIpsttwg.js";import"./Tag-B9ahyazV.js";import"./ExpandablePanel-D8a5w_Cb.js";import"./useAnimatedHeightBetween-CjiXnOO9.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-ecNzjjes.js";import"./Expander-Cmheat7p.js";import"./ChevronUpIcon-BNHP_czV.js";import"./ListItem-BgPaHY5Z.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
