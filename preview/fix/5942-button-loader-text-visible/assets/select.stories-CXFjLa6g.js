import{j as e}from"./iframe-CejrVAJw.js";import{P as o}from"./PopupTip-CmElYtg7.js";import{S as a}from"./Select-DD1P2R6h.js";/* empty css               */import{F as s}from"./Flex-Cf3Acu3E.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Bc0wu6ii.js";import"./Icon-O3h2cgaZ.js";import"./TooltipTrigger-xo01pC3N.js";import"./floating-ui.react-CTLckwzv.js";import"./index-CQ3wssyE.js";import"./index-jY55cB8t.js";import"./TooltipContent-5T8ebYiQ.js";import"./useBrowserPreferences-BBzRBP0Y.js";import"./useId-DNdVLaoL.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-CoVnLsmC.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-Cnb2nHru.js";import"./useListNavigation-VmvLXYWL.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-cep891rU.js";import"./ArrowDownIcon-14MSdoVT.js";import"./InputGroup-BjRO_xlj.js";import"./Label-VEVuzTge.js";import"./SupportLabel-DOupljZY.js";import"./WarningIcon-DqYGKV_R.js";import"./SlotComponent-CqbZTU0N.js";import"./mergeRefs-Brex0acD.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
