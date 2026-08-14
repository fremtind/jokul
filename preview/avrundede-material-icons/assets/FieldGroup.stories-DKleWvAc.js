import{r as p,j as i}from"./iframe-CnoVMwoK.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-D8dxK48C.js";import l from"./Help.stories-DBFnEv4d.js";import c from"./RadioButton.stories-Dylh2atz.js";import{F as d}from"./FieldGroup-C-vyCcky.js";import{C as k,a as u}from"./CheckboxPanel.stories-CXQF8n52.js";import{RadioPanel as g}from"./RadioPanel.stories-BzyiAMzy.js";import{C as h}from"./Checkbox-CZMPdOB0.js";import{R as b}from"./RadioPanel-C5q_1-RS.js";import{H as x}from"./Help-B-b0_NmQ.js";import{R as C}from"./RadioButton-CfgAxLIG.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-Dp6ZLtW7.js";import"./BaseRadioButton-aYdCkM0K.js";import"./clsx-B-dksMZM.js";import"./useId-BcrQIPoX.js";import"./Label-B2yU2eUi.js";import"./SupportLabel-CRyXHEVf.js";import"./SuccessIcon-r0MJyvTr.js";import"./Icon-dI8xHqXY.js";import"./WarningIcon-B79wlMSy.js";import"./InputPanel-BHV_RUm9.js";import"./Flex-BUqdqNzG.js";import"./SlotComponent-ByMIRwt2.js";import"./mergeRefs-aUQrcgNI.js";import"./Button-RugziefV.js";import"./usePreviousValue-DETAI6Va.js";import"./Loader-B7zSTP5s.js";import"./useDelayedRender-kclu3LTw.js";import"./Title-BVRx86Nn.js";import"./Card-xhFtWEgQ.js";import"./Text-D4QTP7eB.js";import"./Tag-Dk4InpA-.js";import"./ExpandablePanel-ygszbauw.js";import"./useAnimatedHeightBetween-C8wyWzhp.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-cDix05UX.js";import"./Expander-HgzxjeF7.js";import"./ChevronDownIcon-Bpr5VJH8.js";import"./ChevronUpIcon-Bk_fYgbV.js";import"./ListItem-D6o-aL52.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
