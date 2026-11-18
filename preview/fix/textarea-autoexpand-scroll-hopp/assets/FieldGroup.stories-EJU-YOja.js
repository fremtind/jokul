import{r as p,j as s}from"./iframe-_FaeG25D.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DD0RtaAP.js";import{CheckboxStory as c}from"./Checkbox.stories-DhY6lB-X.js";import k from"./Help.stories-BgTpdELr.js";import u from"./RadioButton.stories-Qv6TgShV.js";import{RadioPanel as g}from"./RadioPanel.stories-DQuuy-ej.js";import{F as h}from"./FieldGroup-BT2M24WN.js";import{C as b}from"./Checkbox-3i45dVAV.js";import{R as x}from"./RadioPanel-cdY2E4Ds.js";import{H as C}from"./Help-Csc12nAZ.js";import{R as G}from"./RadioButton-ByWSturz.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CdN0c5oo.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BpKwCNOz.js";import"./SlotComponent-BVBn70lf.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Bt_tcgW1.js";import"./usePreviousValue-aTshdi-F.js";import"./Loader-BNFtLrih.js";import"./useDelayedRender-DeC6KNMv.js";import"./useId-D0CcExWh.js";import"./Label-CN0o_bgx.js";import"./SupportLabel-AxMOblDz.js";import"./SuccessIcon-CGOZPU-T.js";import"./Icon-GsgJp8Ld.js";import"./WarningIcon-B4vC-nd2.js";import"./BaseRadioButton.stories-C5KhidPH.js";import"./BaseRadioButton-H8FTknXC.js";import"./Title-DwBPS548.js";import"./Card-Dl6Egmgu.js";import"./Text-Bv566TME.js";import"./Tag-CN7OHRxJ.js";import"./ExpandablePanel-R4FB4vs6.js";import"./useAnimatedHeightBetween-C1C_SHr6.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-2i5g9oxW.js";import"./Expander-BHg6XY1H.js";import"./ChevronUpIcon-DqTeS7PZ.js";import"./ListItem-B3q4OCNH.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
