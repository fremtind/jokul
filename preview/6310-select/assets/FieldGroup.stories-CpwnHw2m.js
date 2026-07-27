import{r as p,j as i}from"./iframe-D1Dznsl1.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-qUAKAbTF.js";import l from"./Help.stories-BDwSkjLo.js";import c from"./RadioButton.stories-Bd1coFkd.js";import{F as d}from"./FieldGroup-YA2sAmyD.js";import{C as k,a as u}from"./CheckboxPanel.stories-BwzP6Jwe.js";import{RadioPanel as g}from"./RadioPanel.stories-C1VAtO7f.js";import{C as h}from"./Checkbox-Bu9Acz7S.js";import{R as b}from"./RadioPanel-DoKtQIJT.js";import{H as x}from"./Help-bvPxqJdc.js";import{R as C}from"./RadioButton-amjG7haG.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-C9pzu8ZD.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BbC6dwLx.js";import"./mergeRefs-CBqGssEA.js";import"./BaseRadioButton.stories-DJYAGilm.js";import"./BaseRadioButton-CRheFcBW.js";import"./useId-DeH5F3Px.js";import"./Label-CmOeaGWP.js";import"./SupportLabel-9p-ED60P.js";import"./SuccessIcon-By8Z3QrT.js";import"./Icon-C0zizoRc.js";import"./WarningIcon-C5N0t-nv.js";import"./InputPanel-ByiQc78R.js";import"./Button-CbUttazs.js";import"./usePreviousValue-CCLk_itX.js";import"./Loader-Ls2M-N_D.js";import"./useDelayedRender-BJKgzpOu.js";import"./Title-Se-HONDu.js";import"./Card-If6ZjbE0.js";import"./Text-XBpAwz2K.js";import"./Tag-DtLI1XH8.js";import"./ExpandablePanel-woCzuLcn.js";import"./useAnimatedHeightBetween-BrPuhDZB.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Ck6xQZt5.js";import"./Expander-Ct1cmjsy.js";import"./ChevronDownIcon--uA9cuRn.js";import"./ChevronUpIcon-DO4opscX.js";import"./ListItem-Dy3x1sTx.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
