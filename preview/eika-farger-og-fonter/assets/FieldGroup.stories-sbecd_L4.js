import{r as p,j as s}from"./iframe-CpjE09ZT.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CbiuIid8.js";import{CheckboxStory as c}from"./Checkbox.stories-1ZlQNuh5.js";import k from"./Help.stories-C4KTP0gw.js";import u from"./RadioButton.stories-BpovD9EI.js";import{RadioPanel as g}from"./RadioPanel.stories-LPpQ8GDx.js";import{F as h}from"./FieldGroup-DW0u8-6k.js";import{C as b}from"./Checkbox-_zvGTYGT.js";import{R as x}from"./RadioPanel-DO5whVnd.js";import{H as C}from"./Help-BPbJgB5Q.js";import{R as G}from"./RadioButton-D28FQM91.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-YuictwQY.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BLxOKUru.js";import"./SlotComponent-DgG28txs.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DoXCULlV.js";import"./usePreviousValue-B_g86ocX.js";import"./Loader-rGq_P8Wv.js";import"./useDelayedRender-EYEVPfKQ.js";import"./useId-AqVQ_QMd.js";import"./Label-Bm8r1d79.js";import"./SupportLabel-BY929WKb.js";import"./SuccessIcon-Dg7i1Z3V.js";import"./Icon-3txnnQXp.js";import"./WarningIcon-67MixeAi.js";import"./BaseRadioButton.stories-C6nfTD1s.js";import"./BaseRadioButton-DTqbkPLr.js";import"./Title-CeLnhNeW.js";import"./Card-BtaMuEZS.js";import"./Text-DgA2TONx.js";import"./Tag-Ca-LU6yF.js";import"./ExpandablePanel-Z1p6ZKKT.js";import"./useAnimatedHeightBetween-DRS7X238.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-vtubU3Ox.js";import"./Expander-vD5_0936.js";import"./ChevronUpIcon-CKMlhW-J.js";import"./ListItem-nWMcxz5I.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
