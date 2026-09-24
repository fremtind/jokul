import{r as n,j as i}from"./iframe-CiVsWS6y.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CuhdodEI.js";import{CheckboxStory as c}from"./Checkbox.stories-DcF-InfA.js";import d from"./Help.stories-xKe7DL4t.js";import k from"./RadioButton.stories-BSZ7veZa.js";import{RadioPanel as u}from"./RadioPanel.stories-DUGmWkNx.js";import{F as g}from"./FieldGroup-a890C1SP.js";import{C as h}from"./Checkbox-DlfXgmQg.js";import{R as b}from"./RadioPanel-1xKQ-hGS.js";import{H as x}from"./Help-Bn-EytKU.js";import{R as C}from"./RadioButton-BE43ujAj.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dt4XZ_qD.js";import"./clsx-B-dksMZM.js";import"./Flex-CK_Lfv2S.js";import"./SlotComponent-DLMuHrEe.js";import"./mergeRefs-C7OleSOo.js";import"./Button-w-5m192n.js";import"./usePreviousValue-ClfUgsXn.js";import"./Loader-Cr3Wkztb.js";import"./useDelayedRender-Dm-GMGoD.js";import"./useId-3Y2yqkCa.js";import"./Label-mu-Dh9SP.js";import"./SupportLabel-DfVm-37G.js";import"./SuccessIcon-BjcC43Qu.js";import"./Icon-BP3iwf0T.js";import"./WarningIcon-D9vcil_R.js";import"./BaseRadioButton.stories-CjWk3fYC.js";import"./BaseRadioButton-CPaLyXGV.js";import"./Title-DT9eS_ye.js";import"./Card-BYm26e1V.js";import"./Text-CHaf4iVe.js";import"./Tag-BB2EI_PE.js";import"./ExpandablePanel-CQkZBYSf.js";import"./useAnimatedHeightBetween-D2Yg4jBB.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DlQ0Gs7W.js";import"./Expander-Cd-uFQ7x.js";import"./ChevronUpIcon-BiOKSKPF.js";import"./ListItem-CkghkcYG.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
