import{j as e}from"./iframe-BPrugpj5.js";import{P as o}from"./PopupTip-CHHSQU-k.js";import{S as a}from"./Select-Cyv2dz7o.js";/* empty css               */import{F as s}from"./Flex-DnSlC01D.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-7VIn0Ama.js";import"./Icon-K8V9N-MZ.js";import"./TooltipTrigger-J7M4xeuo.js";import"./floating-ui.react-BUr44Ytr.js";import"./index-pJGS8TN-.js";import"./index-n3O-CqgI.js";import"./TooltipContent-4MY0GjZ_.js";import"./useBrowserPreferences-Clqx8Fdi.js";import"./useId-qG_-aakc.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-DSWWZoYH.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-BkH45zDY.js";import"./useListNavigation-CHUqGlM6.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CIV3aIwG.js";import"./ArrowDownIcon-CsH5a9Ns.js";import"./InputGroup-CZObVA_m.js";import"./Label-DBK2xjTu.js";import"./SupportLabel-DKc-UMba.js";import"./WarningIcon-C-n42exV.js";import"./SlotComponent-BOs2Owww.js";import"./mergeRefs-CvhBHkzL.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
