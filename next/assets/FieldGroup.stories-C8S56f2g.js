import{r as p,j as i}from"./iframe-lrsLPxE3.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-De_FcIgK.js";import{CheckboxStory as c}from"./Checkbox.stories-DMQRAlE3.js";import k from"./Help.stories-CG5qL5Ki.js";import u from"./RadioButton.stories-BX6vCCBj.js";import{RadioPanel as g}from"./RadioPanel.stories-bRZZP5A0.js";import{F as h}from"./FieldGroup-BjhHOSb8.js";import{C as b}from"./Checkbox-DLK5L_s4.js";import{R as x}from"./RadioPanel-8YkQxncv.js";import{H as C}from"./Help-CnZs2OFC.js";import{R as G}from"./RadioButton-DzFOdRrU.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CezNvi6I.js";import"./clsx-B-dksMZM.js";import"./Flex-DhkbK1xl.js";import"./SlotComponent-BM-sjvan.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BfKqOqvS.js";import"./usePreviousValue-DbNHL4zP.js";import"./Loader-CHdFzKdG.js";import"./useDelayedRender-D-rRiJCT.js";import"./useId-DbFhw-4H.js";import"./Label-CAxU4ZfV.js";import"./SupportLabel-B8GAzpxa.js";import"./SuccessIcon-AvuQjnvu.js";import"./Icon-yjuOMsN7.js";import"./WarningIcon-DSx-6UUb.js";import"./BaseRadioButton.stories-zC4pcxm0.js";import"./BaseRadioButton-DKrtg9Oe.js";import"./Title-mOFd0zIM.js";import"./Card-DuktCfxX.js";import"./Text-DgqSQUlZ.js";import"./Tag-BdmTykGQ.js";import"./ExpandablePanel-CdYv4Rp8.js";import"./useAnimatedHeightBetween-EFsiE56B.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B0tf3W5_.js";import"./Expander-D9iXK2kR.js";import"./ChevronUpIcon-C1jkOHYu.js";import"./ListItem-D0LqDc9Q.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
