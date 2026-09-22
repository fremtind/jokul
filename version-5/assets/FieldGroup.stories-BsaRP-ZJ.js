import{r as p,j as i}from"./iframe-CGl0IZEB.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BalWWH1c.js";import{CheckboxStory as c}from"./Checkbox.stories-BBaaB6IN.js";import d from"./Help.stories-DAe20_EC.js";import k from"./RadioButton.stories-DfT8L4gr.js";import{RadioPanel as u}from"./RadioPanel.stories-C-J0AAgJ.js";import{F as g}from"./FieldGroup-DMzhQD7x.js";import{C as h}from"./Checkbox-Cu31Wr5a.js";import{R as b}from"./RadioPanel-B56giF1i.js";import{H as x}from"./Help-Ba3cp1wx.js";import{R as C}from"./RadioButton-WFCvoph6.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DAEwRPOX.js";import"./clsx-B-dksMZM.js";import"./Flex-BpHvx6uZ.js";import"./SlotComponent-DBfUojJd.js";import"./mergeRefs-Ca7SHtIc.js";import"./Button-C6KtMi3W.js";import"./usePreviousValue-CP3VjYzi.js";import"./Loader-D6NCCbQm.js";import"./useDelayedRender-DA3Ih3hU.js";import"./BaseRadioButton.stories-B2ANwotm.js";import"./BaseRadioButton-nP3kKnWr.js";import"./useId-DTo98mDX.js";import"./Title-BpiiOx3f.js";import"./Card-DZqVeHtf.js";import"./Text-Xknju6Mu.js";import"./Tag-Ren6Eqk9.js";import"./ExpandablePanel-n4Qr422N.js";import"./useAnimatedHeightBetween-P60bM1eU.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-ColEoTDG.js";import"./Expander-C5-rSZek.js";import"./ChevronDownIcon-CHwb71S6.js";import"./Icon-2ckkwcM2.js";import"./ChevronUpIcon-PiEhyf8N.js";import"./ListItem-YUsc1hgq.js";import"./Label-RrXc1DM_.js";import"./SupportLabel-BnTdUV1I.js";import"./SuccessIcon-C0FyKzo8.js";import"./WarningIcon-BCGEPIpF.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
