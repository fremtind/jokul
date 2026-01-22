import{j as e}from"./iframe-Bm92r4tw.js";import{P as o}from"./PopupTip-DknnGECS.js";import{S as a}from"./Select-BguXAoB1.js";/* empty css               */import{F as s}from"./Flex-DBSbvG7H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Da32Qdvp.js";import"./Icon-Deu_cC2I.js";import"./TooltipTrigger-BlUdEWc8.js";import"./floating-ui.react-3OloBvGu.js";import"./index-DSQtnS0t.js";import"./index-O3r671Hc.js";import"./TooltipContent-D7-3hXD8.js";import"./useBrowserPreferences-D85RW2hZ.js";import"./useId--Ijawa63.js";import"./getThemeAndDensity-v_O0Epee.js";import"./useAnimatedHeight-Q7VRWmqJ.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-B2Qf4a3i.js";import"./useListNavigation-awyPKujk.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-w5akCwTD.js";import"./ArrowDownIcon-E8roycN0.js";import"./InputGroup-iwLEWCam.js";import"./Label-XWqpo5U2.js";import"./SupportLabel-BnrEHXtE.js";import"./WarningIcon-B66g_dJ7.js";import"./SlotComponent-CqGwcIYd.js";import"./mergeRefs-Bj0VuooF.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
