import{r as p,j as s}from"./iframe-DLXK8wQ8.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DNRnEuvb.js";import{CheckboxStory as c}from"./Checkbox.stories-mYBJCpz0.js";import k from"./Help.stories-DOYwclvd.js";import u from"./RadioButton.stories-odngYT15.js";import{RadioPanel as g}from"./RadioPanel.stories-BiWZ-dKm.js";import{F as h}from"./FieldGroup-y8LBMsj0.js";import{C as b}from"./Checkbox-AExCIY2D.js";import{R as x}from"./RadioPanel-BYA8E1Gp.js";import{H as C}from"./Help-CVjgEOcW.js";import{R as G}from"./RadioButton-CLCMNbgE.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CeEet3_2.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CX9k6yWy.js";import"./SlotComponent-Cz50dbC1.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-sA2uyi7k.js";import"./usePreviousValue-CPjoATXY.js";import"./Loader-CBWPGPt7.js";import"./useDelayedRender-D2aclNdT.js";import"./useId-CBzaGwWX.js";import"./Label-DmdxZIbR.js";import"./SupportLabel-QvWm2po4.js";import"./SuccessIcon-BO-cdZc5.js";import"./Icon-BDFQx98n.js";import"./WarningIcon-BVfb2IoW.js";import"./BaseRadioButton.stories-DTcUp1tI.js";import"./BaseRadioButton-CBXpLyCP.js";import"./Title-CxuTZj34.js";import"./Card-DKoL0pKw.js";import"./Text-CMJMVebN.js";import"./Tag-DbvlWDdk.js";import"./ExpandablePanel-D2u29nzb.js";import"./useAnimatedHeightBetween-BGKacMga.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BACwcvsH.js";import"./Expander-dUxjBWTm.js";import"./ChevronUpIcon-CTD9sGq4.js";import"./ListItem-CYjEaFnl.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
