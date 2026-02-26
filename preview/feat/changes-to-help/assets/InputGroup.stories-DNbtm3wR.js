import{j as e}from"./iframe-BlL1f6tE.js";import{B as a}from"./BaseTextInput-B13dSwE7.js";import{I as p}from"./InputGroup-lUpwyQzX.js";/* empty css               *//* empty css               */import i from"./Help.stories-Cl_PhdAD.js";import m from"./BaseTextInput.stories-CL6zWOMz.js";import{H as s}from"./Help-CFrcyaVC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-RTpbCdtl.js";import"./useId-5Z1nxQwM.js";import"./Label-BqQWt1hc.js";import"./SupportLabel-C91qhPV0.js";import"./WarningIcon-B4o2UKJo.js";import"./Icon-DQG0WF9n.js";/* empty css               *//* empty css               */import"./Flex-BM1G5u9b.js";import"./SlotComponent-pbMLR2SD.js";import"./mergeRefs-DCdUDw6Z.js";import"./Button-DdfZJ3bl.js";import"./usePreviousValue-VN0KBO0y.js";import"./Loader-CuKn4MPC.js";import"./useDelayedRender-Bu2qdOsk.js";const D={title:"Komponenter/Input Group",component:p,args:{label:"Fødeselsnummer",description:"Fødselsnummer består av 11 siffer.",children:e.jsx(a,{...m.args,defaultValue:"12345 123456"})}},r={args:{}},o={name:"Input Group med tooltip",args:{tooltip:e.jsx(s,{...i.args,children:"Vi bruker fødselsnummer for å identifisere deg i systemene våre."})}},t={name:"Input Group med label over flere linjer",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),description:void 0,tooltip:e.jsx(s,{...i.args,children:"Vi er bare nysgjerrige 😏"})}},n={name:"Input Group med lang label og description",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),tooltip:e.jsx(s,{...i.args,children:"Vi er bare nysgjerrige 😏"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Input Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args}>
                Vi bruker fødselsnummer for å identifisere deg i systemene våre.
            </Help>
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Input Group med label over flere linjer",
  args: {
    label: <>
                Har du noen gang vært
                <br />i utlandet på ferie?
            </>,
    description: undefined,
    tooltip: <Help {...HelpStories.args}>Vi er bare nysgjerrige 😏</Help>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Input Group med lang label og description",
  args: {
    label: <>
                Har du noen gang vært
                <br />i utlandet på ferie?
            </>,
    tooltip: <Help {...HelpStories.args}>Vi er bare nysgjerrige 😏</Help>
  }
}`,...n.parameters?.docs?.source}}};const E=["_InputGroup","InputGroupTooltip","MultiLineLabel","MultiLineLabelAndDescription"];export{o as InputGroupTooltip,t as MultiLineLabel,n as MultiLineLabelAndDescription,r as _InputGroup,E as __namedExportsOrder,D as default};
