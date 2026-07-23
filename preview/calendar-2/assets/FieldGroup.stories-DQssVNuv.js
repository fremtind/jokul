import{r as p,j as i}from"./iframe-D3qkQg-r.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DoLGiPzn.js";import l from"./Help.stories-BnyvIvxo.js";import c from"./RadioButton.stories-DGdq_8BF.js";import{F as d}from"./FieldGroup-DrqEdWQt.js";import{C as k,a as u}from"./CheckboxPanel.stories-1mBTWvi0.js";import{RadioPanel as g}from"./RadioPanel.stories-CC_C38yA.js";import{C as h}from"./Checkbox-Daj67JOa.js";import{R as b}from"./RadioPanel-CJHZrytr.js";import{H as x}from"./Help-C1VM3xeR.js";import{R as C}from"./RadioButton-CgIUuV6R.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BTFNFt1Q.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-nR3IPEVU.js";import"./mergeRefs-H9zMGHrC.js";import"./BaseRadioButton.stories-B7FU8iGa.js";import"./BaseRadioButton-DbmcUSyg.js";import"./useId-lfl0CoI0.js";import"./Label-BT9j_3TI.js";import"./SupportLabel-BybGj_LF.js";import"./SuccessIcon-BeJlH9C8.js";import"./Icon-ChqHTCl8.js";import"./WarningIcon-g8tB-bu0.js";import"./InputPanel-BnUEDg0K.js";import"./Button-73Jz6_99.js";import"./usePreviousValue-BF2c2cxC.js";import"./Loader-BAQsXUie.js";import"./useDelayedRender-BIKH4mRG.js";import"./Title-ByKtCTrh.js";import"./Card-CXzfspqi.js";import"./Text-Dn39eHD5.js";import"./Tag-DGEZPoKy.js";import"./ExpandablePanel-DA6fdiJx.js";import"./useAnimatedHeightBetween-CmyOWTIn.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BPFtmGrw.js";import"./Expander-BzJ80Qrv.js";import"./ChevronUpIcon-BGGkLYPD.js";import"./ListItem-DENq5aBo.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
