import{j as e}from"./iframe-ieofgYFi.js";import{P as o}from"./PopupTip-CRnJuqKq.js";import{S as a}from"./Select-bwz5n0WA.js";/* empty css               */import{F as s}from"./Flex-De0HPn7F.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DfWeQyLt.js";import"./Icon-BWQwdfZi.js";import"./TooltipTrigger-Cu92zxM4.js";import"./floating-ui.react-DftSBG5T.js";import"./index-BZiI59vl.js";import"./index-BndV0XVS.js";import"./TooltipContent-Ce4D7m9P.js";import"./useBrowserPreferences-pCeWp-fG.js";import"./useId-C36W5-t_.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-B0dJqQBW.js";import"./tokens-CMcKomMy.js";import"./usePreviousValue-CW1a_MHH.js";import"./useListNavigation-Bpa7RCHV.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DjVDvHHR.js";import"./ArrowDownIcon-DX5B435G.js";import"./InputGroup-gwbrTgZw.js";import"./Label-CxWb8KZU.js";import"./SupportLabel-B85GSPHH.js";import"./WarningIcon-DCYt2wio.js";import"./SlotComponent-BmU8Ry5J.js";import"./mergeRefs-DSxygX1Z.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
