import{j as e}from"./iframe-DFdfCKgQ.js";import{P as o}from"./PopupTip-0u7cDrGE.js";import{S as a}from"./Select-BtBuf-g4.js";/* empty css               */import{F as s}from"./Flex-DfoUAwMx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CfkMX0hm.js";import"./Icon-ZAnuCnvp.js";import"./TooltipTrigger-BBE4wK6x.js";import"./floating-ui.react-CId0eklE.js";import"./index-Bi6mTBxj.js";import"./index-D1iGkSvm.js";import"./TooltipContent-6Ly0zVr_.js";import"./useBrowserPreferences-HM_OfNIm.js";import"./useId-ClPEvraS.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-DI9M3PIc.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DKvEK-DF.js";import"./useListNavigation-D7HgBaER.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DyKdoYsb.js";import"./ArrowDownIcon-Bo8x7ev1.js";import"./InputGroup-D8akTlnX.js";import"./Label--LjIOeI-.js";import"./SupportLabel-MPDXq9V2.js";import"./WarningIcon-B-1QzS-x.js";import"./SlotComponent-C6uIt0lx.js";import"./mergeRefs-q6oUbiox.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
