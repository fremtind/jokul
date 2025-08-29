import{R as e}from"./index-siqcju79.js";import{B as m}from"./Button-Bm5jRD6q.js";import{F as l}from"./Flex-DP-fj2ie.js";import{C as p}from"./CheckIcon-CJPuDLts.js";import{C as c}from"./CopyIcon-V1dXprj3.js";import{C as d}from"./Card-fliJQsdw.js";import{C,a as g}from"./types-vLBW6jI8.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-CvksrKef.js";import"./SlotComponent-CWN6EcE2.js";import"./Icon-mINJCSxV.js";const R={title:"Komponenter/Card/Eksempler",component:d,parameters:{layout:"centered"},tags:["autodocs"],args:{clickable:!1},argTypes:{variant:{control:"select",options:g},padding:{control:"select",options:C}}},o={name:"Card  med kopiering",args:{children:"FremtindSD",clickable:!0,padding:"l",variant:"low",as:"button"},render:({...a})=>{const[n,r]=e.useState(!1);function s(t){navigator.clipboard.writeText(t)}return e.createElement(d,{...a,"aria-live":"assertive",onClick:()=>{s(a.children?.toString()||"FremtindSD"),r(!0),setTimeout(()=>{r(!1)},3e3)}},e.createElement(l,{alignItems:"center",gap:16},e.createElement("p",{id:"kode"},a.children),n?e.createElement(p,{"aria-label":"Kopiert","aria-hidden":"false"}):e.createElement(c,{"aria-label":"Kopier kode","aria-hidden":"false"})))}},i={name:"Card med kopieringsknapp",args:{padding:"m",variant:"low",children:"FremtindSD",clickable:!1},render:({...a})=>{const[n,r]=e.useState(!1);function s(t){navigator.clipboard.writeText(t)}return e.createElement(d,{...a},e.createElement(l,{alignItems:"center",gap:16},e.createElement("p",{id:"kode"},a.children),e.createElement(m,{variant:"ghost",icon:n?e.createElement(p,null):e.createElement(c,null),iconPosition:"right",onClick:t=>{s(a.children?.toString()||"FremtindSD"),r(!0),setTimeout(()=>{r(!1)},3e3)},"aria-live":"assertive","aria-describedby":"kode"},e.createElement("span",{className:"jkl-sr-only"},n?"Kode kopiert":"Kopier kode"))))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Card  med kopiering",
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Card med kopieringsknapp",
  args: {
    padding: "m",
    variant: "low",
    children: "FremtindSD",
    clickable: false
  },
  render: ({
    ...args
  }) => {
    const [hasCopied, setHasCopied] = React.useState(false);
    function copyToClipboard(text: string) {
      navigator.clipboard.writeText(text);
    }
    return <Card {...args}>
                <Flex alignItems="center" gap={16}>
                    <p id="kode">{args.children}</p>
                    <Button variant="ghost" icon={hasCopied ? <CheckIcon /> : <CopyIcon />} iconPosition="right" onClick={_ => {
          copyToClipboard(args.children?.toString() || "FremtindSD");
          setHasCopied(true);
          setTimeout(() => {
            setHasCopied(false);
          }, 3000);
        }} aria-live="assertive" aria-describedby="kode">
                        <span className="jkl-sr-only">
                            {hasCopied ? "Kode kopiert" : "Kopier kode"}
                        </span>
                    </Button>
                </Flex>
            </Card>;
  }
}`,...i.parameters?.docs?.source}}};const _=["CopyCard1","CopyCard2"];export{o as CopyCard1,i as CopyCard2,_ as __namedExportsOrder,R as default};
