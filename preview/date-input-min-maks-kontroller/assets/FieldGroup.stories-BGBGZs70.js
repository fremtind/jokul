import{r as n,j as i}from"./iframe-ocIH417Y.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-pfNL8-qB.js";import{CheckboxStory as c}from"./Checkbox.stories-ertyQn6e.js";import d from"./Help.stories-CIzhDb3Q.js";import k from"./RadioButton.stories-TkUW2B2S.js";import{RadioPanel as u}from"./RadioPanel.stories-B7dj9UE2.js";import{F as g}from"./FieldGroup-hiKfNQJF.js";import{C as h}from"./Checkbox-C67oXiJn.js";import{R as b}from"./RadioPanel-DQAnYj1W.js";import{H as x}from"./Help-iReCmMCq.js";import{R as C}from"./RadioButton-bE2nYa4M.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CCzxOieB.js";import"./clsx-B-dksMZM.js";import"./Flex-CNtF9w_f.js";import"./SlotComponent-B9kXQZaK.js";import"./mergeRefs-C7MTpmK6.js";import"./Button--VIrcqqD.js";import"./usePreviousValue-CBkZzXF1.js";import"./Loader-CYWyLLGa.js";import"./useDelayedRender-B0OaZn1h.js";import"./useId-DjwODTjL.js";import"./Label-BP-JiFvG.js";import"./SupportLabel-SQnrfA5K.js";import"./SuccessIcon-D8wWYkXF.js";import"./Icon-DHLdetjC.js";import"./WarningIcon-Bwffdl4i.js";import"./BaseRadioButton.stories-CH00ga4J.js";import"./BaseRadioButton-Ch8CGlgD.js";import"./Title-9i__Z3Q0.js";import"./Card-DsON7bqV.js";import"./Text-CLSLzaRO.js";import"./Tag-TIDVyIto.js";import"./ExpandablePanel-DVc21eWi.js";import"./useAnimatedHeightBetween-BFAWfyl7.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bptrmcp9.js";import"./Expander-hWX9ISa3.js";import"./ChevronUpIcon-CCUDCYcP.js";import"./ListItem-DnyIF4MN.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
