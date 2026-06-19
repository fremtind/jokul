import{C as c}from"./Combobox-BLhehMuH.js";/* empty css               */import"./iframe-Cb6gFqyv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-DnXqzfr3.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-nYo9h3sO.js";import"./usePreviousValue-C42uI4Nu.js";import"./useId-DKawYrQb.js";import"./useListNavigation-Di5ROjHU.js";import"./Chip-LyM6hMLH.js";import"./CheckIcon-CZvQSN6o.js";import"./Icon-DoUUJJDD.js";import"./CloseIcon-C9zFBE0g.js";import"./IconButton-DZR_HxNj.js";import"./ArrowVerticalAnimated-B0GhHJE8.js";import"./ArrowDownIcon-CWmq46BB.js";import"./InputGroup-Bt7DJrsh.js";import"./Label-Cw4ogQbY.js";import"./SupportLabel-CseQLA6O.js";import"./SuccessIcon-BVgESurb.js";import"./WarningIcon-CiqfiCIY.js";import"./TooltipTrigger-BUXqMZcC.js";import"./floating-ui.react-3YehoJUu.js";import"./index-Cm1xwd2q.js";import"./index-DZ1SgfmC.js";import"./TooltipContent-DHgry-gY.js";import"./getThemeAndSize-CZAj3IXt.js";const n=[{value:"Valg 1",tagLabel:"Valg 1",label:"Valg 1: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 2",tagLabel:"Valg 2",label:"Valg 2: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 3",tagLabel:"Valg 3",label:"Valg 3: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"}],{fn:s,userEvent:l,within:p}=__STORYBOOK_MODULE_TEST__,j={title:"Komponenter/Combobox",component:c,args:{name:"combobox",label:"Velg blant mange",items:n,placeholder:"Velg",inline:!1,invalid:!1,hasTagHover:!1,errorLabel:void 0,labelProps:{srOnly:!1,variant:"small"},width:"23ch",description:"Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",noMatchingOption:"Ingen regelfunn matcher soeket.",onChange:s(),onBlur:s(),onFocus:s(),id:"combobox",value:[]}},e={},a={play:async()=>{await l.tab()}},r={play:async({canvasElement:i})=>{const m=p(i).getByRole("button",{name:/velg blant mange/i});await l.click(m)}},t={args:{errorLabel:"Feilmelding"}},o={args:{value:n}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
