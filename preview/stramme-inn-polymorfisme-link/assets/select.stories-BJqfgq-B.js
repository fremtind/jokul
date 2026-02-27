import{j as e}from"./iframe-Daokkzje.js";import{P as o}from"./PopupTip-NwRZv-L9.js";import{S as a}from"./Select-Did6N2ia.js";/* empty css               */import{F as s}from"./Flex-DPIMBwom.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-zKGvb-kU.js";import"./Icon-CuKH_F47.js";import"./TooltipTrigger-DnTS39FQ.js";import"./floating-ui.react-J_nY-VOi.js";import"./index-DXst-XSO.js";import"./index-BaUN-QWd.js";import"./TooltipContent-BNk-N3O0.js";import"./useBrowserPreferences-BBaJx6RP.js";import"./useId-CcTo1XKY.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-DueG086J.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-Bbz4fn69.js";import"./useListNavigation-CyNgWN2l.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-N7e8Z_Ft.js";import"./ArrowDownIcon-BBXCIG59.js";import"./InputGroup-DD8pS0wZ.js";import"./Label-BbH5AdtB.js";import"./SupportLabel-C6IUWGPT.js";import"./WarningIcon-B1SecvYt.js";import"./SlotComponent-Cjd98xsl.js";import"./mergeRefs-CXX9azY6.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
