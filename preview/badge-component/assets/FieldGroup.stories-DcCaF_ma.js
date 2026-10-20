import{r as n,j as i}from"./iframe-CExNQTwL.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BP_WE5uQ.js";import{CheckboxStory as c}from"./Checkbox.stories-dY_yhWqw.js";import d from"./Help.stories-DcVLMI3-.js";import k from"./RadioButton.stories-Bidkc7tG.js";import{RadioPanel as u}from"./RadioPanel.stories-Bi-SLV3t.js";import{F as g}from"./FieldGroup-DY8zUY7l.js";import{C as h}from"./Checkbox-CrRy6fWw.js";import{R as b}from"./RadioPanel-Cc4aG7h3.js";import{H as x}from"./Help-xoTI3_Fn.js";import{R as C}from"./RadioButton-DNqvMTgR.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Cl1CoGAu.js";import"./clsx-B-dksMZM.js";import"./Flex-4lA1hkYi.js";import"./SlotComponent-DePPdfKu.js";import"./mergeRefs-D6Usw7mE.js";import"./Button-f7SVFka6.js";import"./usePreviousValue-BVgFfbq7.js";import"./Loader-cmisX-TA.js";import"./useDelayedRender-CtDlc0X-.js";import"./useId-NPzug_rM.js";import"./Label-DDcs5TJ7.js";import"./SupportLabel-DSt1pslH.js";import"./SuccessIcon-CufdWbrK.js";import"./Icon-DD5Y54mP.js";import"./WarningIcon-w7dUcqyV.js";import"./BaseRadioButton.stories-B0ie5pMm.js";import"./BaseRadioButton-BUW-paWW.js";import"./Title-BxV27uma.js";import"./Card-DlFn8x4e.js";import"./Text-aNk5SE77.js";import"./Tag-CTX3JQGl.js";import"./ExpandablePanel-CZW8_NsP.js";import"./useAnimatedHeightBetween-DgxBH4hW.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DIe1QeV5.js";import"./Expander-Duk9UnUl.js";import"./ChevronUpIcon-CuDwfYxF.js";import"./ListItem-CnlbmejS.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
