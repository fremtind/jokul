import{j as e}from"./iframe-BUE9IwKG.js";import{P as o}from"./PopupTip-01rFVmy5.js";import{S as a}from"./Select-DSL23_lc.js";/* empty css               */import{F as s}from"./Flex-i-lvbP6d.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-C-6_NsFk.js";import"./Icon-0aVVjjDH.js";import"./TooltipTrigger-c4LWIa9b.js";import"./floating-ui.react-BBTR2VT7.js";import"./index-CGg3s-of.js";import"./index-DDQFj0LV.js";import"./TooltipContent-DtYoAv9o.js";import"./useBrowserPreferences-DSGh_UqM.js";import"./useId-BPnoftdu.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Bqj6ku22.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-CIfJCWqC.js";import"./useListNavigation-B6C_40FC.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BvG_Q4_s.js";import"./ArrowDownIcon-C862TDRl.js";import"./InputGroup-CKNhyX6Q.js";import"./Label-DbLwGxcd.js";import"./SupportLabel-BmLsciQP.js";import"./WarningIcon-EkukdY6h.js";import"./SlotComponent-BkDwOIO2.js";import"./mergeRefs-Co3_sQMm.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
