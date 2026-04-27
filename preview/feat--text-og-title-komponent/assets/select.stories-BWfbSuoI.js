import{j as e}from"./iframe-BadzmaYM.js";import{P as o}from"./PopupTip-BalGINke.js";import{S as a}from"./Select-v7Iz0ZMO.js";/* empty css               */import{F as s}from"./Flex-CMq00PW3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BwF-hVYU.js";import"./Icon-CFsSEQdE.js";import"./TooltipTrigger-Che4O6JC.js";import"./floating-ui.react-BH_gkBJB.js";import"./index-L-CfEuLi.js";import"./index-BOxoUeJw.js";import"./TooltipContent-C_BEUiHn.js";import"./useBrowserPreferences-Lsw1ZlI3.js";import"./useId-DsdIxq41.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BQJ8GrS0.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DQXzHvFs.js";import"./useListNavigation-1xQY_ktO.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-l0MoAc19.js";import"./ArrowDownIcon-D-ocrSMg.js";import"./InputGroup-CpEs-IRU.js";import"./Label-BLsfbLVG.js";import"./SupportLabel-CAJEZLGJ.js";import"./WarningIcon-BgK2SO_V.js";import"./SlotComponent-D-H5Iu43.js";import"./mergeRefs-Bjr0iv1-.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
