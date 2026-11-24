import{r as p,j as s}from"./iframe-B_B0ix9j.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-YtJ6FI_5.js";import{CheckboxStory as c}from"./Checkbox.stories-CCrjol-r.js";import k from"./Help.stories-DivYg4uk.js";import u from"./RadioButton.stories-nR2cKeyX.js";import{RadioPanel as g}from"./RadioPanel.stories-DoSirOPW.js";import{F as h}from"./FieldGroup-Cm7YSVeo.js";import{C as b}from"./Checkbox-DSBr6Fdf.js";import{R as x}from"./RadioPanel-N1HtLaMb.js";import{H as C}from"./Help-BwSxiAbZ.js";import{R as G}from"./RadioButton--Xf3yt6y.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Df1MB-6p.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BSjRVruA.js";import"./SlotComponent-DKKTUFm-.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DulsUULq.js";import"./usePreviousValue-WVVQbRk2.js";import"./Loader-aJidjjUR.js";import"./useDelayedRender-DbJVnQ-C.js";import"./useId-B3zeyXxd.js";import"./Label-CBwOjwwU.js";import"./SupportLabel-ecGyHw5t.js";import"./SuccessIcon-Bd91T-IY.js";import"./Icon-BRSoH3E2.js";import"./WarningIcon-BGlrY9UE.js";import"./Text-C5toct4a.js";import"./BaseRadioButton.stories-DJlkkCwN.js";import"./BaseRadioButton-Cc_iu5qS.js";import"./Title-BJ_XqHRE.js";import"./Card-BwvCRuqA.js";import"./Tag-B1o1tz5y.js";import"./ExpandablePanel-CdpLofm0.js";import"./useAnimatedHeightBetween-B_xfHU2_.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DPKxWK5z.js";import"./Expander-Dn6F00oQ.js";import"./ChevronDownIcon-DmPCajfz.js";import"./ChevronUpIcon-DDjOnw-3.js";import"./ListItem-D4oxG6hv.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,de as __namedExportsOrder,le as default};
