import{r as n,j as i}from"./iframe-CLJu8aaH.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D7--IFNA.js";import{CheckboxStory as c}from"./Checkbox.stories-Bfk6H0FS.js";import d from"./Help.stories-BHM5GA09.js";import k from"./RadioButton.stories-j8bIuRmG.js";import{RadioPanel as u}from"./RadioPanel.stories-CJzeeMO1.js";import{F as g}from"./FieldGroup-HaXOXBOE.js";import{C as h}from"./Checkbox-BTDM6N9y.js";import{R as b}from"./RadioPanel-H00mQ6Ht.js";import{H as x}from"./Help-DJd-cYYL.js";import{R as C}from"./RadioButton-OuSPLgj8.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B3HxcUP1.js";import"./clsx-B-dksMZM.js";import"./Flex-fTZjaTgF.js";import"./SlotComponent-Jq5zgiKf.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DBLLknRD.js";import"./usePreviousValue-BYfg2fQL.js";import"./Loader-CTBsuCaQ.js";import"./useDelayedRender-naBckSeQ.js";import"./useId-DJJNFwaC.js";import"./Label-cC1ygCug.js";import"./SupportLabel-CJFCDYFQ.js";import"./SuccessIcon-Q-lLrK8P.js";import"./Icon-4mPQ4J8h.js";import"./WarningIcon-A23jrAep.js";import"./BaseRadioButton.stories-DDuYQRET.js";import"./BaseRadioButton-CsEegVrH.js";import"./Title-BdiU6bdB.js";import"./Card-BNBhiPSg.js";import"./Text-y0hVoTBl.js";import"./Tag-Bft88EnX.js";import"./ExpandablePanel-DGeGertL.js";import"./useAnimatedHeightBetween-DyRwNvSq.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DZdA6hEC.js";import"./Expander-cobcfcmM.js";import"./ChevronUpIcon-DuM7zARn.js";import"./ListItem-Dl-x40p8.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
