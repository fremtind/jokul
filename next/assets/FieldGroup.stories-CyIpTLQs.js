import{r as p,j as s}from"./iframe-C_KoFO-y.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-B416d0bg.js";import{CheckboxStory as c}from"./Checkbox.stories-C_40cpqr.js";import k from"./Help.stories-tAPGaIJh.js";import u from"./RadioButton.stories-D2okuRhp.js";import{RadioPanel as g}from"./RadioPanel.stories-DpjLxf_J.js";import{F as h}from"./FieldGroup-hitV5tVm.js";import{C as b}from"./Checkbox-BMZamhSt.js";import{R as x}from"./RadioPanel-tclLoNK5.js";import{H as C}from"./Help-lIvjdyES.js";import{R as G}from"./RadioButton-CYCHAgix.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CIXMdAEN.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-B9PS5_ID.js";import"./SlotComponent-BDdbO-Vc.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CY_RQOl3.js";import"./usePreviousValue-nMH3n8Jy.js";import"./Loader-Bu1_yjNL.js";import"./useDelayedRender-B0v3e8OH.js";import"./useId-rOHQTZ2o.js";import"./Label-ByP5sYXK.js";import"./SupportLabel-DlFAd-7O.js";import"./SuccessIcon-Ceaa8f0k.js";import"./Icon-BmQ9GAAf.js";import"./WarningIcon-D-PD6uTX.js";import"./BaseRadioButton.stories-32Oep17i.js";import"./BaseRadioButton-CKDFXDXh.js";import"./Title-ClKi2nqx.js";import"./Card-9M3U-6Pn.js";import"./Text-DHHIOUyg.js";import"./Tag-C9pgi3o3.js";import"./ExpandablePanel-DjDum5BA.js";import"./useAnimatedHeightBetween-C_HuG_V8.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BC5BhX1Z.js";import"./Expander-DtQZCRFm.js";import"./ChevronUpIcon-BKp8kXk7.js";import"./ListItem-EbjwStEp.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Legend som sideoverskrift",
  args: {
    legend: "Hvordan vil du bli kontaktet?",
    labelProps: {
      pageHeading: true
    }
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,le as __namedExportsOrder,se as default};
