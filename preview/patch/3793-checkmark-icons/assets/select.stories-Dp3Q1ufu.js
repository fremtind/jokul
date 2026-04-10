import{j as e}from"./iframe-P0I0wTTX.js";import{P as o}from"./PopupTip-C5Fr-Pft.js";import{S as a}from"./Select-C1zF-NDc.js";/* empty css               */import{F as s}from"./Flex-D9WmE3f3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-24Uw-lLL.js";import"./Icon-CdTvbbgD.js";import"./TooltipTrigger-CFPvKC5b.js";import"./floating-ui.react-DQrJMWzl.js";import"./index-BlOIawr6.js";import"./index-DGcimjOE.js";import"./TooltipContent-QN8Fo4nz.js";import"./useBrowserPreferences-CM57ZmaJ.js";import"./useId-t-rNn2Ng.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-B-ltxUYG.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-C9yAz74G.js";import"./useListNavigation-WcHwehte.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-euL2sDkl.js";import"./ArrowDownIcon-G_UpG4h-.js";import"./InputGroup-Fmd9n8mx.js";import"./Label-CGaGrC61.js";import"./SupportLabel-CMZYL_hs.js";import"./WarningIcon-DPh5sQ2M.js";import"./SlotComponent-Dz7WoK56.js";import"./mergeRefs-0X-9G2TK.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
