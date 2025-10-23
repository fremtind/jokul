import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{R as h}from"./index-siqcju79.js";import{c as k}from"./clsx-B-dksMZM.js";import{S as j}from"./SlotComponent-DjLpilNT.js";import{I as v}from"./Image-BPWU8zt7.js";import{C as a}from"./Card--k46uMZN.js";import{F as r}from"./Flex-6AvuqMfo.js";import{C as F}from"./CheckIcon-BRyROgH7.js";import{C as b}from"./CopyIcon-BvPhnXyN.js";import{I as y}from"./Tag-mPYF7ATX.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./mergeRefs-CYSLoF3z.js";import"./tokens-d2GYn7oW.js";import"./Icon-DnRkF4CO.js";const g=h.forwardRef(function({as:c,asChild:s,className:p,placement:m="top",...f},C){const x=s?j:c||"img";return e.jsx(x,{ref:C,className:k("jkl-card-image",`jkl-card-image--${m}`,p),...f})});g.__docgenInfo={description:"Bildekomponent som kan brukes i `Card` for å sørge for at bildet\nblør helt ut i kantene av kortet. Rendres normalt som et `<img>`-\nelement, men du kan overstyre dette med `as` dersom du f.eks. har\nen egen komponent for å håndtere responsive bilder.",methods:[],displayName:"CardImage",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]'},description:""},placement:{defaultValue:{value:'"top"',computed:!1},required:!1}}};const I=["s","m","l","xl"],S=["outlined","high","low"],u="/images/dog-1200.jpg",q={title:"Komponenter/Card",component:a,parameters:{layout:"centered",docs:{toc:!0}},tags:["autodocs"],args:{clickable:!1},argTypes:{variant:{control:"select",options:S},padding:{control:"select",options:I}}},i={name:"Card",args:{padding:"l",variant:"high",children:""},render:n=>e.jsx(a,{...n,children:e.jsx(r,{alignItems:"center",justifyContent:"center",style:{outline:"1px dashed #9747FF",height:"100px",aspectRatio:4/3,textAlign:"center",background:"#B4C9FFAA",color:"#9747FF",outlineOffset:"4px"},children:e.jsx("p",{className:"jkl-small",children:"Bytt meg"})})})},t={name:"Card med bilde",args:{variant:"high",padding:"m",children:"",clickable:!0,as:"a",href:"#","aria-label":"Se forsikringene mine",style:{maxWidth:"420px"}},render:({...n})=>e.jsxs(a,{...n,asChild:!1,children:[e.jsx(g,{src:u,alt:"",style:{overflow:"hidden",objectFit:"cover",aspectRatio:16/9}}),e.jsx(r,{direction:"column",gap:"s",children:e.jsxs(r,{direction:"column",gap:"xs",children:[e.jsx("p",{className:"jkl-heading-2",children:"Se forsikringene mine"}),e.jsx("p",{children:"Du vil alltid ha en oversikt over forsikringene dine på forsikringsoversikten."})]})})]})},o={name:"Card som knapp",args:{children:"FremtindSD",clickable:!0,padding:"l",variant:"low",as:"button"},render:({...n})=>{const[c,s]=h.useState(!1);function p(m){navigator.clipboard.writeText(m)}return e.jsx(a,{...n,"aria-live":"assertive",onClick:()=>{p(n.children?.toString()||"FremtindSD"),s(!0),setTimeout(()=>{s(!1)},3e3)},children:e.jsxs(r,{alignItems:"center",gap:"s",children:[e.jsx("p",{id:"kode",children:n.children}),c?e.jsx(F,{"aria-label":"Kopiert","aria-hidden":"false"}):e.jsx(b,{"aria-label":"Kopier kode","aria-hidden":"false"})]})})}},l={name:"Card som lenke",args:{padding:"l",variant:"high",children:"e",clickable:!0},render:({...n})=>e.jsxs(a,{...n,as:"a",href:"#",asChild:!1,"aria-label":"Husforsikring",children:[e.jsxs(r,{direction:"column",gap:"none xl",children:[e.jsx("div",{children:e.jsx(y,{children:"Fornyelse"})}),e.jsxs(r,{direction:"column",gap:"s",children:[e.jsx("p",{className:"jkl-heading-2",children:"Hus"}),e.jsx("p",{children:"Kittel Nielsens vei 88 1163 Oslo"})]})]}),e.jsx("hr",{}),e.jsx(r,{children:e.jsx("p",{children:"311 kr/mnd"})})]})},d={name:"Card med heldekkende bilde",args:{children:null},render:n=>e.jsx(a,{...n,style:{width:"500px"},children:e.jsx(g,{as:v,src:u,alt:"En hund",placement:"full"})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    children: "e",
    clickable: true
  },
  render: ({
    ...args
  }) => <Card {...args} as="a" href="#" asChild={false} aria-label="Husforsikring">
            <Flex direction="column" gap="none xl">
                <div>
                    <InfoTag>Fornyelse</InfoTag>
                </div>
                <Flex direction="column" gap="s">
                    <p className="jkl-heading-2">Hus</p>
                    <p>Kittel Nielsens vei 88 1163 Oslo</p>
                </Flex>
            </Flex>
            <hr />
            <Flex>
                <p>311 kr/mnd</p>
            </Flex>
        </Card>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Card med heldekkende bilde",
  args: {
    children: null
  },
  render: args => <Card {...args} style={{
    width: "500px"
  }}>
            <CardImage as={Image} src={dog1200} alt="En hund" placement="full" />
        </Card>
}`,...d.parameters?.docs?.source}}};const P=["CardStory","ImageCard","CopyCard","LinkCard","FullImageCard"];export{i as CardStory,o as CopyCard,d as FullImageCard,t as ImageCard,l as LinkCard,P as __namedExportsOrder,q as default};
