import{R as e}from"./index-siqcju79.js";import{C as c}from"./CardImage-Bg7krjsW.js";import{I as h}from"./Image-vTRIawQS.js";import{C as r}from"./Card-fliJQsdw.js";/* empty css               */import{F as a}from"./Flex-CB0XPCq0.js";import{C}from"./CheckIcon-CJPuDLts.js";import{C as f}from"./CopyIcon-V1dXprj3.js";import{I as k}from"./Tag-5cfiG99-.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CWN6EcE2.js";import"./tokens-CmXyXTIM.js";import"./Icon-mINJCSxV.js";const F=["s","m","l","xl"],x=["outlined","high","low"],m="/images/dog-1200.jpg",K={title:"Komponenter/Card",component:r,parameters:{layout:"centered",docs:{toc:!0}},tags:["autodocs"],args:{clickable:!1},argTypes:{variant:{control:"select",options:x},padding:{control:"select",options:F}}},t={name:"Card",args:{padding:"l",variant:"high",children:""},render:n=>e.createElement(r,{...n},e.createElement(a,{alignItems:"center",justifyContent:"center",style:{outline:"1px dashed #9747FF",height:"100px",aspectRatio:4/3,textAlign:"center",background:"#B4C9FFAA",color:"#9747FF",outlineOffset:"4px"}},e.createElement("p",{className:"jkl-small"},"Bytt meg")))},l={name:"Card med bilde",args:{variant:"high",padding:"m",children:"",clickable:!0,as:"a",href:"#","aria-label":"Se forsikringene mine",style:{maxWidth:"420px"}},render:({...n})=>e.createElement(r,{...n,asChild:!1},e.createElement(c,{src:m,alt:"",style:{overflow:"hidden",objectFit:"cover",aspectRatio:16/9}}),e.createElement(a,{direction:"column",gap:16},e.createElement(a,{direction:"column",gap:8},e.createElement("p",{className:"jkl-heading-2"},"Se forsikringene mine"),e.createElement("p",null,"Du vil alltid ha en oversikt over forsikringene dine på forsikringsoversikten."))))},i={name:"Card som knapp",args:{children:"FremtindSD",clickable:!0,padding:"l",variant:"low",as:"button"},render:({...n})=>{const[p,d]=e.useState(!1);function g(u){navigator.clipboard.writeText(u)}return e.createElement(r,{...n,"aria-live":"assertive",onClick:()=>{g(n.children?.toString()||"FremtindSD"),d(!0),setTimeout(()=>{d(!1)},3e3)}},e.createElement(a,{alignItems:"center",gap:16},e.createElement("p",{id:"kode"},n.children),p?e.createElement(C,{"aria-label":"Kopiert","aria-hidden":"false"}):e.createElement(f,{"aria-label":"Kopier kode","aria-hidden":"false"})))}},s={name:"Card som lenke",args:{padding:"l",variant:"high",children:"e",clickable:!0},render:({...n})=>e.createElement(r,{...n,as:"a",href:"#",asChild:!1,"aria-label":"Husforsikring"},e.createElement(a,{direction:"column",gap:16},e.createElement("div",null,e.createElement(k,null,"Fornyelse")),e.createElement(a,{direction:"column",gap:8},e.createElement("p",{className:"jkl-heading-2"},"Hus"),e.createElement("p",null,"Kittel Nielsens vei 88 1163 Oslo"))),e.createElement("hr",null),e.createElement(a,null,e.createElement("p",null,"311 kr/mnd")))},o={name:"Card med heldekkende bilde",args:{children:null},render:n=>e.createElement(r,{...n,style:{width:"500px"}},e.createElement(c,{as:h,src:m,alt:"En hund",placement:"full"}))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Card med heldekkende bilde",
  args: {
    children: null
  },
  render: args => <Card {...args} style={{
    width: "500px"
  }}>
            <CardImage as={Image} src={dog1200} alt="En hund" placement="full" />
        </Card>
}`,...o.parameters?.docs?.source}}};const O=["CardStory","ImageCard","CopyCard","LinkCard","FullImageCard"];export{t as CardStory,i as CopyCard,o as FullImageCard,l as ImageCard,s as LinkCard,O as __namedExportsOrder,K as default};
