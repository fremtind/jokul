import{r as p,j as s}from"./iframe-BmanISAH.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DqDn26Xf.js";import{CheckboxStory as c}from"./Checkbox.stories-kx7TEUXg.js";import k from"./Help.stories-BAFnb2RJ.js";import u from"./RadioButton.stories-DjN-cICc.js";import{RadioPanel as g}from"./RadioPanel.stories-2TiuRBTa.js";import{F as h}from"./FieldGroup-qtw2Zvgg.js";import{C as b}from"./Checkbox-DcltA-6Q.js";import{R as x}from"./RadioPanel-szENAUuZ.js";import{H as C}from"./Help-C-MQ_8PO.js";import{R as G}from"./RadioButton-CRLSNpys.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-3KiYYdRB.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DeTd7uHz.js";import"./SlotComponent-D_CQR4UR.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Co2i1wcT.js";import"./usePreviousValue-CgdT5qmF.js";import"./Loader-tCbylDeC.js";import"./useDelayedRender-TVr3c9Bd.js";import"./useId-E6Awlq43.js";import"./Label-DAvWin2G.js";import"./SupportLabel-CPcGM4kd.js";import"./SuccessIcon-D1uiFWzH.js";import"./Icon-DS2uJFyJ.js";import"./WarningIcon-kjNIhvF4.js";import"./BaseRadioButton.stories-BZtOyspY.js";import"./BaseRadioButton-BsVIlx8q.js";import"./Title-PHX-5325.js";import"./Card-Dwwwoger.js";import"./Text-CfJ5ZJVL.js";import"./Tag-CG3wl3DH.js";import"./ExpandablePanel-CabmJEZg.js";import"./useAnimatedHeightBetween-DplfhTDy.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CYgX3Dfg.js";import"./Expander-DBn0h415.js";import"./ChevronUpIcon-BWadcJgg.js";import"./ListItem-BNAe8zyY.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
