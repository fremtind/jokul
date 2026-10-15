import{r as p,j as i}from"./iframe-Un4u8ble.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxPanelStory as s}from"./CheckboxPanel.stories-Byy9h55W.js";import{CheckboxStory as l}from"./Checkbox.stories-DvVFEoCw.js";import c from"./Help.stories-Cw09XayS.js";import d from"./RadioButton.stories-B5RwxzIL.js";import{RadioPanel as k}from"./RadioPanel.stories-Ba-RjDZm.js";import{F as u}from"./FieldGroup-DhlgmweU.js";import{C as g}from"./Checkbox-DVaNyjav.js";import{C as h}from"./CheckboxPanel-B46HHMtV.js";import{R as b}from"./RadioPanel-DLGd0sQr.js";import{H as x}from"./Help-CPgGLsTz.js";import{R as C}from"./RadioButton-DoO7Hp1h.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-Ci-ipJ53.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-ZyiHHNUf.js";import"./mergeRefs-C9durSYX.js";import"./Button-DL4BfSDz.js";import"./usePreviousValue-BWvpykeN.js";import"./Loader-ExVESAM3.js";import"./useDelayedRender-DG4FG95-.js";import"./InputPanel-CeZqfVFi.js";import"./useId-Cg3o3FDR.js";import"./SupportLabel-DmnibL6V.js";import"./SuccessIcon-ln5l7J5u.js";import"./Icon-BE-Nj4c-.js";import"./WarningIcon-RsipP120.js";import"./BaseRadioButton-XBmJenV6.js";import"./Label-WTHz9bAK.js";import"./BaseRadioButton.stories-DKXoFdXH.js";import"./Title-BnR39vfn.js";import"./Card-D7IAV-Ys.js";import"./Text-BmkQkz6M.js";import"./Tag-C804_4hY.js";import"./ExpandablePanel-CX1rYp2F.js";import"./useAnimatedHeightBetween-CV3db30s.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BKxb1R-J.js";import"./Expander-CykEFhdF.js";import"./ChevronUpIcon-C0XML8nK.js";import"./ListItem-BoGvAQip.js";const ie={title:"Komponenter/Field Group",component:u,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...d.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(g,{...l.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...k.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...c.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
