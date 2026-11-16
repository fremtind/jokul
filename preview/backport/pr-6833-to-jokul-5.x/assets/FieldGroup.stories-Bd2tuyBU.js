import{r as p,j as i}from"./iframe-DBIxsSqZ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C6osfyPD.js";import{CheckboxStory as c}from"./Checkbox.stories-ehOkwW65.js";import d from"./Help.stories-N52l1SpF.js";import k from"./RadioButton.stories-Dg3Cn-gZ.js";import{RadioPanel as u}from"./RadioPanel.stories-BSt00KLy.js";import{F as g}from"./FieldGroup-V_zxq06a.js";import{C as h}from"./Checkbox-DbkPrOi6.js";import{R as b}from"./RadioPanel-Ih8Og4ik.js";import{H as x}from"./Help-GSV9golX.js";import{R as C}from"./RadioButton-BrtSVTMc.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Caj23-6O.js";import"./clsx-B-dksMZM.js";import"./Flex-B17MjWDS.js";import"./SlotComponent-DZhp8xyz.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Dk3-voPM.js";import"./usePreviousValue-XB23LVL0.js";import"./Loader-kPrRIJU4.js";import"./useDelayedRender-D5rUyliU.js";import"./BaseRadioButton.stories-erprPx75.js";import"./BaseRadioButton-D3Suz9pS.js";import"./useId-h32j4DMT.js";import"./Title-BUnVk0Nx.js";import"./Card-D5y5lw1o.js";import"./Text-BJ_IMTvc.js";import"./Tag-BSLG4M5x.js";import"./ExpandablePanel-_t9O7pOk.js";import"./useAnimatedHeightBetween-C1Ivj4k4.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CHDV2uiK.js";import"./Expander-CHg2Eh9p.js";import"./ChevronDownIcon-C1IgYbid.js";import"./Icon-BIH3NrjJ.js";import"./ChevronUpIcon-piBCTXQ7.js";import"./ListItem-teKkgtTt.js";import"./Label-DQZCV2fq.js";import"./SupportLabel-mwlFB-lP.js";import"./SuccessIcon-BRrnhWy5.js";import"./WarningIcon-CD5KURdd.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
