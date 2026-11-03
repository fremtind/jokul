import{r as p,j as i}from"./iframe-C6HN1Jl8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-kSF4-Twt.js";import{CheckboxStory as c}from"./Checkbox.stories-CusyjQh-.js";import k from"./Help.stories-DRLMr9FR.js";import u from"./RadioButton.stories-BKWiQ7eZ.js";import{RadioPanel as g}from"./RadioPanel.stories-C7bCVoTk.js";import{F as h}from"./FieldGroup-CNIas1g0.js";import{C as b}from"./Checkbox-B2ug1sIE.js";import{R as x}from"./RadioPanel-BxN76BFA.js";import{H as C}from"./Help-wnzcPRUN.js";import{R as G}from"./RadioButton-CE5LFAOE.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B_FbSWgH.js";import"./clsx-B-dksMZM.js";import"./Flex-BMMVzf7N.js";import"./SlotComponent-BcdYwbMI.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-D0b2z_sM.js";import"./usePreviousValue-C_5Kfapt.js";import"./Loader-DACVNVFl.js";import"./useDelayedRender-CVEoRrpt.js";import"./useId-BYOpaF2_.js";import"./Label-DfXIAAVQ.js";import"./SupportLabel-BV0-WOBU.js";import"./SuccessIcon-39ee37cI.js";import"./Icon-CJeNds9P.js";import"./WarningIcon-VqGWFj3e.js";import"./BaseRadioButton.stories-hk0SMlq8.js";import"./BaseRadioButton-DKt9ruhV.js";import"./Title-xQLn97KT.js";import"./Card-DdQytPdi.js";import"./Text-CN7-XOrs.js";import"./Tag-TFoKB01L.js";import"./ExpandablePanel-BWEZacjv.js";import"./useAnimatedHeightBetween-CfqwGy9P.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-otJQOAwd.js";import"./Expander-CHr1ddWJ.js";import"./ChevronUpIcon-C-rlyavC.js";import"./ListItem-CRilNphH.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};
