import{r as p,j as i}from"./iframe-DVUTWMC5.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DWD03UNC.js";import l from"./Help.stories-cxQPqRiY.js";import c from"./RadioButton.stories-Dynr2_LJ.js";import{F as d}from"./FieldGroup-BDvZAYzi.js";import{C as k,a as u}from"./CheckboxPanel.stories-LoA3HL3r.js";import{RadioPanel as g}from"./RadioPanel.stories-D8Ic20nw.js";import{C as h}from"./Checkbox-B72GDxT0.js";import{R as b}from"./RadioPanel-gyoig0vu.js";import{H as x}from"./Help-DygEtkCs.js";import{R as C}from"./RadioButton-AtV1sAfA.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-AnIQmjM0.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BRqhynvE.js";import"./mergeRefs-DOl7p2R9.js";import"./BaseRadioButton.stories-DFvniAVF.js";import"./BaseRadioButton-D6WQAHdP.js";import"./useId-C_JebL9S.js";import"./Label-DO0Pa7f0.js";import"./SupportLabel-65-sVjWs.js";import"./SuccessIcon-Cci9_lt0.js";import"./Icon-61ybbaUy.js";import"./WarningIcon-Bth9-olq.js";import"./InputPanel-BI6sM9b1.js";import"./Button-H4970LIJ.js";import"./usePreviousValue-S5sDRxVK.js";import"./Loader-BNlyQrrT.js";import"./useDelayedRender-lFmU5V-N.js";import"./Title-BStQACs5.js";import"./Card-aOtPCERU.js";import"./Text-BiRdJsXk.js";import"./Tag-CMi0w4BP.js";import"./ExpandablePanel-DalWDsLz.js";import"./useAnimatedHeightBetween-DEN259aI.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-GnNRCIzQ.js";import"./Expander-DO06NXRc.js";import"./ChevronDownIcon-Q4BjVFN4.js";import"./ChevronUpIcon-BDptLwqx.js";import"./ListItem-3Ux2r8N6.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
