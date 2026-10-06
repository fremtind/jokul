import{r as n,j as i}from"./iframe-M28fAQO8.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DFnCm1u1.js";import{CheckboxStory as c}from"./Checkbox.stories-DcMQTUy-.js";import d from"./Help.stories-DCy_AB6G.js";import k from"./RadioButton.stories-AXZk78Sz.js";import{RadioPanel as u}from"./RadioPanel.stories-B_IKL9Dw.js";import{F as g}from"./FieldGroup-DygvHtGT.js";import{C as h}from"./Checkbox-B3hsKtNf.js";import{R as b}from"./RadioPanel-Deoq9c2G.js";import{H as x}from"./Help-BGJ-xCJ_.js";import{R as C}from"./RadioButton-hXc9XNXo.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dp9zr0Rj.js";import"./clsx-B-dksMZM.js";import"./Flex-ww8IgNKS.js";import"./SlotComponent-Cxzp4jH2.js";import"./mergeRefs-CtZRn9yY.js";import"./Button-CSV7he_1.js";import"./usePreviousValue-CIXLTasH.js";import"./Loader-Dg9JdDsG.js";import"./useDelayedRender-DYA-IVAU.js";import"./useId-s_og3R5Z.js";import"./Label-BgqujSL9.js";import"./SupportLabel--15flQmh.js";import"./SuccessIcon-BX4fIYTv.js";import"./Icon-Ch69uN6a.js";import"./WarningIcon-C9ODLQ99.js";import"./BaseRadioButton.stories-CA2Yw76M.js";import"./BaseRadioButton-CTG-kTAc.js";import"./Title-DGGRw7sC.js";import"./Card-C7PNI5bH.js";import"./Text-B76mLyZO.js";import"./Tag-5pBwfz2p.js";import"./ExpandablePanel-V1-VIMhd.js";import"./useAnimatedHeightBetween-Bd0JWzya.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CBCU7UCj.js";import"./Expander-BJkPPRka.js";import"./ChevronUpIcon-BbJcV64X.js";import"./ListItem-B5zGfUTV.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
