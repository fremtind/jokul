import{r as p,j as i}from"./iframe-Db6p-EB6.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Bpcz_JO_.js";import{CheckboxStory as c}from"./Checkbox.stories-C9f99Q-J.js";import d from"./Help.stories-C0jy5Ek1.js";import k from"./RadioButton.stories-CwGgDaK2.js";import{RadioPanel as u}from"./RadioPanel.stories-Do_Skj8G.js";import{F as g}from"./FieldGroup-WvUHMPBA.js";import{C as h}from"./Checkbox-937-bqrv.js";import{R as b}from"./RadioPanel-D38Vwihg.js";import{H as x}from"./Help-CUbE8qU1.js";import{R as C}from"./RadioButton-FabxIPas.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Aghm0noC.js";import"./clsx-B-dksMZM.js";import"./Flex-FRxJTQhA.js";import"./SlotComponent-NxtID-Hd.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C1mgjSZK.js";import"./usePreviousValue-BE25Ro9u.js";import"./Loader-DL9pcl2S.js";import"./useDelayedRender-CfmMsd-C.js";import"./BaseRadioButton.stories-bcc_CGci.js";import"./BaseRadioButton-CIKwRT0W.js";import"./useId-Dzo3HCRi.js";import"./Title-C1zgZBMJ.js";import"./Card-CBzFE0_c.js";import"./Text-BZX6_IrQ.js";import"./Tag-CEks-L2x.js";import"./ExpandablePanel-C9Dj2pdz.js";import"./useAnimatedHeightBetween--H7QkKE9.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DT9tYz8d.js";import"./Expander-zo_SVaPk.js";import"./ChevronDownIcon-Bz5xaL0Y.js";import"./Icon-B_tgYcrx.js";import"./ChevronUpIcon-BvGeZsOz.js";import"./ListItem-B1B4Tlt2.js";import"./Label-C8h5HMqb.js";import"./SupportLabel-B41NiXmE.js";import"./SuccessIcon-JgyuvB34.js";import"./WarningIcon-vEuKJbtC.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
