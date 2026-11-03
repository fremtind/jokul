import{r as p,j as i}from"./iframe-BKJJz8iW.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BWGAe9O0.js";import{CheckboxStory as c}from"./Checkbox.stories-CR0JHqgb.js";import k from"./Help.stories-BNe2X3RG.js";import u from"./RadioButton.stories-DFOwqTPM.js";import{RadioPanel as g}from"./RadioPanel.stories-4a2-ev8Y.js";import{F as h}from"./FieldGroup-BhieEqpp.js";import{C as b}from"./Checkbox-B1STMI-v.js";import{R as x}from"./RadioPanel-CUFndOne.js";import{H as C}from"./Help-DzEFSsEm.js";import{R as G}from"./RadioButton-CW9kqZyJ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-8rp326tH.js";import"./clsx-B-dksMZM.js";import"./Flex-Be7RpCXc.js";import"./SlotComponent-CnOdE9tq.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DRnQGmqd.js";import"./usePreviousValue-D0jwxuyr.js";import"./Loader-4Rk0zG2F.js";import"./useDelayedRender-CPkiri7O.js";import"./useId-Ch9RYgPg.js";import"./Label-BdNGFaif.js";import"./SupportLabel-D1FBkl3g.js";import"./SuccessIcon-PmC3JZ-L.js";import"./Icon-BP6w6IJe.js";import"./WarningIcon-Dj0eBhSb.js";import"./BaseRadioButton.stories-BxC1zQvq.js";import"./BaseRadioButton-DcKHCeg0.js";import"./Title-DdedoWTA.js";import"./Card-Ag_LGb-c.js";import"./Text-VgiNkdNL.js";import"./Tag-DrpPo_aQ.js";import"./ExpandablePanel-BNJ5-RRw.js";import"./useAnimatedHeightBetween-CX9K7Hmx.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DmpMd-jN.js";import"./Expander-CABHCnT-.js";import"./ChevronUpIcon-J-2k9d6f.js";import"./ListItem-hCSVBh4r.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
