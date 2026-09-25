import{r as n,j as i}from"./iframe-B4jzYILF.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D46juV05.js";import{CheckboxStory as c}from"./Checkbox.stories-DeuFtcJ-.js";import d from"./Help.stories-D10_SO3f.js";import k from"./RadioButton.stories-C80uS7K1.js";import{RadioPanel as u}from"./RadioPanel.stories-P2pZU2Bd.js";import{F as g}from"./FieldGroup-CiNDrt88.js";import{C as h}from"./Checkbox-BKpz_4oD.js";import{R as b}from"./RadioPanel-DRt413Yk.js";import{H as x}from"./Help-xCvjDb2o.js";import{R as C}from"./RadioButton-DRNdGRm2.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-COkf2-7o.js";import"./clsx-B-dksMZM.js";import"./Flex-B1aWvp6l.js";import"./SlotComponent-L1MnsNvv.js";import"./mergeRefs-Bk3qYZme.js";import"./Button-DgNs7QOm.js";import"./usePreviousValue-CqYD1Gh8.js";import"./Loader-J01QWwKX.js";import"./useDelayedRender-BF1lkIbT.js";import"./useId-CfxRIceC.js";import"./Label-CzUyjciN.js";import"./SupportLabel-QErBniaE.js";import"./SuccessIcon-Dw9XI6BY.js";import"./Icon-oJRDpxiM.js";import"./WarningIcon-B4lD3zt0.js";import"./BaseRadioButton.stories-BrvK3ulw.js";import"./BaseRadioButton-CbYZFhC4.js";import"./Title-COtS93sO.js";import"./Card-BopeF7M_.js";import"./Text-DBPK1D4y.js";import"./Tag-D4wIfyfc.js";import"./ExpandablePanel-Cl53fzxK.js";import"./useAnimatedHeightBetween-City2N6A.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BGz3ZGzg.js";import"./Expander-DZt08Y4X.js";import"./ChevronUpIcon-BOC5Q3ov.js";import"./ListItem-C5IWZN1M.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
