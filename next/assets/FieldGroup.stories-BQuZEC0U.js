import{r as n,j as i}from"./iframe-CZZYHK9f.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Do3sBaSZ.js";import{CheckboxStory as c}from"./Checkbox.stories-gB_jalrS.js";import d from"./Help.stories-XVALpg7h.js";import k from"./RadioButton.stories-BP3PoWng.js";import{RadioPanel as u}from"./RadioPanel.stories-aOVLf4pa.js";import{F as g}from"./FieldGroup-DirjMjV2.js";import{C as h}from"./Checkbox-5YvSkZL4.js";import{R as b}from"./RadioPanel-D9cBK0tS.js";import{H as x}from"./Help-BR805C3L.js";import{R as C}from"./RadioButton-_yRu76QQ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DrBLBZkl.js";import"./clsx-B-dksMZM.js";import"./Flex-C16cLx3r.js";import"./SlotComponent-B64FzM1z.js";import"./mergeRefs-pz-IIOk_.js";import"./Button-BaZek5dx.js";import"./usePreviousValue-Dl_ERzmT.js";import"./Loader-Bearn-aE.js";import"./useDelayedRender-CHno0PHN.js";import"./useId-DHB6Mfpj.js";import"./Label-Djy31EoT.js";import"./SupportLabel-BBj_AIhD.js";import"./SuccessIcon-CiIFszFM.js";import"./Icon-iLhHUHME.js";import"./WarningIcon-m5mWHGtA.js";import"./BaseRadioButton.stories-CQEX-RjR.js";import"./BaseRadioButton-CG-U5z5M.js";import"./Title-BUK7Zx4N.js";import"./Card-BhpwrPfk.js";import"./Text-Dz3mgG5m.js";import"./Tag-Bjr3_sJ_.js";import"./ExpandablePanel-DY_MJwXB.js";import"./useAnimatedHeightBetween-eH3n_c1V.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DtWxJEj0.js";import"./Expander-DTbnuLyq.js";import"./ChevronUpIcon-B96TLWvx.js";import"./ListItem-AkrKag09.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
