import{j as e}from"./iframe-Bau6j4eW.js";import{P as o}from"./PopupTip-1zVHp24u.js";import{S as a}from"./Select-wQxpSopg.js";/* empty css               */import{F as s}from"./Flex-C1oE_tcg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BZwlRhRC.js";import"./Icon-CWr0DbgP.js";import"./TooltipTrigger-BPCyvicy.js";import"./floating-ui.react-CyKhjhli.js";import"./index-Dozr8pYQ.js";import"./index-D1BhbyLv.js";import"./TooltipContent-BSsMHuK5.js";import"./useBrowserPreferences-4fFNfw2n.js";import"./useId-fDpBkTUS.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-bRSHDJ6e.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-CMQJ0j2q.js";import"./useListNavigation-DYErWiy5.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DmQ-NU7-.js";import"./ArrowDownIcon-D4MLeuwm.js";import"./InputGroup-Dq2E0lW3.js";import"./Label-BkZhOhJw.js";import"./SupportLabel-veGquTHA.js";import"./WarningIcon-euWtqjiQ.js";import"./SlotComponent-B9FT7ztA.js";import"./mergeRefs-C8gga25G.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
