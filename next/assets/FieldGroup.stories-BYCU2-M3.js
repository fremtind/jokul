import{r as p,j as s}from"./iframe-qPCBgv9m.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-hrI-vyw-.js";import{CheckboxStory as c}from"./Checkbox.stories-gaDavAOC.js";import k from"./Help.stories-B41LTntq.js";import u from"./RadioButton.stories-bT7my7ot.js";import{RadioPanel as g}from"./RadioPanel.stories-DhzDnmzL.js";import{F as h}from"./FieldGroup-CLF67ciK.js";import{C as b}from"./Checkbox-z--si4oy.js";import{R as x}from"./RadioPanel-DyNO1hR6.js";import{H as C}from"./Help-DmEfKJ26.js";import{R as G}from"./RadioButton-CuJqYMtP.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dlle-PFC.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BxIfdTU5.js";import"./SlotComponent-BoJJRTs3.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C7TsOQM5.js";import"./usePreviousValue-CM-3916-.js";import"./Loader-bcfinxA7.js";import"./useDelayedRender-CxarOLTX.js";import"./useId-OoDwUHI1.js";import"./Label-CC6CBLPi.js";import"./SupportLabel-CHBfhjjL.js";import"./SuccessIcon-_AROD4lw.js";import"./Icon-BkJUuU_p.js";import"./WarningIcon-COVv8jh9.js";import"./BaseRadioButton.stories--gLyaOiy.js";import"./BaseRadioButton-CUshUg7s.js";import"./Title-CbovqNEc.js";import"./Card-Dcctnex7.js";import"./Text-CIw-X2nN.js";import"./Tag-XOa5u9tb.js";import"./ExpandablePanel-BtJYkj1f.js";import"./useAnimatedHeightBetween-B9B9xarF.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-oI1f0C7L.js";import"./Expander-B1VAtoW8.js";import"./ChevronUpIcon-DbaxidJN.js";import"./ListItem-BmtK9B4w.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Legend som sideoverskrift",
  args: {
    legend: "Hvordan vil du bli kontaktet?",
    labelProps: {
      pageHeading: true
    }
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,le as __namedExportsOrder,se as default};
