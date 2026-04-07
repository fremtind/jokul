import{j as e}from"./iframe-B93scUG8.js";import{P as o}from"./PopupTip-fnmFMU41.js";import{S as a}from"./Select-SNMaqHak.js";/* empty css               */import{F as s}from"./Flex-7Yom15uD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-B48ShEI3.js";import"./Icon-B9uNnDz3.js";import"./TooltipTrigger-DHMttvVr.js";import"./floating-ui.react-CUwtMuN7.js";import"./index-gNO9c1WC.js";import"./index-CnBGbHry.js";import"./TooltipContent-CzHKpkwp.js";import"./useBrowserPreferences-D-0Mb_BU.js";import"./useId-BRDNXIiN.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-D7rqpfDT.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-Ci7ndcF3.js";import"./useListNavigation-BU18LBrB.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Cz_M4Pwp.js";import"./ArrowDownIcon-BK5RbDJR.js";import"./InputGroup-D5_x_y0s.js";import"./Label-DVL7n51w.js";import"./SupportLabel-CzauhOgV.js";import"./WarningIcon-DzUSw9yX.js";import"./SlotComponent-f3JFelAH.js";import"./mergeRefs-fPI_nR6E.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
