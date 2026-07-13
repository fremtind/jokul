import{r as p,j as i}from"./iframe-BXOzOWGo.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-3TIewqN3.js";import l from"./Help.stories-Dbz3uvL1.js";import c from"./RadioButton.stories-BEtpW55E.js";import{F as d}from"./FieldGroup-5IspXmoa.js";import{C as k,a as u}from"./CheckboxPanel.stories-DKydH2jd.js";import{RadioPanel as g}from"./RadioPanel.stories-CYIaFBUs.js";import{C as h}from"./Checkbox-D2F5mTl2.js";import{R as b}from"./RadioPanel-y9wDh67y.js";import{H as x}from"./Help-CLCR3h7W.js";import{R as C}from"./RadioButton-BVQOW_9v.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BWpV7ZLy.js";import"./Label-DJ3Bg7BL.js";import"./SupportLabel-_ooaz7jV.js";import"./SuccessIcon-h1CqZYZx.js";import"./Icon-BVknPPAF.js";import"./WarningIcon-dhUFrDBP.js";/* empty css               *//* empty css               */import"./Flex-MyIti3Kc.js";import"./SlotComponent-DNNVx_Ui.js";import"./mergeRefs-DG22XIY-.js";import"./BaseRadioButton.stories-Cfnd8xGl.js";import"./BaseRadioButton-C_BuK1FB.js";import"./InputPanel-Dvhplkr9.js";import"./Button-CNj0K-LT.js";import"./usePreviousValue-DIHU020c.js";import"./Loader-DnQUAIA9.js";import"./useDelayedRender-DFKgT_rk.js";import"./Title-BN0r2Rkg.js";import"./Card-BS2uM_ki.js";import"./Text-DEn-ffXU.js";import"./Tag-CYNKd2ma.js";import"./ExpandablePanel-Ctnx1dfJ.js";import"./useAnimatedHeightBetween-BZ80pGew.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Bcxt93v4.js";import"./Expander-DVvgaIwa.js";import"./ChevronDownIcon-DgV-L_uq.js";import"./ChevronUpIcon-CVZ3-fMt.js";import"./ListItem-DCS6rzOc.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
