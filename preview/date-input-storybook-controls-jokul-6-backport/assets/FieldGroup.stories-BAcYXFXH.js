import{r as n,j as i}from"./iframe-36cEpxuk.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DBxslqks.js";import{CheckboxStory as c}from"./Checkbox.stories-B5m1xGqw.js";import d from"./Help.stories-DDmznO6a.js";import k from"./RadioButton.stories-CTZy-U6k.js";import{RadioPanel as u}from"./RadioPanel.stories-DDGvpY8z.js";import{F as g}from"./FieldGroup-B8vITKht.js";import{C as h}from"./Checkbox-BtxhVPD9.js";import{R as b}from"./RadioPanel-hUtBYl7O.js";import{H as x}from"./Help-4UL9oZ2U.js";import{R as C}from"./RadioButton-C3Em14r7.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DJz_1IJK.js";import"./clsx-B-dksMZM.js";import"./Flex-Cgqpdw9X.js";import"./SlotComponent-DLp6eqE_.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BZj_9w9H.js";import"./usePreviousValue-BXdIXl15.js";import"./Loader-Z38rOeaU.js";import"./useDelayedRender-CH2oMFSc.js";import"./useId-DzowYYYL.js";import"./Label-DzTJLhAp.js";import"./SupportLabel-D6UTc1rD.js";import"./SuccessIcon-Dk0mjKIm.js";import"./Icon-Cl_Hcmr2.js";import"./WarningIcon-DfMuzjUf.js";import"./BaseRadioButton.stories-Br9XAOsV.js";import"./BaseRadioButton-BVDl_gDV.js";import"./Title-D2VSypkY.js";import"./Card-BiWww0Lz.js";import"./Text-CIlEIjwd.js";import"./Tag-C0t_LhO5.js";import"./ExpandablePanel-DyQFpgV-.js";import"./useAnimatedHeightBetween-BZx70UlU.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-HaIAzRnz.js";import"./Expander-C73VyfUz.js";import"./ChevronUpIcon-C8XeRFk3.js";import"./ListItem-BuqcXQ82.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
