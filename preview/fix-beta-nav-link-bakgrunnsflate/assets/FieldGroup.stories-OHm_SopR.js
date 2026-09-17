import{r as n,j as i}from"./iframe-BdAFB_N8.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B9yG4jWg.js";import{CheckboxStory as c}from"./Checkbox.stories-DELOMVY4.js";import d from"./Help.stories-CifYRg95.js";import k from"./RadioButton.stories-CCAfTYaR.js";import{RadioPanel as u}from"./RadioPanel.stories-CbwdFo8S.js";import{F as g}from"./FieldGroup-BU3WawYc.js";import{C as h}from"./Checkbox-CagflO8-.js";import{R as b}from"./RadioPanel-UV5q6Fkm.js";import{H as x}from"./Help-6lqGxgNS.js";import{R as C}from"./RadioButton-BOMX7y5n.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-EccL76xw.js";import"./clsx-B-dksMZM.js";import"./Flex-BG51ZlfV.js";import"./SlotComponent-4Xx1m6CW.js";import"./mergeRefs-Di3c_I-U.js";import"./Button-RKjBeTpx.js";import"./usePreviousValue-vx8-hsF9.js";import"./Loader-D8_O5TI1.js";import"./useDelayedRender-Bbs4FQb5.js";import"./useId-BRhEUS-b.js";import"./Label-CUdfB-lC.js";import"./SupportLabel-rGoo-Oj0.js";import"./SuccessIcon-h3dB38ol.js";import"./Icon-B5yhDZxL.js";import"./WarningIcon-BCtd2aJq.js";import"./BaseRadioButton.stories-C8hn3vEq.js";import"./BaseRadioButton-D7Shd5Fo.js";import"./Title-Ci1znEgM.js";import"./Card-Dj0jXZ5a.js";import"./Text-CMBy71am.js";import"./Tag-DNQKNNaF.js";import"./ExpandablePanel-DtH1XL8Q.js";import"./useAnimatedHeightBetween-BRh8cv-U.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CJyy4euD.js";import"./Expander-CLdSQk-x.js";import"./ChevronUpIcon-DtjQJi_F.js";import"./ListItem-GM_n_o2l.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
