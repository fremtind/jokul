import{r as p,j as s}from"./iframe-CegvubD-.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-T0kFUu0Z.js";import{CheckboxStory as c}from"./Checkbox.stories-BxIRKVsG.js";import k from"./Help.stories--ORDPGoc.js";import u from"./RadioButton.stories-CdLHEJaS.js";import{RadioPanel as g}from"./RadioPanel.stories-fsjhUY8q.js";import{F as h}from"./FieldGroup-B5QyP-yn.js";import{C as b}from"./Checkbox-6-nafYpM.js";import{R as x}from"./RadioPanel-CkceEd0l.js";import{H as C}from"./Help-DNsaNPAt.js";import{R as G}from"./RadioButton-C3Hj-BxV.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DOSEv1xd.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CTD_shRZ.js";import"./SlotComponent-dbEIiJwD.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CotK8MJC.js";import"./usePreviousValue-QLi3Qnwe.js";import"./Loader-D7TFWDf8.js";import"./useDelayedRender-Cv_VqiyG.js";import"./useId-DiLLxU3U.js";import"./Label-BEtWoyIs.js";import"./SupportLabel-CB1aKt6X.js";import"./SuccessIcon-lbe8UeN9.js";import"./Icon-C_mb0GL1.js";import"./WarningIcon-tUTwQaPs.js";import"./BaseRadioButton.stories-pHlC_vTc.js";import"./BaseRadioButton-DUHTNLUi.js";import"./Title-BWL2uWUG.js";import"./Card-BmHXDurs.js";import"./Text-DdKsCsp7.js";import"./Tag-nIEgq7x3.js";import"./ExpandablePanel-BZSzXCeO.js";import"./useAnimatedHeightBetween-Cc9LH2Nu.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-l2x_j41m.js";import"./Expander-CvjrZA0P.js";import"./ChevronUpIcon-Bm0LG0CC.js";import"./ListItem-9LgHEfoa.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
