import{j as e}from"./iframe-6ywf5xmB.js";import{P as o}from"./PopupTip-CQO0ZjxT.js";import{S as a}from"./Select-C4-w3k_2.js";/* empty css               */import{F as s}from"./Flex-Zfq9dITQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-D4PZvUHl.js";import"./Icon-BfqNN8ed.js";import"./TooltipTrigger-CwiJpG7f.js";import"./floating-ui.react-Bc4PNffM.js";import"./index-Csj0jET7.js";import"./index-Dpwfs3fs.js";import"./TooltipContent-D7tfEFwm.js";import"./useBrowserPreferences-CK7Z4jnd.js";import"./useId-CuZVPcZi.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-B7OXLIiB.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-dbNyPh_P.js";import"./useListNavigation-Cl3LjpoA.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DN2xrJGV.js";import"./ArrowDownIcon-Bh_hqiZe.js";import"./InputGroup-BtV_SDAh.js";import"./Label-DyXKFnDs.js";import"./SupportLabel-CePpN6Y6.js";import"./WarningIcon-DSYg1vYY.js";import"./SlotComponent-CeHB91Oh.js";import"./mergeRefs-COtpKDND.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
