import{r as p,j as i}from"./iframe-BgZoqqd0.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DRXuzZXu.js";import{CheckboxStory as c}from"./Checkbox.stories-DcYD3AP9.js";import k from"./Help.stories-nkwtykGJ.js";import u from"./RadioButton.stories-DouhYxK7.js";import{RadioPanel as g}from"./RadioPanel.stories-DFFynpyu.js";import{F as h}from"./FieldGroup-Tl8JL9UX.js";import{C as b}from"./Checkbox-DmfXMGmS.js";import{R as x}from"./RadioPanel-C2E7cI30.js";import{H as C}from"./Help-Cb6cThnd.js";import{R as G}from"./RadioButton-DkAMnkfQ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bq4921AO.js";import"./clsx-B-dksMZM.js";import"./Flex-ByOILFIl.js";import"./SlotComponent-B4rbN7vt.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Cuhr2ScP.js";import"./usePreviousValue-D0M2RzcV.js";import"./Loader-bN-KcTQr.js";import"./useDelayedRender-Bsmf7q7W.js";import"./useId-CfHOvLHs.js";import"./Label-DfLg0fLX.js";import"./SupportLabel-BxFC2Q-c.js";import"./SuccessIcon-BC_ttFZQ.js";import"./Icon-DQHNwW0F.js";import"./WarningIcon-DanBspbW.js";import"./BaseRadioButton.stories-CTMhuJIQ.js";import"./BaseRadioButton-BgRCSQFG.js";import"./Title-DYG5sHRx.js";import"./Card-Cqveg1C3.js";import"./Text-Cof29Egp.js";import"./Tag-DAzzkuai.js";import"./ExpandablePanel-Cp4E9bMI.js";import"./useAnimatedHeightBetween-1YGYEHX_.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CWaQ7zrJ.js";import"./Expander-Do2enZYI.js";import"./ChevronUpIcon-B79dsEbF.js";import"./ListItem-mz9pwKyM.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
