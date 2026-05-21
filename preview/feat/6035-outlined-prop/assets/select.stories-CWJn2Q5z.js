import{j as e}from"./iframe-BcWBBkWW.js";import{P as o}from"./PopupTip-C7PMv_Y6.js";import{S as a}from"./Select-B5p4-l3t.js";/* empty css               */import{F as s}from"./Flex-CI1hu971.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BK5nfivK.js";import"./Icon-C_cgTqSN.js";import"./TooltipTrigger-0Ph_bqXL.js";import"./floating-ui.react-DYaEKTfa.js";import"./index-CE3oWM0u.js";import"./index-BsVY88_h.js";import"./TooltipContent-DrHrZLhe.js";import"./useBrowserPreferences-ZtkGsu5C.js";import"./useId-CXwkjj0-.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-DGN_VK7d.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-CKyCnSRA.js";import"./useListNavigation-BREOfe8N.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Duh2zBsr.js";import"./ArrowDownIcon-Dqzp8Q2E.js";import"./InputGroup-Bh_8aN_c.js";import"./Label-BHCb5mCF.js";import"./SupportLabel-CBu4Y3Q4.js";import"./WarningIcon-BMj_Z0qE.js";import"./SlotComponent-BgXl1T9v.js";import"./mergeRefs-BFk5GKrB.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
