import{r as n,j as i}from"./iframe-DkeGfFqX.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-EalPcibp.js";import{CheckboxStory as c}from"./Checkbox.stories-DLvNFOL5.js";import d from"./Help.stories-CLLwf7Nn.js";import k from"./RadioButton.stories-BanxtfCn.js";import{RadioPanel as u}from"./RadioPanel.stories-Bik9roB-.js";import{F as g}from"./FieldGroup-Djty4Wyi.js";import{C as h}from"./Checkbox-BQi85tdk.js";import{R as b}from"./RadioPanel-DcnJKIvp.js";import{H as x}from"./Help-w7JCBZSi.js";import{R as C}from"./RadioButton-BeCjmsI_.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Gi6bNUTt.js";import"./clsx-B-dksMZM.js";import"./Flex-mc96J-ub.js";import"./SlotComponent-BCRJghdR.js";import"./mergeRefs-BfQPCS5M.js";import"./Button-BqRxzuS5.js";import"./usePreviousValue-FOBhd300.js";import"./Loader-3GKZPeRZ.js";import"./useDelayedRender-DbdjVoHv.js";import"./useId-Dgwwxc9e.js";import"./Label-CwKutkDv.js";import"./SupportLabel-Bzqa_R8P.js";import"./SuccessIcon-wkXTLFvF.js";import"./Icon-CMcdFs76.js";import"./WarningIcon-DSPEwznE.js";import"./BaseRadioButton.stories-DmimvktY.js";import"./BaseRadioButton-DjbWt09-.js";import"./Title-z3lcCiKD.js";import"./Card-9tYsQFPc.js";import"./Text-BZMJpZIm.js";import"./Tag-Cr8pfE8_.js";import"./ExpandablePanel-DRTCMMt4.js";import"./useAnimatedHeightBetween-CvRvpJQa.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BSNH4dkd.js";import"./Expander-Fj-J2Qy2.js";import"./ChevronUpIcon-DV9xZ_qw.js";import"./ListItem-BPLbBWrU.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
