import{r as n,j as i}from"./iframe-BEpC9W95.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DN1QWCdk.js";import{CheckboxStory as c}from"./Checkbox.stories-pLVSkLY0.js";import d from"./Help.stories-DiVzTy8O.js";import k from"./RadioButton.stories-D4XNZyzF.js";import{RadioPanel as u}from"./RadioPanel.stories-CdPKj-Sm.js";import{F as g}from"./FieldGroup-DaWf_9J6.js";import{C as h}from"./Checkbox-CSf9S--h.js";import{R as b}from"./RadioPanel-BokrS_It.js";import{H as x}from"./Help-CV0WGvHj.js";import{R as C}from"./RadioButton-CvOX0Boz.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-VHNordWz.js";import"./clsx-B-dksMZM.js";import"./Flex-D59CYxbj.js";import"./SlotComponent-C7Xrad09.js";import"./mergeRefs-998iV2Wb.js";import"./Button-DJaZ29_N.js";import"./usePreviousValue-WFqjRC0V.js";import"./Loader-BmfKl_AO.js";import"./useDelayedRender-C3L2GV7U.js";import"./useId-C7cO8LGV.js";import"./Label-DGV2rOhO.js";import"./SupportLabel-DDt9HPEt.js";import"./SuccessIcon-QdX6f4yD.js";import"./Icon-CexYCzGO.js";import"./WarningIcon-DLbxzt5W.js";import"./BaseRadioButton.stories-C1vgAbag.js";import"./BaseRadioButton-I4G2ivWF.js";import"./Title-pXmzlDqA.js";import"./Card-BrFZqsGH.js";import"./Text-BL8AWI8F.js";import"./Tag-Qq4UhGQZ.js";import"./ExpandablePanel-DbFDe5nY.js";import"./useAnimatedHeightBetween-CrvIu-yz.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-QbpDEhla.js";import"./Expander-d78rWj-X.js";import"./ChevronUpIcon-BKxAFsr5.js";import"./ListItem-w6y-Oluc.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
