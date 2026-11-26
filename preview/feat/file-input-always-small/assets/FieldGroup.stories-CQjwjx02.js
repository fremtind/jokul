import{r as p,j as s}from"./iframe-5zgp32xy.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-A2DWfUWn.js";import{CheckboxStory as c}from"./Checkbox.stories-WOY2uVZy.js";import k from"./Help.stories-DbcIQwsC.js";import u from"./RadioButton.stories-D6KkJ88N.js";import{RadioPanel as g}from"./RadioPanel.stories-BxJxr0mF.js";import{F as h}from"./FieldGroup-BeOoUraj.js";import{C as b}from"./Checkbox-YRpP2Dx-.js";import{R as x}from"./RadioPanel-B8w1W0kD.js";import{H as C}from"./Help-CAeJz9Jd.js";import{R as G}from"./RadioButton-DR8Tt67P.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DxE4pw-q.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-B_xXK38T.js";import"./SlotComponent-D5ZqbIGZ.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Xx5RZTTQ.js";import"./usePreviousValue-CxdHZD8H.js";import"./Loader-DiE3LyNl.js";import"./useDelayedRender--CbPFqg8.js";import"./useId-CTi1mkrH.js";import"./Label-CHW3Ku3Z.js";import"./SupportLabel-CQFH7Kun.js";import"./SuccessIcon-CXbLeWU9.js";import"./Icon-B5sT_CSn.js";import"./WarningIcon-WLHrh0Kb.js";import"./BaseRadioButton.stories-q1iRuZea.js";import"./BaseRadioButton-DNuWP-Kb.js";import"./Title--FZ0-fDI.js";import"./Card-D_BhgNeJ.js";import"./Text-3EBBho2z.js";import"./Tag-BDpDVcef.js";import"./ExpandablePanel-B-Mbzavu.js";import"./useAnimatedHeightBetween-DD7Dxqld.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CcZy6mdo.js";import"./Expander-Da0PSBSG.js";import"./ChevronDownIcon-BWlrIwBF.js";import"./ChevronUpIcon-CUozbZ4_.js";import"./ListItem-B-gvw-H2.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
