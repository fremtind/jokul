import{r as p,j as s}from"./iframe-C3i03f1e.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BICWDvMn.js";import{CheckboxStory as c}from"./Checkbox.stories-DxMDkX78.js";import k from"./Help.stories-DpQR59Vo.js";import u from"./RadioButton.stories-elo5FFxD.js";import{RadioPanel as g}from"./RadioPanel.stories-D0LtpxgK.js";import{F as h}from"./FieldGroup-BxFc9irm.js";import{C as b}from"./Checkbox-BfaYvojj.js";import{R as x}from"./RadioPanel-iwtG3tfD.js";import{H as C}from"./Help-CMmZ6Jtb.js";import{R as G}from"./RadioButton-oNGfmKlt.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DvUIbyY1.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-Gmkp_ADd.js";import"./SlotComponent-CvWvQ9YQ.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-PTFKgkKu.js";import"./usePreviousValue-DW69_Hsl.js";import"./Loader-CxzDcT2Q.js";import"./useDelayedRender-BcrvfiCo.js";import"./useId-B_Y4_YHr.js";import"./Label-blIrayYO.js";import"./SupportLabel-Bpncodgi.js";import"./SuccessIcon-1Vx7ATPY.js";import"./Icon-C5gHWzmA.js";import"./WarningIcon-CSn2M7Mf.js";import"./BaseRadioButton.stories-DL1DfolV.js";import"./BaseRadioButton-DczwVWjY.js";import"./Title-DGBDlSqe.js";import"./Card-Dv9AuAqf.js";import"./Text-BwCHCn_h.js";import"./Tag-Cxdd-IVd.js";import"./ExpandablePanel-DidvI4et.js";import"./useAnimatedHeightBetween-BHMOhLrL.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DFvyBHdX.js";import"./Expander-Gz5JUC_P.js";import"./ChevronDownIcon-D1nTG2Li.js";import"./ChevronUpIcon-BPZgJka0.js";import"./ListItem-CHW919Tz.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,de as __namedExportsOrder,le as default};
