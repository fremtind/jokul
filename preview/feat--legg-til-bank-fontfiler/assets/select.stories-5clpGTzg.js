import{j as e}from"./iframe-DIACKsDt.js";import{P as o}from"./PopupTip-Dl8ituJ-.js";import{S as a}from"./Select-BOhcryec.js";/* empty css               */import{F as s}from"./Flex-BISIhF-d.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-vAQRiI4P.js";import"./Icon-CuQYNHek.js";import"./TooltipTrigger-ZVeltDwX.js";import"./floating-ui.react-DkDdrA1A.js";import"./index-B-VUy1V1.js";import"./index-C8_BM4as.js";import"./TooltipContent-BvxzL7Dl.js";import"./useBrowserPreferences-By2J8gRI.js";import"./useId-ljHbtrZN.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-BCzaBDbg.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-BgORUFVK.js";import"./useListNavigation-D3dVJAxk.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CiAW9ToW.js";import"./ArrowDownIcon-TFlyqrAr.js";import"./InputGroup-D9zfcHiD.js";import"./Label-SZ3LrI5r.js";import"./SupportLabel-D4SyjSf_.js";import"./WarningIcon-DMay_XJg.js";import"./SlotComponent-B074hf0R.js";import"./mergeRefs-CSKudx36.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
