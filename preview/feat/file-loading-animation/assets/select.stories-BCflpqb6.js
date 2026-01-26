import{j as e}from"./iframe-CPFMEoFO.js";import{P as o}from"./PopupTip-C3dMoz84.js";import{S as a}from"./Select-m1Chca8o.js";/* empty css               */import{F as s}from"./Flex-BOX6yhqg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BfQqlfY7.js";import"./Icon-B5G_E87h.js";import"./TooltipTrigger-lRSEaR1z.js";import"./floating-ui.react-biJIQjyE.js";import"./index-C2nNCr9N.js";import"./index-BY28kHzX.js";import"./TooltipContent-BLFNP602.js";import"./useBrowserPreferences-DjJRmIpX.js";import"./useId-BZMfV5z7.js";import"./getThemeAndDensity-v_O0Epee.js";import"./useAnimatedHeight-B4tmUv_g.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-BnxA91dm.js";import"./useListNavigation-BfA3Vtp3.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CAi8tuZ-.js";import"./ArrowDownIcon-B_wGqgqr.js";import"./InputGroup-BnfKcSny.js";import"./Label-JT7rNpii.js";import"./SupportLabel-gYHvt_NB.js";import"./WarningIcon-CTOFyPAT.js";import"./SlotComponent-CBjQKqx9.js";import"./mergeRefs-CJwdQtxD.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
