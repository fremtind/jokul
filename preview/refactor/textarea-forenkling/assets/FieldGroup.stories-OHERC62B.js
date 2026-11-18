import{r as p,j as s}from"./iframe-CQ3nfm3H.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DdXLubcL.js";import{CheckboxStory as c}from"./Checkbox.stories-BrpBThC7.js";import k from"./Help.stories-BoxAhJhw.js";import u from"./RadioButton.stories-DJN1KKdn.js";import{RadioPanel as g}from"./RadioPanel.stories-D4kpCyzm.js";import{F as h}from"./FieldGroup-DzwSlwHb.js";import{C as b}from"./Checkbox-CFOwq-Xi.js";import{R as x}from"./RadioPanel-Do8zrtIL.js";import{H as C}from"./Help-y2pgqXfK.js";import{R as G}from"./RadioButton-CDWxgzQ0.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BcF8Tid2.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DQczPdxj.js";import"./SlotComponent-J9AV8SEN.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-qYT-2xSq.js";import"./usePreviousValue-ILnT1qJd.js";import"./Loader-CBYCt1iE.js";import"./useDelayedRender-BLjtSO5R.js";import"./useId-DItfZIZD.js";import"./Label-BXof7PTl.js";import"./SupportLabel-CNbmRUfP.js";import"./SuccessIcon-DC-9ev5m.js";import"./Icon-z59j37Wr.js";import"./WarningIcon-DFQBmvnh.js";import"./BaseRadioButton.stories-DEt2otrX.js";import"./BaseRadioButton-DrTG-Whl.js";import"./Title-DC-41-Nh.js";import"./Card-B9r8yFZI.js";import"./Text-DYpYymmr.js";import"./Tag-BUnG8AMO.js";import"./ExpandablePanel-BbhI_7s8.js";import"./useAnimatedHeightBetween-B-uYu8r6.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DxqxVIph.js";import"./Expander-CvPX5YDB.js";import"./ChevronUpIcon-CTiTBGvt.js";import"./ListItem-BVXNl7nm.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
