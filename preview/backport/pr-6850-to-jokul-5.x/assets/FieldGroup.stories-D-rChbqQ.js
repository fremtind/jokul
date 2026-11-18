import{r as p,j as i}from"./iframe-n756yFYm.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DR6akWl8.js";import{CheckboxStory as c}from"./Checkbox.stories-CFqbdOEr.js";import d from"./Help.stories-DcrP6Hz8.js";import k from"./RadioButton.stories-PGlCIfFX.js";import{RadioPanel as u}from"./RadioPanel.stories-DKbVpMub.js";import{F as g}from"./FieldGroup-BI7UVKpn.js";import{C as h}from"./Checkbox-BE-mr9wt.js";import{R as b}from"./RadioPanel-Dm56nNnD.js";import{H as x}from"./Help-COy1DJzo.js";import{R as C}from"./RadioButton-BQC90lNh.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BtUXFchp.js";import"./clsx-B-dksMZM.js";import"./Flex-cU-2E0ab.js";import"./SlotComponent-DckTmL4D.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Cw-GwtIj.js";import"./usePreviousValue-BxeDjysz.js";import"./Loader-DxUPgU2v.js";import"./useDelayedRender-CRFlrt8B.js";import"./BaseRadioButton.stories-DsSoM3Kz.js";import"./BaseRadioButton-kkRGdA87.js";import"./useId-QS6U249B.js";import"./Title-6Ab16yeP.js";import"./Card-BiYu6HW2.js";import"./Text-8x-FWkYp.js";import"./Tag-BA92iHkA.js";import"./ExpandablePanel-COUrm-eP.js";import"./useAnimatedHeightBetween-DIa8MTj1.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CNNxQXbr.js";import"./Expander-DpYBmntM.js";import"./ChevronDownIcon-BQipFaAF.js";import"./Icon-BmVhcT-z.js";import"./ChevronUpIcon-DwylorQq.js";import"./ListItem-DY-2OlbY.js";import"./Label-BLtLtrX0.js";import"./SupportLabel-BHwD5wcZ.js";import"./SuccessIcon-kuVQqkSP.js";import"./WarningIcon-B7ahr2ks.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
