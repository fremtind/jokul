import{r as n,j as i}from"./iframe-Nok0sgRA.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DLA2nl0z.js";import l from"./Help.stories-DAm1ixbM.js";import c from"./RadioButton.stories-B3sBIv0D.js";import{F as d}from"./FieldGroup-5AiWS8SJ.js";import{C as k,a as u}from"./CheckboxPanel.stories-DtNeoxCM.js";import{RadioPanel as g}from"./RadioPanel.stories-BFHh5DEo.js";import{C as h}from"./Checkbox-4BKxsWYn.js";import{R as b}from"./RadioPanel-D9FFZZRh.js";import{H as x}from"./Help-CLh4WPMe.js";import{R as C}from"./RadioButton-UWJFAFfT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-e35PAjvj.js";import"./Label-CvXIU6ty.js";import"./SupportLabel-IMgIZ6_E.js";import"./SuccessIcon-CHaV0UUM.js";import"./Icon-B96PERzD.js";import"./WarningIcon-Co_QXi7W.js";import"./BaseRadioButton.stories-CE-iiNCp.js";import"./BaseRadioButton-DBDWWo65.js";import"./InputPanel-CT7DW1UZ.js";import"./Flex-DMTnb7xC.js";import"./SlotComponent-YfHQb0RT.js";import"./mergeRefs-B1OG-BWN.js";import"./Button-Dz5LnTjz.js";import"./usePreviousValue-wi19ux9_.js";import"./Loader-9p0sfjH1.js";import"./useDelayedRender-C3Zl3DGy.js";import"./Title-WKmU1QAr.js";import"./Card-Wdfzh_Bb.js";import"./Text-B-o7z1Ry.js";import"./Tag-BgDubIb3.js";import"./ExpandablePanel-BN8_TqX2.js";import"./useAnimatedHeightBetween-_oVSrwMf.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CTvFa2-o.js";import"./Expander-BEoVNdJJ.js";import"./ChevronUpIcon-CT0SZcuI.js";import"./ListItem-BcUUl37T.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
