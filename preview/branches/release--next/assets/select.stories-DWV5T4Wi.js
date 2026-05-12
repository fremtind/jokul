import{j as e}from"./iframe-qPdjsDTY.js";import{P as o}from"./PopupTip-BbC2L7Do.js";import{S as a}from"./Select-Dta8I2PQ.js";/* empty css               */import{F as s}from"./Flex-BE50FWvP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BxDYKM5J.js";import"./Icon-eLxbogyx.js";import"./TooltipTrigger-BLy5H2eS.js";import"./floating-ui.react-DmrsRY5y.js";import"./index-DAklX7Vy.js";import"./index-D4oGNKok.js";import"./TooltipContent-CKp6bzA3.js";import"./useBrowserPreferences-DYXXounF.js";import"./useId-vaqI8ePy.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-BgJUGm_r.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-Day4ht3C.js";import"./useListNavigation-gyOaa2fs.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Dq50OJew.js";import"./ArrowDownIcon-K4mHjq1Y.js";import"./InputGroup-BWxIHWvM.js";import"./Label-BBhcNJWv.js";import"./SupportLabel-BDNocW8W.js";import"./WarningIcon-C8C4X52P.js";import"./SlotComponent-CqE-TzxA.js";import"./mergeRefs-DrFL83Aq.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
