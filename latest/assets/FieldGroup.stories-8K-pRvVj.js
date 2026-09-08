import{r as p,j as i}from"./iframe-Fl08Z0FO.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Dui9ZLZT.js";import{CheckboxStory as c}from"./Checkbox.stories-ChD4zyTP.js";import d from"./Help.stories-ChEHlVXV.js";import k from"./RadioButton.stories-DYtarwAf.js";import{RadioPanel as u}from"./RadioPanel.stories-BaYWPM0g.js";import{F as g}from"./FieldGroup-B1032GZs.js";import{C as h}from"./Checkbox-p21pBYrh.js";import{R as b}from"./RadioPanel-GZy2Spkl.js";import{H as x}from"./Help-IGQGRgKH.js";import{R as C}from"./RadioButton-Cw-IKtVR.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DFe6Eafv.js";import"./clsx-B-dksMZM.js";import"./Flex-B2fE_tw8.js";import"./SlotComponent-BooO5wgJ.js";import"./mergeRefs-CoRgzciW.js";import"./Button-4ODe-xVd.js";import"./usePreviousValue-Cb3zr3DL.js";import"./Loader-DWXYt9ox.js";import"./useDelayedRender-DSbmwja_.js";import"./BaseRadioButton.stories-CaBo8x6F.js";import"./BaseRadioButton-BeHrhGrO.js";import"./useId-CaMwzDU3.js";import"./Title-DyInbJuI.js";import"./Card-CGrquiqZ.js";import"./Text-DSXdFSU0.js";import"./Tag-xrwxhIPu.js";import"./ExpandablePanel-DRH-K209.js";import"./useAnimatedHeightBetween-DCzynWfv.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CJKOmLy_.js";import"./Expander-DFR4AOZy.js";import"./ChevronDownIcon-C9u8rgnF.js";import"./Icon-DpLrlLzt.js";import"./ChevronUpIcon-CX9jUKik.js";import"./ListItem-DqPJpQrT.js";import"./Label-CNhSlcFk.js";import"./SupportLabel-BeTHxRPv.js";import"./SuccessIcon-BG0jBBtA.js";import"./WarningIcon-DKW9jcuS.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
