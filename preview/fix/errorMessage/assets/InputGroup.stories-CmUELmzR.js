import{j as e}from"./iframe-B9B2iQPq.js";import{B as a}from"./BaseTextInput-srGmsUeN.js";import{I as p}from"./InputGroup-DKUDhPom.js";/* empty css               *//* empty css               */import i from"./Help.stories-DgCGnWmt.js";import m from"./BaseTextInput.stories-CZEWBqZi.js";import{H as s}from"./Help-CFNtfaBp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-DaNc9-Ue.js";import"./useId-COaKV4T_.js";import"./Label-CqUGzVVy.js";import"./SupportLabel-DE-BUjrK.js";import"./SuccessIcon-BlA4v25Z.js";import"./Icon-DOYMQfkf.js";import"./WarningIcon-BhhhauDK.js";/* empty css               *//* empty css               */import"./Flex-BZwMuxHA.js";import"./SlotComponent-D1Cqr0Vg.js";import"./mergeRefs-C2Z1RxN_.js";import"./Button-C78U90nS.js";import"./usePreviousValue-BGOjyvEy.js";import"./Loader-XiHmIIWU.js";import"./useDelayedRender-BxEiUR7C.js";const E={title:"Komponenter/Input Group",component:p,args:{label:"Fødeselsnummer",description:"Fødselsnummer består av 11 siffer.",children:e.jsx(a,{...m.args,defaultValue:"12345 123456"})}},r={args:{}},o={name:"Input Group med tooltip",args:{tooltip:e.jsx(s,{...i.args,children:"Vi bruker fødselsnummer for å identifisere deg i systemene våre."})}},t={name:"Input Group med label over flere linjer",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),description:void 0,tooltip:e.jsx(s,{...i.args,children:"Vi er bare nysgjerrige 😏"})}},n={name:"Input Group med lang label og description",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),tooltip:e.jsx(s,{...i.args,children:"Vi er bare nysgjerrige 😏"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
