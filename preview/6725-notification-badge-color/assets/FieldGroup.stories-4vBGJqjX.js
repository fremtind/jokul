import{r as p,j as i}from"./iframe-DI75odmg.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-5bmEv5i6.js";import{CheckboxStory as c}from"./Checkbox.stories-DxNfWi7w.js";import k from"./Help.stories-CZLuqSg2.js";import u from"./RadioButton.stories-B7lCT9z7.js";import{RadioPanel as g}from"./RadioPanel.stories-C3zWdqkF.js";import{F as h}from"./FieldGroup-BIdZsbNC.js";import{C as b}from"./Checkbox-Bc6snrtc.js";import{R as x}from"./RadioPanel-CFiUuePg.js";import{H as C}from"./Help-CJtwS7HN.js";import{R as G}from"./RadioButton-CGqC5pUL.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CekFEftq.js";import"./clsx-B-dksMZM.js";import"./Flex-DYzG-o8k.js";import"./SlotComponent-DdMZnh_B.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-KLNxW5QR.js";import"./usePreviousValue-Byry3Rm5.js";import"./Loader-DXZ2M8RA.js";import"./useDelayedRender-jQjbBc1d.js";import"./useId-ClTCWNOo.js";import"./Label-UybR48qs.js";import"./SupportLabel-BnfQobfL.js";import"./SuccessIcon-CYyBLz2d.js";import"./Icon-CsmWZ9EA.js";import"./WarningIcon-DpGWZJs7.js";import"./BaseRadioButton.stories-Cc_Dq5cz.js";import"./BaseRadioButton-BPLFdOm1.js";import"./Title-CelsKyty.js";import"./Card-gxoZJz-R.js";import"./Text-ChHCxT_C.js";import"./Tag--HLJod2d.js";import"./ExpandablePanel-BMnOZ8vL.js";import"./useAnimatedHeightBetween-kKsl2XdO.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D-u8Hhw4.js";import"./Expander-BKK9WsGo.js";import"./ChevronUpIcon-C2elvgE-.js";import"./ListItem-kQyRsT4R.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
