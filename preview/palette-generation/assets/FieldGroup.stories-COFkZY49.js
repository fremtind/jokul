import{r as p,j as s}from"./iframe-CsG39Yqt.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-D83Z9bQI.js";import{CheckboxStory as c}from"./Checkbox.stories-BhglSU_p.js";import k from"./Help.stories-C1gJvJ23.js";import u from"./RadioButton.stories-5AM4kfZD.js";import{RadioPanel as g}from"./RadioPanel.stories-gAV72L6f.js";import{F as h}from"./FieldGroup-iE2CEQ-S.js";import{C as b}from"./Checkbox-CRDezvuU.js";import{R as x}from"./RadioPanel-CLiTywNK.js";import{H as C}from"./Help-BPG39Gzu.js";import{R as G}from"./RadioButton-BzVuOOMz.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D_GLSVeA.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DXnCBT7Q.js";import"./SlotComponent-UvOSnUy4.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-axPsgu-m.js";import"./usePreviousValue-xmBzkCnJ.js";import"./Loader-hITd2cLq.js";import"./useDelayedRender-BXwz_UQn.js";import"./useId-D-5sN_yq.js";import"./Label-BWss7kGi.js";import"./SupportLabel-D-V4FRQf.js";import"./SuccessIcon-CVO83BED.js";import"./Icon-BsjDtqYj.js";import"./WarningIcon-IcV0Wulh.js";import"./BaseRadioButton.stories-BY4slJhS.js";import"./BaseRadioButton-BcASZK3s.js";import"./Title-D-Dge07k.js";import"./Card-Bzp0AKTU.js";import"./Text-Bb7wvlOp.js";import"./Tag-B_zYSvO8.js";import"./ExpandablePanel-CZnRogzN.js";import"./useAnimatedHeightBetween-CBu4HsYT.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DnimsbOD.js";import"./Expander-eRo_qj6U.js";import"./ChevronUpIcon-p-N0NuMm.js";import"./ListItem-DLru2ZgT.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
