import{r as n,j as i}from"./iframe-D36FvG5n.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DxLOZis6.js";import{CheckboxStory as c}from"./Checkbox.stories-3FbWv_Ir.js";import d from"./Help.stories-D9kqwOYA.js";import k from"./RadioButton.stories-BGSQKLLn.js";import{RadioPanel as u}from"./RadioPanel.stories-Dg-5wvL4.js";import{F as g}from"./FieldGroup-Oq3HO0TX.js";import{C as h}from"./Checkbox-g7B648BB.js";import{R as b}from"./RadioPanel-DElpohQm.js";import{H as x}from"./Help-4egO-1Xy.js";import{R as C}from"./RadioButton-CZJN2mJg.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Clrm1EdD.js";import"./clsx-B-dksMZM.js";import"./Flex-Z99anILf.js";import"./SlotComponent-BznsLVxD.js";import"./mergeRefs-DH11Bam2.js";import"./Button-0j3wKZLq.js";import"./usePreviousValue-URoIRnPY.js";import"./Loader-DFJ_gXcm.js";import"./useDelayedRender-DbEqG-hc.js";import"./useId-C5JydwN8.js";import"./Label-C4Gi40FP.js";import"./SupportLabel-DOAt-S95.js";import"./SuccessIcon-DxCtcLK-.js";import"./Icon-3KhJkBgE.js";import"./WarningIcon-afqkylKB.js";import"./BaseRadioButton.stories-BPAaJOzU.js";import"./BaseRadioButton-3Vza_1V2.js";import"./Title-ByE4jtsv.js";import"./Card-u02rRChd.js";import"./Text-Cqymk1Kj.js";import"./Tag-DZeZZ0VI.js";import"./ExpandablePanel-D0P8mEFw.js";import"./useAnimatedHeightBetween-D008_UDR.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CGPSmLWW.js";import"./Expander-Dtr5Hdlz.js";import"./ChevronUpIcon-Dj1jVyX9.js";import"./ListItem-CHve7ADr.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
