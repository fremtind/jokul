import{r as p,j as i}from"./iframe-CQAVWTjP.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DOPG8pEO.js";import l from"./Help.stories-CfQEwppa.js";import c from"./RadioButton.stories-Dnz_VpCr.js";import{F as d}from"./FieldGroup-DuxSLHdv.js";import{C as k,a as u}from"./CheckboxPanel.stories-CQVgc6Ir.js";import{RadioPanel as g}from"./RadioPanel.stories-BUrXzIuA.js";import{C as h}from"./Checkbox-DqLu_jeW.js";import{R as b}from"./RadioPanel-DcW5VNye.js";import{H as x}from"./Help-BPPLJv1B.js";import{R as C}from"./RadioButton-BiK6nNkJ.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-De-WmYcL.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-Dzt3WMt3.js";import"./mergeRefs-mHWaU_KQ.js";import"./BaseRadioButton.stories-DoTarRlC.js";import"./BaseRadioButton-D9xb3PtP.js";import"./useId-NmReFy88.js";import"./Label-sv8wGvqN.js";import"./SupportLabel-C0xmIasW.js";import"./SuccessIcon-CwCVO0ts.js";import"./Icon-CdSgCaQk.js";import"./WarningIcon-CfP3IsWI.js";import"./InputPanel-3P6dcKmp.js";import"./Button-t2xMBh2G.js";import"./usePreviousValue-MG7a4oNx.js";import"./Loader-5Twbi1PT.js";import"./useDelayedRender-BBDJ8ovG.js";import"./Title-C-5Wb8-A.js";import"./Card-DXnat8b-.js";import"./Text-VgAE9c7T.js";import"./Tag-aElKMynn.js";import"./ExpandablePanel-CjmWX_7T.js";import"./useAnimatedHeightBetween-Cll_T43i.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DSL_qGFh.js";import"./Expander-aoNfvUpn.js";import"./ChevronUpIcon-Dwv-PhjP.js";import"./ListItem-BcQhN34p.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
