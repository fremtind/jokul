import{r as p,j as i}from"./iframe-D3Joq54M.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BihuuuK0.js";import{CheckboxStory as c}from"./Checkbox.stories-nm3Iwvya.js";import d from"./Help.stories-CXLVCWPF.js";import k from"./RadioButton.stories-C9OHwUQD.js";import{RadioPanel as u}from"./RadioPanel.stories-B9qn-goX.js";import{F as g}from"./FieldGroup-COfGeFL1.js";import{C as h}from"./Checkbox-D-7t2a0x.js";import{R as b}from"./RadioPanel-C9NIEbo_.js";import{H as x}from"./Help-C_ktKp7z.js";import{R as C}from"./RadioButton-BWpQlTHo.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bvzc0Jsb.js";import"./clsx-B-dksMZM.js";import"./Flex-Bzs4esIv.js";import"./SlotComponent-Bi5Vfe02.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DyDYu-0U.js";import"./usePreviousValue-CmyuEJw5.js";import"./Loader-Cy8St8zi.js";import"./useDelayedRender-DFzXLs-5.js";import"./BaseRadioButton.stories-zynOqizi.js";import"./BaseRadioButton-DSi5_OtF.js";import"./useId-CDVZKZtS.js";import"./Title-Bajl-hIU.js";import"./Card-Dw5H0B4F.js";import"./Text-WwS61EZO.js";import"./Tag-Cl3mWpLZ.js";import"./ExpandablePanel-B-Zc6tJ3.js";import"./useAnimatedHeightBetween-DnhP2KPB.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Dlh-h3za.js";import"./Expander-BDKOM3ki.js";import"./ChevronDownIcon-dKU5Hl9q.js";import"./Icon-Chs4EIky.js";import"./ChevronUpIcon-fEjtH-Aj.js";import"./ListItem-CorLLNpF.js";import"./Label-BXeKtcwk.js";import"./SupportLabel-C99o_OgQ.js";import"./SuccessIcon-DDgpdFpJ.js";import"./WarningIcon-BBHJxfg5.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
