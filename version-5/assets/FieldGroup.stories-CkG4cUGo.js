import{r as p,j as i}from"./iframe-DDBqHdp6.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BRauohQj.js";import{CheckboxStory as c}from"./Checkbox.stories-79mGY6El.js";import d from"./Help.stories-Dhz_dWAd.js";import k from"./RadioButton.stories-CYK0C-HV.js";import{RadioPanel as u}from"./RadioPanel.stories-CUE1gcX5.js";import{F as g}from"./FieldGroup-FT2X3pwD.js";import{C as h}from"./Checkbox-CSHuZNcW.js";import{R as b}from"./RadioPanel-CLSS5WY0.js";import{H as x}from"./Help-BVjaFKhX.js";import{R as C}from"./RadioButton-8KvVNGtA.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B5NpLlYi.js";import"./clsx-B-dksMZM.js";import"./Flex-BfAo973l.js";import"./SlotComponent-BRIwS4Dw.js";import"./mergeRefs-IJOT80S8.js";import"./Button-DuReEQE9.js";import"./usePreviousValue-CAa2QIyw.js";import"./Loader-D3H8FBW6.js";import"./useDelayedRender-CkmAL5up.js";import"./BaseRadioButton.stories-BJmGZlzG.js";import"./BaseRadioButton--cxlhc_N.js";import"./useId-CObvKbMD.js";import"./Title-CXrgRk22.js";import"./Card-ByBNwLR3.js";import"./Text-BZiNgci3.js";import"./Tag-BguWWg_M.js";import"./ExpandablePanel-BRTZOri4.js";import"./useAnimatedHeightBetween-xLSz7Ryv.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BED_Fl4G.js";import"./Expander-CC5oCNIM.js";import"./ChevronDownIcon-tEzGyq1H.js";import"./Icon-js9KUJ-L.js";import"./ChevronUpIcon-C_dRms4J.js";import"./ListItem-BSCCkvHs.js";import"./Label-DgPG5T2u.js";import"./SupportLabel-BVjjgxgT.js";import"./SuccessIcon-CveA3l9u.js";import"./WarningIcon-DuMyOFOv.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
