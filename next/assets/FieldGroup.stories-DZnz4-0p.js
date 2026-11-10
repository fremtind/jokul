import{r as p,j as s}from"./iframe-lUmYnapu.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-oanWsEIh.js";import{CheckboxStory as c}from"./Checkbox.stories-CleJ1RcJ.js";import k from"./Help.stories-CRoqKBLk.js";import u from"./RadioButton.stories-CxMqoizw.js";import{RadioPanel as g}from"./RadioPanel.stories-DXbTzeCq.js";import{F as h}from"./FieldGroup-CSDYfOtY.js";import{C as b}from"./Checkbox-qyUKQekE.js";import{R as x}from"./RadioPanel-DTY9SCTe.js";import{H as C}from"./Help-t1FlNjkP.js";import{R as G}from"./RadioButton-DXTclM0j.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D9J_Zseq.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BaRtE4qE.js";import"./SlotComponent-Bk2QtawD.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C1NW0_js.js";import"./usePreviousValue-BYioge8q.js";import"./Loader-CeiPKtJA.js";import"./useDelayedRender-DtZwm_qv.js";import"./useId-DpDp62BC.js";import"./Label-B3GiW39Q.js";import"./SupportLabel-pvCw2G8l.js";import"./SuccessIcon-Cx-qk0Ok.js";import"./Icon-D18PvvVu.js";import"./WarningIcon-DQIgeZkQ.js";import"./BaseRadioButton.stories-DF3-K8XM.js";import"./BaseRadioButton-BI21n6MR.js";import"./Title-JRJRiZTa.js";import"./Card-mCVSW0wy.js";import"./Text-BgoWq39V.js";import"./Tag-Cdr1jvBl.js";import"./ExpandablePanel-BiFeR2Ak.js";import"./useAnimatedHeightBetween-DKYMtjkW.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Chg1TsWS.js";import"./Expander-C6WRHCQC.js";import"./ChevronUpIcon-CQ7zfNrd.js";import"./ListItem-DHzFMO5s.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
