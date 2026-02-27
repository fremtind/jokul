import{j as e}from"./iframe-AUQY5g5s.js";import{P as o}from"./PopupTip-Dcp3E3-P.js";import{S as a}from"./Select-BzUUKKj_.js";/* empty css               */import{F as s}from"./Flex-mRmLwrcj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-788qLXhk.js";import"./Icon-B1xm-cyd.js";import"./TooltipTrigger-Bchb3QtH.js";import"./floating-ui.react-j__mMMB_.js";import"./index-NfCVMSiB.js";import"./index-DXKPINax.js";import"./TooltipContent-hnuf9tx0.js";import"./useBrowserPreferences-DA50Eey_.js";import"./useId-BB6yxEih.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-D7tORsYe.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-Cven6AS8.js";import"./useListNavigation-DnVPGKy-.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BfbnyYRO.js";import"./ArrowDownIcon-Ct-eI4vU.js";import"./InputGroup-BvjLN_7a.js";import"./Label-Dn-i0mza.js";import"./SupportLabel-DCAxcSxr.js";import"./WarningIcon-Dujrq7gf.js";import"./SlotComponent-DB7ymgM6.js";import"./mergeRefs-BOQGYxY4.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
