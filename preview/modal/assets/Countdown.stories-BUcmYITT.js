import{r,j as e}from"./iframe-PT4Cv5M4.js";import{B as d}from"./Button-CLrhhVYa.js";import{F as l}from"./Flex-BLaiC7pS.js";import{C as m}from"./Countdown-B9wFVfUU.js";import{a as c,b as p,M as y,d as x,f as g,g as f}from"./Modal-lATUTTtO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BKMr7lEk.js";import"./Loader-CD4X5vJy.js";import"./useDelayedRender-zBfVTQBP.js";import"./SlotComponent-C2k6AK4t.js";import"./mergeRefs-Drr_chdO.js";import"./IconButton-CJfOtinu.js";import"./CloseIcon-DwzD0wu3.js";import"./Icon-C6e0SwAM.js";const A={title:"Komponenter/Countdown",component:m,args:{from:5e3,isPaused:!1}},n={decorators:o=>{const[i,a]=r.useState(0);return e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("div",{children:e.jsx(o,{})},i),e.jsx(d,{variant:"secondary",onClick:()=>a(Date.now()),children:"Gjenta"})]})}},s={args:{from:6e4},render:o=>{const[i,a]=r.useState(0),[t,u]=r.useState(o.from/1e3||0);return r.useEffect(()=>{t<=0||setTimeout(()=>u(t-1),1e3)},[t]),e.jsxs(c,{id:"session-timeout-modal",role:"dialog","aria-modal":!0,"aria-hidden":!1,"aria-labelledby":"session-timeout-title",children:[e.jsx(p,{}),e.jsxs(y,{role:"document",style:{minWidth:"400px"},children:[e.jsx(x,{"aria-level":1,role:"heading",id:"session-timeout-title",children:"Er du fortsatt der?"}),e.jsx(g,{children:e.jsxs(l,{direction:"column",children:[e.jsxs("p",{children:["Du blir logget ut om ",t," sekund(er)"]}),e.jsx(m,{...o})]})}),e.jsxs(f,{children:[e.jsx(d,{variant:"primary",onClick:()=>a(Date.now()),children:"Jeg er her!"}),e.jsx(d,{children:"Logg ut"})]})]})]},i)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  decorators: Story => {
    const [key, setKey] = useState(0);
    return <Flex direction="column" gap="m">
                <div key={key}>
                    <Story />
                </div>
                <Button variant="secondary" onClick={() => setKey(Date.now())}>
                    Gjenta
                </Button>
            </Flex>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    from: 60000
  },
  render: args => {
    const [key, setKey] = useState(0);
    const [sessionTimeout, setSessionTimeout] = useState(args.from / 1000 || 0);
    useEffect(() => {
      if (sessionTimeout <= 0) {
        return;
      }
      setTimeout(() => setSessionTimeout(sessionTimeout - 1), 1000);
    }, [sessionTimeout]);
    return <ModalContainer id="session-timeout-modal" role="dialog" aria-modal aria-hidden={false} aria-labelledby="session-timeout-title" key={key}>
                <ModalOverlay />
                <Modal role="document" style={{
        minWidth: "400px"
      }}>
                    <ModalTitle aria-level={1} role="heading" id="session-timeout-title">
                        Er du fortsatt der?
                    </ModalTitle>
                    <ModalBody>
                        <Flex direction="column">
                            <p>
                                Du blir logget ut om {sessionTimeout} sekund(er)
                            </p>
                            <CountdownComponent {...args} />
                        </Flex>
                    </ModalBody>
                    <ModalActions>
                        <Button variant="primary" onClick={() => setKey(Date.now())}>
                            Jeg er her!
                        </Button>
                        <Button>Logg ut</Button>
                    </ModalActions>
                </Modal>
            </ModalContainer>;
  }
}`,...s.parameters?.docs?.source}}};const O=["Countdown","SessionTimeout"];export{n as Countdown,s as SessionTimeout,O as __namedExportsOrder,A as default};
