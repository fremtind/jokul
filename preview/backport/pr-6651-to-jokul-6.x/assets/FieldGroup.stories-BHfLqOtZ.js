import{r as n,j as i}from"./iframe-D6Sf2wCn.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CX1OVUsK.js";import{CheckboxStory as c}from"./Checkbox.stories-BBk6nQ-3.js";import d from"./Help.stories-Dgwwh27e.js";import k from"./RadioButton.stories-CuqSWO-5.js";import{RadioPanel as u}from"./RadioPanel.stories-DISoYUFP.js";import{F as g}from"./FieldGroup-CB9Sf5gh.js";import{C as h}from"./Checkbox-C7auIBtH.js";import{R as b}from"./RadioPanel-BRs_hg7h.js";import{H as x}from"./Help-KIUZRnEj.js";import{R as C}from"./RadioButton-Dn51Db_d.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BRwYBVo1.js";import"./clsx-B-dksMZM.js";import"./Flex-DrffdZvk.js";import"./SlotComponent-HXDmcl5J.js";import"./mergeRefs-Bg_g_Tx8.js";import"./Button-DnlZI_IX.js";import"./usePreviousValue-CBb8NUU8.js";import"./Loader-CQdX2WEr.js";import"./useDelayedRender-B9ylDLm1.js";import"./useId-C_uinTuq.js";import"./Label-BgGK_piW.js";import"./SupportLabel-9TwEV1Xo.js";import"./SuccessIcon-D0jj-BbI.js";import"./Icon-BaLFQGFj.js";import"./WarningIcon-BXy4nZUs.js";import"./BaseRadioButton.stories-Cpl-OfUe.js";import"./BaseRadioButton-Bms34KMg.js";import"./Title-B2XHVO0t.js";import"./Card-wh4MYMWB.js";import"./Text-n1_CS_Ex.js";import"./Tag-CeRHvetj.js";import"./ExpandablePanel-G3aK5jgq.js";import"./useAnimatedHeightBetween-B0jNkI4n.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-myO0AYh5.js";import"./Expander-CAog20gl.js";import"./ChevronUpIcon-V2WNRi2d.js";import"./ListItem-dPigAi25.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
