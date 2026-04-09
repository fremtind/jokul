import{j as e}from"./iframe-CIWrPPej.js";import{P as o}from"./PopupTip-DPt6w7xi.js";import{S as a}from"./Select-BywyM0Zn.js";/* empty css               */import{F as s}from"./Flex-BqowO9R5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-B8kN9482.js";import"./Icon-3ZICRJM0.js";import"./TooltipTrigger-R3vqqvV7.js";import"./floating-ui.react-CtCOU-X9.js";import"./index-vn5BXvY5.js";import"./index-CLzHd5uc.js";import"./TooltipContent-V2eCah0b.js";import"./useBrowserPreferences-C-sxKr9K.js";import"./useId-B4yIElMN.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-BDr_q3U_.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-Bo3heLKp.js";import"./useListNavigation-DfO0owAe.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DixDKISr.js";import"./ArrowDownIcon-DszJ54u6.js";import"./InputGroup-BkdM3el7.js";import"./Label-Ctr9zR1G.js";import"./SupportLabel-B8Z1rDEA.js";import"./WarningIcon-D1w8Us-g.js";import"./SlotComponent-BRlVEEIH.js";import"./mergeRefs-D0frwoqB.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
