import{r as n,j as i}from"./iframe-flQ69wzQ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DLLpOtbW.js";import{CheckboxStory as c}from"./Checkbox.stories-DSlKPZM0.js";import d from"./Help.stories-4oUiFf4h.js";import k from"./RadioButton.stories-Ho0JjbP6.js";import{RadioPanel as u}from"./RadioPanel.stories-D1sJJGuM.js";import{F as g}from"./FieldGroup-BwcvRP5U.js";import{C as h}from"./Checkbox-D8Vr8kt9.js";import{R as b}from"./RadioPanel-BLAncANx.js";import{H as x}from"./Help-C2HDqwiz.js";import{R as C}from"./RadioButton-CpTVcOGC.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-K6jj2Cef.js";import"./clsx-B-dksMZM.js";import"./Flex-C1rZ-Gx2.js";import"./SlotComponent-ESaW3yQq.js";import"./mergeRefs-CR1bJJ-Y.js";import"./Button-BVdSyqb7.js";import"./usePreviousValue-IfqDOTOB.js";import"./Loader-B8-oK3ak.js";import"./useDelayedRender-C-dOm6M-.js";import"./useId-DR71Olns.js";import"./Label-qPtr7Ved.js";import"./SupportLabel-xRCqBzpt.js";import"./SuccessIcon-DtRF8wjo.js";import"./Icon-Cmf2mBmJ.js";import"./WarningIcon-kHtajMSC.js";import"./BaseRadioButton.stories-cnxNSqfh.js";import"./BaseRadioButton-DUbxU7ql.js";import"./Title-Bmf6HG9V.js";import"./Card-BtNGDSU5.js";import"./Text-CxnKSgxs.js";import"./Tag-XmjEnLWo.js";import"./ExpandablePanel-CGox2yjP.js";import"./useAnimatedHeightBetween-Ca8CFGvz.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bvfn_eTv.js";import"./Expander-VAZAb4cT.js";import"./ChevronUpIcon-Bq19RV3u.js";import"./ListItem-C26MkwlS.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
