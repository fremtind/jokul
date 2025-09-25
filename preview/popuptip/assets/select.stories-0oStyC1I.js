import{R as e}from"./index-siqcju79.js";import{P as l}from"./PopupTip-CuwbHXtw.js";import{S as n}from"./Select-CHzDdhgF.js";/* empty css               */import{F as s}from"./Flex-DP-fj2ie.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-FRW8RpkI.js";import"./Icon-mINJCSxV.js";import"./TooltipTrigger-CBbkTK_V.js";import"./getThemeAndDensity-CIeob-5A.js";import"./jsx-runtime-DqZpzl9T.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./useId-CahK3IZ3.js";import"./useAnimatedHeight-B4AinHXK.js";import"./tokens-CvksrKef.js";import"./usePreviousValue-f0kyfTHz.js";import"./useListNavigation-Bf1PKTdz.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CU3StSif.js";import"./InputGroup-BJwbXp8L.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";import"./SlotComponent-CWN6EcE2.js";const w={title:"Komponenter/Select",component:n,subcomponents:{PopupTip:l},parameters:{layout:"centered"},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,helpLabel:"Du kan kun velge ett merke",labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1},tags:["autodocs"]},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",helpLabel:""},render:o=>e.createElement(s,{gap:8,alignItems:"center"},e.createElement("p",null,"Jeg jobber som"),e.createElement(n,{...o}),e.createElement("p",null,"hos Fremtind Forsikring."))},a={args:{tooltip:e.createElement(l,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Hva jobber du som?",
    items: ["Frontend-utvikler", "Backend-utvikler", "Visuell designer", "Interaksjonsdesigner", "Tjenestedesigner"],
    inline: true,
    value: "Frontend-utvikler",
    helpLabel: ""
  },
  render: args => {
    return <Flex gap={8} alignItems="center">
                <p>Jeg jobber som</p>
                <Select {...args} />
                <p>hos Fremtind Forsikring.</p>
            </Flex>;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tooltip: <PopupTip content={"Er du usikker på hvilket merke du har kan du velge Annet"} />
  }
}`,...a.parameters?.docs?.source}}};const G=["SelectStory","SelectInline","SelectMedTooltip"];export{t as SelectInline,a as SelectMedTooltip,r as SelectStory,G as __namedExportsOrder,w as default};
