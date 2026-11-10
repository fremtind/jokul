import{r as p,j as s}from"./iframe-IiUgvjcy.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BjJKGk8H.js";import{CheckboxStory as c}from"./Checkbox.stories-DTssffBR.js";import k from"./Help.stories-Bz8k0aa7.js";import u from"./RadioButton.stories-BcUdxe7W.js";import{RadioPanel as g}from"./RadioPanel.stories-DV3CmE2N.js";import{F as h}from"./FieldGroup-4B3iQmsJ.js";import{C as b}from"./Checkbox-CxBf3M4P.js";import{R as x}from"./RadioPanel-U4G4wYop.js";import{H as C}from"./Help-BYNshZeB.js";import{R as G}from"./RadioButton-niM5Je2J.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bx6U9YUM.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CaZRz4pu.js";import"./SlotComponent-DkP_KGiJ.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-COICVaIw.js";import"./usePreviousValue-Bg0N_WVn.js";import"./Loader-DlUCZUAN.js";import"./useDelayedRender-BgRNXcCW.js";import"./useId-CadjWWcH.js";import"./Label-3ueB-gus.js";import"./SupportLabel-CcLCLwZl.js";import"./SuccessIcon-Ce1zveYc.js";import"./Icon-FDwFZkYT.js";import"./WarningIcon-oy8bj4M6.js";import"./BaseRadioButton.stories-V0xbRL8S.js";import"./BaseRadioButton-CkdajXRL.js";import"./Title-DzY9w-J9.js";import"./Card-CU0SWLwg.js";import"./Text-DUTnQGAw.js";import"./Tag-DDuxcOt0.js";import"./ExpandablePanel-DjecBJVk.js";import"./useAnimatedHeightBetween-DJW3ZXNV.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-i-s0zpIL.js";import"./Expander-Ca14CRF7.js";import"./ChevronUpIcon-08seVtk3.js";import"./ListItem-BUakzaua.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
