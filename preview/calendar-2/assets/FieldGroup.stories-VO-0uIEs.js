import{r as p,j as i}from"./iframe-BlkAP_jQ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CAamdlkp.js";import l from"./Help.stories-C7zDpJYv.js";import c from"./RadioButton.stories-DNB4PQ72.js";import{F as d}from"./FieldGroup-DJpAp5qy.js";import{C as k,a as u}from"./CheckboxPanel.stories-CdmVuOQt.js";import{RadioPanel as g}from"./RadioPanel.stories-Ck5HpKKg.js";import{C as h}from"./Checkbox-CRkPYqxB.js";import{R as b}from"./RadioPanel-CPV8x0Gt.js";import{H as x}from"./Help-TaxhvpVc.js";import{R as C}from"./RadioButton-Ci4oYb1K.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-C-ngpIph.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DZHKpnYC.js";import"./mergeRefs-Bqn8AB8k.js";import"./BaseRadioButton.stories-DvyvFS8R.js";import"./BaseRadioButton-O9LZnc1F.js";import"./useId-aRFHW7k-.js";import"./Label-po9PXHFb.js";import"./SupportLabel-C7XEKdm9.js";import"./SuccessIcon-CQqO5Fx4.js";import"./Icon-C8TLXgYp.js";import"./WarningIcon-BKtD-fbp.js";import"./InputPanel-D0mPjZ36.js";import"./Button-Dlr_Npxw.js";import"./usePreviousValue-CrT4VU3P.js";import"./Loader-CgB3Sk4-.js";import"./useDelayedRender-CLfO9GGE.js";import"./Title-D9qVabDs.js";import"./Card-TSZ6TbOg.js";import"./Text-BGFGxTGA.js";import"./Tag-BQumbEW9.js";import"./ExpandablePanel-_GQf1HJd.js";import"./useAnimatedHeightBetween-DPz83xZF.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-yti6z2nY.js";import"./Expander-D-R57Tmv.js";import"./ChevronUpIcon-LD_zZBMw.js";import"./ListItem-XVEItXK3.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
