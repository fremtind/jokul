import{r as p,j as s}from"./iframe-B-nSori2.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-B9ZGOuK_.js";import{CheckboxStory as c}from"./Checkbox.stories-D2J5j6ty.js";import k from"./Help.stories-sSdIuooX.js";import u from"./RadioButton.stories-BgZbcFDY.js";import{RadioPanel as g}from"./RadioPanel.stories-C7WLWfmY.js";import{F as h}from"./FieldGroup-Ds0CFbAi.js";import{C as b}from"./Checkbox-Dv_PS9Uy.js";import{R as x}from"./RadioPanel-BwUWtA2j.js";import{H as C}from"./Help-ByyZqzFx.js";import{R as G}from"./RadioButton-LIGUSuKT.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-VpWdb-Ht.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-B0Ak0vhd.js";import"./SlotComponent-B51aY1wL.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BZD-B4EM.js";import"./usePreviousValue-CiekwCsx.js";import"./Loader-DhlofV_G.js";import"./useDelayedRender-C8fiDYlW.js";import"./useId-59BUdYcS.js";import"./Label-DCcYgmLk.js";import"./SupportLabel-B-mkj_Od.js";import"./SuccessIcon-CVUXNYEU.js";import"./Icon-BV2me0SG.js";import"./WarningIcon-BMDZZg0C.js";import"./BaseRadioButton.stories-BTxJP1nd.js";import"./BaseRadioButton-LMsFBYfN.js";import"./Title-BhqKmAep.js";import"./Card-DF-Wwnd8.js";import"./Text-B8gZsiOs.js";import"./Tag-BpwdDSeF.js";import"./ExpandablePanel-F_YcboBo.js";import"./useAnimatedHeightBetween-CIZAYIOa.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D-AgyOdN.js";import"./Expander-Bi7zTyVP.js";import"./ChevronDownIcon-BG1DuOKV.js";import"./ChevronUpIcon-Be4yA2RQ.js";import"./ListItem-ZgSvRcNC.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
