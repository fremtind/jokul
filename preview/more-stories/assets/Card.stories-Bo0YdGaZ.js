import{R as h,j as e}from"./iframe-CKDgsx_0.js";import{c as k}from"./clsx-B-dksMZM.js";import{S as j}from"./SlotComponent-AbK3tEB5.js";import{I as v}from"./Image-BoV5yBHE.js";import{C as a}from"./Card-BQd8Ff5F.js";import{F as r}from"./Flex-B0oQsAvs.js";import{C as F}from"./CheckIcon-B3kCVL-i.js";import{C as b}from"./CopyIcon-BSf8fNV6.js";import"./preload-helper-PPVm8Dsz.js";import"./mergeRefs-BeOoAoNI.js";import"./tokens-d2GYn7oW.js";import"./Icon-DujzpGU3.js";const g=h.forwardRef(function({as:c,asChild:s,className:p,placement:m="top",...f},x){const C=s?j:c||"img";return e.jsx(C,{ref:x,className:k("jkl-card-image",`jkl-card-image--${m}`,p),...f})});g.__docgenInfo={description:"Bildekomponent som kan brukes i `Card` for å sørge for at bildet\nblør helt ut i kantene av kortet. Rendres normalt som et `<img>`-\nelement, men du kan overstyre dette med `as` dersom du f.eks. har\nen egen komponent for å håndtere responsive bilder.",methods:[],displayName:"CardImage",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]'},description:""},placement:{defaultValue:{value:'"top"',computed:!1},required:!1}}};const y=["s","m","l","xl"],I=["outlined","high","low"],u="/images/dog-1200.jpg",E={title:"Komponenter/Card",component:a,args:{clickable:!1},argTypes:{variant:{control:"select",options:I},padding:{control:"select",options:y}}},i={name:"Card",args:{padding:"l",variant:"high",children:""},render:n=>e.jsx(a,{...n,children:e.jsx(r,{alignItems:"center",justifyContent:"center",style:{outline:"1px dashed #9747FF",height:"100px",aspectRatio:4/3,textAlign:"center",background:"#B4C9FFAA",color:"#9747FF",outlineOffset:"4px"},children:e.jsx("p",{className:"jkl-small",children:"Bytt meg"})})})},t={name:"Card med bilde",args:{variant:"high",padding:"m",children:"",clickable:!0,as:"a",href:"#","aria-label":"Se forsikringene mine",style:{maxWidth:"420px"}},render:({...n})=>e.jsxs(a,{...n,asChild:!1,children:[e.jsx(g,{src:u,alt:"",style:{overflow:"hidden",objectFit:"cover",aspectRatio:16/9}}),e.jsx(r,{direction:"column",gap:"s",children:e.jsxs(r,{direction:"column",gap:"xs",children:[e.jsx("p",{className:"jkl-heading-2",children:"Se forsikringene mine"}),e.jsx("p",{children:"Du vil alltid ha en oversikt over forsikringene dine på forsikringsoversikten."})]})})]})},o={name:"Card som knapp",args:{children:"FremtindSD",clickable:!0,padding:"l",variant:"low",as:"button"},render:({...n})=>{const[c,s]=h.useState(!1);function p(m){navigator.clipboard.writeText(m)}return e.jsx(a,{...n,"aria-live":"assertive",onClick:()=>{p(n.children?.toString()||"FremtindSD"),s(!0),setTimeout(()=>{s(!1)},3e3)},children:e.jsxs(r,{alignItems:"center",gap:"s",children:[e.jsx("p",{id:"kode",children:n.children}),c?e.jsx(F,{"aria-label":"Kopiert","aria-hidden":"false"}):e.jsx(b,{"aria-label":"Kopier kode","aria-hidden":"false"})]})})}},l={name:"Card som lenke",args:{padding:"l",variant:"high",children:e.jsxs(r,{direction:"column",gap:"none xl",children:[e.jsxs(r,{direction:"column",gap:"s",children:[e.jsx("p",{className:"jkl-heading-2",children:"Hus"}),e.jsx("p",{children:"Kittel Nielsens vei 88 1163 Oslo"})]}),e.jsx(r,{fill:!0,children:e.jsx("hr",{})}),e.jsx(r,{children:e.jsx("p",{children:"311 kr/mnd"})})]}),clickable:!0,"aria-label":"Kittel Nielsens vei 88 1163 Oslo: Husforsirking"},render:({...n})=>e.jsx(a,{...n,as:"a",href:"#",asChild:!1,"aria-label":"Husforsikring"})},d={name:"Card med heldekkende bilde",args:{children:e.jsx(g,{as:v,src:u,alt:"En hund",placement:"full"})},render:n=>e.jsx(a,{...n,style:{width:"500px"}})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Card",
  args: {
    padding: "l",
    variant: "high",
    children: ""
  },
  render: args => <Card {...args}>
            <Flex alignItems="center" justifyContent="center" style={{
      outline: "1px dashed #9747FF",
      height: "100px",
      aspectRatio: 4 / 3,
      textAlign: "center",
      background: "#B4C9FFAA",
      color: "#9747FF",
      outlineOffset: "4px"
    }}>
                <p className="jkl-small">Bytt meg</p>
            </Flex>
        </Card>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Card med bilde",
  args: {
    variant: "high",
    padding: "m",
    children: "",
    clickable: true,
    as: "a",
    href: "#",
    "aria-label": "Se forsikringene mine",
    style: {
      maxWidth: "420px"
    }
  },
  render: ({
    ...args
  }) => <Card {...args} asChild={false}>
            <CardImage src={dog1200} alt="" style={{
      overflow: "hidden",
      objectFit: "cover",
      aspectRatio: 16 / 9
    }} />

            <Flex direction="column" gap="s">
                <Flex direction="column" gap="xs">
                    <p className="jkl-heading-2">Se forsikringene mine</p>
                    <p>
                        Du vil alltid ha en oversikt over forsikringene dine på
                        forsikringsoversikten.
                    </p>
                </Flex>
            </Flex>
        </Card>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Card som knapp",
  args: {
    children: "FremtindSD",
    clickable: true,
    padding: "l",
    variant: "low",
    as: "button"
  },
  render: ({
    ...args
  }) => {
    const [hasCopied, setHasCopied] = React.useState(false);
    function copyToClipboard(text: string) {
      navigator.clipboard.writeText(text);
    }
    return <Card {...args} aria-live="assertive" onClick={() => {
      copyToClipboard(args.children?.toString() || "FremtindSD");
      setHasCopied(true);
      setTimeout(() => {
        setHasCopied(false);
      }, 3000);
    }}>
                <Flex alignItems="center" gap="s">
                    <p id="kode">{args.children}</p>
                    {hasCopied ? <CheckIcon aria-label="Kopiert" aria-hidden="false" /> : <CopyIcon aria-label="Kopier kode" aria-hidden="false" />}
                </Flex>
            </Card>;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Card som lenke",
  args: {
    padding: "l",
    variant: "high",
    children: <Flex direction="column" gap="none xl">
                <Flex direction="column" gap="s">
                    <p className="jkl-heading-2">Hus</p>
                    <p>Kittel Nielsens vei 88 1163 Oslo</p>
                </Flex>
                <Flex fill>
                    <hr />
                </Flex>
                <Flex>
                    <p>311 kr/mnd</p>
                </Flex>
            </Flex>,
    clickable: true,
    "aria-label": "Kittel Nielsens vei 88 1163 Oslo: Husforsirking"
  },
  render: ({
    ...args
  }) => <Card {...args} as="a" href="#" asChild={false} aria-label="Husforsikring" />
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Card med heldekkende bilde",
  args: {
    children: <CardImage as={Image} src={dog1200} alt="En hund" placement="full" />
  },
  render: args => <Card {...args} style={{
    width: "500px"
  }} />
}`,...d.parameters?.docs?.source}}};const L=["CardStory","ImageCard","CopyCard","LinkCard","FullImageCard"];export{i as CardStory,o as CopyCard,d as FullImageCard,t as ImageCard,l as LinkCard,L as __namedExportsOrder,E as default};
