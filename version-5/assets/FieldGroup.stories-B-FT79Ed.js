import{r as p,j as i}from"./iframe-BWqSof1o.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-hbEDsGDV.js";import{CheckboxStory as c}from"./Checkbox.stories-BFLg-Oq-.js";import d from"./Help.stories-BFEA2BGq.js";import k from"./RadioButton.stories-oTryo7Qr.js";import{RadioPanel as u}from"./RadioPanel.stories-Doj1IGD1.js";import{F as g}from"./FieldGroup-ntNRzdNi.js";import{C as h}from"./Checkbox-DYBzqEpy.js";import{R as b}from"./RadioPanel-D26Mn7Y-.js";import{H as x}from"./Help-Jgjh-C44.js";import{R as C}from"./RadioButton-DJCM_DGW.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CdBuWJQS.js";import"./clsx-B-dksMZM.js";import"./Flex-EZ2eyymW.js";import"./SlotComponent-CfqyZe63.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DsYNySar.js";import"./usePreviousValue-Bol2_wFB.js";import"./Loader-DcMmHMaT.js";import"./useDelayedRender-BSeW6mPu.js";import"./BaseRadioButton.stories-COZWnKR2.js";import"./BaseRadioButton-CQS5-kRS.js";import"./useId-CUqs565_.js";import"./Title-BuGwrdc6.js";import"./Card-CVOCwOBq.js";import"./Text-BDw6jNFT.js";import"./Tag-DGW3hbUJ.js";import"./ExpandablePanel-BUXuo7j9.js";import"./useAnimatedHeightBetween-DqqaC8Am.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DF8ZMwpG.js";import"./Expander-BLp9mLtt.js";import"./ChevronDownIcon-CHd72now.js";import"./Icon-DyUqUHFK.js";import"./ChevronUpIcon-x78VPDgU.js";import"./ListItem-xrmNg7Pt.js";import"./Label-CR-8vXp2.js";import"./SupportLabel-BJMVddLT.js";import"./SuccessIcon-BJKag9Fq.js";import"./WarningIcon-wl8DJFxz.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
