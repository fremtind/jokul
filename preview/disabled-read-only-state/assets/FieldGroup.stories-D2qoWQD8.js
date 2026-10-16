import{r as p,j as i}from"./iframe-o0m3menv.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxPanelStory as s}from"./CheckboxPanel.stories-BSBKfOal.js";import{CheckboxStory as l}from"./Checkbox.stories-DpEsbk_w.js";import c from"./Help.stories-DZfi1P9B.js";import d from"./RadioButton.stories-CPd2zL64.js";import{RadioPanel as k}from"./RadioPanel.stories-CAazqyA7.js";import{F as u}from"./FieldGroup-DYcstTN0.js";import{C as g}from"./Checkbox-Cj-nkzpL.js";import{C as h}from"./CheckboxPanel-CpzsNEvx.js";import{R as b}from"./RadioPanel-DGDu_Fg0.js";import{H as x}from"./Help-DHLU39Xe.js";import{R as C}from"./RadioButton-qILp8xBj.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BSig71-C.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CIywmpIV.js";import"./mergeRefs-CQG3iBAm.js";import"./Button-CXl0APQ6.js";import"./usePreviousValue-D7lSvtf5.js";import"./Loader-DbQQV1aU.js";import"./useDelayedRender-D9Ar9ZMn.js";import"./InputPanel-C_KH8Z-E.js";import"./useId-C2y1bl-l.js";import"./SupportLabel-UFV4r9Fs.js";import"./SuccessIcon-BVVr417w.js";import"./Icon-CHP4Ujl2.js";import"./WarningIcon-YEiE9qc_.js";import"./BaseRadioButton-DcXhD-2Y.js";import"./Label-CHvJ6rAQ.js";import"./BaseRadioButton.stories-e05yMAl4.js";import"./Title-Cq5i8qLj.js";import"./Card-CB0e7bMh.js";import"./Text-C8cj1umF.js";import"./Tag-D73Srnl9.js";import"./ExpandablePanel-DfZkh3Eq.js";import"./useAnimatedHeightBetween-D_OGESyC.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D874WqxX.js";import"./Expander-GvZFzxEa.js";import"./ChevronUpIcon-ViW49Dt6.js";import"./ListItem-D7z4h_5g.js";const ie={title:"Komponenter/Field Group",component:u,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...d.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(g,{...l.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...k.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...c.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
