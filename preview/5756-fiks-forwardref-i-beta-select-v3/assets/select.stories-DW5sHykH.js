import{j as e}from"./iframe-CO-6u7ty.js";import{P as o}from"./PopupTip-COOPBtnh.js";import{S as a}from"./Select-DEKNOJKi.js";/* empty css               */import{F as s}from"./Flex-Ccr10uO2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-iNEuOJ-K.js";import"./Icon-CiI2KeTo.js";import"./TooltipTrigger-DF9cy7f-.js";import"./floating-ui.react-HFDS3DpP.js";import"./index-ngcJevbh.js";import"./index-D3DY9Qe4.js";import"./TooltipContent-Dri1cBvO.js";import"./useBrowserPreferences-COXRbmIR.js";import"./useId-DIVYmsrS.js";import"./getThemeAndDensity-v_O0Epee.js";import"./useAnimatedHeight-gpZl5Vil.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-BSTfMP7p.js";import"./useListNavigation-DK1R0o8i.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B2BKB3Ob.js";import"./ArrowDownIcon-ByrcK5a9.js";import"./InputGroup-p6_xCABz.js";import"./Label-CKBpQodC.js";import"./SupportLabel-Cna44SEe.js";import"./WarningIcon-BvXE7Nnw.js";import"./SlotComponent-BZGHAbbD.js";import"./mergeRefs-B7jCi3CL.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
