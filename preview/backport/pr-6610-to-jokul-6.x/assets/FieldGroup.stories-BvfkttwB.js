import{r as n,j as i}from"./iframe-BtTMFjHF.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-wMQqFlme.js";import{CheckboxStory as c}from"./Checkbox.stories-1DFPlesd.js";import d from"./Help.stories-rWxaA8p7.js";import k from"./RadioButton.stories-CUFdzy2B.js";import{RadioPanel as u}from"./RadioPanel.stories-Dj651gWG.js";import{F as g}from"./FieldGroup-DdRyWCAR.js";import{C as h}from"./Checkbox-DQ6Mf6KB.js";import{R as b}from"./RadioPanel-DL2ULwpx.js";import{H as x}from"./Help-B4a6i18x.js";import{R as C}from"./RadioButton-roL3ob6O.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CUad_bti.js";import"./clsx-B-dksMZM.js";import"./Flex-DPsWFDKC.js";import"./SlotComponent-D6Y4fPso.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DPpb8Tvb.js";import"./usePreviousValue-Csh9NOrY.js";import"./Loader-Bk6BuiC2.js";import"./useDelayedRender-B_K9P75M.js";import"./useId-Ci1A9zZX.js";import"./Label-DjQCRt95.js";import"./SupportLabel-Cq_xpzY9.js";import"./SuccessIcon-B5XdCvA1.js";import"./Icon-uhouoM1E.js";import"./WarningIcon-C4p0Bgy9.js";import"./BaseRadioButton.stories-st0Dp9Nv.js";import"./BaseRadioButton-DVFe2nT3.js";import"./Title-Dmy-CmVL.js";import"./Card-BVGAHIAh.js";import"./Text-BqY8JyF3.js";import"./Tag-Cw5XmlCR.js";import"./ExpandablePanel-OQY75Jtj.js";import"./useAnimatedHeightBetween-BvEyuDON.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CX3Fs9HR.js";import"./Expander--nE5-M-G.js";import"./ChevronUpIcon-Cmw8vq7P.js";import"./ListItem-DfXIa3hx.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
