import{r as p,j as i}from"./iframe-BYDQ9t-R.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CpJS17wx.js";import l from"./Help.stories-H-PLHZNW.js";import c from"./RadioButton.stories-CGWrhFyM.js";import{F as d}from"./FieldGroup-B5e-CZGE.js";import{C as k,a as u}from"./CheckboxPanel.stories-B_Y5ZBQJ.js";import{RadioPanel as g}from"./RadioPanel.stories-tKsBgU4c.js";import{C as h}from"./Checkbox-CTcgix2v.js";import{R as b}from"./RadioPanel-Q5-81AqC.js";import{H as x}from"./Help-il2smAJh.js";import{R as C}from"./RadioButton-DAZbzGB8.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BqpjVNoX.js";import"./BaseRadioButton-CGdjjGEp.js";import"./clsx-B-dksMZM.js";import"./useId-CaYbnJL2.js";import"./Label-CEpiLHOh.js";import"./SupportLabel-M_dy_Vbh.js";import"./SuccessIcon-DWrF41P2.js";import"./Icon-c392TJL2.js";import"./WarningIcon-C6XIyQv1.js";import"./InputPanel-BUuln3so.js";import"./Flex-D0Sdsd4J.js";import"./SlotComponent-DOy3sw38.js";import"./mergeRefs-BLE720wM.js";import"./Button-BO6ZUjBN.js";import"./usePreviousValue-Bmi3-Atz.js";import"./Loader-CJ-430iY.js";import"./useDelayedRender-CbPAmNjl.js";import"./Title-DZ_7Yp5_.js";import"./Card-gIvwd9Kl.js";import"./Text-BDadfjeV.js";import"./Tag-CNvPRiX0.js";import"./ExpandablePanel-oTti7Xin.js";import"./useAnimatedHeightBetween-CRCDXATm.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-uLDokuDz.js";import"./Expander-CmX9tvlJ.js";import"./ChevronDownIcon-Bu38jftL.js";import"./ChevronUpIcon-cSWW6wAG.js";import"./ListItem-CHYTRTS8.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
