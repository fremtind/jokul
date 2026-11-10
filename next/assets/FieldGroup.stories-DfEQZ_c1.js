import{r as p,j as s}from"./iframe-HcF1Ni7Z.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CNfpqtJr.js";import{CheckboxStory as c}from"./Checkbox.stories-CUqf1NS1.js";import k from"./Help.stories-CpR719zE.js";import u from"./RadioButton.stories-EQo5xLpj.js";import{RadioPanel as g}from"./RadioPanel.stories-D89DzrRh.js";import{F as h}from"./FieldGroup-C_wTU-1Y.js";import{C as b}from"./Checkbox-6SLJwyjo.js";import{R as x}from"./RadioPanel-JWWPhiwm.js";import{H as C}from"./Help-DoTXC84_.js";import{R as G}from"./RadioButton-3CFx36I_.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BfKwUVXd.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DkwAvxr3.js";import"./SlotComponent-5kgIPGKB.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Pvv7l0um.js";import"./usePreviousValue-DD5DxBjp.js";import"./Loader-BCrQsFT6.js";import"./useDelayedRender-CbzLBtns.js";import"./useId-C1Uqa4iT.js";import"./Label-BQTXb4CM.js";import"./SupportLabel-CPfJgJUU.js";import"./SuccessIcon-FSu6pBYw.js";import"./Icon-BjtCMmoX.js";import"./WarningIcon-CR9EQvbZ.js";import"./BaseRadioButton.stories-Byh0ebZu.js";import"./BaseRadioButton-8a_u0Jwr.js";import"./Title-Cx9c_KtY.js";import"./Card-qZWCsacF.js";import"./Text-Ckybu7z6.js";import"./Tag-CVTqcKRu.js";import"./ExpandablePanel-CiZ-j7LV.js";import"./useAnimatedHeightBetween-Cq_0GDuf.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DV0f6dbY.js";import"./Expander-CjI3aLaN.js";import"./ChevronUpIcon-TN7hIA8f.js";import"./ListItem-CjgiWN0t.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
