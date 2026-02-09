import{j as e}from"./iframe-Gpwh9WPG.js";import{P as o}from"./PopupTip-Cn25VJZO.js";import{S as a}from"./Select-D7BTDcDJ.js";/* empty css               */import{F as s}from"./Flex-DnM9ouZx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-C-O9jxBD.js";import"./Icon-cKiOag1L.js";import"./TooltipTrigger-Wo3uT6mw.js";import"./floating-ui.react-D_HDEICM.js";import"./index-CYd8AsmM.js";import"./index-CYyXPY7R.js";import"./TooltipContent-DVUk0xQ_.js";import"./useBrowserPreferences-6mo3RyK7.js";import"./useId-DtTilRcf.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-DjDPjw8v.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-C1tY7_mi.js";import"./useListNavigation-n6YQl44l.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CM1-7wVq.js";import"./ArrowDownIcon-Yd9w0Iw9.js";import"./InputGroup-CcsswYb1.js";import"./Label-BlXMOig_.js";import"./SupportLabel-BL0xH6bL.js";import"./WarningIcon-DKssVUta.js";import"./SlotComponent-Qr6hC73l.js";import"./mergeRefs-BC5OMJrL.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
