import{C as c}from"./Combobox-B1G7SoAP.js";/* empty css               */import"./iframe-Nvp5l-ln.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-DbAg0YcM.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DHcg112I.js";import"./usePreviousValue-CkKQlogx.js";import"./useId-tu3xuOch.js";import"./useListNavigation-BI02oyMT.js";import"./Chip-B7c25qjo.js";import"./CheckIcon-C7C2AkaQ.js";import"./Icon-DJVK3AMz.js";import"./CloseIcon-CT76chvw.js";import"./IconButton-kcfh2AJP.js";import"./ArrowVerticalAnimated-BKkFc3ge.js";import"./ArrowDownIcon-a-UDEsbM.js";import"./InputGroup-C8AwN8bx.js";import"./Label-DenBK_Wi.js";import"./SupportLabel-B0qFR3Yu.js";import"./WarningIcon-CiIMDh8K.js";import"./TooltipTrigger-kPDQBrDZ.js";import"./floating-ui.react-ljZGVMpP.js";import"./index-D34pbsZV.js";import"./index-BEqmEVrw.js";import"./TooltipContent-C1PDutuV.js";import"./getThemeAndSize-CZAj3IXt.js";const n=[{value:"Valg 1",tagLabel:"Valg 1",label:"Valg 1: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 2",tagLabel:"Valg 2",label:"Valg 2: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 3",tagLabel:"Valg 3",label:"Valg 3: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"}],{fn:s,userEvent:l,within:p}=__STORYBOOK_MODULE_TEST__,R={title:"Komponenter/Combobox",component:c,args:{name:"combobox",label:"Velg blant mange",items:n,placeholder:"Velg",inline:!1,invalid:!1,hasTagHover:!1,errorLabel:void 0,labelProps:{srOnly:!1,variant:"small"},width:"23ch",description:"Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",noMatchingOption:"Ingen regelfunn matcher søket.",onChange:s(),onBlur:s(),onFocus:s(),id:"combobox",value:[{...n[0]}]}},e={args:{value:void 0}},r={play:async({canvasElement:i})=>{const m=p(i).getByTestId("jkl-combobox__button");await l.click(m)}},a={play:async()=>{await l.tab()}},o={name:"Error",args:{errorLabel:"Feilmelding"}},t={args:{value:n}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: undefined
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("jkl-combobox__button");
    await userEvent.click(button);
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await userEvent.tab();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Error",
  args: {
    errorLabel: "Feilmelding"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: comboboxItems
  }
}`,...t.parameters?.docs?.source}}};const Y=["Default","Open","KeyboardFocus","ErrorState","HasValue"];export{e as Default,o as ErrorState,t as HasValue,a as KeyboardFocus,r as Open,Y as __namedExportsOrder,R as default};
