import{j as e}from"./iframe-BCYt9nZ-.js";import{P as o}from"./PopupTip-C0Ku2NC_.js";import{S as a}from"./Select-Dq9oT73N.js";/* empty css               */import{F as s}from"./Flex-D_bQBf1e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-oetDXi6W.js";import"./Icon-DzTWcPhq.js";import"./TooltipTrigger-CozPdsGB.js";import"./floating-ui.react-B8_JHL_D.js";import"./index-8Ues6454.js";import"./index-DclQndK7.js";import"./TooltipContent-xuE_baGF.js";import"./useBrowserPreferences-ST2WAAQB.js";import"./useId-mdqVX9yK.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-VyXkeVSI.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-BzyWaNE6.js";import"./useListNavigation-BeNDaJka.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B769h0sL.js";import"./ArrowDownIcon-qMAWKk1T.js";import"./InputGroup-BqRdiRFf.js";import"./Label-nGPCti1p.js";import"./SupportLabel-Ljr2TW67.js";import"./WarningIcon-Cz8TSNid.js";import"./SlotComponent-Cbn7vDrS.js";import"./mergeRefs-DUv30Vb3.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
