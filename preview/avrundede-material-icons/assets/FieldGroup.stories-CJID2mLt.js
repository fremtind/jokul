import{r as p,j as i}from"./iframe-BJuQ2aWC.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DD-PCGfM.js";import l from"./Help.stories-CeikL7kV.js";import c from"./RadioButton.stories-DvEjUGt2.js";import{F as d}from"./FieldGroup-BJdX2Ik5.js";import{C as k,a as u}from"./CheckboxPanel.stories-q8-zGt9F.js";import{RadioPanel as g}from"./RadioPanel.stories-D8mN-Wfs.js";import{C as h}from"./Checkbox-DBbXF1TU.js";import{R as b}from"./RadioPanel-D_2Z9AD-.js";import{H as x}from"./Help-BHUWSQ2e.js";import{R as C}from"./RadioButton-CAe5gvzF.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-Dyb_1rp5.js";import"./BaseRadioButton-Dlco6bn9.js";import"./clsx-B-dksMZM.js";import"./useId-Dk2CXiu0.js";import"./Label-CxHQuLyu.js";import"./SupportLabel-Cq6niWr0.js";import"./SuccessIcon-CuPITth9.js";import"./Icon-CiQLL7qA.js";import"./WarningIcon-CgB4PirB.js";import"./InputPanel-BH3sAJuE.js";import"./Flex-O1bLys-f.js";import"./SlotComponent-DCN16wwR.js";import"./mergeRefs-CCJcz9yx.js";import"./Button-CJFTbazB.js";import"./usePreviousValue-Dda2AL5w.js";import"./Loader-BrnW64Nx.js";import"./useDelayedRender-8QmLbqDC.js";import"./Title-BbYzmxi5.js";import"./Card-DMeQjjlm.js";import"./Text-B9Do8q3E.js";import"./Tag-CuUCAQFa.js";import"./ExpandablePanel-CymU9whO.js";import"./useAnimatedHeightBetween-BMyeQEci.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DbL_k0dx.js";import"./Expander-x4OwcO4Q.js";import"./ChevronDownIcon-BUq0Bs-t.js";import"./ChevronUpIcon-Bsdk4j-J.js";import"./ListItem-C6zYCX-p.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
