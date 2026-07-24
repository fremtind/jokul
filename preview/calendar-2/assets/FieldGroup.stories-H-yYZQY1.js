import{r as p,j as i}from"./iframe-DNeBsABU.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Cw2TAggz.js";import l from"./Help.stories-B0zh5V_4.js";import c from"./RadioButton.stories-BjKiE_j4.js";import{F as d}from"./FieldGroup-s5D9j17h.js";import{C as k,a as u}from"./CheckboxPanel.stories-B1yBpEbJ.js";import{RadioPanel as g}from"./RadioPanel.stories-spA0SYH_.js";import{C as h}from"./Checkbox-BpoCKv2i.js";import{R as b}from"./RadioPanel-BmDzTw8x.js";import{H as x}from"./Help-CecXAFtL.js";import{R as C}from"./RadioButton-esMN615-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CaORFJj5.js";import"./Label-MQ5qTBAF.js";import"./SupportLabel-Ci92ZVi8.js";import"./SuccessIcon-D8_Llcs7.js";import"./Icon-D1Uh5uem.js";import"./WarningIcon-CUbEWgE6.js";/* empty css               *//* empty css               */import"./Flex-Cy2y354T.js";import"./SlotComponent-x1hB2fcl.js";import"./mergeRefs-CRqzOuG2.js";import"./BaseRadioButton.stories-CuyDZCjw.js";import"./BaseRadioButton-BHEVoW0y.js";import"./InputPanel-Dtk8N0eS.js";import"./Button-bTBN078I.js";import"./usePreviousValue-C9lleLtj.js";import"./Loader-obZd60b2.js";import"./useDelayedRender-BYAkFh-6.js";import"./Title-CL7AtKWG.js";import"./Card-xDc__DwC.js";import"./Text-DUF24NTZ.js";import"./Tag-pPxFS8lu.js";import"./ExpandablePanel-BD9u09k-.js";import"./useAnimatedHeightBetween-B4xLBYaC.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Dqekec_W.js";import"./Expander-1TLyGmzL.js";import"./ChevronUpIcon-B_HUYtHK.js";import"./ListItem-BoHM5XZs.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
