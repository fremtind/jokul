import{j as e}from"./iframe-DCm4veI5.js";import{P as o}from"./PopupTip-DtFCzIbZ.js";import{S as a}from"./Select-Cgu9ztx9.js";/* empty css               */import{F as s}from"./Flex-DiL1s_8H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-0TQkTDQw.js";import"./Icon-DZgNDoX_.js";import"./TooltipTrigger-X_ZwoteF.js";import"./floating-ui.react-D6vRL5sf.js";import"./index-Dgccr5Nq.js";import"./index-CQjZXtmZ.js";import"./TooltipContent-DnU1xftc.js";import"./useBrowserPreferences-Bhbwa69b.js";import"./useId-TxY30_1H.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-DLXU8VKO.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-CMygGurw.js";import"./useListNavigation-CRFxtjC2.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-D_xoYsGC.js";import"./ArrowDownIcon-CrXFrFTh.js";import"./InputGroup-CHmNaorD.js";import"./Label-X7mjxUYB.js";import"./SupportLabel-DGsFRTtb.js";import"./WarningIcon-DGz1-lxb.js";import"./SlotComponent-Cfcw-XIZ.js";import"./mergeRefs-BTeTT1Tg.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
