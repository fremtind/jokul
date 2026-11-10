import{r as p,j as i}from"./iframe-CcM6qoOR.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DbeQHwsG.js";import{CheckboxStory as c}from"./Checkbox.stories-DFykKxRa.js";import d from"./Help.stories-DY96OX6j.js";import k from"./RadioButton.stories-BvPFSWB8.js";import{RadioPanel as u}from"./RadioPanel.stories-p6ydtJ2U.js";import{F as g}from"./FieldGroup-BqBf_NcJ.js";import{C as h}from"./Checkbox-DjBs1GBd.js";import{R as b}from"./RadioPanel-BGb3pWIP.js";import{H as x}from"./Help-B41cYuta.js";import{R as C}from"./RadioButton-1AfW6zfA.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C12eLZmE.js";import"./clsx-B-dksMZM.js";import"./Flex-Ctt8Dar0.js";import"./SlotComponent-DgCbwlVO.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-sKYCeARV.js";import"./usePreviousValue-DMi7cXon.js";import"./Loader-CtQ09TJw.js";import"./useDelayedRender-DgniIQza.js";import"./BaseRadioButton.stories-hoW4apUC.js";import"./BaseRadioButton-CJodEV96.js";import"./useId-Nw1uZbQi.js";import"./Title-mdYucGZE.js";import"./Card-DqCCMpVt.js";import"./Text-DZpSfvzl.js";import"./Tag-BkcGVRFe.js";import"./ExpandablePanel-t3WTkL_Q.js";import"./useAnimatedHeightBetween-BNuuG210.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BF08UvjK.js";import"./Expander-_RNxSRwE.js";import"./ChevronDownIcon-Tzq-B7Rv.js";import"./Icon-DmxvbU6o.js";import"./ChevronUpIcon-DHHjF3d8.js";import"./ListItem-BNczsB86.js";import"./Label-BvFQANSm.js";import"./SupportLabel-CmX-W01a.js";import"./SuccessIcon-Ic2SNjUS.js";import"./WarningIcon-BCtCQd_B.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
