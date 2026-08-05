import{r as n,j as i}from"./iframe-D3RJL4M1.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CYTjdjPU.js";import l from"./Help.stories-B9jJDPBz.js";import c from"./RadioButton.stories-B4Yh7CGR.js";import{F as d}from"./FieldGroup-DOqVi_Rb.js";import{C as k,a as u}from"./CheckboxPanel.stories-D8XqBn-w.js";import{RadioPanel as g}from"./RadioPanel.stories-BH1veoW-.js";import{C as h}from"./Checkbox-C-rxn4Rc.js";import{R as b}from"./RadioPanel-DjLuIp9y.js";import{H as x}from"./Help-C7GapCbF.js";import{R as C}from"./RadioButton-BrlbrQo2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BggpRGDG.js";import"./Label-Drb59-I7.js";import"./SupportLabel-C58wAoaC.js";import"./SuccessIcon-DX1TjtrF.js";import"./Icon-DGAn_6a2.js";import"./WarningIcon-Dkev5qh8.js";import"./BaseRadioButton.stories-CAiKfe-u.js";import"./BaseRadioButton-SMDthhWL.js";import"./InputPanel-DtXO5PR2.js";import"./Flex-YxoVvTdg.js";import"./SlotComponent-BV2SWvU2.js";import"./mergeRefs-DAv1LZl5.js";import"./Button-CY1nnrpX.js";import"./usePreviousValue-D2tItYEM.js";import"./Loader-kxKcqPZm.js";import"./useDelayedRender-DVh1nTH1.js";import"./Title-CGs3tLt2.js";import"./Card-BU5rlS4r.js";import"./Text-CkK91xS-.js";import"./Tag-b8xAlQud.js";import"./ExpandablePanel-4hH50t9i.js";import"./useAnimatedHeightBetween-C3yt6ohy.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DRCfN-YX.js";import"./Expander-Di1EZPf9.js";import"./ChevronUpIcon-BvUOkobO.js";import"./ListItem-BuJzL8TL.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
