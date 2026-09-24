import{r as n,j as i}from"./iframe-BVjcNEb5.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BgOf1H13.js";import{CheckboxStory as c}from"./Checkbox.stories-OaCP09O4.js";import d from"./Help.stories-8k27Qfi5.js";import k from"./RadioButton.stories-DYQUxzZI.js";import{RadioPanel as u}from"./RadioPanel.stories-BOm_Lo3U.js";import{F as g}from"./FieldGroup-CVM5qaV_.js";import{C as h}from"./Checkbox-Yybni-zH.js";import{R as b}from"./RadioPanel-BIt6Sj8H.js";import{H as x}from"./Help-DnM1vzHJ.js";import{R as C}from"./RadioButton-C4iCbq47.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DudbFeZE.js";import"./clsx-B-dksMZM.js";import"./Flex-CVp3I_Ov.js";import"./SlotComponent-BXXifoRO.js";import"./mergeRefs-Cvk7N3yF.js";import"./Button-DVb5w0_4.js";import"./usePreviousValue-R_hTfSVA.js";import"./Loader-zDHmrHSM.js";import"./useDelayedRender-C5YOVWfc.js";import"./useId-Bb1ExcvL.js";import"./Label-B0GIa1Yp.js";import"./SupportLabel-D2Al2d6H.js";import"./SuccessIcon-CSCJCthT.js";import"./Icon-B3sdwb9P.js";import"./WarningIcon-CTeCv8lS.js";import"./BaseRadioButton.stories-8og_VUy-.js";import"./BaseRadioButton-CQvakRD_.js";import"./Title-BHd9shnx.js";import"./Card-BtsrUqFO.js";import"./Text-C0vve26g.js";import"./Tag-BOuEGo48.js";import"./ExpandablePanel-CDyPwlOB.js";import"./useAnimatedHeightBetween-DgBsqvGL.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DFYV_k9K.js";import"./Expander-xZUQXcwz.js";import"./ChevronUpIcon-PZpKHAKr.js";import"./ListItem-Cv2vzE2t.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
