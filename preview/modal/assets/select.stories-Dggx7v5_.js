import{j as e}from"./iframe-B8Ibuqah.js";import{P as o}from"./PopupTip-DSB9gvdF.js";import{S as a}from"./Select-DwU2Kv1N.js";/* empty css               */import{F as s}from"./Flex-BisVA3Ml.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-B6BjYcoq.js";import"./Icon-DOzIJkeo.js";import"./TooltipTrigger-Dqwucftm.js";import"./floating-ui.react-BQ0zyPcx.js";import"./index-Dmdoh5mZ.js";import"./index-O6P1g7As.js";import"./TooltipContent-CocN9sA_.js";import"./useBrowserPreferences-epwtS7yZ.js";import"./useId-DAzml2aH.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-P2Wz_CvK.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DmzFHbGP.js";import"./useListNavigation-D0z-OFW5.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DbKfpfDM.js";import"./ArrowDownIcon-B4ETzOZR.js";import"./InputGroup-DaGFcTCU.js";import"./Label-D2hooZFQ.js";import"./SupportLabel-DTGlYte3.js";import"./WarningIcon-DMVpdZit.js";import"./SlotComponent-DJsJEIIF.js";import"./mergeRefs-C6GDOH5t.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
