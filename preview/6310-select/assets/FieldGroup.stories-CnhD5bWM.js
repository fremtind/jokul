import{r as p,j as i}from"./iframe-pic0ffbJ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-UlSYiuJq.js";import l from"./Help.stories-D3LavOTQ.js";import c from"./RadioButton.stories-C4FoDoBp.js";import{F as d}from"./FieldGroup-CYIWKCeu.js";import{C as k,a as u}from"./CheckboxPanel.stories-BTwbuXr5.js";import{RadioPanel as g}from"./RadioPanel.stories-mIHZmpEa.js";import{C as h}from"./Checkbox-VWtNDg11.js";import{R as b}from"./RadioPanel-kV1NIB-J.js";import{H as x}from"./Help-B64tc6qF.js";import{R as C}from"./RadioButton-BUs1eZ_e.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CLa2X97V.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CaSD7o6E.js";import"./mergeRefs-BlPikjVn.js";import"./BaseRadioButton.stories-yjMe9O7a.js";import"./BaseRadioButton-CMCMJvkI.js";import"./useId-B995XECr.js";import"./Label-BupzjsnG.js";import"./SupportLabel-CyLGMEss.js";import"./SuccessIcon-IaSl7rGS.js";import"./Icon-DFIbroby.js";import"./WarningIcon-387XWbOt.js";import"./InputPanel-DdfRZqkw.js";import"./Button-8DO8F0-p.js";import"./usePreviousValue-DZ5gPnor.js";import"./Loader-Cg10wlxt.js";import"./useDelayedRender-D7lsza4r.js";import"./Title-DMEhOI2T.js";import"./Card-DM-oPaAs.js";import"./Text-DYh7odTY.js";import"./Tag-CRdzHVsw.js";import"./ExpandablePanel-DmMhL3Eq.js";import"./useAnimatedHeightBetween-Ck2zmcqm.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-zOihZWwp.js";import"./Expander-CCO_M6W_.js";import"./ChevronDownIcon-CfcUQg_1.js";import"./ChevronUpIcon-C0fNsNyD.js";import"./ListItem-xht3x36g.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
