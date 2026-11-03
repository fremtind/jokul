import{r as p,j as i}from"./iframe-tL5B6vpu.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-B78-l7nB.js";import{CheckboxStory as c}from"./Checkbox.stories-B4egIC1V.js";import k from"./Help.stories-pIaZWga8.js";import u from"./RadioButton.stories-sclgYxlG.js";import{RadioPanel as g}from"./RadioPanel.stories-DMENLA4A.js";import{F as h}from"./FieldGroup-DgESWDdK.js";import{C as b}from"./Checkbox-BP5_LUCk.js";import{R as x}from"./RadioPanel-BTu2HloV.js";import{H as C}from"./Help-B7le4tM0.js";import{R as G}from"./RadioButton-C2kdH1M9.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BRxCO-MS.js";import"./clsx-B-dksMZM.js";import"./Flex-BIxymw8m.js";import"./SlotComponent-DY75wsI9.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BlQcOwrF.js";import"./usePreviousValue-BnKflsg9.js";import"./Loader-DRnm5xi0.js";import"./useDelayedRender-D-FkqSRa.js";import"./useId-BxQQF-ZG.js";import"./Label-DOc-8QVu.js";import"./SupportLabel-BNm6HXoS.js";import"./SuccessIcon-4SA8sCBh.js";import"./Icon-D8WijUjz.js";import"./WarningIcon-BMCjjoJd.js";import"./BaseRadioButton.stories-BpHt74Ly.js";import"./BaseRadioButton-DxN1vjmj.js";import"./Title-BJHlaFYL.js";import"./Card-BnJPiGF0.js";import"./Text-Bptv3wOw.js";import"./Tag-CoKdid6-.js";import"./ExpandablePanel-DdyqUH1a.js";import"./useAnimatedHeightBetween-KuVagyTQ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Cfc49HRN.js";import"./Expander-tiQtg4Kl.js";import"./ChevronUpIcon-BA1eOra6.js";import"./ListItem-D-ZAYptA.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
