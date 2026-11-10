import{r as p,j as i}from"./iframe-Bn7VsF7L.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-KTKafFlJ.js";import{CheckboxStory as c}from"./Checkbox.stories-CDY1SSG_.js";import d from"./Help.stories-CGO8JFP7.js";import k from"./RadioButton.stories-BLRgfm4r.js";import{RadioPanel as u}from"./RadioPanel.stories-CX6GvZbo.js";import{F as g}from"./FieldGroup-_3N7_gl1.js";import{C as h}from"./Checkbox-qmdrzwI4.js";import{R as b}from"./RadioPanel-CjfiqdNi.js";import{H as x}from"./Help-31dXzVUT.js";import{R as C}from"./RadioButton-CBZtDtxZ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dd4ACpbd.js";import"./clsx-B-dksMZM.js";import"./Flex-fXCpFTfT.js";import"./SlotComponent-R7OjPauN.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DLiVVAIG.js";import"./usePreviousValue-CFFgWC0U.js";import"./Loader-BjEmL99U.js";import"./useDelayedRender-CDOLUM0u.js";import"./BaseRadioButton.stories-CPGaSUPW.js";import"./BaseRadioButton-B1J8Ri6E.js";import"./useId-YQFeCZS-.js";import"./Title-IIBPdjeH.js";import"./Card-C5mn-8Cy.js";import"./Text-CaqFTnbg.js";import"./Tag-DCbienle.js";import"./ExpandablePanel-Dq0ACsv_.js";import"./useAnimatedHeightBetween-CeGjafJ4.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CqISP3SK.js";import"./Expander-p7i54_mZ.js";import"./ChevronDownIcon-DmIbdb7A.js";import"./Icon-CBTH6Uzi.js";import"./ChevronUpIcon-B22pzTtO.js";import"./ListItem-BCqvZYWo.js";import"./Label-5Fya-z7U.js";import"./SupportLabel-8hJIeuft.js";import"./SuccessIcon-33TG4sbU.js";import"./WarningIcon-D4U4Rico.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
