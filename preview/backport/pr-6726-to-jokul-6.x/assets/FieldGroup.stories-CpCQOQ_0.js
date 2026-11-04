import{r as n,j as i}from"./iframe-JD2e27Mg.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Dzm61fp1.js";import{CheckboxStory as c}from"./Checkbox.stories-B94ogDB6.js";import d from"./Help.stories-DHPEaqdE.js";import k from"./RadioButton.stories-CQT0AFNo.js";import{RadioPanel as u}from"./RadioPanel.stories-CG0s-Mwy.js";import{F as g}from"./FieldGroup-DxpqxpaZ.js";import{C as h}from"./Checkbox-DL2a2_YP.js";import{R as b}from"./RadioPanel-BD_tR5iw.js";import{H as x}from"./Help-B_jITNNm.js";import{R as C}from"./RadioButton-DucDg3P6.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CAGiGNBo.js";import"./clsx-B-dksMZM.js";import"./Flex-DDbuYnui.js";import"./SlotComponent-7rh0tw9W.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-TGcE8JRg.js";import"./usePreviousValue-CCX_twoP.js";import"./Loader-C3G-leOg.js";import"./useDelayedRender-CnQkmi1A.js";import"./useId-D4HMUvgA.js";import"./Label-C_SJnikh.js";import"./SupportLabel-C3zeU-uY.js";import"./SuccessIcon-BllY-1ct.js";import"./Icon-DJRh6RnC.js";import"./WarningIcon-DkaiuPkj.js";import"./BaseRadioButton.stories-DmEWr-Mf.js";import"./BaseRadioButton-C7oAvScD.js";import"./Title-CgRV3bjM.js";import"./Card-BYVWa1ag.js";import"./Text-BdtP4REk.js";import"./Tag-XDozoXHX.js";import"./ExpandablePanel-DzlpeMKx.js";import"./useAnimatedHeightBetween-DD5KIAkU.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-5JVLajxF.js";import"./Expander-OFc7TFiX.js";import"./ChevronUpIcon-BaTdMz8a.js";import"./ListItem-CQVK2MGX.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
