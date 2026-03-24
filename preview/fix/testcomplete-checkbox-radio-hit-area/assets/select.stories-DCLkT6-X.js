import{j as e}from"./iframe-BSEGZWwn.js";import{P as o}from"./PopupTip-DRGBMZEU.js";import{S as a}from"./Select-DWW1dXYG.js";/* empty css               */import{F as s}from"./Flex-CwI5CTQH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DozRBMwC.js";import"./Icon-B3YUbkia.js";import"./TooltipTrigger-Cwur_Lbb.js";import"./floating-ui.react-CP1E1Al9.js";import"./index-BTQ5OP-v.js";import"./index-CcS-0AP5.js";import"./TooltipContent-C3k2RtSC.js";import"./useBrowserPreferences-BOW-5HUc.js";import"./useId-DLpo5Fqe.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-G2RrvAIj.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DAOgU-Mh.js";import"./useListNavigation-snfyraut.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BJHL3t35.js";import"./ArrowDownIcon-jLMhnady.js";import"./InputGroup-BNX6CupC.js";import"./Label-dE9CKF_m.js";import"./SupportLabel-JCAvv4ua.js";import"./WarningIcon-CGf36qt2.js";import"./SlotComponent-ClM51Aer.js";import"./mergeRefs-BhQ3tIYj.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
