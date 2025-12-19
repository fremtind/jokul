import{j as e,R as x}from"./iframe-D9oBkFDu.js";import{C as c}from"./CardImage-0R0qtT3l.js";import{I as C}from"./Image-C0PcRLGe.js";import{C as a}from"./Card-06GirSf1.js";import{F as r}from"./Flex-BSP-HEL-.js";import{C as u}from"./CheckIcon-xCG0S2U4.js";import{C as f}from"./CopyIcon-D9fhvkj6.js";import{I as k}from"./Tag-D1mAj-Di.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DgZ07_Qg.js";import"./mergeRefs-CY3P0X8Y.js";import"./tokens-d2GYn7oW.js";import"./Icon-DDKdvxRe.js";const j=["s","m","l","xl"],F=["outlined","high","low"],p="/images/dog-1200.jpg",B={title:"Komponenter/Card",component:a,args:{clickable:!1},argTypes:{variant:{control:"select",options:F},padding:{control:"select",options:j}}},s={name:"Card",args:{padding:"l",variant:"high",children:""},render:n=>e.jsx(a,{...n,children:e.jsx(r,{alignItems:"center",justifyContent:"center",style:{outline:"1px dashed #9747FF",height:"100px",aspectRatio:4/3,textAlign:"center",background:"#B4C9FFAA",color:"#9747FF",outlineOffset:"4px"},children:e.jsx("p",{className:"jkl-small",children:"Bytt meg"})})})},i={name:"Card med bilde",args:{variant:"high",padding:"m",children:"",clickable:!0,as:"a",href:"#","aria-label":"Se forsikringene mine",style:{maxWidth:"420px"}},render:({...n})=>e.jsxs(a,{...n,asChild:!1,children:[e.jsx(c,{src:p,alt:"",style:{overflow:"hidden",objectFit:"cover",aspectRatio:16/9}}),e.jsx(r,{direction:"column",gap:"s",children:e.jsxs(r,{direction:"column",gap:"xs",children:[e.jsx("p",{className:"jkl-heading-2",children:"Se forsikringene mine"}),e.jsx("p",{children:"Du vil alltid ha en oversikt over forsikringene dine på forsikringsoversikten."})]})})]})},l={name:"Card som knapp",args:{children:"FremtindSD",clickable:!0,padding:"l",variant:"low",as:"button"},render:({...n})=>{const[m,d]=x.useState(!1);function g(h){navigator.clipboard.writeText(h)}return e.jsx(a,{...n,"aria-live":"assertive",onClick:()=>{g(n.children?.toString()||"FremtindSD"),d(!0),setTimeout(()=>{d(!1)},3e3)},children:e.jsxs(r,{alignItems:"center",gap:"s",children:[e.jsx("p",{id:"kode",children:n.children}),m?e.jsx(u,{"aria-label":"Kopiert","aria-hidden":"false"}):e.jsx(f,{"aria-label":"Kopier kode","aria-hidden":"false"})]})})}},o={name:"Card som lenke",args:{padding:"l",variant:"high",children:"e",clickable:!0},render:({...n})=>e.jsxs(a,{...n,as:"a",href:"#",asChild:!1,"aria-label":"Husforsikring",children:[e.jsxs(r,{direction:"column",gap:"none xl",children:[e.jsx("div",{children:e.jsx(k,{children:"Fornyelse"})}),e.jsxs(r,{direction:"column",gap:"s",children:[e.jsx("p",{className:"jkl-heading-2",children:"Hus"}),e.jsx("p",{children:"Kittel Nielsens vei 88 1163 Oslo"})]})]}),e.jsx("hr",{}),e.jsx(r,{children:e.jsx("p",{children:"311 kr/mnd"})})]})},t={name:"Card med heldekkende bilde",args:{children:null},render:n=>e.jsx(a,{...n,style:{width:"500px"},children:e.jsx(c,{as:C,src:p,alt:"En hund",placement:"full"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Card med heldekkende bilde",
  args: {
    children: null
  },
  render: args => <Card {...args} style={{
    width: "500px"
  }}>
            <CardImage as={Image} src={dog1200} alt="En hund" placement="full" />
        </Card>
}`,...t.parameters?.docs?.source}}};const E=["CardStory","ImageCard","CopyCard","LinkCard","FullImageCard"];export{s as CardStory,l as CopyCard,t as FullImageCard,i as ImageCard,o as LinkCard,E as __namedExportsOrder,B as default};
