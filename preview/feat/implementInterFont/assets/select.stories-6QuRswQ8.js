import{j as e}from"./iframe-B8jzZGvD.js";import{P as o}from"./PopupTip-BFU7fZu8.js";import{S as a}from"./Select-CGoOTVs8.js";/* empty css               */import{F as s}from"./Flex-BY7mjYh6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-C12WZ29J.js";import"./Icon-DVH6OPk4.js";import"./TooltipTrigger-BrOVPlhR.js";import"./floating-ui.react-C3FydYhW.js";import"./index-vfdwUFoi.js";import"./index-CKhap0Zn.js";import"./TooltipContent-Qpay3kKn.js";import"./useBrowserPreferences-DBAOPk1v.js";import"./useId-b414Y-ub.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-C1uK9HzL.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-BJ7f4Fd9.js";import"./useListNavigation-DhkMUK6V.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CJEFFps8.js";import"./ArrowDownIcon-APw-mijh.js";import"./InputGroup-DIvdgzJH.js";import"./Label-DTmfjqpj.js";import"./SupportLabel-YBOGGuwU.js";import"./WarningIcon-2vmdI1pl.js";import"./SlotComponent-DPuCLaTD.js";import"./mergeRefs-CM6Lr9Er.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
