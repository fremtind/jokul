import{r as p,j as i}from"./iframe-CbDy8VtV.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BlOSoqO0.js";import{CheckboxStory as c}from"./Checkbox.stories-D8Ilvtz4.js";import d from"./Help.stories-B17wvVUw.js";import k from"./RadioButton.stories-30u61V1r.js";import{RadioPanel as u}from"./RadioPanel.stories-CEFiV8BV.js";import{F as g}from"./FieldGroup-BjMwhNa6.js";import{C as h}from"./Checkbox-DSJscNrL.js";import{R as b}from"./RadioPanel-D8anc9EZ.js";import{H as x}from"./Help-Bu8Bg3N9.js";import{R as C}from"./RadioButton-C0cPpxRu.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D6u0Qt54.js";import"./clsx-B-dksMZM.js";import"./types-YjSsgwWY.js";import"./Flex-B7iA6rin.js";import"./SlotComponent-B4iJUTB9.js";import"./mergeRefs-BP49nbdk.js";import"./Button-BVdFW8TZ.js";import"./usePreviousValue-MEpVntmv.js";import"./Loader-DJVOr8R1.js";import"./useDelayedRender-PC2FXEKg.js";import"./useId-CvnY-NT8.js";import"./Label-DNtFcu3y.js";import"./SupportLabel-BEctcun_.js";import"./SuccessIcon-DJV-t2JM.js";import"./Icon-DLyrvcZF.js";import"./WarningIcon-qBC3zuer.js";import"./BaseRadioButton.stories-BX_rePUG.js";import"./BaseRadioButton-BzpjKodJ.js";import"./Title-CTruQl8T.js";import"./Card-BR_srGAw.js";import"./Text-Bbg9I5NE.js";import"./Tag-DcYfWibA.js";import"./ExpandablePanel-CjU-bRQe.js";import"./useAnimatedHeightBetween-C_sPOcM7.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BLRo8EtC.js";import"./Expander-BHzLQ0_o.js";import"./ChevronUpIcon-GZi40Axl.js";import"./ListItem-B8cx2bil.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
