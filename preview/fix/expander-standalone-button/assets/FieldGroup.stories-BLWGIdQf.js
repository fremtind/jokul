import{r as p,j as s}from"./iframe-B0QN_n6q.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CSHe2nL2.js";import{CheckboxStory as c}from"./Checkbox.stories-B4c_t-ox.js";import k from"./Help.stories-x03VxQw-.js";import u from"./RadioButton.stories-BV-K31A8.js";import{RadioPanel as g}from"./RadioPanel.stories-CP8D8b6W.js";import{F as h}from"./FieldGroup-BLTxT3I3.js";import{C as b}from"./Checkbox-BU_R5GMV.js";import{R as x}from"./RadioPanel-C1nGXjqG.js";import{H as C}from"./Help-CZkb7SQo.js";import{R as G}from"./RadioButton-RH_01ouG.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CWzL_e_D.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-ysELkmIv.js";import"./SlotComponent-a9WlDpub.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-_JGUB1LP.js";import"./usePreviousValue-DYSw6zXq.js";import"./Loader-BeAWbqAQ.js";import"./useDelayedRender-B1Wlhzbj.js";import"./useId-CHwIbYSm.js";import"./Label-DXv5NYk8.js";import"./SupportLabel-Dgu0vnFV.js";import"./SuccessIcon-BO6enRi_.js";import"./Icon-Dh7uMuIe.js";import"./WarningIcon-DuSf8KGa.js";import"./BaseRadioButton.stories-DILIWFTF.js";import"./BaseRadioButton-Ckac9U0o.js";import"./Title-CJeWgS9a.js";import"./Card-CdIHA_me.js";import"./Text-B_t3zR9B.js";import"./Tag-DSl2i5no.js";import"./ExpandablePanel-B8wuqDid.js";import"./useAnimatedHeightBetween-DRdcbm0U.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-AdD5Jf9q.js";import"./Expander-BdyliBib.js";import"./ChevronDownIcon-DpCp0txT.js";import"./ChevronUpIcon-Bv-0hXg1.js";import"./ListItem-B5Hdk7hv.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
