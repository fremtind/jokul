import{r as p,j as s}from"./iframe-DH0mYNTq.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-ECuKFnud.js";import{CheckboxStory as c}from"./Checkbox.stories-qqCNxKBR.js";import k from"./Help.stories-CpwBUrFR.js";import u from"./RadioButton.stories-DRtv1cs8.js";import{RadioPanel as g}from"./RadioPanel.stories-D9yXBFbV.js";import{F as h}from"./FieldGroup-BbBvfy6n.js";import{C as b}from"./Checkbox-B9Jl1qED.js";import{R as x}from"./RadioPanel-BYczU22z.js";import{H as C}from"./Help-IV9yEqyn.js";import{R as G}from"./RadioButton-F7Pr0kn3.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-fzUp5-oR.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CLHF185p.js";import"./SlotComponent-D4Y16lPm.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BOoX7f3y.js";import"./usePreviousValue-DhlPGOZc.js";import"./Loader-BvHej0m6.js";import"./useDelayedRender-BBPSCCTf.js";import"./useId-dTB02k7J.js";import"./Label-dwTlm9Oz.js";import"./SupportLabel-CLC12ngO.js";import"./SuccessIcon-CbjWWRTJ.js";import"./Icon-CFs3QPi-.js";import"./WarningIcon-D9tMwkFH.js";import"./BaseRadioButton.stories--sOokZSG.js";import"./BaseRadioButton-pj8dhAyy.js";import"./Title-DjrZ-nYF.js";import"./Card-BK21E96c.js";import"./Text-Df_P2I3N.js";import"./Tag-C4too4Hc.js";import"./ExpandablePanel-htCOv-NB.js";import"./useAnimatedHeightBetween-Bd_F9KNh.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DGqdZpE-.js";import"./Expander-CZ3Af0Mw.js";import"./ChevronUpIcon-DShyJEXa.js";import"./ListItem-CHDPzS2a.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
