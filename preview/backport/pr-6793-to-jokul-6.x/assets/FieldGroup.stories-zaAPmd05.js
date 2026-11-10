import{r as n,j as i}from"./iframe-aVFJ7yT8.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BUB-T5N7.js";import{CheckboxStory as c}from"./Checkbox.stories-Cm2l_Ioe.js";import d from"./Help.stories-D2UpXuZ1.js";import k from"./RadioButton.stories-BeXBKbc5.js";import{RadioPanel as u}from"./RadioPanel.stories-BjSw7ZYd.js";import{F as g}from"./FieldGroup-Bfn43xTy.js";import{C as h}from"./Checkbox-C4rE3U-6.js";import{R as b}from"./RadioPanel-BivuoqNd.js";import{H as x}from"./Help-iXGLNL8p.js";import{R as C}from"./RadioButton-CeIKsLj9.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-sKlJrC8Q.js";import"./clsx-B-dksMZM.js";import"./Flex-UKZ5Manu.js";import"./SlotComponent-BDkubsC6.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BbWFz9QX.js";import"./usePreviousValue-UASN-2LY.js";import"./Loader-CU2lHeB9.js";import"./useDelayedRender-efrq9XzA.js";import"./useId-BgUuR6Kz.js";import"./Label-DuvsuCjq.js";import"./SupportLabel-CoSMghb2.js";import"./SuccessIcon-C-lRMCtt.js";import"./Icon-CJnjbsu_.js";import"./WarningIcon-qGwuz1_O.js";import"./BaseRadioButton.stories-DQZZl9Sd.js";import"./BaseRadioButton-C_JMMIpf.js";import"./Title-BuaMeYeU.js";import"./Card-l6r81Jke.js";import"./Text-CQ3V-GW7.js";import"./Tag-CBwhmjI4.js";import"./ExpandablePanel-BW-AsShW.js";import"./useAnimatedHeightBetween-CmTbeijg.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D29e2EME.js";import"./Expander-DdVRJ0Ym.js";import"./ChevronUpIcon-Dd2bKsCa.js";import"./ListItem-DdpChPiA.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
