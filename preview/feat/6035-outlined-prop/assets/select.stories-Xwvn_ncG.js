import{j as e}from"./iframe-Dv0oUWxh.js";import{P as o}from"./PopupTip-CB-w1QNe.js";import{S as a}from"./Select-Ceo_3SAE.js";/* empty css               */import{F as s}from"./Flex-LzO5EajD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-C7ptLIlU.js";import"./Icon-BB1B6o0Q.js";import"./TooltipTrigger-DvXEZxFn.js";import"./floating-ui.react-B2PwgCAn.js";import"./index-eMiOtLMh.js";import"./index-DeTP8bzi.js";import"./TooltipContent-CfQ1-ne6.js";import"./useBrowserPreferences-C8h6DIhs.js";import"./useId-BSqsCyL9.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-HPjWoMKk.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-C6g7xdAp.js";import"./useListNavigation-C53ZQr1h.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CCielCaP.js";import"./ArrowDownIcon-BlFmO0hA.js";import"./InputGroup-kuukJB3p.js";import"./Label-BTInXbzL.js";import"./SupportLabel-Bydhx4wU.js";import"./WarningIcon-BjxJH4Xd.js";import"./SlotComponent-CK16wJVr.js";import"./mergeRefs-BG-0mM4M.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
