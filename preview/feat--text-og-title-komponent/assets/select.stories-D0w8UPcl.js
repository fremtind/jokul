import{j as e}from"./iframe-BFenp-hc.js";import{P as o}from"./PopupTip-B5u0cu8r.js";import{S as a}from"./Select-bWzk4rbl.js";/* empty css               */import{F as s}from"./Flex-CL-QSou9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DufKsA0S.js";import"./Icon-CGS143Wr.js";import"./TooltipTrigger-DJzzsSoa.js";import"./floating-ui.react-BPX0_u9b.js";import"./index-BeczGMlP.js";import"./index-CltNBlfi.js";import"./TooltipContent-DtvfYNsx.js";import"./useBrowserPreferences-08_uZtF7.js";import"./useId-BdJSV1WM.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BTnnFIPY.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-BQrNeOln.js";import"./useListNavigation-BJKzyyI-.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-v-5qu3qN.js";import"./ArrowDownIcon-CDNIvS6J.js";import"./InputGroup-DW-vnUj_.js";import"./Label-BbYmZYGT.js";import"./SupportLabel-D7lVbcoL.js";import"./WarningIcon-WbiLtCkr.js";import"./SlotComponent-N_Y7aQAl.js";import"./mergeRefs-BJRndm5D.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
