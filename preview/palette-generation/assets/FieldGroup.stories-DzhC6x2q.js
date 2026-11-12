import{r as p,j as s}from"./iframe-B8522rgm.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-OS16WglL.js";import{CheckboxStory as c}from"./Checkbox.stories-BTNm7Gs-.js";import k from"./Help.stories-Cen5VSBd.js";import u from"./RadioButton.stories-CKF-VUuz.js";import{RadioPanel as g}from"./RadioPanel.stories-CfLkt4Z3.js";import{F as h}from"./FieldGroup-CIdZjmtg.js";import{C as b}from"./Checkbox-CCDvyGvq.js";import{R as x}from"./RadioPanel-DnX5UxAq.js";import{H as C}from"./Help-F3Y_ZCmb.js";import{R as G}from"./RadioButton-k-iST3iH.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BszFVW6H.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DGTFTWL9.js";import"./SlotComponent-YdekMC4F.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CR4TeaYn.js";import"./usePreviousValue-CLWc3XVk.js";import"./Loader-MEGGg1u-.js";import"./useDelayedRender-CKiqrvsd.js";import"./useId-BZTFw1Dr.js";import"./Label-3iGnNGjZ.js";import"./SupportLabel-C_uozMS4.js";import"./SuccessIcon-DrGze00u.js";import"./Icon-DzC6UD-q.js";import"./WarningIcon-dg9mmgA3.js";import"./BaseRadioButton.stories-BJCvBTVK.js";import"./BaseRadioButton-D85ToDE6.js";import"./Title-CQrcNnSI.js";import"./Card-DjLNbih_.js";import"./Text-p2JQfxIk.js";import"./Tag-DSo-Adke.js";import"./ExpandablePanel-BGaGbyMM.js";import"./useAnimatedHeightBetween-CRwlZskS.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CyVFQngw.js";import"./Expander-JMb7Ea24.js";import"./ChevronUpIcon-BULzmaYj.js";import"./ListItem-1uMQsAWa.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
