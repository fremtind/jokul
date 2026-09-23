import{r as n,j as i}from"./iframe-DHD78tjs.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CH3k_eop.js";import{CheckboxStory as c}from"./Checkbox.stories-B0IYkrY2.js";import d from"./Help.stories-t81U5gA8.js";import k from"./RadioButton.stories-BBlELLP6.js";import{RadioPanel as u}from"./RadioPanel.stories-B3Wg_Vx_.js";import{F as g}from"./FieldGroup-C4VTekVs.js";import{C as h}from"./Checkbox-Bm9QqvGD.js";import{R as b}from"./RadioPanel-rdYZcSIw.js";import{H as x}from"./Help-DwYOKm5r.js";import{R as C}from"./RadioButton-DNPEDTka.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-eEagd4DZ.js";import"./clsx-B-dksMZM.js";import"./Flex-C3QskgCW.js";import"./SlotComponent-C_wKr_lh.js";import"./mergeRefs-B7JkGqG8.js";import"./Button-Dp2HLE77.js";import"./usePreviousValue-BbAnQspG.js";import"./Loader-BMbQas-M.js";import"./useDelayedRender-Bj1LG78K.js";import"./useId-BfD8L_Y7.js";import"./Label-QAGfqQH7.js";import"./SupportLabel-z2U0zmGO.js";import"./SuccessIcon-BXmcOft_.js";import"./Icon-Cv9XDEUJ.js";import"./WarningIcon-DHLwJs7-.js";import"./BaseRadioButton.stories-DembZryr.js";import"./BaseRadioButton-kKxHHkNx.js";import"./Title-CVcPHVOL.js";import"./Card-CtsEnk_H.js";import"./Text-DSwifh9t.js";import"./Tag-cwxEu7bm.js";import"./ExpandablePanel-UOUzXuCI.js";import"./useAnimatedHeightBetween-BGoTwr6z.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C9ildg-H.js";import"./Expander-CI9Kdmrg.js";import"./ChevronUpIcon-IznBsL_t.js";import"./ListItem-Tem2MktP.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
