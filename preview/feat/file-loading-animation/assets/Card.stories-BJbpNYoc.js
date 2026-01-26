import{R as g,j as e}from"./iframe-DtM7RXj6.js";import{I as x}from"./Image-kws4rIiI.js";import{C as h}from"./Card-aoFBCh1H.js";import{c as j}from"./clsx-B-dksMZM.js";import{S as v}from"./SlotComponent-DYrfhb9R.js";import{F as n}from"./Flex-Bw_hwLCN.js";import{C as b}from"./CheckIcon-BMbGqwkU.js";import{C as F}from"./CopyIcon-DLJUYRwv.js";import"./preload-helper-PPVm8Dsz.js";import"./mergeRefs-Akd9vO6p.js";import"./tokens-d2GYn7oW.js";import"./Icon-DEBh_q2D.js";const p=g.forwardRef(function({as:d,asChild:a,className:c,placement:m="top",...f},k){const C=a?v:d||"img";return e.jsx(C,{ref:k,className:j("jkl-card-image",`jkl-card-image--${m}`,c),...f})});p.__docgenInfo={description:"Bildekomponent som kan brukes i `Card` for å sørge for at bildet\nblør helt ut i kantene av kortet. Rendres normalt som et `<img>`-\nelement, men du kan overstyre dette med `as` dersom du f.eks. har\nen egen komponent for å håndtere responsive bilder.",methods:[],displayName:"CardImage",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]'},description:""},placement:{defaultValue:{value:'"top"',computed:!1},required:!1}}};const S=["s","m","l","xl"],y=["outlined","high","low"],u="/images/dog-1200.jpg",L={title:"Komponenter/Card",component:h,args:{clickable:!1,padding:"l",variant:"high",children:e.jsx(n,{alignItems:"center",justifyContent:"center",style:{outline:"1px dashed #9747FF",height:"100px",aspectRatio:4/3,textAlign:"center",background:"#B4C9FFAA",color:"#9747FF",outlineOffset:"4px"},children:e.jsx("p",{className:"jkl-small",children:"Bytt meg"})})},argTypes:{variant:{control:"select",options:y},padding:{control:"select",options:S}}},s={name:"Card"},i={name:"Card med bilde",args:{padding:"m",children:e.jsxs(e.Fragment,{children:[e.jsx(p,{src:u,alt:"",style:{overflow:"hidden",objectFit:"cover",aspectRatio:16/9}}),e.jsx(n,{direction:"column",gap:"s",children:e.jsxs(n,{direction:"column",gap:"xs",children:[e.jsx("p",{className:"jkl-heading-2",children:"Se forsikringene mine"}),e.jsx("p",{children:"Du vil alltid ha en oversikt over forsikringene dine på forsikringsoversikten."})]})})]}),clickable:!0,as:"a",href:"#","aria-label":"Se forsikringene mine",style:{maxWidth:"420px"}}},o={name:"Card som knapp",args:{children:"FremtindSD",clickable:!0,padding:"l",variant:"low",as:"button"},render:({...r})=>{const[d,a]=g.useState(!1);function c(m){navigator.clipboard.writeText(m)}return e.jsx(h,{...r,"aria-live":"assertive",onClick:()=>{c(r.children?.toString()||"FremtindSD"),a(!0),setTimeout(()=>{a(!1)},3e3)},children:e.jsxs(n,{alignItems:"center",gap:"s",children:[e.jsx("p",{id:"kode",children:r.children}),d?e.jsx(b,{"aria-label":"Kopiert","aria-hidden":"false"}):e.jsx(F,{"aria-label":"Kopier kode","aria-hidden":"false"})]})})}},t={name:"Card som lenke",args:{padding:"l",variant:"high",as:"a",href:"#",asChild:!1,clickable:!0,"aria-label":"Kittel Nielsens vei 88 1163 Oslo: Husforsirking",children:e.jsxs(n,{direction:"column",gap:"none xl",children:[e.jsxs(n,{direction:"column",gap:"s",children:[e.jsx("p",{className:"jkl-heading-2",children:"Hus"}),e.jsx("p",{children:"Kittel Nielsens vei 88 1163 Oslo"})]}),e.jsx(n,{fill:!0,children:e.jsx("hr",{})}),e.jsx(n,{children:e.jsx("p",{children:"311 kr/mnd"})})]})}},l={name:"Card med heldekkende bilde",args:{children:e.jsx(p,{as:x,src:u,alt:"En hund",placement:"full"})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Card"
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Card med bilde",
  args: {
    padding: "m",
    children: <>
                <CardImage src={dog1200} alt="" style={{
        overflow: "hidden",
        objectFit: "cover",
        aspectRatio: 16 / 9
      }} />

                <Flex direction="column" gap="s">
                    <Flex direction="column" gap="xs">
                        <p className="jkl-heading-2">Se forsikringene mine</p>
                        <p>
                            Du vil alltid ha en oversikt over forsikringene dine
                            på forsikringsoversikten.
                        </p>
                    </Flex>
                </Flex>
            </>,
    clickable: true,
    as: "a",
    href: "#",
    "aria-label": "Se forsikringene mine",
    style: {
      maxWidth: "420px"
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Card som lenke",
  args: {
    padding: "l",
    variant: "high",
    as: "a",
    href: "#",
    asChild: false,
    clickable: true,
    "aria-label": "Kittel Nielsens vei 88 1163 Oslo: Husforsirking",
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
            </Flex>
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Card med heldekkende bilde",
  args: {
    children: <CardImage as={Image} src={dog1200} alt="En hund" placement="full" />
  }
}`,...l.parameters?.docs?.source}}};const W=["CardStory","ImageCard","CopyCard","LinkCard","FullImageCard"];export{s as CardStory,o as CopyCard,l as FullImageCard,i as ImageCard,t as LinkCard,W as __namedExportsOrder,L as default};
