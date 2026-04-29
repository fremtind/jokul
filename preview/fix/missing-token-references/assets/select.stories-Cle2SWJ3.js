import{j as e}from"./iframe-C3ET5Jo1.js";import{P as o}from"./PopupTip-Ci7g3ZXK.js";import{S as a}from"./Select-BTppKLJm.js";/* empty css               */import{F as s}from"./Flex-DvHcc4VU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Bfcd8ukB.js";import"./Icon-C1mtlF7d.js";import"./TooltipTrigger-Cy1T-0Jj.js";import"./floating-ui.react-CpAR80Py.js";import"./index-CPI5WXdS.js";import"./index-xTbeVXMV.js";import"./TooltipContent-B4liU7_D.js";import"./useBrowserPreferences-DetKsZYL.js";import"./useId-B_mm_1C3.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-C8_LgWlt.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-CbnB0nGY.js";import"./useListNavigation-Cvvcx6xz.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BFMVteOM.js";import"./ArrowDownIcon-DEzy4Pkt.js";import"./InputGroup-BlXolm7o.js";import"./Label-DHLCIdmM.js";import"./SupportLabel-fWXNlv7g.js";import"./WarningIcon-P3wCpI7C.js";import"./SlotComponent-CbAbm3qh.js";import"./mergeRefs-CGTRQUop.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
