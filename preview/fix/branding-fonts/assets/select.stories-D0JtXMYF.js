import{j as e}from"./iframe-CYo2bzf2.js";import{P as o}from"./PopupTip-BDX6wCYn.js";import{S as a}from"./Select-Ci3eqQKD.js";/* empty css               */import{F as s}from"./Flex-BzbINDlJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CvgN6aCR.js";import"./Icon-BcLOdyqu.js";import"./TooltipTrigger-DcNgs0Hs.js";import"./floating-ui.react-KmZvPuUS.js";import"./index-1p43ioXu.js";import"./index-Dy2P2Ku1.js";import"./TooltipContent-CuUPDjux.js";import"./useBrowserPreferences-DlULIy4W.js";import"./useId-lzBfx5oD.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-COIqNgkf.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-39hZAUWU.js";import"./useListNavigation-Xw5WVkqC.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-PsbNQrxj.js";import"./ArrowDownIcon-g0xFs88u.js";import"./InputGroup-D36bq6AH.js";import"./Label-C9QhsEar.js";import"./SupportLabel-BpH0qqus.js";import"./WarningIcon-Ch5ifE-q.js";import"./SlotComponent-e8SEurVO.js";import"./mergeRefs-B-wAz8qi.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
