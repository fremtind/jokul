import{r as p,j as s}from"./iframe-CR1Nn_JP.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BfC9FkBO.js";import{CheckboxStory as c}from"./Checkbox.stories-BRhpqdCt.js";import k from"./Help.stories-N4_Guvyl.js";import u from"./RadioButton.stories-DApeP5A6.js";import{RadioPanel as g}from"./RadioPanel.stories-BxJzikRu.js";import{F as h}from"./FieldGroup-MU0mdiAD.js";import{C as b}from"./Checkbox-PsrTvDj2.js";import{R as x}from"./RadioPanel-BdQKLv_j.js";import{H as C}from"./Help-D1VbOhZq.js";import{R as G}from"./RadioButton-CNFw8Jhx.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CRH7ZrTH.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CJSNrYWk.js";import"./SlotComponent-BsJXXPqf.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-sHR26YUI.js";import"./usePreviousValue-D3H8729B.js";import"./Loader-DSPxiz4F.js";import"./useDelayedRender-BkOOBKYv.js";import"./useId-DPeCVQVh.js";import"./Label-BSqOrPv4.js";import"./SupportLabel-CB4nnK-C.js";import"./SuccessIcon-CSuSpNTP.js";import"./Icon-BlHhYlxc.js";import"./WarningIcon-D7D78VaQ.js";import"./BaseRadioButton.stories-55RACCHj.js";import"./BaseRadioButton-Bn6NbO7F.js";import"./Title-Dxt6pdIP.js";import"./Card-Bm9TOpe8.js";import"./Text-DmWNWqip.js";import"./Tag-V11nde1d.js";import"./ExpandablePanel-DKFkLn0T.js";import"./useAnimatedHeightBetween-DbcmROw0.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BfHSXWih.js";import"./Expander-CKNTOqGR.js";import"./ChevronUpIcon-BDpA5IH0.js";import"./ListItem-BHtGAWaN.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
