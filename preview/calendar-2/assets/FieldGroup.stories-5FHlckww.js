import{r as p,j as i}from"./iframe-DrBWRhvb.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CTJLIMFr.js";import l from"./Help.stories-DEzr7gbX.js";import c from"./RadioButton.stories-B_VQzXUN.js";import{F as d}from"./FieldGroup-CLCnsKH7.js";import{C as k,a as u}from"./CheckboxPanel.stories-DXXkz9zf.js";import{RadioPanel as g}from"./RadioPanel.stories-D2btBDhK.js";import{C as h}from"./Checkbox-bpcTSjuH.js";import{R as b}from"./RadioPanel-C-0lPY4Z.js";import{H as x}from"./Help-Dg6oXzoQ.js";import{R as C}from"./RadioButton-DUYYpBkm.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-B53Lbq8d.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-D5TFORnD.js";import"./mergeRefs-B-5dmWeR.js";import"./BaseRadioButton.stories-D8XLav6a.js";import"./BaseRadioButton-D7tvreZq.js";import"./useId-BPXmfBeh.js";import"./Label-0V216ryY.js";import"./SupportLabel-BNhglhh_.js";import"./SuccessIcon-DetzCQbr.js";import"./Icon-CqoybaBr.js";import"./WarningIcon-CbPVRqGf.js";import"./InputPanel-B4Hv64lq.js";import"./Button-DP03VoF5.js";import"./usePreviousValue-D_fFL0Je.js";import"./Loader-BuuFeKMh.js";import"./useDelayedRender-DlF2S4YI.js";import"./Title-BGmKMaKf.js";import"./Card-D90-Y1o0.js";import"./Text-CearldpP.js";import"./Tag-CfktHh4k.js";import"./ExpandablePanel-CITx3poO.js";import"./useAnimatedHeightBetween-BrWwcXNP.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Dz0h1amf.js";import"./Expander-ChU_7koT.js";import"./ChevronUpIcon-Cm8q_buA.js";import"./ListItem-H-eTrCcM.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
