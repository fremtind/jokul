import{r as p,j as s}from"./iframe-CZz6heH5.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-B5-bAn7v.js";import{CheckboxStory as c}from"./Checkbox.stories-C4St7u79.js";import k from"./Help.stories-Detup53-.js";import u from"./RadioButton.stories-BeSxAQ3t.js";import{RadioPanel as g}from"./RadioPanel.stories-BhJa23T2.js";import{F as h}from"./FieldGroup-CFjRCzfX.js";import{C as b}from"./Checkbox-D1AmQhj3.js";import{R as x}from"./RadioPanel-D_7OO30B.js";import{H as C}from"./Help-D2DeIxgg.js";import{R as G}from"./RadioButton-BCyCIl3u.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Ci54lUSR.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CQoYLT6H.js";import"./SlotComponent-D6f9H2w0.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-6EWXCNn7.js";import"./usePreviousValue-DEXswDvx.js";import"./Loader-BHvlcpLI.js";import"./useDelayedRender-CNQP4bxI.js";import"./useId-B9CICPpo.js";import"./Label-Cd5LBgVt.js";import"./SupportLabel-pIWps8rW.js";import"./SuccessIcon-B3AO0fyR.js";import"./Icon-XRI07lHz.js";import"./WarningIcon-BDNFAwOZ.js";import"./BaseRadioButton.stories-BJCETiBi.js";import"./BaseRadioButton-DN2aEszm.js";import"./Title-BFhu_wkQ.js";import"./Card-DYq-DBNL.js";import"./Text-ltQdAMSG.js";import"./Tag-mlYChWNF.js";import"./ExpandablePanel-CpRDNwGd.js";import"./useAnimatedHeightBetween-re7Uundg.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bv3aeRUf.js";import"./Expander-C2MHfCVe.js";import"./ChevronDownIcon-B8XhGe7I.js";import"./ChevronUpIcon-C2zunKDB.js";import"./ListItem-CeNSr7N2.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
