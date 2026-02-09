import{j as e}from"./iframe-kKdVED43.js";import{P as o}from"./PopupTip-D3CYCa3D.js";import{S as a}from"./Select-BcXlfLC_.js";/* empty css               */import{F as s}from"./Flex-gYbLlZhy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-C0cKG_bl.js";import"./Icon-fmOI86Nh.js";import"./TooltipTrigger-CRgP-6RB.js";import"./floating-ui.react-BWpjm3_3.js";import"./index-G4xBI6pL.js";import"./index-BQDYqDky.js";import"./TooltipContent-7GeG_xTT.js";import"./useBrowserPreferences-CsiogRkX.js";import"./useId-CQMp5ms0.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-8KL7gQB9.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-ClolmiG-.js";import"./useListNavigation-FRGVgkGE.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-D333NG-r.js";import"./ArrowDownIcon-BGByelnx.js";import"./InputGroup-CUP-E1UU.js";import"./Label-C2B5jYYn.js";import"./SupportLabel-DzhOTjHy.js";import"./WarningIcon-Dd4Lk6Uv.js";import"./SlotComponent-IKV_i5Su.js";import"./mergeRefs-BScA5o35.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
