import{r as n,j as i}from"./iframe-6vhmOHsg.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DWZ0Nrmz.js";import l from"./Help.stories-COD9yMt7.js";import c from"./RadioButton.stories-DkMaj3GM.js";import{F as d}from"./FieldGroup-CfJIy-0B.js";import{C as k,a as u}from"./CheckboxPanel.stories-0TrGL0bQ.js";import{RadioPanel as g}from"./RadioPanel.stories-BphBIGzR.js";import{C as h}from"./Checkbox-TBcJBA8m.js";import{R as b}from"./RadioPanel-CJ-Z6c5K.js";import{H as x}from"./Help-DXSrgEQW.js";import{R as C}from"./RadioButton-B1XUz9Uw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Ck2z70Ue.js";import"./Label-BZ2Njyom.js";import"./SupportLabel-73nrxP3g.js";import"./SuccessIcon-DLLLEf4P.js";import"./Icon-Ds9UEVTj.js";import"./WarningIcon-kIO4JOE1.js";import"./BaseRadioButton.stories-DBW4w5iI.js";import"./BaseRadioButton-Dyse5BIB.js";import"./InputPanel-n53Ayi52.js";import"./Flex-DFOGrXVr.js";import"./SlotComponent-CAhHD0JO.js";import"./mergeRefs-IRDAUkxa.js";import"./Button-rINZem_O.js";import"./usePreviousValue-BQCTGBOR.js";import"./Loader-DfDeWADv.js";import"./useDelayedRender-C66sJv-f.js";import"./Title-BN_XOLbu.js";import"./Card-DMe9Q8EC.js";import"./Text-B0_eqeBW.js";import"./Tag-BBzwOE4D.js";import"./ExpandablePanel-8Frbq2fn.js";import"./useAnimatedHeightBetween-BwDRqlFt.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C_NjT71P.js";import"./Expander-CSvyckXK.js";import"./ChevronUpIcon-Df1GfUo3.js";import"./ListItem-C3j6fXLN.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
