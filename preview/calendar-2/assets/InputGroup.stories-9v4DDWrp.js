import{j as e}from"./iframe--4tOxVpk.js";import{B as a}from"./BaseTextInput-DxgLakQW.js";import{I as p}from"./InputGroup-DKKc3Tw1.js";/* empty css               *//* empty css               */import i from"./Help.stories-DzXnopCX.js";import m from"./BaseTextInput.stories-Bosp7BjJ.js";import{H as s}from"./Help-DTxOd09K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-DYQVqfLv.js";import"./useId-RoFKxuY7.js";import"./Label-BkS4q7uG.js";import"./SupportLabel-RmxH3HMm.js";import"./SuccessIcon-5WKcaa8S.js";import"./Icon-DqOACwrg.js";import"./WarningIcon-BILMUuDA.js";/* empty css               *//* empty css               */import"./Flex-Bxb-2DU3.js";import"./SlotComponent-CNP2d3em.js";import"./mergeRefs-BwLMIhT4.js";import"./Button-DkQjNa1d.js";import"./usePreviousValue-C7eoAqXf.js";import"./Loader-D2vKZqE4.js";import"./useDelayedRender-Z9Hfu1ur.js";const E={title:"Komponenter/Input Group",component:p,args:{label:"Fødeselsnummer",description:"Fødselsnummer består av 11 siffer.",children:e.jsx(a,{...m.args,defaultValue:"12345 123456"})}},r={args:{}},o={name:"Input Group med tooltip",args:{tooltip:e.jsx(s,{...i.args,children:"Vi bruker fødselsnummer for å identifisere deg i systemene våre."})}},t={name:"Input Group med label over flere linjer",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),description:void 0,tooltip:e.jsx(s,{...i.args,children:"Vi er bare nysgjerrige 😏"})}},n={name:"Input Group med lang label og description",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),tooltip:e.jsx(s,{...i.args,children:"Vi er bare nysgjerrige 😏"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
