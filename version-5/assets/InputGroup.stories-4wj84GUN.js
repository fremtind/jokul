import{j as e}from"./iframe-CZL5QpJP.js";import{B as i}from"./BaseTextInput-CqCSfLCP.js";import{I as p}from"./InputGroup-C2tcvYSg.js";/* empty css               *//* empty css               */import s from"./Help.stories-BhiqKBuq.js";import l from"./BaseTextInput.stories-CZpDZ_Sw.js";import{H as a}from"./Help-Bx_gA4rE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-CghyH2MI.js";import"./useId-5rI8IeJH.js";import"./Label-C_Ac9ykU.js";import"./SupportLabel-4N9g7WJl.js";import"./SuccessIcon-Lm25257a.js";import"./Icon-_0Rb8KBj.js";import"./WarningIcon-DMQH1fMw.js";import"./Button-CjOz-OeH.js";import"./usePreviousValue-BiI-VvQ8.js";import"./Loader-Co7O7Ovp.js";import"./useDelayedRender-Cyink7Ym.js";const T={title:"Komponenter/Input Group",component:p,args:{label:"Fødeselsnummer",description:"Fødselsnummer består av 11 siffer.",children:e.jsx(i,{...l.args,defaultValue:"12345 123456"})}},r={args:{}},o={name:"Input Group med tooltip",args:{tooltip:e.jsx(a,{...s.args,children:"Vi bruker fødselsnummer for å identifisere deg i systemene våre."})}},t={name:"Input Group med label over flere linjer",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),description:void 0,tooltip:e.jsx(a,{...s.args,children:"Vi er bare nysgjerrige 😏"})}},n={name:"Input Group med lang label og description",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),tooltip:e.jsx(a,{...s.args,children:"Vi er bare nysgjerrige 😏"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const k=["_InputGroup","InputGroupTooltip","MultiLineLabel","MultiLineLabelAndDescription"];export{o as InputGroupTooltip,t as MultiLineLabel,n as MultiLineLabelAndDescription,r as _InputGroup,k as __namedExportsOrder,T as default};
