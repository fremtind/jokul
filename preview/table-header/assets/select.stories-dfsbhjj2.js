import{j as e}from"./iframe-DY6F1u9l.js";import{P as o}from"./PopupTip-DQ5IWDNd.js";import{S as a}from"./Select-B0vL7hOG.js";/* empty css               */import{F as s}from"./Flex-DpSKXKe1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DJlRaGLa.js";import"./Icon-Dq6U2rBX.js";import"./TooltipTrigger-qT79_5r9.js";import"./floating-ui.react-V_MiiovA.js";import"./index-BD8tH2Xe.js";import"./index-DAKtD4GZ.js";import"./useBrowserPreferences-UcTnhyEa.js";import"./useId-BpOmZkHM.js";import"./useAnimatedHeight-DA1Xg9P1.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-DZRa6cPE.js";import"./useListNavigation-BbU7lBfU.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DPPPaMRV.js";import"./ArrowDownIcon-BdaE38aZ.js";import"./InputGroup-L0xdEAq4.js";import"./Label-CH93HefZ.js";import"./SupportLabel-CL5Qmh5u.js";import"./WarningIcon-BUuez_6B.js";import"./SlotComponent-CaVPSH99.js";import"./mergeRefs-q3HoUTfA.js";const G={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const J=["SelectStory","SelectInline","SelectMedTooltip"];export{t as SelectInline,n as SelectMedTooltip,r as SelectStory,J as __namedExportsOrder,G as default};
