import{j as e}from"./iframe-D3bh5Q2R.js";import{P as o}from"./PopupTip-DBUdVycc.js";import{S as a}from"./Select-BaP8_CG6.js";/* empty css               */import{F as s}from"./Flex-kfDGSXyB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BKfPfgk9.js";import"./Icon-BVvztwyt.js";import"./TooltipTrigger-BgZj8qAp.js";import"./floating-ui.react-BYHp8QTi.js";import"./index-D2NtLIm4.js";import"./index-DvC73g1o.js";import"./TooltipContent-D0qIg8oV.js";import"./useBrowserPreferences-HvOHa4TQ.js";import"./useId-CRVHwlXb.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-O5Xwukx7.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-Bm6ggmhd.js";import"./useListNavigation-Bbg6fQFG.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DTRxmTaq.js";import"./ArrowDownIcon-BTbEeWdJ.js";import"./InputGroup-BA3mYkRZ.js";import"./Label-BtLOR10y.js";import"./SupportLabel-HCOcpzEi.js";import"./WarningIcon-DekumlLp.js";import"./SlotComponent-B4gPukhn.js";import"./mergeRefs-Cs5vaa1W.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
