import{r as n,j as i}from"./iframe-BpMAOOay.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Bi9a42ik.js";import{CheckboxStory as c}from"./Checkbox.stories-CQxUqhZM.js";import d from"./Help.stories-D1TvCnAV.js";import k from"./RadioButton.stories-BcxZVl53.js";import{RadioPanel as u}from"./RadioPanel.stories-B7smscvM.js";import{F as g}from"./FieldGroup-CoA5FIL5.js";import{C as h}from"./Checkbox-3Z7xVQGN.js";import{R as b}from"./RadioPanel-C8_AB-Md.js";import{H as x}from"./Help-kL64redQ.js";import{R as C}from"./RadioButton-D-OOW65h.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DbER9jxR.js";import"./clsx-B-dksMZM.js";import"./Flex-Dy184GMw.js";import"./SlotComponent-DS17Buiv.js";import"./mergeRefs-PbmvZlSD.js";import"./Button-B-Y2dyyr.js";import"./usePreviousValue-BA6l5tvX.js";import"./Loader-bG_0gSLb.js";import"./useDelayedRender-DsJ84E5w.js";import"./useId-D3GDJ60I.js";import"./Label-C0zsIoNN.js";import"./SupportLabel-CE3b_Xvb.js";import"./SuccessIcon-BUzW7O1C.js";import"./Icon-BOeDsiIE.js";import"./WarningIcon-P7PnRx0A.js";import"./BaseRadioButton.stories-CKTDwZB5.js";import"./BaseRadioButton-CGWbPLiv.js";import"./Title-DwGVOQfn.js";import"./Card-DwXvQNUP.js";import"./Text-D7xF_efs.js";import"./Tag-BseNQesH.js";import"./ExpandablePanel-BgNSQb8q.js";import"./useAnimatedHeightBetween-D2CAsr4j.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-c7jzJX8H.js";import"./Expander-DxGW0cT3.js";import"./ChevronUpIcon-2IPeYa5w.js";import"./ListItem-oteb0uP6.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
