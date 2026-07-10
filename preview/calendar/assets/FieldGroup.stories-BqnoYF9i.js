import{r as p,j as i}from"./iframe-DtR4IeDC.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-3Eyvpp8e.js";import l from"./Help.stories-DIJBo8Vd.js";import c from"./RadioButton.stories-BhzOjPlp.js";import{F as d}from"./FieldGroup-DBc4e2uR.js";import{C as k,a as u}from"./CheckboxPanel.stories-D2uFc0NB.js";import{RadioPanel as g}from"./RadioPanel.stories-Cq5ue88X.js";import{C as h}from"./Checkbox-BFvOvGGc.js";import{R as b}from"./RadioPanel-LflisNYX.js";import{H as x}from"./Help-BOPCDMgI.js";import{R as C}from"./RadioButton-kgoSB9L5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BypAmoXi.js";import"./Label-CVc8k_pc.js";import"./SupportLabel-BE5ZC0Fe.js";import"./SuccessIcon-YqObsPMx.js";import"./Icon-090sEyNP.js";import"./WarningIcon-BONq29A0.js";/* empty css               *//* empty css               */import"./Flex-8Ziw3g66.js";import"./SlotComponent-Dd3JR44I.js";import"./mergeRefs-5ukaVgEN.js";import"./BaseRadioButton.stories-Bk7FWNsH.js";import"./BaseRadioButton-JakfrRWx.js";import"./InputPanel-CILqGCsD.js";import"./Button-Bu5jRL7_.js";import"./usePreviousValue-DEB71QFo.js";import"./Loader-BLPI6cwE.js";import"./useDelayedRender-C1uXgwHn.js";import"./Title-BqolAbcx.js";import"./Card-oB-2JQoY.js";import"./Text-6ThvhIY_.js";import"./Tag-vseikzw0.js";import"./ExpandablePanel-Fnd6cjiE.js";import"./useAnimatedHeightBetween-CnLLY322.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DQwBTyQ3.js";import"./Expander-BDojFxwC.js";import"./ChevronDownIcon-CHW7CvWC.js";import"./ChevronUpIcon-d6kJNEVy.js";import"./ListItem-DQdQmfTX.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
