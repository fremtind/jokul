import{r as p,j as s}from"./iframe-NPmi4MoO.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BIJhJ-2T.js";import{CheckboxStory as c}from"./Checkbox.stories-BjxHL16w.js";import k from"./Help.stories-tGFzRUJI.js";import u from"./RadioButton.stories-C5SvJ34_.js";import{RadioPanel as g}from"./RadioPanel.stories-DcSUPmXp.js";import{F as h}from"./FieldGroup-B2uMXylt.js";import{C as b}from"./Checkbox-BuasNWX1.js";import{R as x}from"./RadioPanel-DMszPitx.js";import{H as C}from"./Help-T8XRU7wB.js";import{R as G}from"./RadioButton-Bq3y0yve.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-xiHnBZbw.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CepM4AHh.js";import"./SlotComponent-BmAPhRjx.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-X-GBEMXK.js";import"./usePreviousValue-Bi-GWWus.js";import"./Loader-D3vz9LP-.js";import"./useDelayedRender-CwDYFldN.js";import"./useId-CMXm9ohH.js";import"./Label-ClPpme-T.js";import"./SupportLabel-Db19ihI1.js";import"./SuccessIcon-wftKIwmn.js";import"./Icon-T2AEnKhA.js";import"./WarningIcon-CaLDmolA.js";import"./BaseRadioButton.stories-BIInElxQ.js";import"./BaseRadioButton-Dey0yQAP.js";import"./Title-CvbH-BHD.js";import"./Card-zqXkG50d.js";import"./Text-BR5y1gYn.js";import"./Tag-B7r4bg6s.js";import"./ExpandablePanel-DAkl9yn6.js";import"./useAnimatedHeightBetween-DGVjAUtZ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-pZGyXSks.js";import"./Expander-BDUbF9-E.js";import"./ChevronUpIcon-eAsBKleI.js";import"./ListItem-CpBGRvW_.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
