import{r as n,j as i}from"./iframe-DomUvUQy.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BHMiLDpH.js";import l from"./Help.stories-CHFOS8nU.js";import c from"./RadioButton.stories-D6-H8o3D.js";import{F as d}from"./FieldGroup-BVuWqTVb.js";import{C as k,a as u}from"./CheckboxPanel.stories-DqIOYRRp.js";import{RadioPanel as g}from"./RadioPanel.stories-Bb44bb4S.js";import{C as h}from"./Checkbox-Bk9Cy19X.js";import{R as b}from"./RadioPanel-C4KNmuaF.js";import{H as x}from"./Help-Czu2eY5C.js";import{R as C}from"./RadioButton-DARMAmgj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-pGVbln5H.js";import"./Label-DzpRYkhr.js";import"./SupportLabel-CjccgglS.js";import"./SuccessIcon-DDAto5Pg.js";import"./Icon-3-pG6ozW.js";import"./WarningIcon-BR3vsSMR.js";import"./BaseRadioButton.stories-B9H9NaqU.js";import"./BaseRadioButton-DUoy4pe3.js";import"./InputPanel-k-DNZkKA.js";import"./Flex-CVwI5sBj.js";import"./SlotComponent-BZ1S-NZp.js";import"./mergeRefs-Dej5XbCu.js";import"./Button-B-5sszu3.js";import"./usePreviousValue-gdPr9tfO.js";import"./Loader-L7fnaaq5.js";import"./useDelayedRender-Be6xCT9y.js";import"./Title-CpCLlEEm.js";import"./Card-D12-bjEV.js";import"./Text-DVywW9B3.js";import"./Tag-C8impcBD.js";import"./ExpandablePanel-B2vbPKtL.js";import"./useAnimatedHeightBetween-CKDcy2em.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DITPxdzq.js";import"./Expander-C5oeS5l8.js";import"./ChevronUpIcon-CQkQo4zN.js";import"./ListItem-CL0TgzdF.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
