import{r as p,j as i}from"./iframe-DKIXucBg.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BUdRhhtz.js";import{CheckboxStory as c}from"./Checkbox.stories-BzcXAbuj.js";import k from"./Help.stories-CwqPMYmt.js";import u from"./RadioButton.stories-DNFtPIGo.js";import{RadioPanel as g}from"./RadioPanel.stories-DFO_MUKR.js";import{F as h}from"./FieldGroup-yECrYWse.js";import{C as b}from"./Checkbox-BlBmU8AY.js";import{R as x}from"./RadioPanel-Dww9D2U6.js";import{H as C}from"./Help-NKMbDa9i.js";import{R as G}from"./RadioButton-zOWUGn7r.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-uUXVMIyC.js";import"./clsx-B-dksMZM.js";import"./Flex-Br92b11b.js";import"./SlotComponent-BJqUesAX.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-AjUP3pn2.js";import"./usePreviousValue-DM8SR6Qk.js";import"./Loader-BVeL9jMQ.js";import"./useDelayedRender-DFgubQrT.js";import"./useId-fHFIRpCC.js";import"./Label-2sr3PD-0.js";import"./SupportLabel-Nwx_lPI2.js";import"./SuccessIcon-CQr21Cj6.js";import"./Icon-BLhBgKcd.js";import"./WarningIcon-C1e3gohs.js";import"./BaseRadioButton.stories-CJwc49pw.js";import"./BaseRadioButton-ITb2FuIF.js";import"./Title-LGmzE3nR.js";import"./Card-DmYm9J4q.js";import"./Text-DG5w-pOx.js";import"./Tag-DiNGAEji.js";import"./ExpandablePanel-DikQOpmw.js";import"./useAnimatedHeightBetween-DrkeY1bP.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CIxb1ciE.js";import"./Expander-C5WxwR35.js";import"./ChevronUpIcon-NuCUfY1K.js";import"./ListItem-OakCnNZC.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
