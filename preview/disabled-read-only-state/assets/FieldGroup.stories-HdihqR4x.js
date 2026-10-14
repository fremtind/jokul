import{r as p,j as i}from"./iframe-DdycUQEW.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxPanelStory as s}from"./CheckboxPanel.stories-DaV08O-I.js";import{CheckboxStory as l}from"./Checkbox.stories-DNjTh57W.js";import c from"./Help.stories-BceAkOse.js";import d from"./RadioButton.stories-D_mLH2vT.js";import{RadioPanel as k}from"./RadioPanel.stories-DMv5CrxC.js";import{F as u}from"./FieldGroup-5B0t5B9Q.js";import{C as g}from"./Checkbox-ByhgU5UN.js";import{C as h}from"./CheckboxPanel-CVC1So9Q.js";import{R as b}from"./RadioPanel-BGa0blh2.js";import{H as x}from"./Help-B18b8dKh.js";import{R as C}from"./RadioButton-COSjj3rx.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BHPjVPiP.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B7fL7Arh.js";import"./mergeRefs-xuJ_pz0X.js";import"./Button-C5wT-ByB.js";import"./usePreviousValue-Dj-1dFzG.js";import"./Loader-CjrQ5HtM.js";import"./useDelayedRender-DmIhXOYf.js";import"./InputPanel-CE4zwon0.js";import"./useId-CzcTekdj.js";import"./SupportLabel-9_yhGTCA.js";import"./SuccessIcon-CNL63iIh.js";import"./Icon-X8VmP_1W.js";import"./WarningIcon-Y6DXZI_L.js";import"./BaseRadioButton-BlabL8XM.js";import"./Label-Bgc9Mwk7.js";import"./BaseRadioButton.stories-D5-dgafK.js";import"./Title-CBawnwBw.js";import"./Card-Dji96J5a.js";import"./Text-Dbo5sqn4.js";import"./Tag-BK6eJx6U.js";import"./ExpandablePanel-DyIHshKY.js";import"./useAnimatedHeightBetween-DX42eOxL.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-edqLlbkR.js";import"./Expander-TrQvrIru.js";import"./ChevronUpIcon-CbpXYvMi.js";import"./ListItem-BcWCzikm.js";const ie={title:"Komponenter/Field Group",component:u,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...d.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(g,{...l.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...k.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...c.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
