import{j as e}from"./iframe-ChfTc0u3.js";import{P as o}from"./PopupTip-K7tLcl8I.js";import{S as a}from"./Select-DLBtZaer.js";/* empty css               */import{F as s}from"./Flex-Cb7-si1L.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CUaepdiJ.js";import"./Icon-39SxBotn.js";import"./TooltipTrigger-Ccn6XZha.js";import"./floating-ui.react-Cm7kuqnT.js";import"./index-B6yyKaoq.js";import"./index-DfhOdsk2.js";import"./TooltipContent-CwsVeYeL.js";import"./useBrowserPreferences-BiPrSF5r.js";import"./useId-BNqIIP5Z.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-BMk1cXay.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-Dc5M6EvC.js";import"./useListNavigation-qzbRrTJf.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BjyCO1P-.js";import"./ArrowDownIcon-D-upRsZn.js";import"./InputGroup-DAnSmk5h.js";import"./Label-Cffwm11n.js";import"./SupportLabel-CuPkbQKk.js";import"./WarningIcon-B8rc8oPl.js";import"./SlotComponent-BQbkV7yv.js";import"./mergeRefs-Bx9gi2UC.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
