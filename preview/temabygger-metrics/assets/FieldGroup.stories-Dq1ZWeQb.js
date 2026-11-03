import{r as p,j as i}from"./iframe-CQSab0f2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Bh-T5GDV.js";import{CheckboxStory as c}from"./Checkbox.stories-Cvc121Oh.js";import k from"./Help.stories-B5DyHI-6.js";import u from"./RadioButton.stories-DAkRsq7n.js";import{RadioPanel as g}from"./RadioPanel.stories-B9xeX3eB.js";import{F as h}from"./FieldGroup-CUFqEEbs.js";import{C as b}from"./Checkbox-CQOZKTsx.js";import{R as x}from"./RadioPanel-CH1kbJ2F.js";import{H as C}from"./Help-Dqsa5Hy8.js";import{R as G}from"./RadioButton-CX293MN9.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DsMLGILX.js";import"./clsx-B-dksMZM.js";import"./Flex-DCp1lyCn.js";import"./SlotComponent-BNjvRnnw.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BlPS2Axm.js";import"./usePreviousValue-C3iLT6uB.js";import"./Loader-CFUa8ZTG.js";import"./useDelayedRender-68V9YMlF.js";import"./useId-CxAmkx76.js";import"./Label-BNSpnxyK.js";import"./SupportLabel-B6YyOooS.js";import"./SuccessIcon-Bx7XsCkq.js";import"./Icon-B9veFsxW.js";import"./WarningIcon-CN4tol4i.js";import"./BaseRadioButton.stories-DSJqdi5H.js";import"./BaseRadioButton-DCcHqlFC.js";import"./Title-CiY6QFC9.js";import"./Card-C2DTKCVc.js";import"./Text-B_lrpr-9.js";import"./Tag-scsIXwp2.js";import"./ExpandablePanel-DFemwyNE.js";import"./useAnimatedHeightBetween-CGx41YGl.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DTccDDap.js";import"./Expander-BgdqKZVU.js";import"./ChevronUpIcon-DInhJmPM.js";import"./ListItem-DaHGdz0K.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
