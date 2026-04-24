import{j as e}from"./iframe-BFenp-hc.js";import{B as i}from"./BaseTextInput-X3dts0bZ.js";import{I as p}from"./InputGroup-DW-vnUj_.js";/* empty css               *//* empty css               */import{H as s,m as a}from"./Help.stories-CmgrnCSM.js";import m from"./BaseTextInput.stories-D5VQ2Tm_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-DeRJXr98.js";import"./useId-BdJSV1WM.js";import"./Label-BbYmZYGT.js";import"./SupportLabel-D7lVbcoL.js";import"./WarningIcon-WbiLtCkr.js";import"./Icon-CGS143Wr.js";import"./Button-oGr5yhIl.js";import"./usePreviousValue-BQrNeOln.js";import"./Loader-BxsM5hlp.js";import"./useDelayedRender-C0ZfU-zF.js";/* empty css               *//* empty css               */import"./Flex-CL-QSou9.js";import"./SlotComponent-N_Y7aQAl.js";import"./mergeRefs-BJRndm5D.js";const B={title:"Komponenter/Input Group",component:p,args:{label:"Fødeselsnummer",description:"Fødselsnummer består av 11 siffer.",children:e.jsx(i,{...m.args,defaultValue:"12345 123456"})}},r={args:{}},t={name:"Input Group med tooltip",args:{tooltip:e.jsx(s,{...a.args,children:"Vi bruker fødselsnummer for å identifisere deg i systemene våre."})}},o={name:"Input Group med label over flere linjer",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),description:void 0,tooltip:e.jsx(s,{...a.args,children:"Vi er bare nysgjerrige 😏"})}},n={name:"Input Group med lang label og description",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),tooltip:e.jsx(s,{...a.args,children:"Vi er bare nysgjerrige 😏"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
