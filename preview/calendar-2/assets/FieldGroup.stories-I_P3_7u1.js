import{r as p,j as i}from"./iframe-Ches63Cb.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CbzkaRoD.js";import l from"./Help.stories-BPj4cceh.js";import c from"./RadioButton.stories-DKo5FAwl.js";import{F as d}from"./FieldGroup-ToCXj6Re.js";import{C as k,a as u}from"./CheckboxPanel.stories-IRCyv_LI.js";import{RadioPanel as g}from"./RadioPanel.stories-BVnmt236.js";import{C as h}from"./Checkbox-DYREvLFx.js";import{R as b}from"./RadioPanel-BKPspwyZ.js";import{H as x}from"./Help-DJcmXQLD.js";import{R as C}from"./RadioButton-B00iuoDM.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BfWlIkSn.js";import"./clsx-B-dksMZM.js";import"./SlotComponent--BqNjFKH.js";import"./mergeRefs-TFS7xXDg.js";import"./BaseRadioButton.stories-BrU-vtsl.js";import"./BaseRadioButton-C6m8je58.js";import"./useId-C_z22xL3.js";import"./Label-Cm4Sx8Uo.js";import"./SupportLabel-Bc5ychMY.js";import"./SuccessIcon-BWZsJm9Y.js";import"./Icon-ClB2F21G.js";import"./WarningIcon-CWN6JUkl.js";import"./InputPanel-CKpZPG9j.js";import"./Button--gBo5gKh.js";import"./usePreviousValue-jPBEO_Eg.js";import"./Loader-DfPUrU0Y.js";import"./useDelayedRender-Cwz3oBbZ.js";import"./Title-BlqXAowH.js";import"./Card-Cfts_ins.js";import"./Text-DTp_Lu_q.js";import"./Tag-BxxC-csV.js";import"./ExpandablePanel-CsCyz-Kj.js";import"./useAnimatedHeightBetween-BJk2PLju.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BHEonBTk.js";import"./Expander-Dysvi9UP.js";import"./ChevronUpIcon-BpS8kO22.js";import"./ListItem-D3rAbI8L.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
