import{C as c}from"./Combobox-C5Ytu52W.js";/* empty css               */import"./iframe-bP08_dpO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-BNebpWQe.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CxNj8bOZ.js";import"./usePreviousValue-C_fQ_m4z.js";import"./useId-Dlp8n-d1.js";import"./useListNavigation-CZ9DhZfc.js";import"./Chip-DZBMe_Lh.js";import"./CheckIcon-BE_k2u-K.js";import"./Icon-CiFcT25P.js";import"./CloseIcon-ZDFzCrvl.js";import"./IconButton-DeD_pnma.js";import"./ArrowVerticalAnimated-DDKyiQEZ.js";import"./ArrowDownIcon-Cftef4Sa.js";import"./InputGroup-DJFFldGd.js";import"./Label-BiFYNOKn.js";import"./SupportLabel-BNlmbtWf.js";import"./WarningIcon-DjaCcQim.js";import"./TooltipTrigger-qLdKVRen.js";import"./floating-ui.react-1KWoix53.js";import"./index-DvKJfOtv.js";import"./index-CdPEhrMu.js";import"./TooltipContent-BoUy1ipq.js";import"./getThemeAndSize-CZAj3IXt.js";const n=[{value:"Valg 1",tagLabel:"Valg 1",label:"Valg 1: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 2",tagLabel:"Valg 2",label:"Valg 2: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 3",tagLabel:"Valg 3",label:"Valg 3: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"}],{fn:s,userEvent:l,within:p}=__STORYBOOK_MODULE_TEST__,R={title:"Komponenter/Combobox",component:c,args:{name:"combobox",label:"Velg blant mange",items:n,placeholder:"Velg",inline:!1,invalid:!1,hasTagHover:!1,errorLabel:void 0,labelProps:{srOnly:!1,variant:"small"},width:"23ch",description:"Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",noMatchingOption:"Ingen regelfunn matcher soeket.",onChange:()=>s(),onBlur:()=>s(),onFocus:()=>s(),id:"combobox",value:[{...n[0]}]}},e={args:{value:void 0}},a={play:async()=>{await l.tab()}},r={play:async({canvasElement:i})=>{const m=p(i).getByTestId("jkl-combobox__button");await l.click(m)}},o={args:{errorLabel:"Feilmelding"}},t={args:{value:n}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
