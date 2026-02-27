import{j as e}from"./iframe-DcdLGGMr.js";import{P as o}from"./PopupTip-Dz4kFa0P.js";import{S as a}from"./Select-bzyvYlk5.js";/* empty css               */import{F as s}from"./Flex-Ob01txZt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DXKl-Ft_.js";import"./Icon-C2TKnfUB.js";import"./TooltipTrigger-gnyysIUq.js";import"./floating-ui.react-DZtFTyzJ.js";import"./index-Et16un7x.js";import"./index-D8buYTFU.js";import"./TooltipContent-Cb3OKgjy.js";import"./useBrowserPreferences-CtVcScFA.js";import"./useId-BR-4MYcj.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Bym28JRj.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-lZMKw1Ox.js";import"./useListNavigation-B1JZ4b3A.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DnpNf-Ml.js";import"./ArrowDownIcon--4uQzUZA.js";import"./InputGroup-BBVYoK08.js";import"./Label-DX_uUGpd.js";import"./SupportLabel-CJODMYp4.js";import"./WarningIcon-BmZsrhOI.js";import"./SlotComponent-DmY3yW_r.js";import"./mergeRefs-D-lXmpmm.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
