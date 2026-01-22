import{j as e}from"./iframe-B_zKdfLP.js";import{P as o}from"./PopupTip-kfKtXfkF.js";import{S as a}from"./Select-jEVU9HjW.js";/* empty css               */import{F as s}from"./Flex-C0o5aSO3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-G_rWDnGA.js";import"./Icon-DETZ8T6E.js";import"./TooltipTrigger-ZWoNIxD-.js";import"./floating-ui.react-C6xJWsSl.js";import"./index-NMSieu-n.js";import"./index-BGqJy0Nu.js";import"./TooltipContent-D-sRzuKy.js";import"./useBrowserPreferences-AnxnTwPE.js";import"./useId-BMUtJkz_.js";import"./getThemeAndDensity-v_O0Epee.js";import"./useAnimatedHeight-U8hPZPLD.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-B2xpM_hE.js";import"./useListNavigation-ReLEHB-2.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-D4CeckPa.js";import"./ArrowDownIcon-CEIXPhEg.js";import"./InputGroup-CiWsNAha.js";import"./Label-TsCfyMtT.js";import"./SupportLabel-UV_0scEh.js";import"./WarningIcon-DzOttN66.js";import"./SlotComponent-BbVrfiSr.js";import"./mergeRefs-D4hJqksU.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tooltip: <PopupTip content={"Er du usikker på hvilket merke du har kan du velge Annet"} />
  }
}`,...n.parameters?.docs?.source}}};const M=["SelectStory","SelectInline","SelectMedTooltip"];export{t as SelectInline,n as SelectMedTooltip,r as SelectStory,M as __namedExportsOrder,L as default};
