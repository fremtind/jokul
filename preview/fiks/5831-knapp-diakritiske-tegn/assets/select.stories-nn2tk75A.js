import{j as e}from"./iframe-B0DayZ9c.js";import{P as o}from"./PopupTip-CM6kWMBH.js";import{S as a}from"./Select-zQtxmM7F.js";/* empty css               */import{F as s}from"./Flex-CkuisB5u.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DWw9Ta8j.js";import"./Icon-DmvXO8IU.js";import"./TooltipTrigger-Cq5hv8EA.js";import"./floating-ui.react-CD8A38e2.js";import"./index-0Jh6zsWD.js";import"./index-3RRLiu3V.js";import"./TooltipContent-BkVX7NIL.js";import"./useBrowserPreferences-DJjeTDTn.js";import"./useId-gBfxsYqv.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-CAfQcxPf.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DkKE8rYJ.js";import"./useListNavigation-Do4Poz83.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-klG0YVb_.js";import"./ArrowDownIcon-DCwpszm9.js";import"./InputGroup-BvwGCXal.js";import"./Label-FBS6vhMQ.js";import"./SupportLabel-ppS3Qo7O.js";import"./WarningIcon-sW0WzjW4.js";import"./SlotComponent-gbFXvK8w.js";import"./mergeRefs-Bq10F3-j.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
