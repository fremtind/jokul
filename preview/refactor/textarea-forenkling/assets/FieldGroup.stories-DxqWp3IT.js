import{r as p,j as s}from"./iframe-BgA9Egk_.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-YIH_YFrp.js";import{CheckboxStory as c}from"./Checkbox.stories-yzWKk0Zy.js";import k from"./Help.stories-C_Uqgkrd.js";import u from"./RadioButton.stories-BsflqTq-.js";import{RadioPanel as g}from"./RadioPanel.stories-Z-K5WMcw.js";import{F as h}from"./FieldGroup-BrhQDh4y.js";import{C as b}from"./Checkbox-CsTcXDnz.js";import{R as x}from"./RadioPanel-iMzKBRFn.js";import{H as C}from"./Help-DVJG-Y2Q.js";import{R as G}from"./RadioButton-DKJdh5Zj.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-vRPYTyqG.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BfuYJtNg.js";import"./SlotComponent-rRgjX6TU.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-i_uLtsTC.js";import"./usePreviousValue-CiXtqokO.js";import"./Loader-BwitxEos.js";import"./useDelayedRender-DH6XnAQX.js";import"./useId-6kQ2t8t4.js";import"./Label-VR0VDLG-.js";import"./SupportLabel-BujM2xBf.js";import"./SuccessIcon-CUblh85f.js";import"./Icon-ox5Xcyrz.js";import"./WarningIcon-n-Pj6ZiQ.js";import"./BaseRadioButton.stories-BybOfDwm.js";import"./BaseRadioButton-jtTxXNIf.js";import"./Title-CHjC9E5S.js";import"./Card-wxA5Dh7u.js";import"./Text-8Aff6H3G.js";import"./Tag-BvaepAnD.js";import"./ExpandablePanel-B_7bj2H3.js";import"./useAnimatedHeightBetween-JE6NHWOm.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BEuq422U.js";import"./Expander-Cxu3ss9k.js";import"./ChevronUpIcon-BqYuCPNZ.js";import"./ListItem-HOv58dMR.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
