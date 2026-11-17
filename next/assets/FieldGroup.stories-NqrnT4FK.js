import{r as p,j as s}from"./iframe-CXKbzJbc.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Cr8a6G_5.js";import{CheckboxStory as c}from"./Checkbox.stories-idvTcku_.js";import k from"./Help.stories-CX8DPD4l.js";import u from"./RadioButton.stories-Dh0v8eZt.js";import{RadioPanel as g}from"./RadioPanel.stories-Bw93YuSu.js";import{F as h}from"./FieldGroup-DXJBNYoI.js";import{C as b}from"./Checkbox-rOASniEp.js";import{R as x}from"./RadioPanel-B67hJHSa.js";import{H as C}from"./Help-CVkVPD6E.js";import{R as G}from"./RadioButton-BlRPXdsO.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C_JTCDMA.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-Bm0Mkoos.js";import"./SlotComponent-C0vdigDL.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BD_erC8Z.js";import"./usePreviousValue-BnkioCiP.js";import"./Loader-BAfxi2iJ.js";import"./useDelayedRender-DZRxKuNM.js";import"./useId-DCGdpQ6u.js";import"./Label-CO5FwWMu.js";import"./SupportLabel-BAA3WLby.js";import"./SuccessIcon-DP2tG3bs.js";import"./Icon-DkNkpkBf.js";import"./WarningIcon-BppE_a8_.js";import"./BaseRadioButton.stories-CD8uyybW.js";import"./BaseRadioButton-4wThAjrU.js";import"./Title-DsaWwsfM.js";import"./Card-DyjXXUuT.js";import"./Text-DbHgruUA.js";import"./Tag-D6Fo-ZT9.js";import"./ExpandablePanel-DVwqyfqB.js";import"./useAnimatedHeightBetween-OE0w-qqZ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DyCE2eW5.js";import"./Expander-DV6fh6Yc.js";import"./ChevronUpIcon-Bz23TEVn.js";import"./ListItem-IEQwbTnV.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
