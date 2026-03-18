import{j as e}from"./iframe-C4Vj-L3s.js";import{P as o}from"./PopupTip-BxC6FRNK.js";import{S as a}from"./Select-C2aqJNSv.js";/* empty css               */import{F as s}from"./Flex-BaSPuJSy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BULCeWUW.js";import"./Icon-7MjS5W0D.js";import"./TooltipTrigger-r9D86DeP.js";import"./floating-ui.react-c3cYipBr.js";import"./index-BQKBt94P.js";import"./index-DLQ9zfi3.js";import"./TooltipContent-DW85FZP4.js";import"./useBrowserPreferences-eWw1PIY4.js";import"./useId-BU2PyeRC.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Ck1SspQ2.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DqI2AG_T.js";import"./useListNavigation-rbDKM_9o.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Dz_jU5yc.js";import"./ArrowDownIcon-mK8j6z-n.js";import"./InputGroup--GSZUPyj.js";import"./Label-Bsr0uukM.js";import"./SupportLabel-CoqfkAzO.js";import"./WarningIcon-BVAXe9VJ.js";import"./SlotComponent-KAg_E6sQ.js";import"./mergeRefs-8RypZMry.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
