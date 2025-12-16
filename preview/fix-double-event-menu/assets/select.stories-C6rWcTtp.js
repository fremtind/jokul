import{j as e}from"./iframe-BkUFrIqG.js";import{P as o}from"./PopupTip-Dn8nkxNg.js";import{S as a}from"./Select-xUDAgyFx.js";/* empty css               */import{F as s}from"./Flex-DSQ_lNiu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-L0KbOyxH.js";import"./Icon-D3zN9Hfi.js";import"./TooltipTrigger-CfJ9Y3aj.js";import"./floating-ui.react-DKC6Zavx.js";import"./index-Bd2VnX9f.js";import"./index-Cus6DPbV.js";import"./useBrowserPreferences-CipU2E76.js";import"./useId-Cwv6dpQ-.js";import"./useAnimatedHeight-aieWVQWb.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-CA7Tdj9w.js";import"./useListNavigation-CypiBTbC.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BqgoLHto.js";import"./ArrowDownIcon-C-cgksFO.js";import"./InputGroup-soLjnrLJ.js";import"./Label-CyWGL7ty.js";import"./SupportLabel-DlxuN8wM.js";import"./WarningIcon-D8f111Sa.js";import"./SlotComponent--24fpIl6.js";import"./mergeRefs-iP8VcI2O.js";const G={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const J=["SelectStory","SelectInline","SelectMedTooltip"];export{t as SelectInline,n as SelectMedTooltip,r as SelectStory,J as __namedExportsOrder,G as default};
