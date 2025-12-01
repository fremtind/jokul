import{j as e}from"./jsx-runtime-DqZpzl9T.js";import"./index-siqcju79.js";import{P as n}from"./PopupTip-HI0Ecfng.js";import{S as a}from"./Select-D0zti9dA.js";/* empty css               */import{F as s}from"./Flex-4pIEM4q7.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BmFudUz-.js";import"./Icon-DnRkF4CO.js";import"./TooltipTrigger-Tf80eoYK.js";import"./getThemeAndDensity-CJSyFDcr.js";import"./index-BAyipmUG.js";import"./index-DpflvY8d.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./useId-CahK3IZ3.js";import"./useAnimatedHeight-BAxzwhOL.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-f0kyfTHz.js";import"./useListNavigation-Bf1PKTdz.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Dz5LN4Sz.js";import"./ArrowDownIcon-BlnkIUxx.js";import"./InputGroup-BFZ5w6w_.js";import"./Label-Ct8Bs2e9.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./SlotComponent-DNbIHoXc.js";import"./mergeRefs-DouPjScu.js";const J={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:n},parameters:{layout:"centered"},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1},tags:["autodocs","forms"]},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},o={args:{tooltip:e.jsx(n,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Hva jobber du som?",
    items: ["Frontend-utvikler", "Backend-utvikler", "Visuell designer", "Interaksjonsdesigner", "Tjenestedesigner"],
    inline: true,
    value: "Frontend-utvikler",
    description: "",
    helpLabel: ""
  },
  render: args => {
    return <Flex gap="xs" alignItems="center">
                <p>Jeg jobber som</p>
                <Select {...args} />
                <p>hos Fremtind Forsikring.</p>
            </Flex>;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tooltip: <PopupTip content={"Er du usikker på hvilket merke du har kan du velge Annet"} />
  }
}`,...o.parameters?.docs?.source}}};const L=["SelectStory","SelectInline","SelectMedTooltip"];export{t as SelectInline,o as SelectMedTooltip,r as SelectStory,L as __namedExportsOrder,J as default};
