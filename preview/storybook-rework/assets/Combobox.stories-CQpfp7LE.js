import{C as c}from"./Combobox-kkWsZ05q.js";/* empty css               */import"./iframe-2cjfxI8U.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-agnREV9w.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-OoSSpHWA.js";import"./usePreviousValue-JN_C6zxt.js";import"./useId-xYyGFk01.js";import"./useListNavigation-BXs3q103.js";import"./Chip-C-qtCcT1.js";import"./CheckIcon-Dke7yDTK.js";import"./Icon-BodlVgTg.js";import"./CloseIcon-BtV2ZkuR.js";import"./IconButton-B9q4xr_r.js";import"./ArrowVerticalAnimated-CM5oALdm.js";import"./ArrowDownIcon-BgkgQFHl.js";import"./InputGroup-B6-IMUKZ.js";import"./Label-25enJFIX.js";import"./SupportLabel-Q8nZiujB.js";import"./SuccessIcon-CfoBPrrq.js";import"./WarningIcon-DDkHZmXj.js";import"./TooltipTrigger-qB7nvqYU.js";import"./floating-ui.react-v-K3-Lyq.js";import"./index-DCZI71Lb.js";import"./index-CA-djLKv.js";import"./TooltipContent-22iynZa8.js";import"./getThemeAndSize-CZAj3IXt.js";const n=[{value:"Valg 1",tagLabel:"Valg 1",label:"Valg 1: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 2",tagLabel:"Valg 2",label:"Valg 2: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 3",tagLabel:"Valg 3",label:"Valg 3: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"}],{fn:s,userEvent:l,within:p}=__STORYBOOK_MODULE_TEST__,j={title:"Komponenter/Combobox",component:c,args:{name:"combobox",label:"Velg blant mange",items:n,placeholder:"Velg",inline:!1,invalid:!1,hasTagHover:!1,errorLabel:void 0,labelProps:{srOnly:!1,variant:"small"},width:"23ch",description:"Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",noMatchingOption:"Ingen regelfunn matcher soeket.",onChange:s(),onBlur:s(),onFocus:s(),id:"combobox",value:[]}},e={},a={play:async()=>{await l.tab()}},r={play:async({canvasElement:i})=>{const m=p(i).getByRole("button",{name:/velg blant mange/i});await l.click(m)}},t={args:{errorLabel:"Feilmelding"}},o={args:{value:n}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await userEvent.tab();
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: /velg blant mange/i
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
