import{j as e}from"./iframe-C6weljUM.js";import{P as o}from"./PopupTip-95cOYiqn.js";import{S as a}from"./Select-B39ewTjK.js";/* empty css               */import{F as s}from"./Flex-D8mWT22N.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DaPgklqf.js";import"./Icon-CPZQzywW.js";import"./TooltipTrigger-BbIoyX9x.js";import"./floating-ui.react-B00LDizE.js";import"./index-BB0yQYPx.js";import"./index-XviTV_W6.js";import"./TooltipContent-BpQf3bws.js";import"./useBrowserPreferences-86r2TtsR.js";import"./useId-BPqpNW7Z.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-iDrHuTib.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-qCe8BnHb.js";import"./useListNavigation-BYirsCuz.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BruiT-PK.js";import"./ArrowDownIcon-dRONoSmE.js";import"./InputGroup-InJJwOtb.js";import"./Label-BPYhvNBQ.js";import"./SupportLabel-BLPEgtC6.js";import"./WarningIcon-BrzUJtA3.js";import"./SlotComponent-CWOmVuxk.js";import"./mergeRefs-CEtgXnFX.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
