import{r as p,j as s}from"./iframe-CeQGPijg.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BbxEZ33K.js";import{CheckboxStory as c}from"./Checkbox.stories-DJZZngHe.js";import k from"./Help.stories-B5Rpf-bl.js";import u from"./RadioButton.stories-CJjOB-Cr.js";import{RadioPanel as g}from"./RadioPanel.stories-16aIArLd.js";import{F as h}from"./FieldGroup-IrkZpRJJ.js";import{C as b}from"./Checkbox-CGXjcMs2.js";import{R as x}from"./RadioPanel-B9TWYk-P.js";import{H as C}from"./Help-DF63HGkW.js";import{R as G}from"./RadioButton-Cop9FiTU.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BQMg4OjX.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-1FGSBG_M.js";import"./SlotComponent-C1HnPh8B.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CjA54Qz4.js";import"./usePreviousValue-BUh4jnRL.js";import"./Loader-BYsMXFfK.js";import"./useDelayedRender-Dx85aUvX.js";import"./useId-DlCUCLm5.js";import"./Label-DkO1ymLg.js";import"./SupportLabel-C_bqUkgm.js";import"./SuccessIcon-D-nBx6ap.js";import"./Icon-eOP-fEUK.js";import"./WarningIcon-Bb1YSZm-.js";import"./BaseRadioButton.stories-DYEaPEnB.js";import"./BaseRadioButton-Dexw3JJV.js";import"./Title-BBA_U7Rw.js";import"./Card-BGf_qL2Y.js";import"./Text-9NJ3Cylp.js";import"./Tag-DohS6IFz.js";import"./ExpandablePanel-gHxztqOG.js";import"./useAnimatedHeightBetween-BtwAoXBU.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C8Dki0UX.js";import"./Expander-COPeYSYd.js";import"./ChevronDownIcon-CG-Lvegk.js";import"./ChevronUpIcon-CwXU1Swn.js";import"./ListItem-x827pKrT.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
