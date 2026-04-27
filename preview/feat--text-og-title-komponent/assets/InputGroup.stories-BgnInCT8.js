import{j as e}from"./iframe-BadzmaYM.js";import{B as i}from"./BaseTextInput-CyyrgXIl.js";import{I as p}from"./InputGroup-CpEs-IRU.js";/* empty css               *//* empty css               */import{H as s,m as a}from"./Help.stories-soxmtFzq.js";import m from"./BaseTextInput.stories-DOKMYiAA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-p9PJE253.js";import"./useId-DsdIxq41.js";import"./Label-BLsfbLVG.js";import"./SupportLabel-CAJEZLGJ.js";import"./WarningIcon-BgK2SO_V.js";import"./Icon-CFsSEQdE.js";import"./Button-D5GklSTT.js";import"./usePreviousValue-DQXzHvFs.js";import"./Loader-BJalb8fV.js";import"./useDelayedRender-B-xxjv76.js";/* empty css               *//* empty css               */import"./Flex-CMq00PW3.js";import"./SlotComponent-D-H5Iu43.js";import"./mergeRefs-Bjr0iv1-.js";const B={title:"Komponenter/Input Group",component:p,args:{label:"Fødeselsnummer",description:"Fødselsnummer består av 11 siffer.",children:e.jsx(i,{...m.args,defaultValue:"12345 123456"})}},r={args:{}},t={name:"Input Group med tooltip",args:{tooltip:e.jsx(s,{...a.args,children:"Vi bruker fødselsnummer for å identifisere deg i systemene våre."})}},o={name:"Input Group med label over flere linjer",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),description:void 0,tooltip:e.jsx(s,{...a.args,children:"Vi er bare nysgjerrige 😏"})}},n={name:"Input Group med lang label og description",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),tooltip:e.jsx(s,{...a.args,children:"Vi er bare nysgjerrige 😏"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
