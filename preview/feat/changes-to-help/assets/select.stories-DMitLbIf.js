import{j as e}from"./iframe-GXXZ68Zg.js";import{P as o}from"./PopupTip-Bcu32ysp.js";import{S as a}from"./Select-CAdD_1A_.js";/* empty css               */import{F as s}from"./Flex-CHeWhyPs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-xUHW5urk.js";import"./Icon-D72tbed5.js";import"./TooltipTrigger-B2bNJTpY.js";import"./floating-ui.react-CZTwPm1e.js";import"./index-BYuq2CsG.js";import"./index-DX-BNvuu.js";import"./TooltipContent-_1yGbhZJ.js";import"./useBrowserPreferences-HYXVPZIv.js";import"./useId-BlYjqR5I.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Rpl2Bixy.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-Ctmy_MnQ.js";import"./useListNavigation-BL3kBqWn.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BLXl3ZW4.js";import"./ArrowDownIcon-_ujCHgeT.js";import"./InputGroup-Des5Hmv4.js";import"./Label-Ckn67wrJ.js";import"./SupportLabel-C9JeSVjS.js";import"./WarningIcon-C2rSq6ip.js";import"./SlotComponent-Ca0SlmFG.js";import"./mergeRefs-C9oCcbeh.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
