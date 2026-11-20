import{r as p,j as s}from"./iframe-De6DmCFv.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-9hF78Mv4.js";import{CheckboxStory as c}from"./Checkbox.stories-Cg8ztjTQ.js";import k from"./Help.stories-DZgErxTN.js";import u from"./RadioButton.stories-Bwvw_aDy.js";import{RadioPanel as g}from"./RadioPanel.stories-C3q6CpvS.js";import{F as h}from"./FieldGroup-gEgnf3bD.js";import{C as b}from"./Checkbox-BXnfJqnI.js";import{R as x}from"./RadioPanel-CZgFAd1k.js";import{H as C}from"./Help-BRC8A-6D.js";import{R as G}from"./RadioButton-CXSi3nB3.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CllcZtol.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CNBeuF46.js";import"./SlotComponent-DL1QR9ZP.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DCVTCEAV.js";import"./usePreviousValue-2CLTrTfz.js";import"./Loader-_KLovepc.js";import"./useDelayedRender-QlKdHJBq.js";import"./useId-Di1nUdin.js";import"./Label-B-9csxt0.js";import"./SupportLabel-CcECdrFi.js";import"./SuccessIcon-BZ3_OBGL.js";import"./Icon-CgWeHJzl.js";import"./WarningIcon-Bj3F-FdI.js";import"./Text-T2bbftUs.js";import"./BaseRadioButton.stories-DhpUIX-4.js";import"./BaseRadioButton-CTXEWfqG.js";import"./Title-CRSO-vB7.js";import"./Card-BDSfIyAq.js";import"./Tag-CKg8izsz.js";import"./ExpandablePanel-CtcP6hJv.js";import"./useAnimatedHeightBetween-CpjYgxKE.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CpS9JDNs.js";import"./Expander-CuzzRYn8.js";import"./ChevronUpIcon-BQAvwP1l.js";import"./ListItem-B8gfyw-U.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
