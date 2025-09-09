import{R as e}from"./index-siqcju79.js";import{P as t}from"./PopupTip-CTc2k1KN.js";import{S as s}from"./Select-9wG0ycvO.js";import{F as i}from"./Flex-DP-fj2ie.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-FRW8RpkI.js";import"./Icon-mINJCSxV.js";import"./TooltipTrigger-CBbkTK_V.js";import"./getThemeAndDensity-CIeob-5A.js";import"./jsx-runtime-DqZpzl9T.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./useId-CahK3IZ3.js";import"./useAnimatedHeight-B4AinHXK.js";import"./tokens-CvksrKef.js";import"./usePreviousValue-f0kyfTHz.js";import"./useListNavigation-Bf1PKTdz.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BAkArw06.js";import"./ArrowUpIcon-CFNLzgG_.js";import"./InputGroup-BJwbXp8L.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";import"./SlotComponent-CWN6EcE2.js";const L={title:"Komponenter/Select",component:s,subcomponents:{PopupTip:t},parameters:{layout:"centered"},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},tags:["autodocs"]},l={name:"Select",args:{name:"Select",label:"Hvilket merke er telefonen?",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,helpLabel:"Du kan kun velge ett merke",labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},n={args:{name:"Select",label:"Hvilket merke er telefonen?",defaultPrompt:"Velg merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"}],inline:!1,invalid:!1,helpLabel:"Du kan kun velge ett merke",errorLabel:"Du kan kun velge ett merke",labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},a={args:{name:"Select",label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,searchable:!1,value:"Frontend-utvikler"},render:o=>e.createElement(i,{gap:8,alignItems:"center"},e.createElement("p",null,"Jeg jobber som"),e.createElement(s,{...o}),e.createElement("p",null,"hos Fremtind Forsikring."))},r={args:{name:"Select",label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],value:"Frontend-utvikler",tooltip:e.createElement(t,{content:"Velg rollen som passer deg best, informasjonen brukes kun for statistikk."})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Select",
  args: {
    name: "Select",
    label: "Hvilket merke er telefonen?",
    items: [{
      value: "Apple",
      label: "Apple"
    }, {
      value: "Samsung",
      label: "Samsung"
    }, {
      value: "Google",
      label: "Google"
    }, {
      value: "OnePlus",
      label: "OnePlus"
    }, {
      value: "Nokia",
      label: "Nokia"
    }],
    defaultPrompt: "Velg merke",
    inline: false,
    invalid: false,
    helpLabel: "Du kan kun velge ett merke",
    labelProps: {
      srOnly: false,
      variant: "small"
    },
    maxShownOptions: 12,
    width: "20ch",
    searchable: false
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Select",
    label: "Hvilket merke er telefonen?",
    defaultPrompt: "Velg merke",
    items: [{
      value: "Apple",
      label: "Apple"
    }, {
      value: "Samsung",
      label: "Samsung"
    }, {
      value: "Google",
      label: "Google"
    }, {
      value: "OnePlus",
      label: "OnePlus"
    }, {
      value: "Nokia",
      label: "Nokia"
    }],
    inline: false,
    invalid: false,
    helpLabel: "Du kan kun velge ett merke",
    errorLabel: "Du kan kun velge ett merke",
    labelProps: {
      srOnly: false,
      variant: "small"
    },
    maxShownOptions: 12,
    width: "20ch",
    searchable: false
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Select",
    label: "Hva jobber du som?",
    items: ["Frontend-utvikler", "Backend-utvikler", "Visuell designer", "Interaksjonsdesigner", "Tjenestedesigner"],
    inline: true,
    searchable: false,
    value: "Frontend-utvikler"
  },
  render: args => {
    return <Flex gap={8} alignItems="center">
                <p>Jeg jobber som</p>
                <Select {...args} />
                <p>hos Fremtind Forsikring.</p>
            </Flex>;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Select",
    label: "Hva jobber du som?",
    items: ["Frontend-utvikler", "Backend-utvikler", "Visuell designer", "Interaksjonsdesigner", "Tjenestedesigner"],
    value: "Frontend-utvikler",
    tooltip: <PopupTip content={"Velg rollen som passer deg best, informasjonen brukes kun for statistikk."} />
  }
}`,...r.parameters?.docs?.source}}};const B=["SelectStory","SelectErrorState","SelectInline","SelectMedTooltip"];export{n as SelectErrorState,a as SelectInline,r as SelectMedTooltip,l as SelectStory,B as __namedExportsOrder,L as default};
