import{j as e}from"./iframe-S8j4lm7c.js";import{P as o}from"./PopupTip-BMqiNzD0.js";import{S as a}from"./Select-D0y0culd.js";/* empty css               */import{F as s}from"./Flex-C4GAS__W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-QxSKy6lo.js";import"./Icon-Dw7hQHVp.js";import"./TooltipTrigger-lQ3jDJ0Y.js";import"./floating-ui.react-hHrzkRfM.js";import"./index-ByM2OFkv.js";import"./index-Cxpe_3c4.js";import"./TooltipContent-J126-TTW.js";import"./useBrowserPreferences-DaNbgg_J.js";import"./useId-CO0xw5ws.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-qizWCDva.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-DDLVSSsJ.js";import"./useListNavigation-D2Djsb1p.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CsMfnnui.js";import"./ArrowDownIcon-CYyD0gyj.js";import"./InputGroup-BIG0PHph.js";import"./Label-RVbF0N9t.js";import"./SupportLabel-fFt8owYd.js";import"./WarningIcon-DbSOY1UB.js";import"./SlotComponent-xp8RSOxJ.js";import"./mergeRefs-B2FVfTXs.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
