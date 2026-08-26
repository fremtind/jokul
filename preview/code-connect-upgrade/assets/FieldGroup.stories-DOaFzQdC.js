import{r as n,j as i}from"./iframe-D-3r0_mJ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CvczEMvD.js";import l from"./Help.stories-D1--Lhlc.js";import c from"./RadioButton.stories-SSqQVTKd.js";import{F as d}from"./FieldGroup-sE0uJqS5.js";import{C as k,a as u}from"./CheckboxPanel.stories-C9Lug-XB.js";import{RadioPanel as g}from"./RadioPanel.stories-B2I9SGvJ.js";import{C as h}from"./Checkbox-B4djhkKI.js";import{R as b}from"./RadioPanel-D8_UaCFn.js";import{H as x}from"./Help-CuI4pKn2.js";import{R as C}from"./RadioButton-CfqTj0CH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-y6HYKdwv.js";import"./Label-CkCcyU42.js";import"./SupportLabel-CtVtl_Bv.js";import"./SuccessIcon-H6a8Mnja.js";import"./Icon-DYCRlo9j.js";import"./WarningIcon-DmVzvLUt.js";import"./BaseRadioButton.stories-BjTHJO9k.js";import"./BaseRadioButton-zAxuXmf2.js";import"./InputPanel-D5OOOS1D.js";import"./Flex-C1WIuKvo.js";import"./SlotComponent-Da6XoFx6.js";import"./mergeRefs-C9d2QsrK.js";import"./Button-CSYVyLYR.js";import"./usePreviousValue-DVQLo-ce.js";import"./Loader-Bzg8Pj0T.js";import"./useDelayedRender-O4YssX_-.js";import"./Title-DubQzFfA.js";import"./Card-DwadqIXI.js";import"./Text-CJ-XTUqF.js";import"./Tag-DuBTl-dx.js";import"./ExpandablePanel-CoNVwCUW.js";import"./useAnimatedHeightBetween-BxR83i6Q.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C6TOovjQ.js";import"./Expander-BzbJ8Ec0.js";import"./ChevronUpIcon-Dd7-lrFG.js";import"./ListItem-BXObr-a6.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
