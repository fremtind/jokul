import{j as e}from"./iframe-B3tFkJrC.js";import{P as o}from"./PopupTip-CW8sqnia.js";import{S as a}from"./Select-CL7NnsG4.js";/* empty css               */import{F as s}from"./Flex-BPDb_xAz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Df3ej_me.js";import"./Icon-BjfSOHKD.js";import"./TooltipTrigger-1BV9hRJU.js";import"./floating-ui.react-Lv20cNFZ.js";import"./index-DE4R5y3-.js";import"./index-mU8hs7MS.js";import"./TooltipContent-B2WCGWQX.js";import"./useBrowserPreferences-CdNST0QR.js";import"./useId-97pb19Ec.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-CGHSZW8Z.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-CCu09ez4.js";import"./useListNavigation-D_vqcgCL.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-C_C2Cbjd.js";import"./ArrowDownIcon-D4rwP2hG.js";import"./InputGroup-BNyOsF2T.js";import"./Label-BbU5Wg3a.js";import"./SupportLabel-OvcNQVel.js";import"./WarningIcon-DVbYzvwH.js";import"./SlotComponent-DlSgrisY.js";import"./mergeRefs-BXOH4toD.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
