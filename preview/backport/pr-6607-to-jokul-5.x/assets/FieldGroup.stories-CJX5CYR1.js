import{r as p,j as i}from"./iframe-DYHNdvHs.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D9PLujWm.js";import{CheckboxStory as c}from"./Checkbox.stories-BQ_Cf3It.js";import d from"./Help.stories-DIXn2DDl.js";import k from"./RadioButton.stories-DHSMWO1S.js";import{RadioPanel as u}from"./RadioPanel.stories-DbGnc4Ob.js";import{F as g}from"./FieldGroup-Cseq7ue6.js";import{C as h}from"./Checkbox--pd39GPB.js";import{R as b}from"./RadioPanel-CVug1IXT.js";import{H as x}from"./Help-CQ7l3KMk.js";import{R as C}from"./RadioButton-gFfiVhcu.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C5Edf1gG.js";import"./clsx-B-dksMZM.js";import"./Flex-CoosRx4H.js";import"./SlotComponent-BBUbcOw-.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Domw-UPE.js";import"./usePreviousValue-CqgYiLtU.js";import"./Loader-FxYOs01l.js";import"./useDelayedRender-D6VJIJ7R.js";import"./BaseRadioButton.stories-CdaNJGGP.js";import"./BaseRadioButton-DqvzVXLl.js";import"./useId-BsCBTunJ.js";import"./Title-BKh976v2.js";import"./Card-DCoVlCU2.js";import"./Text-DqcSeExS.js";import"./Tag-DtWC0Gjp.js";import"./ExpandablePanel-D6zxrLVR.js";import"./useAnimatedHeightBetween-CpH8TaRc.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-kxn3Pdgf.js";import"./Expander-B9kZhFdB.js";import"./ChevronDownIcon-CSunW6OP.js";import"./Icon-DnJrdIYl.js";import"./ChevronUpIcon-DyK6jy7Y.js";import"./ListItem-b15Er_Ph.js";import"./Label-B416j6M0.js";import"./SupportLabel-CvAwF8jP.js";import"./SuccessIcon-BCucXIMx.js";import"./WarningIcon-DYuj8iyT.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
