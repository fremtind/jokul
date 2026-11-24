import{r as p,j as i}from"./iframe-C-ypBE70.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-GxP8Xgeo.js";import{CheckboxStory as c}from"./Checkbox.stories-wGhoOMvY.js";import d from"./Help.stories-BxjcWH1T.js";import k from"./RadioButton.stories-Cky4wwHg.js";import{RadioPanel as u}from"./RadioPanel.stories-BZZPPzRt.js";import{F as g}from"./FieldGroup-1lkaRwad.js";import{C as h}from"./Checkbox-DaUBTq9N.js";import{R as b}from"./RadioPanel-49iNLf9_.js";import{H as x}from"./Help-10IUJbRX.js";import{R as C}from"./RadioButton-CwdS5i9z.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DMyREOYF.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CDxnXkKs.js";import"./SlotComponent-BS8Sf-0l.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DcAX2etx.js";import"./usePreviousValue-CUqGeeaB.js";import"./Loader-DlhPbbft.js";import"./useDelayedRender-CEjb4RjA.js";import"./useId-B8BlCDSA.js";import"./Label-DTdlpVx_.js";import"./SupportLabel-D_kq0xk5.js";import"./SuccessIcon-Dgakuara.js";import"./Icon-Cu4AHOkf.js";import"./WarningIcon-CeEg-qws.js";import"./BaseRadioButton.stories-rKLw8_Jd.js";import"./BaseRadioButton-DqLKiV6a.js";import"./Title-BocyOihs.js";import"./Card-g__6qCke.js";import"./Text-CG262Gpy.js";import"./Tag-CqJmWpjQ.js";import"./ExpandablePanel-Dthzcwtz.js";import"./useAnimatedHeightBetween-CzJf-Rfd.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BiGpjohW.js";import"./Expander-83S77pqA.js";import"./ChevronUpIcon-BmXjpmIT.js";import"./ListItem-CU2ycCEW.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
