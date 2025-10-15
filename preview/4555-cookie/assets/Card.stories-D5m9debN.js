import{R as e}from"./index-siqcju79.js";import{c as k}from"./clsx-B-dksMZM.js";import{S as v}from"./SlotComponent-CWN6EcE2.js";import{I as F}from"./Image-vTRIawQS.js";import{C as r}from"./Card-fliJQsdw.js";/* empty css               */import{F as a}from"./Flex-B3l4XY1h.js";import{C as x}from"./CheckIcon-CJPuDLts.js";import{C as b}from"./CopyIcon-V1dXprj3.js";import{I as E}from"./Tag-5cfiG99-.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CmXyXTIM.js";import"./Icon-mINJCSxV.js";const g=e.forwardRef(function({as:c,asChild:t,className:m,placement:p="top",...h},C){const f=t?v:c||"img";return e.createElement(f,{ref:C,className:k("jkl-card-image",`jkl-card-image--${p}`,m),...h})});g.__docgenInfo={description:"Bildekomponent som kan brukes i `Card` for å sørge for at bildet\nblør helt ut i kantene av kortet. Rendres normalt som et `<img>`-\nelement, men du kan overstyre dette med `as` dersom du f.eks. har\nen egen komponent for å håndtere responsive bilder.",methods:[],displayName:"CardImage",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},placement:{defaultValue:{value:'"top"',computed:!1},required:!1}}};const y=["s","m","l","xl"],I=["outlined","high","low"],u="/images/dog-1200.jpg",L={title:"Komponenter/Card",component:r,parameters:{layout:"centered",docs:{toc:!0}},tags:["autodocs"],args:{clickable:!1},argTypes:{variant:{control:"select",options:I},padding:{control:"select",options:y}}},l={name:"Card",args:{padding:"l",variant:"high",children:""},render:n=>e.createElement(r,{...n},e.createElement(a,{alignItems:"center",justifyContent:"center",style:{outline:"1px dashed #9747FF",height:"100px",aspectRatio:4/3,textAlign:"center",background:"#B4C9FFAA",color:"#9747FF",outlineOffset:"4px"}},e.createElement("p",{className:"jkl-small"},"Bytt meg")))},o={name:"Card med bilde",args:{variant:"high",padding:"m",children:"",clickable:!0,as:"a",href:"#","aria-label":"Se forsikringene mine",style:{maxWidth:"420px"}},render:({...n})=>e.createElement(r,{...n,asChild:!1},e.createElement(g,{src:u,alt:"",style:{overflow:"hidden",objectFit:"cover",aspectRatio:16/9}}),e.createElement(a,{direction:"column",gap:16},e.createElement(a,{direction:"column",gap:8},e.createElement("p",{className:"jkl-heading-2"},"Se forsikringene mine"),e.createElement("p",null,"Du vil alltid ha en oversikt over forsikringene dine på forsikringsoversikten."))))},i={name:"Card som knapp",args:{children:"FremtindSD",clickable:!0,padding:"l",variant:"low",as:"button"},render:({...n})=>{const[c,t]=e.useState(!1);function m(p){navigator.clipboard.writeText(p)}return e.createElement(r,{...n,"aria-live":"assertive",onClick:()=>{m(n.children?.toString()||"FremtindSD"),t(!0),setTimeout(()=>{t(!1)},3e3)}},e.createElement(a,{alignItems:"center",gap:16},e.createElement("p",{id:"kode"},n.children),c?e.createElement(x,{"aria-label":"Kopiert","aria-hidden":"false"}):e.createElement(b,{"aria-label":"Kopier kode","aria-hidden":"false"})))}},s={name:"Card som lenke",args:{padding:"l",variant:"high",children:"e",clickable:!0},render:({...n})=>e.createElement(r,{...n,as:"a",href:"#",asChild:!1,"aria-label":"Husforsikring"},e.createElement(a,{direction:"column",gap:16},e.createElement("div",null,e.createElement(E,null,"Fornyelse")),e.createElement(a,{direction:"column",gap:8},e.createElement("p",{className:"jkl-heading-2"},"Hus"),e.createElement("p",null,"Kittel Nielsens vei 88 1163 Oslo"))),e.createElement("hr",null),e.createElement(a,null,e.createElement("p",null,"311 kr/mnd")))},d={name:"Card med heldekkende bilde",args:{children:null},render:n=>e.createElement(r,{...n,style:{width:"500px"}},e.createElement(g,{as:F,src:u,alt:"En hund",placement:"full"}))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

            <Flex direction="column" gap={16}>
                <Flex direction="column" gap={8}>
                    <p className="jkl-heading-2">Se forsikringene mine</p>
                    <p>
                        Du vil alltid ha en oversikt over forsikringene dine på
                        forsikringsoversikten.
                    </p>
                </Flex>
            </Flex>
        </Card>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
                <Flex alignItems="center" gap={16}>
                    <p id="kode">{args.children}</p>
                    {hasCopied ? <CheckIcon aria-label="Kopiert" aria-hidden="false" /> : <CopyIcon aria-label="Kopier kode" aria-hidden="false" />}
                </Flex>
            </Card>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Card som lenke",
  args: {
    padding: "l",
    variant: "high",
    children: "e",
    clickable: true
  },
  render: ({
    ...args
  }) => <Card {...args} as="a" href="#" asChild={false} aria-label="Husforsikring">
            <Flex direction="column" gap={16}>
                <div>
                    <InfoTag>Fornyelse</InfoTag>
                </div>
                <Flex direction="column" gap={8}>
                    <p className="jkl-heading-2">Hus</p>
                    <p>Kittel Nielsens vei 88 1163 Oslo</p>
                </Flex>
            </Flex>
            <hr />
            <Flex>
                <p>311 kr/mnd</p>
            </Flex>
        </Card>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Card med heldekkende bilde",
  args: {
    children: null
  },
  render: args => <Card {...args} style={{
    width: "500px"
  }}>
            <CardImage as={Image} src={dog1200} alt="En hund" placement="full" />
        </Card>
}`,...d.parameters?.docs?.source}}};const W=["CardStory","ImageCard","CopyCard","LinkCard","FullImageCard"];export{l as CardStory,i as CopyCard,d as FullImageCard,o as ImageCard,s as LinkCard,W as __namedExportsOrder,L as default};
