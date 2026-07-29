import{r as p,j as i}from"./iframe-BTwN_uBw.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B8yD580p.js";import l from"./Help.stories-CmbB-UZs.js";import c from"./RadioButton.stories-7PHHmYcz.js";import{F as d}from"./FieldGroup-DX8hqyF4.js";import{C as k,a as u}from"./CheckboxPanel.stories-GmONNHaR.js";import{RadioPanel as g}from"./RadioPanel.stories-DlMf4d3P.js";import{C as h}from"./Checkbox-DvRni6T7.js";import{R as b}from"./RadioPanel-BGI4cPXk.js";import{H as x}from"./Help-CS-upDl4.js";import{R as C}from"./RadioButton-CfQdkg1F.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-lTbCt4qq.js";import"./Label-Cd0DajG2.js";import"./SupportLabel-GkaKb36n.js";import"./SuccessIcon-DvB-MatB.js";import"./Icon-DBDJaZ0G.js";import"./WarningIcon-Cf1vTwAK.js";/* empty css               *//* empty css               */import"./Flex-BIKIATbl.js";import"./SlotComponent-CvDmdtiZ.js";import"./mergeRefs-C4VHKPAy.js";import"./BaseRadioButton.stories-DgUUHFwv.js";import"./BaseRadioButton-sM9oM7xl.js";import"./InputPanel-NftdHPMh.js";import"./Button-ayb7xzqc.js";import"./usePreviousValue-CoZR-CWl.js";import"./Loader-DeU3E-2d.js";import"./useDelayedRender-DALfSC-D.js";import"./Title-BBJF3W2n.js";import"./Card-TlOLOozM.js";import"./Text-JlJ3auOo.js";import"./Tag-CPdHsSeJ.js";import"./ExpandablePanel-DblseqrH.js";import"./useAnimatedHeightBetween-CkD0jL7V.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-B744Ijb1.js";import"./Expander-DXrpgIrN.js";import"./ChevronUpIcon-MLiuaJVU.js";import"./ListItem-B1O9cHoU.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
