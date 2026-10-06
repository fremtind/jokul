import{r as n,j as i}from"./iframe-BKG1jZWe.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-dlkJIT2o.js";import{CheckboxStory as c}from"./Checkbox.stories-CIec85fv.js";import d from"./Help.stories-Dg2hLSKG.js";import k from"./RadioButton.stories-BDO10i0R.js";import{RadioPanel as u}from"./RadioPanel.stories-nYvJUGrn.js";import{F as g}from"./FieldGroup-CahkPpl7.js";import{C as h}from"./Checkbox-BS82QRt0.js";import{R as b}from"./RadioPanel-CRUNfzu8.js";import{H as x}from"./Help-wcGBC7SW.js";import{R as C}from"./RadioButton-DzSvpl8e.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D8mgOZll.js";import"./clsx-B-dksMZM.js";import"./Flex-CjAmRfUG.js";import"./SlotComponent-BTEycg85.js";import"./mergeRefs-BjjSwDeM.js";import"./Button-BeKupKiJ.js";import"./usePreviousValue-DKy5vziY.js";import"./Loader-CsLRftlw.js";import"./useDelayedRender-D_2dKtom.js";import"./useId-B4NPTCGG.js";import"./Label-C43xETX3.js";import"./SupportLabel-DoEXIQkR.js";import"./SuccessIcon-JQ8lFhNH.js";import"./Icon-oyuRyIYY.js";import"./WarningIcon-DxnQcvWT.js";import"./BaseRadioButton.stories-CySn9EIt.js";import"./BaseRadioButton-DXfr8vaB.js";import"./Title-7smV8RGf.js";import"./Card-ClZNPjSP.js";import"./Text-BCheaNWi.js";import"./Tag-AS8V1mVs.js";import"./ExpandablePanel-C-mH1jzX.js";import"./useAnimatedHeightBetween-BpbfGNbu.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C27J7wdf.js";import"./Expander-Dxh7lQL_.js";import"./ChevronUpIcon-CwnQo_9Q.js";import"./ListItem-BEfuemcE.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
