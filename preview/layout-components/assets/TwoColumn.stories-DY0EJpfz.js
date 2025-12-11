import{R as e}from"./index-siqcju79.js";import{B as c}from"./Button-Dng0c-UK.js";import{C as f}from"./_index-Doy8Vjfg.js";import{P as k}from"./_index-CpRA1-4K.js";import{c as v}from"./clsx-B-dksMZM.js";import{t as r}from"./tokens-CmXyXTIM.js";/* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";const t=e.forwardRef(function(s,i){const{as:l="div",className:m,minContentWidth:d="50%",gap:o,style:p,...g}=s,u=l;return e.createElement(u,{"data-testid":"jkl-two-column",className:v("jkl-two-column",m),style:{...p,"--min-content-width":d,"--gap":o?r.spacing[o]:0},...g,ref:i})});t.__docgenInfo={description:"",methods:[],displayName:"TwoColumn",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},minContentWidth:{required:!1,tsType:{name:"string"},description:`En CSS-lengde som definerer den minste bredden innholdet kan ha
før layouten brekker ned til en kolonne. Som standard er den satt
til 50 %, som vil si at sidebar-en aldri vil ta opp mer enn halve
bredden av skjermen.
@default "50%"`},gap:{required:!1,tsType:{name:"unknown"},description:`Du kan velge å legge inn avstand mellom sidepanel og innholdet, men
vi anbefaler å heller bruke andre layout-komponenter med padding
når du bygger sidepanel og innhold for å oppnå ønsket avstand.
@default undefined`}}};const S={title:"Layout/Primitives/TwoColumn",component:t,tags:["autodocs"],argTypes:{minContentWidth:{table:{defaultValue:{summary:"50%"}},options:["50%","60%","70%","80%","90%"],control:{type:"select"}},gap:{table:{defaultValue:{summary:"undefined"}},options:Object.keys(r.spacing),control:{type:"select"}},ref:{table:{disable:!0}},as:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{minContentWidth:"50%",gap:void 0}},n={parameters:{layout:"fullscreen"},render:a=>e.createElement(t,{...a},e.createElement("div",{style:{width:"200px",paddingInline:r.spacing[32],flexGrow:0}},"Sidebar"),e.createElement(f,{as:k},e.createElement("h2",null,"Lag en commit"),e.createElement("p",null,"For å dokumentere endringer på en måte som automatiserer versjonering og generering av changelogs, bruker vi verktøyet Changesets."),e.createElement("p",null,"Changesets lar oss definere nøyaktig hvilke pakker som er påvirket av en endring og hva slags versjonsoppdatering (major, minor, eller patch) endringen medfører."),e.createElement(c,null,"Gå videre")))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: props => {
    return <TwoColumn {...props}>
                {/* TODO: Lag bedre innhold for Sidebar */}
                <div style={{
        width: "200px",
        paddingInline: tokens.spacing[32],
        flexGrow: 0
      }}>
                    Sidebar
                </div>
                <Center as={Prose}>
                    <h2>Lag en commit</h2>
                    <p>
                        For å dokumentere endringer på en måte som automatiserer
                        versjonering og generering av changelogs, bruker vi
                        verktøyet Changesets.
                    </p>
                    <p>
                        Changesets lar oss definere nøyaktig hvilke pakker som
                        er påvirket av en endring og hva slags
                        versjonsoppdatering (major, minor, eller patch)
                        endringen medfører.
                    </p>
                    <Button>Gå videre</Button>
                </Center>
            </TwoColumn>;
  }
}`,...n.parameters?.docs?.source}}};const L=["Demo"];export{n as Demo,L as __namedExportsOrder,S as default};
