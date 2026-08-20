import{r as p,j as i}from"./iframe--zksvJjO.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CM1htUxs.js";import l from"./Help.stories-CmndfDIO.js";import c from"./RadioButton.stories-CFQhzz4N.js";import{F as d}from"./FieldGroup-Bf-H2J3L.js";import{C as k,a as u}from"./CheckboxPanel.stories-DsRq2mAx.js";import{RadioPanel as g}from"./RadioPanel.stories-DLpu6XZ3.js";import{C as h}from"./Checkbox-DkiOpo4x.js";import{R as b}from"./RadioPanel-CC17Tm52.js";import{H as x}from"./Help--tNyNWGZ.js";import{R as C}from"./RadioButton--2PQXc--.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-De2Nm2pD.js";import"./BaseRadioButton-BvbQ1U7i.js";import"./clsx-B-dksMZM.js";import"./useId-9TUTJXHX.js";import"./Label-CQRtII-x.js";import"./SupportLabel-BiJhNxoj.js";import"./SuccessIcon-D8jO_X8k.js";import"./Icon-D2KLGRYq.js";import"./WarningIcon-DTLPEwK3.js";import"./InputPanel-ClFSRMHA.js";import"./Flex-Bw-4eldB.js";import"./SlotComponent-CIf3Gc9S.js";import"./mergeRefs-BC3hoUv3.js";import"./Button-BxsPB3lD.js";import"./usePreviousValue-e6HFGPGR.js";import"./Loader-DIwnJD6N.js";import"./useDelayedRender-DXgLf4IV.js";import"./Title-DThbPtBf.js";import"./Card-wNJt7ubl.js";import"./Text-DF-2DHjV.js";import"./Tag-Bg2sfSlz.js";import"./ExpandablePanel-B34ns11F.js";import"./useAnimatedHeightBetween-6Z6Prfeb.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CuISHDEj.js";import"./Expander-BFcdejy5.js";import"./ChevronDownIcon-DKhmn13q.js";import"./ChevronUpIcon-BLdkinoP.js";import"./ListItem-SooRMqw-.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
