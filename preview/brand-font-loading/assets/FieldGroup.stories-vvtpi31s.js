import{r as n,j as i}from"./iframe-DVoSZLws.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CYcIZBAR.js";import l from"./Help.stories-Cc6MmE1C.js";import c from"./RadioButton.stories-DNss8Wtd.js";import{F as d}from"./FieldGroup-vqvaqirF.js";import{C as k,a as u}from"./CheckboxPanel.stories-BMNC_2-o.js";import{RadioPanel as g}from"./RadioPanel.stories-BQM0OYoA.js";import{C as h}from"./Checkbox-k-dsiVAX.js";import{R as b}from"./RadioPanel-DO1G-HYX.js";import{H as x}from"./Help-Bo2co_Dd.js";import{R as C}from"./RadioButton-xhXFC9z4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BuePBBrJ.js";import"./Label-CwL8-y6m.js";import"./SupportLabel-BdvQwJAM.js";import"./SuccessIcon-Dbpx2h5v.js";import"./Icon-DgG7-j2I.js";import"./WarningIcon-DWCq6U8C.js";import"./BaseRadioButton.stories-D2094xJe.js";import"./BaseRadioButton-BimNhnlk.js";import"./InputPanel-TUfFC72n.js";import"./Flex-B0xXrgqA.js";import"./SlotComponent-CyPSly8v.js";import"./mergeRefs-DiozF4Ua.js";import"./Button-CgvRV0El.js";import"./usePreviousValue-Cu7SZTxr.js";import"./Loader-BoPs5bxl.js";import"./useDelayedRender-CYhO76x6.js";import"./Title-DTEplsfp.js";import"./Card-BBzFO0P7.js";import"./Text-BBImqT1V.js";import"./Tag-DKZXuSVy.js";import"./ExpandablePanel-C8LXCTZQ.js";import"./useAnimatedHeightBetween-CMSiKUyu.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BX5aOFb0.js";import"./Expander-Bk4T_Fvf.js";import"./ChevronUpIcon-CbDjnKV9.js";import"./ListItem-DqQ_n-UD.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
