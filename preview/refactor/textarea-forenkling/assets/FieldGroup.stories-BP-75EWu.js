import{r as p,j as s}from"./iframe-VgA392RO.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CscLVZix.js";import{CheckboxStory as c}from"./Checkbox.stories-CZqbIkJk.js";import k from"./Help.stories-BLZO9jw_.js";import u from"./RadioButton.stories-DSTRXYmW.js";import{RadioPanel as g}from"./RadioPanel.stories-CdEHFECA.js";import{F as h}from"./FieldGroup-BorIEdsT.js";import{C as b}from"./Checkbox-CiKTZmCK.js";import{R as x}from"./RadioPanel-Cp9tRBRH.js";import{H as C}from"./Help-B85jH3np.js";import{R as G}from"./RadioButton-8nyKCpW0.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CdmYGYOJ.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-vJxsDVPj.js";import"./SlotComponent-B1SpRf8I.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DOAyG_jo.js";import"./usePreviousValue-DoXfk5Ho.js";import"./Loader-GcQDtjk3.js";import"./useDelayedRender-Dz0d5yrJ.js";import"./useId-BwGSzag1.js";import"./Label-IrvArE8N.js";import"./SupportLabel-CkijDvrF.js";import"./SuccessIcon-DBWehq9T.js";import"./Icon-BW3N99DV.js";import"./WarningIcon-BGCZNivZ.js";import"./BaseRadioButton.stories-Dgize9eg.js";import"./BaseRadioButton-Biqj5DBP.js";import"./Title-BDetMROK.js";import"./Card-B_MUn2BG.js";import"./Text-CoTigC5B.js";import"./Tag-COuKTLaH.js";import"./ExpandablePanel-DvgQFD1V.js";import"./useAnimatedHeightBetween-CogGXmI3.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D_Laxj0C.js";import"./Expander-D5sr7f-6.js";import"./ChevronUpIcon-B4irbfrX.js";import"./ListItem-Ttl-s9vY.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
