import{j as e}from"./iframe-CWa0bQ0p.js";import{P as o}from"./PopupTip-BYaf0Csi.js";import{S as a}from"./Select-2bFEm5G4.js";/* empty css               */import{F as s}from"./Flex-DoxyhBLA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Bv-bl2Cu.js";import"./Icon-CFa-eXeZ.js";import"./TooltipTrigger-B5ijZ0Du.js";import"./floating-ui.react-IQoSInyP.js";import"./index-Dfr_ty6g.js";import"./index-CX4_aJQa.js";import"./TooltipContent-D1DU--L0.js";import"./useBrowserPreferences-CY2ttoGn.js";import"./useId-CyWAPCzz.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-D2x3SsYa.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-PKKgwCeJ.js";import"./useListNavigation-CsxUjdFC.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-QhGhE8e1.js";import"./ArrowDownIcon-5wrgTNiL.js";import"./InputGroup-CyOpUfyP.js";import"./Label-CBwasMyN.js";import"./SupportLabel-CHgIgMfI.js";import"./WarningIcon-KA5PT-2w.js";import"./SlotComponent-CPk7OiEp.js";import"./mergeRefs-Bf5yX3mB.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
