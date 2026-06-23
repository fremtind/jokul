import{C as c}from"./Combobox-CCOqLA8F.js";/* empty css               */import"./iframe-BAyTcUFD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-CJIDgVW-.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CTjWnhNh.js";import"./usePreviousValue-L1wnC9Wo.js";import"./useId-DWL38C75.js";import"./useListNavigation-BHZ4VUQm.js";import"./Chip-BoXVyHru.js";import"./CheckIcon-Ld7rooA1.js";import"./Icon-DLLFMaPw.js";import"./CloseIcon-Iao67JgZ.js";import"./IconButton-ekfZx_Ps.js";import"./ArrowVerticalAnimated-msZGYUmu.js";import"./ArrowDownIcon-ObEJ-epV.js";import"./InputGroup-BTRdypTm.js";import"./Label-CpxcSjvp.js";import"./SupportLabel-CQeMN5Yv.js";import"./SuccessIcon-CUwhY-kr.js";import"./WarningIcon-CEjoXlAd.js";import"./TooltipTrigger-C3jSh-Q_.js";import"./floating-ui.react-Dcpx3PJM.js";import"./index-CSJP5VFD.js";import"./index-Mb4gktvy.js";import"./TooltipContent-CtU3uwuI.js";import"./getThemeAndSize-CZAj3IXt.js";const n=[{value:"Valg 1",tagLabel:"Valg 1",label:"Valg 1: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 2",tagLabel:"Valg 2",label:"Valg 2: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 3",tagLabel:"Valg 3",label:"Valg 3: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"}],{fn:s,userEvent:l,within:p}=__STORYBOOK_MODULE_TEST__,j={title:"Komponenter/Combobox",component:c,args:{name:"combobox",label:"Velg blant mange",items:n,placeholder:"Velg",inline:!1,invalid:!1,hasTagHover:!1,errorLabel:void 0,labelProps:{srOnly:!1,variant:"small"},width:"23ch",description:"Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",noMatchingOption:"Ingen regelfunn matcher soeket.",onChange:s(),onBlur:s(),onFocus:s(),id:"combobox",value:[]}},e={args:{value:[]}},a={play:async()=>{await l.tab()}},r={play:async({canvasElement:i})=>{const m=p(i).getByRole("button",{name:/meny/i});await l.click(m)}},t={args:{errorLabel:"Feilmelding"}},o={args:{value:n}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: []
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
    const button = canvas.getByRole("button", {
      name: /meny/i
    });
    await userEvent.click(button);
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    errorLabel: "Feilmelding"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: comboboxItems
  }
}`,...o.parameters?.docs?.source}}};const q=["Default","FocusState","OpenState","ErrorState","HasValue"];export{e as Default,t as ErrorState,a as FocusState,o as HasValue,r as OpenState,q as __namedExportsOrder,j as default};
