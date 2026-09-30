import{r as n,j as i}from"./iframe-CrtqObXF.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-kNjP0l80.js";import{CheckboxStory as c}from"./Checkbox.stories-ClxsnD1V.js";import d from"./Help.stories-3GEnIjlb.js";import k from"./RadioButton.stories-D4LULQbC.js";import{RadioPanel as u}from"./RadioPanel.stories-dhu4gjgv.js";import{F as g}from"./FieldGroup-DyQbmWrU.js";import{C as h}from"./Checkbox-CMmAxp7J.js";import{R as b}from"./RadioPanel-Coa6tSMm.js";import{H as x}from"./Help-pzS4Sjgy.js";import{R as C}from"./RadioButton-C4Ku6hiW.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B2CxY0xj.js";import"./clsx-B-dksMZM.js";import"./Flex-DbwaFKGC.js";import"./SlotComponent-gA_4VJ50.js";import"./mergeRefs-D_OWYEJ6.js";import"./Button-Dqr_ZaEC.js";import"./usePreviousValue-PqAYlYcx.js";import"./Loader-DrIIkJ2B.js";import"./useDelayedRender-DV-49oqk.js";import"./useId-D39ab4oe.js";import"./Label-BeV6nw6Y.js";import"./SupportLabel-DOXwCj07.js";import"./SuccessIcon-DR6nhqnR.js";import"./Icon-DR26e1r8.js";import"./WarningIcon-CK50D047.js";import"./BaseRadioButton.stories-CpSL5Nqx.js";import"./BaseRadioButton-Ds8SX-pU.js";import"./Title-DD2z_g2W.js";import"./Card-B69DCI0S.js";import"./Text-CtmYCHqy.js";import"./Tag-D1IuDqa3.js";import"./ExpandablePanel-Dj_eLs24.js";import"./useAnimatedHeightBetween-BvHnAIDw.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B36sZpBS.js";import"./Expander-Bf6bt8HD.js";import"./ChevronUpIcon-vw9sMadQ.js";import"./ListItem-BgU0UilG.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
