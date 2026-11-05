import{r as p,j as s}from"./iframe-CCFsrwZr.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-_HoART1P.js";import{CheckboxStory as c}from"./Checkbox.stories-g9ZJ6AEX.js";import k from"./Help.stories-BMPS-xNT.js";import u from"./RadioButton.stories-BGJO-h7u.js";import{RadioPanel as g}from"./RadioPanel.stories-DXkYcXXD.js";import{F as h}from"./FieldGroup-C5sBDTQ7.js";import{C as b}from"./Checkbox-C08JDdiY.js";import{R as x}from"./RadioPanel-BiI6jBvD.js";import{H as C}from"./Help-BzAXtUNR.js";import{R as G}from"./RadioButton-Czih0KHh.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Nl3ZE4rD.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DZlrOMZ-.js";import"./SlotComponent-B6iysPsS.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-sh8zDeO6.js";import"./usePreviousValue-BcMNlBnL.js";import"./Loader-CPyZsk4X.js";import"./useDelayedRender-D-JhZRO2.js";import"./useId-BZc6udn4.js";import"./Label-ryyYTEvd.js";import"./SupportLabel-BERbbFwj.js";import"./SuccessIcon-Aykk00E7.js";import"./Icon-BDuxJjig.js";import"./WarningIcon-BB76aNNv.js";import"./BaseRadioButton.stories-C_lhXYtw.js";import"./BaseRadioButton-DLMFj8bu.js";import"./Title-DY0H2pId.js";import"./Card-DRFN_nIl.js";import"./Text-CjLEer9T.js";import"./Tag-BFh_Opiw.js";import"./ExpandablePanel-PIwfeuQ_.js";import"./useAnimatedHeightBetween-DUU4KQHS.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DvMhmXV4.js";import"./Expander-sw-_NSgl.js";import"./ChevronUpIcon-DwhaXtHf.js";import"./ListItem-BdUpaaVU.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
