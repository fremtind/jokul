import{j as e}from"./iframe-G8YrbEwB.js";import{P as o}from"./PopupTip-B4IQyHpF.js";import{S as a}from"./Select-CcTsiJzo.js";/* empty css               */import{F as s}from"./Flex-D-HTOBpw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-dt2fSfOY.js";import"./Icon-2iH_OLKZ.js";import"./TooltipTrigger-C8hKf9Z9.js";import"./floating-ui.react-CqUgomsL.js";import"./index-CZTl18Ry.js";import"./index-CfxzNXbD.js";import"./TooltipContent-DHIkDwM-.js";import"./useBrowserPreferences-DSWTp1Vs.js";import"./useId-BSL40wEG.js";import"./getThemeAndDensity-v_O0Epee.js";import"./useAnimatedHeight-C1Fk8Sxb.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-Ba6PvODt.js";import"./useListNavigation-Cd2Mg9sb.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-QyOpW-0Q.js";import"./ArrowDownIcon-DEW8nKsK.js";import"./InputGroup-CfLrE9cv.js";import"./Label-C2_8wrFD.js";import"./SupportLabel-Dx6Sh9Ry.js";import"./WarningIcon-DP9EOC7C.js";import"./SlotComponent-CvYv5Kkj.js";import"./mergeRefs-e1MV8EOw.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
