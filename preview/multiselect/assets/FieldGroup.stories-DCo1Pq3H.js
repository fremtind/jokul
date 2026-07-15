import{r as p,j as i}from"./iframe-D9s0L3GW.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BjgEPGXs.js";import l from"./Help.stories-B3Hn4crq.js";import c from"./RadioButton.stories-CBDiHIRl.js";import{F as d}from"./FieldGroup-CEIjZMes.js";import{C as k,a as u}from"./CheckboxPanel.stories-D04f-RH1.js";import{RadioPanel as g}from"./RadioPanel.stories-BEKQ9YdC.js";import{C as h}from"./Checkbox-BGJJlXGe.js";import{R as b}from"./RadioPanel-BwM_Dq4V.js";import{H as x}from"./Help-DOPISA-v.js";import{R as C}from"./RadioButton-DZMMTDRt.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BCy9Q6T5.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BTdKsxWN.js";import"./mergeRefs-Cq3xELux.js";import"./BaseRadioButton.stories-iA-sU_91.js";import"./BaseRadioButton-DWMyx8vj.js";import"./useId-CMdGbmS8.js";import"./Label-r4Hk7QRa.js";import"./SupportLabel-B1l3y9lo.js";import"./SuccessIcon-DcJbX_sP.js";import"./Icon-DZL2dcXf.js";import"./WarningIcon-DxyBuNLW.js";import"./InputPanel-dxgkUCX4.js";import"./Button-5K8ZvyVK.js";import"./usePreviousValue-CyOuEqM2.js";import"./Loader-DIu1SJ-K.js";import"./useDelayedRender-D497ZQy9.js";import"./Title-BFqnFa2n.js";import"./Card-DbsNYxtq.js";import"./Text-DTwk4ToO.js";import"./Tag-BtZpXIeW.js";import"./ExpandablePanel-CUOwuBnc.js";import"./useAnimatedHeightBetween-CSyB6lNm.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CS45H4x7.js";import"./Expander-DQ0pAfWM.js";import"./ChevronDownIcon-DMmqVuPY.js";import"./ChevronUpIcon--twkLeza.js";import"./ListItem-Bg2BElmN.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
