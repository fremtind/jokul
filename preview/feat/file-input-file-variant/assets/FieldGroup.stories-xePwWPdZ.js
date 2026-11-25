import{r as p,j as s}from"./iframe-COj0d0xi.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Csey2l0c.js";import{CheckboxStory as c}from"./Checkbox.stories-DfaanLu_.js";import k from"./Help.stories-HmWWGqnE.js";import u from"./RadioButton.stories-BLR70GQB.js";import{RadioPanel as g}from"./RadioPanel.stories-DxOgERJB.js";import{F as h}from"./FieldGroup-ktkfkXm9.js";import{C as b}from"./Checkbox-BJTOEeQl.js";import{R as x}from"./RadioPanel-DwJ9ZiW1.js";import{H as C}from"./Help-DNYwRG9I.js";import{R as G}from"./RadioButton-DHgihyQg.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-AhxJ-PdN.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-D82EGSMd.js";import"./SlotComponent-B1DKUqvL.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C6t8B3CY.js";import"./usePreviousValue-D8vyWzA0.js";import"./Loader-BB2dq0ao.js";import"./useDelayedRender-D__hQttI.js";import"./useId-Dus_leqz.js";import"./Label-BTGeus2_.js";import"./SupportLabel-Ce9PyPvX.js";import"./SuccessIcon-DmZKccNc.js";import"./Icon-DsHld9Ea.js";import"./WarningIcon-C9YSzzyA.js";import"./BaseRadioButton.stories-BE_h_YLx.js";import"./BaseRadioButton-Cx-RWgi_.js";import"./Title-C_Rili2r.js";import"./Card-DFyF9802.js";import"./Text-BTzafgyC.js";import"./Tag-D9-Q8uQV.js";import"./ExpandablePanel-Cg1LGuC_.js";import"./useAnimatedHeightBetween-89DaaBAF.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CyqSB5uc.js";import"./Expander-LwYXmWoS.js";import"./ChevronDownIcon-Ba6CwGuP.js";import"./ChevronUpIcon-BjIbaMEN.js";import"./ListItem-BMDYHFhm.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
