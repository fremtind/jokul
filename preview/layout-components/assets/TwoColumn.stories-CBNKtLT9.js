import{j as e}from"./jsx-runtime-D9p_MChh.js";import{B as k}from"./Button-BPhaSTk9.js";import{C as v}from"./_index-DywzdJ60.js";import{P as y}from"./_index-Drc7fH7a.js";import{c as b}from"./clsx-B-dksMZM.js";import{R as C}from"./index-CRL2yuNo.js";import{t as r}from"./tokens-NmszT_nq.js";/* empty css               */import"./usePreviousValue-B4HAJZS8.js";import"./Loader-BBBxl9FC.js";import"./useDelayedRender-ClAGw7sE.js";import"./_commonjsHelpers-gnU0ypJ3.js";const t=C.forwardRef(function(d,m){const{as:p="div",className:u,minContentWidth:g="50%",gap:a,style:c,...f}=d,h=p;return e.jsx(h,{"data-testid":"jkl-two-column",className:b("jkl-two-column",u),style:{...c,"--min-content-width":g,"--gap":a?r.unit[a]:0},...f,ref:m})});t.__docgenInfo={description:"",methods:[],displayName:"TwoColumn",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},minContentWidth:{required:!1,tsType:{name:"string"},description:`En CSS-lengde som definerer den minste bredden innholdet kan ha
før layouten brekker ned til en kolonne. Som standard er den satt
til 50 %, som vil si at sidebar-en aldri vil ta opp mer enn halve
bredden av skjermen.
@default "50%"`},gap:{required:!1,tsType:{name:"unknown"},description:`Du kan velge å legge inn avstand mellom sidepanel og innholdet, men
vi anbefaler å heller bruke andre layout-komponenter med padding
når du bygger sidepanel og innhold for å oppnå ønsket avstand.
@default undefined`}}};const B={title:"Layout/Primitives/TwoColumn",component:t,tags:["autodocs"],argTypes:{minContentWidth:{table:{defaultValue:{summary:"50%"}},options:["50%","60%","70%","80%","90%"],control:{type:"select"}},gap:{table:{defaultValue:{summary:"undefined"}},options:Object.keys(r.unit),control:{type:"select"}},ref:{table:{disable:!0}},as:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{minContentWidth:"50%",gap:void 0}},n={parameters:{layout:"fullscreen"},render:o=>e.jsxs(t,{...o,children:[e.jsx("div",{style:{width:"200px",paddingInline:r.unit[40],flexGrow:0},children:"Sidebar"}),e.jsxs(v,{as:y,children:[e.jsx("h2",{children:"Lag en commit"}),e.jsx("p",{children:"For å dokumentere endringer på en måte som automatiserer versjonering og generering av changelogs, bruker vi verktøyet Changesets."}),e.jsx("p",{children:"Changesets lar oss definere nøyaktig hvilke pakker som er påvirket av en endring og hva slags versjonsoppdatering (major, minor, eller patch) endringen medfører."}),e.jsx(k,{children:"Gå videre"})]})]})};var s,i,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: props => {
    return <TwoColumn {...props}>
                {/* TODO: Lag bedre innhold for Sidebar */}
                <div style={{
        width: "200px",
        paddingInline: tokens.unit[40],
        flexGrow: 0
      }}>
                    Sidebar
                </div>
                <Column as={Prose}>
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
                </Column>
            </TwoColumn>;
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const G=["Demo"];export{n as Demo,G as __namedExportsOrder,B as default};
