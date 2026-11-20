import{r as p,j as s}from"./iframe-99GwnzRI.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BFRou6lB.js";import{CheckboxStory as c}from"./Checkbox.stories-l1Yp6ott.js";import k from"./Help.stories-DhWcGR26.js";import u from"./RadioButton.stories-tlCD3OfZ.js";import{RadioPanel as g}from"./RadioPanel.stories-BrFliE-L.js";import{F as h}from"./FieldGroup-C35NWZmj.js";import{C as b}from"./Checkbox-C4Ulv1XC.js";import{R as x}from"./RadioPanel-BN4vU5Wi.js";import{H as C}from"./Help-DMmTwbNr.js";import{R as G}from"./RadioButton-Cm7DLpRX.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BomdN8yw.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-GDw5tLnM.js";import"./SlotComponent-Dp_1jbv6.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Borm3IRS.js";import"./usePreviousValue-B9z2SqA0.js";import"./Loader-KoRGjej4.js";import"./useDelayedRender-BYot9T5g.js";import"./useId-8Qeahz0w.js";import"./Label-C27YbOO5.js";import"./SupportLabel-U4amRmk3.js";import"./SuccessIcon-C9FSjoPU.js";import"./Icon-CfNVdFjI.js";import"./WarningIcon-C_Z-bzLR.js";import"./BaseRadioButton.stories-D6q5DTqt.js";import"./BaseRadioButton-AWuec19M.js";import"./Title-deo0qR8f.js";import"./Card-C3h2YtE5.js";import"./Text-DkNo1vOC.js";import"./Tag-CIjeyNHd.js";import"./ExpandablePanel-D4W6lYgD.js";import"./useAnimatedHeightBetween-d2Nrw9BI.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-0dzo5QCj.js";import"./Expander-CBLVgMbg.js";import"./ChevronUpIcon-ZI3ZA2V5.js";import"./ListItem-DSEVIVxa.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
