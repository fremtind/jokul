import{j as e}from"./iframe-CIZpS4cP.js";import{P as o}from"./PopupTip-Cr48tJJ2.js";import{S as a}from"./Select-BbxUhI0t.js";/* empty css               */import{F as s}from"./Flex-BS3wtLTe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CX7e1RTk.js";import"./Icon-DJ3rpN4W.js";import"./TooltipTrigger-BkJOTj7K.js";import"./floating-ui.react-DRrDhCG6.js";import"./index-ColzIabF.js";import"./index-DiQD4GlM.js";import"./TooltipContent-90rLgkIV.js";import"./useBrowserPreferences-CxqBYsjM.js";import"./useId-8lUw8Qnc.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-SCII3wvL.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-m-Rn9kK9.js";import"./useListNavigation-Df4h1_Qi.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-vnHK-gpn.js";import"./ArrowDownIcon-BvqMq9oI.js";import"./InputGroup-BQfAxwd3.js";import"./Label-OUfaaAH6.js";import"./SupportLabel-CuTQ7M1n.js";import"./WarningIcon-BkVkZst-.js";import"./SlotComponent-CIzJ5WAb.js";import"./mergeRefs-CiqQlGMd.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
