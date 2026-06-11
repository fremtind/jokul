import{C as c}from"./Combobox-CbUpmtIy.js";/* empty css               */import"./iframe-HvQr5kN0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-Dzv_rurU.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D5k63G16.js";import"./usePreviousValue-Byp8xk4v.js";import"./useId-Dol2UeJo.js";import"./useListNavigation-D8K9lYxp.js";import"./Chip-Bh2JbiMm.js";import"./CheckIcon-Bt6PLabM.js";import"./Icon-D8JyBxeF.js";import"./CloseIcon-BLfxjGmy.js";import"./IconButton-mZgTxYYj.js";import"./ArrowVerticalAnimated-CLy9G28l.js";import"./ArrowDownIcon-CJhHFT8r.js";import"./InputGroup-1G1fvZmo.js";import"./Label-D5vi3BOP.js";import"./SupportLabel-BMQ-S6Iv.js";import"./WarningIcon-BUrSqrmY.js";import"./TooltipTrigger-DiY5y7HD.js";import"./floating-ui.react-86SsFyE2.js";import"./index-CZjdsYR4.js";import"./index-BEtSUNzL.js";import"./TooltipContent-CFb0zMVO.js";import"./getThemeAndSize-CZAj3IXt.js";const n=[{value:"Valg 1",tagLabel:"Valg 1",label:"Valg 1: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 2",tagLabel:"Valg 2",label:"Valg 2: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 3",tagLabel:"Valg 3",label:"Valg 3: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"}],{fn:s,userEvent:l,within:p}=__STORYBOOK_MODULE_TEST__,R={title:"Komponenter/Combobox",component:c,args:{name:"combobox",label:"Velg blant mange",items:n,placeholder:"Velg",inline:!1,invalid:!1,hasTagHover:!1,errorLabel:void 0,labelProps:{srOnly:!1,variant:"small"},width:"23ch",description:"Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",noMatchingOption:"Ingen regelfunn matcher soeket.",onChange:()=>s(),onBlur:()=>s(),onFocus:()=>s(),id:"combobox",value:[{...n[0]}]}},e={args:{value:void 0}},a={play:async()=>{await l.tab()}},r={play:async({canvasElement:i})=>{const m=p(i).getByTestId("jkl-combobox__button");await l.click(m)}},o={args:{errorLabel:"Feilmelding"}},t={args:{value:n}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: undefined
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await userEvent.tab();
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("jkl-combobox__button");
    await userEvent.click(button);
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    errorLabel: "Feilmelding"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: comboboxItems
  }
}`,...t.parameters?.docs?.source}}};const Y=["Default","FocusState","OpenState","ErrorState","HasValue"];export{e as Default,o as ErrorState,a as FocusState,t as HasValue,r as OpenState,Y as __namedExportsOrder,R as default};
