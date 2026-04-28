import{j as e}from"./iframe-Be594wqm.js";import{P as o}from"./PopupTip-Dt-yMOqZ.js";import{S as a}from"./Select-DAaSlG7-.js";/* empty css               */import{F as s}from"./Flex-BI8OncTt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BlU8JZuy.js";import"./Icon-DguHHZ_U.js";import"./TooltipTrigger-DSRVsotO.js";import"./floating-ui.react-COgTN7Tb.js";import"./index-DYP4heTb.js";import"./index-XYAIeJ-w.js";import"./TooltipContent-CnbtmmDA.js";import"./useBrowserPreferences-C8rv62Qf.js";import"./useId-CYIch4DL.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-D79l6gYs.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-DKcSuQ9J.js";import"./useListNavigation-DAVvmjXq.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CKeo28Nb.js";import"./ArrowDownIcon-xWftIFtv.js";import"./InputGroup-BR5h5diH.js";import"./Label-BAHM2iOr.js";import"./SupportLabel-BNU1LEXU.js";import"./WarningIcon-Dc33qtzB.js";import"./SlotComponent-DyFIS93A.js";import"./mergeRefs-DNKkHOo4.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
