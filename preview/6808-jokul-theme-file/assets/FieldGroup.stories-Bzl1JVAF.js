import{r as p,j as s}from"./iframe-DnaMZTWI.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-ClqGAtbo.js";import{CheckboxStory as c}from"./Checkbox.stories-CRHfxW25.js";import k from"./Help.stories-_KXMWxW7.js";import u from"./RadioButton.stories-DuN2MIZ6.js";import{RadioPanel as g}from"./RadioPanel.stories-BDC9x1TG.js";import{F as h}from"./FieldGroup-DTQktUp0.js";import{C as b}from"./Checkbox-DOJSgpLi.js";import{R as x}from"./RadioPanel-GV2JsJxr.js";import{H as C}from"./Help-SgkNZzIC.js";import{R as G}from"./RadioButton-By7ZHuat.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-eaEckBiD.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DnajS0ef.js";import"./SlotComponent-M5skpW1E.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-LPBHcj6O.js";import"./usePreviousValue-9oZwQHrc.js";import"./Loader-BsIlyN-o.js";import"./useDelayedRender-CRuPnchN.js";import"./useId-C_1OVtph.js";import"./Label-DTt8PoUR.js";import"./SupportLabel-BWZhP9q3.js";import"./SuccessIcon-B_z0YMOz.js";import"./Icon-CXKz6NKW.js";import"./WarningIcon-CPenev79.js";import"./BaseRadioButton.stories-C1Lv86_W.js";import"./BaseRadioButton-Dc4CKf3v.js";import"./Title-C5O8DL31.js";import"./Card-4rU7Lhso.js";import"./Text-Cw2D3zUh.js";import"./Tag-BhBukIqH.js";import"./ExpandablePanel-ndOMiDry.js";import"./useAnimatedHeightBetween-Bh5E--wT.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BcGv0u3T.js";import"./Expander-cAIOBNrD.js";import"./ChevronUpIcon-CLWwpAf9.js";import"./ListItem-Bc7T7SE0.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
