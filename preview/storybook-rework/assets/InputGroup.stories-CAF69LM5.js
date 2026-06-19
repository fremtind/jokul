import{j as e}from"./iframe-Cb6gFqyv.js";import{B as a}from"./BaseTextInput-DB99-88P.js";import{I as p}from"./InputGroup-Bt7DJrsh.js";/* empty css               *//* empty css               */import i from"./Help.stories-B4DeNgiB.js";import m from"./BaseTextInput.stories-D581UTkT.js";import{H as s}from"./Help-CeZXH1oP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-DZR_HxNj.js";import"./useId-DKawYrQb.js";import"./Label-Cw4ogQbY.js";import"./SupportLabel-CseQLA6O.js";import"./SuccessIcon-BVgESurb.js";import"./Icon-DoUUJJDD.js";import"./WarningIcon-CiqfiCIY.js";/* empty css               *//* empty css               */import"./Flex-C2lVTBi9.js";import"./SlotComponent-DYpPs2lW.js";import"./mergeRefs-Czc7lRa1.js";import"./Button-CalBW99A.js";import"./usePreviousValue-C42uI4Nu.js";import"./Loader-DpcTcQQi.js";import"./useDelayedRender-n8IOyIjZ.js";const E={title:"Komponenter/Input Group",component:p,args:{label:"Fødeselsnummer",description:"Fødselsnummer består av 11 siffer.",children:e.jsx(a,{...m.args,defaultValue:"12345 123456"})}},r={args:{}},o={name:"Input Group med tooltip",args:{tooltip:e.jsx(s,{...i.args,children:"Vi bruker fødselsnummer for å identifisere deg i systemene våre."})}},t={name:"Input Group med label over flere linjer",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),description:void 0,tooltip:e.jsx(s,{...i.args,children:"Vi er bare nysgjerrige 😏"})}},n={name:"Input Group med lang label og description",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),tooltip:e.jsx(s,{...i.args,children:"Vi er bare nysgjerrige 😏"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const $=["_InputGroup","InputGroupTooltip","MultiLineLabel","MultiLineLabelAndDescription"];export{o as InputGroupTooltip,t as MultiLineLabel,n as MultiLineLabelAndDescription,r as _InputGroup,$ as __namedExportsOrder,E as default};
