import{j as e}from"./iframe-Bs6w1lhj.js";import{P as o}from"./PopupTip-rFY2m1zF.js";import{S as a}from"./Select-DaFQ9nFq.js";/* empty css               */import{F as s}from"./Flex-DvGzE_1K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BCVczUCF.js";import"./Icon-CVhsl-RP.js";import"./TooltipTrigger-D7TaZ6EK.js";import"./floating-ui.react-BW4heRO1.js";import"./index-Dfxlk_tv.js";import"./index-CgMe32ya.js";import"./TooltipContent-DmVC97wl.js";import"./useBrowserPreferences-D_xMUYTv.js";import"./useId-6PEzRPFE.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-CA_mRlhX.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-CVOQgawD.js";import"./useListNavigation-PJkPQcNL.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BXkGBM5W.js";import"./ArrowDownIcon-CNejgb9r.js";import"./InputGroup-DJWKMlY2.js";import"./Label-7Y4vIPZu.js";import"./SupportLabel-Dk4VKl7V.js";import"./WarningIcon-Cd87iNbi.js";import"./SlotComponent-QTTJSlVi.js";import"./mergeRefs-BctXNnfT.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
