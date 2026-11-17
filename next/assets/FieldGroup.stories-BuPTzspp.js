import{r as p,j as s}from"./iframe-D05_l_d8.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BskRBzRi.js";import{CheckboxStory as c}from"./Checkbox.stories-w6KUiryu.js";import k from"./Help.stories-DL2xu4YG.js";import u from"./RadioButton.stories-DqTLHUTC.js";import{RadioPanel as g}from"./RadioPanel.stories-DsuoNS05.js";import{F as h}from"./FieldGroup-BQdbHysj.js";import{C as b}from"./Checkbox-DVfg_Lz_.js";import{R as x}from"./RadioPanel-Bb8Y4I70.js";import{H as C}from"./Help-CXm9sANe.js";import{R as G}from"./RadioButton-DfoRnpJa.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BC-8hmT1.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DpvaiBzF.js";import"./SlotComponent-CsFMtBL7.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-COJDnjSE.js";import"./usePreviousValue-Bj5oY07o.js";import"./Loader-DPefi7F8.js";import"./useDelayedRender-CoQSfdMw.js";import"./useId-CBSOWoML.js";import"./Label-CfvS9VS1.js";import"./SupportLabel-B7lszBfV.js";import"./SuccessIcon-C7QE3lKl.js";import"./Icon-CQR8YJ0K.js";import"./WarningIcon-CSFYueBE.js";import"./BaseRadioButton.stories-wiOvoX8-.js";import"./BaseRadioButton-DYU22VkR.js";import"./Title-Lq1tuEdY.js";import"./Card-DspCisR6.js";import"./Text-BtLCrXyK.js";import"./Tag-B77gu-yG.js";import"./ExpandablePanel-Y7m8SBfM.js";import"./useAnimatedHeightBetween-Daof4zYT.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-6AScH41J.js";import"./Expander-v-QBA4ds.js";import"./ChevronUpIcon-BbBEcZEO.js";import"./ListItem-Bj8EstLo.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
