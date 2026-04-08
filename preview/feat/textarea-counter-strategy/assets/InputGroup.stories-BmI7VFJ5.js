import{j as e}from"./iframe-Cw_cXWtk.js";import{B as i}from"./BaseTextInput-Bv9S9FqV.js";import{I as p}from"./InputGroup-BHWirV1l.js";/* empty css               *//* empty css               */import{H as s,m as a}from"./Help.stories-n0GYjudj.js";import m from"./BaseTextInput.stories-C6uXfh5R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-D0AuCslB.js";import"./useId-O4j-bVKQ.js";import"./Label-Cl6WyKNe.js";import"./SupportLabel-o3Rb0Ipa.js";import"./WarningIcon-CiE7w4SM.js";import"./Icon-DOEkfrNC.js";import"./Button-D_cgSgo1.js";import"./usePreviousValue-BmElpLSU.js";import"./Loader-Bc6bPkjc.js";import"./useDelayedRender-Dp6hD_aN.js";/* empty css               *//* empty css               */import"./Flex-CnlW_cM6.js";import"./SlotComponent-CdA9-D6k.js";import"./mergeRefs-Rg1Pfeqq.js";const B={title:"Komponenter/Input Group",component:p,args:{label:"Fødeselsnummer",description:"Fødselsnummer består av 11 siffer.",children:e.jsx(i,{...m.args,defaultValue:"12345 123456"})}},r={args:{}},t={name:"Input Group med tooltip",args:{tooltip:e.jsx(s,{...a.args,children:"Vi bruker fødselsnummer for å identifisere deg i systemene våre."})}},o={name:"Input Group med label over flere linjer",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),description:void 0,tooltip:e.jsx(s,{...a.args,children:"Vi er bare nysgjerrige 😏"})}},n={name:"Input Group med lang label og description",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),tooltip:e.jsx(s,{...a.args,children:"Vi er bare nysgjerrige 😏"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Input Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args}>
                Vi bruker fødselsnummer for å identifisere deg i systemene våre.
            </Help>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Input Group med label over flere linjer",
  args: {
    label: <>
                Har du noen gang vært
                <br />i utlandet på ferie?
            </>,
    description: undefined,
    tooltip: <Help {...HelpStories.args}>Vi er bare nysgjerrige 😏</Help>
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Input Group med lang label og description",
  args: {
    label: <>
                Har du noen gang vært
                <br />i utlandet på ferie?
            </>,
    tooltip: <Help {...HelpStories.args}>Vi er bare nysgjerrige 😏</Help>
  }
}`,...n.parameters?.docs?.source}}};const D=["_InputGroup","InputGroupTooltip","MultiLineLabel","MultiLineLabelAndDescription"];export{t as InputGroupTooltip,o as MultiLineLabel,n as MultiLineLabelAndDescription,r as _InputGroup,D as __namedExportsOrder,B as default};
