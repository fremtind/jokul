import{r as p,j as i}from"./iframe-DtFigmr0.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DpkAah8-.js";import{CheckboxStory as c}from"./Checkbox.stories-CdqSXoR2.js";import k from"./Help.stories-DpatofOu.js";import u from"./RadioButton.stories-DkkHbDK3.js";import{RadioPanel as g}from"./RadioPanel.stories-DYUMjq6g.js";import{F as h}from"./FieldGroup-ChAUc3N6.js";import{C as b}from"./Checkbox-ByiZQJBI.js";import{R as x}from"./RadioPanel-DPTAXPPU.js";import{H as C}from"./Help-B2QR20Ks.js";import{R as G}from"./RadioButton-gfYn95Sy.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-LRqrluYr.js";import"./clsx-B-dksMZM.js";import"./Flex-BqzgPxlL.js";import"./SlotComponent-Bp8NL0J3.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-B27iEdKl.js";import"./usePreviousValue-DNfxZVRr.js";import"./Loader-D2Tnx8iq.js";import"./useDelayedRender-CAQijVb-.js";import"./useId-E_FLalmU.js";import"./Label-ev1K8ODq.js";import"./SupportLabel-DEu2fYmE.js";import"./SuccessIcon-BpqtDXG2.js";import"./Icon-DreVhTDj.js";import"./WarningIcon-BWhSrFLB.js";import"./BaseRadioButton.stories-ipehiboc.js";import"./BaseRadioButton-DDETEQqa.js";import"./Title-BADoMzG4.js";import"./Card-D-aPsK2D.js";import"./Text-BnHCXD6v.js";import"./Tag-Xytrl3NK.js";import"./ExpandablePanel-CHWmS26D.js";import"./useAnimatedHeightBetween-DtwMp2l5.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DvAgVLD7.js";import"./Expander-DF-8BlGP.js";import"./ChevronUpIcon-BRGt4vrB.js";import"./ListItem-CrVo99QB.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
