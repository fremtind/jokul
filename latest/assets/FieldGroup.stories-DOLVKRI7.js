import{r as p,j as i}from"./iframe-I9cNj39i.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DtntDT2P.js";import l from"./Help.stories-pDxeGPb3.js";import c from"./RadioButton.stories-CxwyWkUi.js";import{F as d}from"./FieldGroup-ChuBEVDY.js";import{C as k,a as u}from"./CheckboxPanel.stories-CDpswyTu.js";import{RadioPanel as g}from"./RadioPanel.stories-CekUpx2l.js";import{C as h}from"./Checkbox-CedzUCZ7.js";import{R as b}from"./RadioPanel-HS_yVXj2.js";import{H as x}from"./Help-0Qwp8YJw.js";import{R as C}from"./RadioButton-BV-7pxSV.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-DuEW9RYG.js";import"./BaseRadioButton-CzhqWZl7.js";import"./clsx-B-dksMZM.js";import"./useId-D9CN4kcv.js";import"./Label-BYguGVXD.js";import"./SupportLabel-DQhdOWhe.js";import"./SuccessIcon-Z-xDQNZF.js";import"./Icon-Bq3llamF.js";import"./WarningIcon-OBc5TdlR.js";import"./InputPanel-1Pvkj-ou.js";import"./Flex-DpRnwKvZ.js";import"./SlotComponent-CiG57t2z.js";import"./mergeRefs-Cp4gsxXU.js";import"./Button-pmw7tvS8.js";import"./usePreviousValue-CBB8qYgp.js";import"./Loader-0empvAwy.js";import"./useDelayedRender-CesKbgLA.js";import"./Title-KwO1d6fm.js";import"./Card-BhQj-HcS.js";import"./Text-ykw8sLRM.js";import"./Tag-Ch00qAkd.js";import"./ExpandablePanel-BmHX-zCq.js";import"./useAnimatedHeightBetween-BoCb1GxW.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C7Icu8lf.js";import"./Expander-DMdvfMil.js";import"./ChevronDownIcon-tAKWupzC.js";import"./ChevronUpIcon-IG3QSm8_.js";import"./ListItem-CURkFSJ5.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
