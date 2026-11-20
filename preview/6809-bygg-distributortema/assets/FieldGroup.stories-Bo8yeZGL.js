import{r as p,j as s}from"./iframe-C-VcRZFL.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-7VJ0Sgss.js";import{CheckboxStory as c}from"./Checkbox.stories-MPm04jI2.js";import k from"./Help.stories-BgoM0zDc.js";import u from"./RadioButton.stories-D2vsXCPg.js";import{RadioPanel as g}from"./RadioPanel.stories-Bdzg1vxU.js";import{F as h}from"./FieldGroup-CMXkWJ7N.js";import{C as b}from"./Checkbox-BqoevQoA.js";import{R as x}from"./RadioPanel-CyMVyQj9.js";import{H as C}from"./Help-sjN7dJLt.js";import{R as G}from"./RadioButton-DuyuELf0.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DpGey_66.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-B4p5DzyM.js";import"./SlotComponent-DzOkXHtd.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CzX3QM_t.js";import"./usePreviousValue-Z8KWEA0w.js";import"./Loader-C-2na6v2.js";import"./useDelayedRender-DwFE1D2K.js";import"./useId-DYZ29hXl.js";import"./Label-MVxJqXEJ.js";import"./SupportLabel-CKxNKKcd.js";import"./SuccessIcon-CXF28ULX.js";import"./Icon-6UoTcqUZ.js";import"./WarningIcon-CgNk3tWx.js";import"./BaseRadioButton.stories-DmVygNFL.js";import"./BaseRadioButton-cc-Gl_Oz.js";import"./Title-kudeEWT2.js";import"./Card-BLs1Vt95.js";import"./Text-fGPRNGPt.js";import"./Tag-DVcA2RHs.js";import"./ExpandablePanel-DMj2uujm.js";import"./useAnimatedHeightBetween-CaLaUYBP.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-yqcdvbyl.js";import"./Expander-D-IcjFAE.js";import"./ChevronUpIcon-CWexVdTu.js";import"./ListItem-lsK2N-vL.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
