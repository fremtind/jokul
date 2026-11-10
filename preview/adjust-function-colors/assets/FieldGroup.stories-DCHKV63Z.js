import{r as p,j as s}from"./iframe-zYjFaosY.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories--zP3-l1z.js";import{CheckboxStory as c}from"./Checkbox.stories-BIWjBNVi.js";import k from"./Help.stories-Bnxi_eS9.js";import u from"./RadioButton.stories-Cvp9eAIi.js";import{RadioPanel as g}from"./RadioPanel.stories-CumfB0zx.js";import{F as h}from"./FieldGroup-BYghBuU3.js";import{C as b}from"./Checkbox-BPJU8Oun.js";import{R as x}from"./RadioPanel-CUCwUWJu.js";import{H as C}from"./Help-D8OIW4WT.js";import{R as G}from"./RadioButton-Cz3v45jc.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-pXWmgnAm.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BQFypPYY.js";import"./SlotComponent-j-dumhEe.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Dj06Y6lY.js";import"./usePreviousValue-BbkcQkq-.js";import"./Loader-DsFj8iJe.js";import"./useDelayedRender-BXvnSIuQ.js";import"./useId-Fzq7xGvL.js";import"./Label-2Fqe-gqN.js";import"./SupportLabel-B-MOJ_Yi.js";import"./SuccessIcon-CRnuEV83.js";import"./Icon-BeP4i7i2.js";import"./WarningIcon-CRnWKH9t.js";import"./BaseRadioButton.stories-XIoGdJRa.js";import"./BaseRadioButton-B-IYiW-k.js";import"./Title-WD-HWMBZ.js";import"./Card-CwOxwPGB.js";import"./Text-C0ZBU5LE.js";import"./Tag-D_pPgWUJ.js";import"./ExpandablePanel-B3gs2wyC.js";import"./useAnimatedHeightBetween-DgdjpvEW.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DQweSarc.js";import"./Expander-BtetgL4-.js";import"./ChevronUpIcon-DHSMwTv7.js";import"./ListItem-O_CoizF4.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
