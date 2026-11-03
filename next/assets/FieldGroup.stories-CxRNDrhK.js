import{r as p,j as i}from"./iframe-CImjADXe.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-IjKlmVCF.js";import{CheckboxStory as c}from"./Checkbox.stories-BBJxXnXg.js";import k from"./Help.stories-CsW2Hyou.js";import u from"./RadioButton.stories-BwbIUfVO.js";import{RadioPanel as g}from"./RadioPanel.stories-BuG4B-W1.js";import{F as h}from"./FieldGroup-Bu-7uEdw.js";import{C as b}from"./Checkbox-Dfg6i8b9.js";import{R as x}from"./RadioPanel-C2P1kGr_.js";import{H as C}from"./Help-CI-UoM7G.js";import{R as G}from"./RadioButton-DpkOGzaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DaSnpuTu.js";import"./clsx-B-dksMZM.js";import"./Flex-DWk-GSh6.js";import"./SlotComponent-BxjZrOFl.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CcDlzOal.js";import"./usePreviousValue-bA7FleKP.js";import"./Loader-CQywNGhk.js";import"./useDelayedRender-DFUWLsvX.js";import"./useId-CfgL_kqL.js";import"./Label-CLd_9VnU.js";import"./SupportLabel-DUBoisvO.js";import"./SuccessIcon-D3x7WrX5.js";import"./Icon-Bi6QaPgp.js";import"./WarningIcon-R9NrpGGx.js";import"./BaseRadioButton.stories-B_DttNN9.js";import"./BaseRadioButton-Cy-WkhXX.js";import"./Title-CDLBjKOD.js";import"./Card-GA_IZOOZ.js";import"./Text-DNe82smI.js";import"./Tag-D8vDqMB9.js";import"./ExpandablePanel-OV5zvdBg.js";import"./useAnimatedHeightBetween-DxnvS-p6.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B_8k7YG9.js";import"./Expander-CCx7aJm5.js";import"./ChevronUpIcon-CanOqYaW.js";import"./ListItem-BP-XIY-N.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};
