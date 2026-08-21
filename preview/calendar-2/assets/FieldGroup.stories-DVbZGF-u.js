import{r as n,j as i}from"./iframe-B5-EsWES.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BjjMWErA.js";import l from"./Help.stories-BUEKcvm-.js";import c from"./RadioButton.stories-DHXuEGSF.js";import{F as d}from"./FieldGroup-KMVqODXy.js";import{C as k,a as u}from"./CheckboxPanel.stories-CGxCdTE8.js";import{RadioPanel as g}from"./RadioPanel.stories-Cms8PN1Z.js";import{C as h}from"./Checkbox-Bg1i5h15.js";import{R as b}from"./RadioPanel-BUKEWev7.js";import{H as x}from"./Help-BVf53uwB.js";import{R as C}from"./RadioButton-DIup8ibj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DLNMEdKy.js";import"./Label-BVenPMYm.js";import"./SupportLabel-gbYwLygJ.js";import"./SuccessIcon-CMZwq4Ft.js";import"./Icon-C_9kVWMg.js";import"./WarningIcon-BQzW7-bU.js";import"./BaseRadioButton.stories-C5EULP6z.js";import"./BaseRadioButton-BUZ2qd6C.js";import"./InputPanel-Tc9GlJCA.js";import"./Flex-D3RdLEEE.js";import"./SlotComponent-pSW6PkUz.js";import"./mergeRefs-U2pP82X_.js";import"./Button-D4GpVjwL.js";import"./usePreviousValue-FlBPtRjV.js";import"./Loader-BBo2pDju.js";import"./useDelayedRender-CNX_gqWk.js";import"./Title-MRT-7fKD.js";import"./Card-BERLQOLq.js";import"./Text-AjyFVD_x.js";import"./Tag-c3zfhV6g.js";import"./ExpandablePanel-BoI2nnzh.js";import"./useAnimatedHeightBetween-B-_xTxQr.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DiusfrSb.js";import"./Expander-ClC-QPN5.js";import"./ChevronUpIcon-CvkqMsJ4.js";import"./ListItem-BNf_fQRK.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
