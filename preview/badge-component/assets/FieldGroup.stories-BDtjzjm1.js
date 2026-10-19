import{r as n,j as i}from"./iframe-at0A36gf.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-40GrVyHC.js";import{CheckboxStory as c}from"./Checkbox.stories-DgjUrZSu.js";import d from"./Help.stories-BoIOdt9n.js";import k from"./RadioButton.stories-BGpaC6Rj.js";import{RadioPanel as u}from"./RadioPanel.stories-4MS4Q_Nq.js";import{F as g}from"./FieldGroup-Bu0cLW9_.js";import{C as h}from"./Checkbox-Blf9nauP.js";import{R as b}from"./RadioPanel-Ddy4icsM.js";import{H as x}from"./Help-CNY6khlF.js";import{R as C}from"./RadioButton-C-a70h8X.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BaUX7BpS.js";import"./clsx-B-dksMZM.js";import"./Flex-xZa5dQsR.js";import"./SlotComponent-C8_ipteo.js";import"./mergeRefs-l7k8jEPc.js";import"./Button-Bs3xHo9T.js";import"./usePreviousValue-Cb6uJ4X9.js";import"./Loader-mJ3K2ikm.js";import"./useDelayedRender-9pCEKUCC.js";import"./useId-CYBPaYox.js";import"./Label-DTt7MysM.js";import"./SupportLabel-Caeiz6gt.js";import"./SuccessIcon-D8A0rDXb.js";import"./Icon-C7HOc4ut.js";import"./WarningIcon-Dkc9Cerp.js";import"./BaseRadioButton.stories-DBJfjAGs.js";import"./BaseRadioButton-hcJsKjWV.js";import"./Title-BqDyxQUk.js";import"./Card-DiG0NRZ2.js";import"./Text-CjXBLNrZ.js";import"./Tag-l363tvOD.js";import"./ExpandablePanel-570U4BQa.js";import"./useAnimatedHeightBetween-Ct_g7DKs.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CKI4vYqd.js";import"./Expander-Cazmfkip.js";import"./ChevronUpIcon-Cl08WWmk.js";import"./ListItem-DbLYCl1Q.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
