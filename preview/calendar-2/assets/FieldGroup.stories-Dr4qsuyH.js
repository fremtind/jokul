import{r as p,j as i}from"./iframe-DY9Ch4Nd.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DyjaWq77.js";import l from"./Help.stories-YvVUWvNL.js";import c from"./RadioButton.stories-B1eyJK2E.js";import{F as d}from"./FieldGroup-CrbH2SOI.js";import{C as k,a as u}from"./CheckboxPanel.stories-C2As5oJe.js";import{RadioPanel as g}from"./RadioPanel.stories-CCP8GJOs.js";import{C as h}from"./Checkbox-CFagO_Wh.js";import{R as b}from"./RadioPanel-k4fcJwnd.js";import{H as x}from"./Help-D3dXyWE9.js";import{R as C}from"./RadioButton-Cna9hIGu.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-FdNf9mDi.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B0UZ3R2F.js";import"./mergeRefs-oHzAQV1k.js";import"./BaseRadioButton.stories-BwoEJpLn.js";import"./BaseRadioButton-BXwMU3Z1.js";import"./useId-BDCaMSA7.js";import"./Label-DRB4vOZS.js";import"./SupportLabel-CkQEI1fg.js";import"./SuccessIcon-CIlsZM9e.js";import"./Icon-CTcgQjwD.js";import"./WarningIcon-DCcE-kez.js";import"./InputPanel-D7Jegvnh.js";import"./Button-DDpHrUbz.js";import"./usePreviousValue-BySBvO33.js";import"./Loader-KQbaJGx2.js";import"./useDelayedRender-DZDCUOGC.js";import"./Title-VJLheJny.js";import"./Card-ZZzGImmk.js";import"./Text-DxyYDlw0.js";import"./Tag-DLveUUCQ.js";import"./ExpandablePanel-Cisd5vrI.js";import"./useAnimatedHeightBetween-gG9308YI.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DlPY6A2u.js";import"./Expander-C50h8JKj.js";import"./ChevronUpIcon-BD-Ot8f9.js";import"./ListItem-Xu1d16SH.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
