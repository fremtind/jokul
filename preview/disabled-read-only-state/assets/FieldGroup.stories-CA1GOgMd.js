import{r as p,j as i}from"./iframe-yC4Rnn10.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CyT4mIGK.js";import{CheckboxStory as c}from"./Checkbox.stories-BW0MvxWK.js";import k from"./Help.stories-Dpywt1F9.js";import u from"./RadioButton.stories-Co5xbgMT.js";import{RadioPanel as g}from"./RadioPanel.stories-lBc5sVag.js";import{F as h}from"./FieldGroup-DAFfDX0a.js";import{C as b}from"./Checkbox-BjIIZyn6.js";import{R as x}from"./RadioPanel-DLg3BlC_.js";import{H as C}from"./Help-C8QoOZ7N.js";import{R as G}from"./RadioButton-BFg-AAPl.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BfRczebT.js";import"./clsx-B-dksMZM.js";import"./Flex-C065RgY6.js";import"./SlotComponent-CTYk5_M3.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Bb-QdMhM.js";import"./usePreviousValue-DxzLsSAQ.js";import"./Loader-CbWg3GWy.js";import"./useDelayedRender-Bmoe-oLA.js";import"./useId-CP7lVJZU.js";import"./Label-BGGt-zgJ.js";import"./SupportLabel-D_-Js1mI.js";import"./SuccessIcon-M8DyDq7v.js";import"./Icon-CcbwFlGu.js";import"./WarningIcon-DeO4CNy_.js";import"./BaseRadioButton.stories-BUK4KMRO.js";import"./BaseRadioButton-CvLFuZSa.js";import"./Title-BnyOmohE.js";import"./Card-C5HhZEFE.js";import"./Text-lfslyOQQ.js";import"./Tag-LxIIMoVr.js";import"./ExpandablePanel-CHBy5v0j.js";import"./useAnimatedHeightBetween-Bw-6rtXw.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B3dvnXVY.js";import"./Expander-DVcE7iAT.js";import"./ChevronUpIcon-CQV4LRap.js";import"./ListItem-Cw1c93H0.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};
