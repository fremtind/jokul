import{r as n,j as i}from"./iframe-BDpPKEIq.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CL6e_qJw.js";import{CheckboxStory as c}from"./Checkbox.stories-CDq27NQR.js";import d from"./Help.stories-BxbDdHTd.js";import k from"./RadioButton.stories-DZd1z2Wz.js";import{RadioPanel as u}from"./RadioPanel.stories-JJJzS9pg.js";import{F as g}from"./FieldGroup-DLTjDirK.js";import{C as h}from"./Checkbox-BkU-mMav.js";import{R as b}from"./RadioPanel-DenU-CrO.js";import{H as x}from"./Help-BxvRuuRv.js";import{R as C}from"./RadioButton-CcnkU7xn.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-cBb7h_pD.js";import"./clsx-B-dksMZM.js";import"./Flex-BhCLiRIm.js";import"./SlotComponent-CkzMT1b4.js";import"./mergeRefs-BQ96W6kx.js";import"./Button-Bfqm6Ibk.js";import"./usePreviousValue-CPj_qd7Z.js";import"./Loader-CaGJO6eK.js";import"./useDelayedRender-DXU9-Lq1.js";import"./useId-C_YTq-v4.js";import"./Label-BuKALfrN.js";import"./SupportLabel-DrQwQ4NM.js";import"./SuccessIcon-ClZH0MHf.js";import"./Icon-C5ignaWR.js";import"./WarningIcon-CZeaSyLt.js";import"./BaseRadioButton.stories-CmHy_plj.js";import"./BaseRadioButton-DaX9Q4wt.js";import"./Title-DFVV8n82.js";import"./Card-Bv1Pw9P6.js";import"./Text-FVOC6TNb.js";import"./Tag-D2z8xmd0.js";import"./ExpandablePanel-WIy46OSo.js";import"./useAnimatedHeightBetween-gr3s7urq.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B0jyOj2G.js";import"./Expander-Bth1AXre.js";import"./ChevronUpIcon-biwS7dJt.js";import"./ListItem-DcS_b8uP.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
