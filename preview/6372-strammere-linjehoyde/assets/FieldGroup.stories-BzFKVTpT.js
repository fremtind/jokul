import{r as p,j as s}from"./iframe-DqMlXpko.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-QDvTIbJ2.js";import{CheckboxStory as c}from"./Checkbox.stories-Ct7TlyQE.js";import k from"./Help.stories-BjBsHwh3.js";import u from"./RadioButton.stories-CQPihk-b.js";import{RadioPanel as g}from"./RadioPanel.stories-CgMm8fg4.js";import{F as h}from"./FieldGroup-ElCmry6K.js";import{C as b}from"./Checkbox-CYIupex1.js";import{R as x}from"./RadioPanel-BAPbqF1n.js";import{H as C}from"./Help-D5_AVs-T.js";import{R as G}from"./RadioButton-Df0QF5Hv.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B1X6g5zm.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-XW6xuLVS.js";import"./SlotComponent-D3Ra0w84.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BlbNZxk2.js";import"./usePreviousValue-CDEerEph.js";import"./Loader-BIsdE9F7.js";import"./useDelayedRender-BVqnrQ5A.js";import"./useId-DuY0NCwy.js";import"./Label-DY_P0j_U.js";import"./SupportLabel-DgUYjB93.js";import"./SuccessIcon-4ALXx78u.js";import"./Icon-Bi2Nj6CJ.js";import"./WarningIcon-QWlVPgvb.js";import"./BaseRadioButton.stories-DpaStU1L.js";import"./BaseRadioButton-BxCB6YZj.js";import"./Title-DLeF8Dey.js";import"./Card-Dv2APH0K.js";import"./Text-CZ7FrxvM.js";import"./Tag-DgDacNAb.js";import"./ExpandablePanel-2vAs_oad.js";import"./useAnimatedHeightBetween-cEycbRDC.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C04mLt1D.js";import"./Expander-DjARdIr_.js";import"./ChevronUpIcon-GgemygvH.js";import"./ListItem-BrBGHubp.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
