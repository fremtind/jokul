import{r as p,j as i}from"./iframe-CSgMYKjt.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Brr1Pjg4.js";import l from"./Help.stories-Dhj_-RUm.js";import c from"./RadioButton.stories-pAd2XXkE.js";import{F as d}from"./FieldGroup-Ch_7UWdp.js";import{C as k,a as u}from"./CheckboxPanel.stories-CaZ25UbN.js";import{RadioPanel as g}from"./RadioPanel.stories-BWzAN_MW.js";import{C as h}from"./Checkbox-Be6H7Ef5.js";import{R as b}from"./RadioPanel-3Ksq9fMN.js";import{H as x}from"./Help-ByjdtyoQ.js";import{R as C}from"./RadioButton-HPOTBKAT.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-RrK-LjK-.js";import"./BaseRadioButton-D9cyyjcS.js";import"./clsx-B-dksMZM.js";import"./useId-W7nKzxXU.js";import"./Label-CRaXWHqM.js";import"./SupportLabel-1EjEnR1x.js";import"./SuccessIcon-D9nOXf9e.js";import"./Icon-Doy-fQF-.js";import"./WarningIcon-BTuozY4A.js";import"./InputPanel-CQ87GPO2.js";import"./Flex-DHspDzUJ.js";import"./SlotComponent-DDx2nuum.js";import"./mergeRefs-DjG1mEX7.js";import"./Button-TM_VG-f_.js";import"./usePreviousValue-DcEFmuFu.js";import"./Loader-DwKsudHk.js";import"./useDelayedRender-B8Xk31DV.js";import"./Title-C8aLAiqN.js";import"./Card-C5QMDE48.js";import"./Text-DEESECKB.js";import"./Tag-CA-gtG9E.js";import"./ExpandablePanel-B-tjOt7T.js";import"./useAnimatedHeightBetween-Bk__3K0W.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BZygr3Zl.js";import"./Expander-CLC9Y9qb.js";import"./ChevronDownIcon-L4wjxTV2.js";import"./ChevronUpIcon-CTPDuxsg.js";import"./ListItem-Bae7fDvK.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
