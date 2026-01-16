import{r as t,j as e}from"./iframe-DVEDpXBm.js";import{B as m}from"./Button-DVziKj0u.js";import{F as d}from"./Flex-D7LRy8Of.js";import{CompleteModal as l}from"./CompleteModal.stories-B_ZY5u1c.js";import{C as u}from"./Countdown-Cfo3pEDT.js";import{b as p,g}from"./Modal-CoJKDtMe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-CtCGoWAN.js";import"./Loader-WmaXVPF6.js";import"./useDelayedRender-DkM1BD2d.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-Dr0aeCpT.js";import"./mergeRefs-CAXKFEtj.js";/* empty css               *//* empty css               */import"./IconButton-CFuNDxY4.js";import"./CloseIcon-Oflr4a85.js";import"./Icon-C-HwJC3C.js";const G={title:"Komponenter/Countdown",component:u,args:{from:5e3,isPaused:!1}},r={decorators:o=>{const[i,a]=t.useState(0);return e.jsxs(d,{direction:"column",gap:"m",children:[e.jsx("div",{children:e.jsx(o,{})},i),e.jsx(m,{variant:"secondary",onClick:()=>a(Date.now()),children:"Gjenta"})]})}},s={args:{from:6e6},render:o=>{const[i,a]=t.useState(0),[n,c]=t.useState(o.from/1e3||0);return t.useEffect(()=>{n<=0||setTimeout(()=>c(n-1),600)},[n]),t.createElement(p,{...l.args,role:"document",key:i},e.jsx("h1",{className:"jkl-heading-1",children:"Er du fortsatt der?"}),e.jsxs("p",{children:["Du blir logget ut om ",n/60," minutt(er)"]}),e.jsx(u,{...o}),e.jsxs(g,{children:[e.jsx(m,{variant:"primary",onClick:()=>a(Date.now()),children:"Jeg er her!"}),e.jsx(m,{children:"Logg ut"})]}))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    from: 6000000
  },
  render: args => {
    const [key, setKey] = useState(0);
    const [sessionTimeout, setSessionTimeout] = useState(args.from / 1000 || 0);
    useEffect(() => {
      if (sessionTimeout <= 0) {
        return;
      }
      setTimeout(() => setSessionTimeout(sessionTimeout - 1), 600);
    }, [sessionTimeout]);
    return <Modal {...CompleteModal.args} role="document" key={key}>
                <h1 className="jkl-heading-1">Er du fortsatt der?</h1>
                <p>Du blir logget ut om {sessionTimeout / 60} minutt(er)</p>
                <CountdownComponent {...args} />
                <ModalActions>
                    <Button variant="primary" onClick={() => setKey(Date.now())}>
                        Jeg er her!
                    </Button>
                    <Button>Logg ut</Button>
                </ModalActions>
            </Modal>;
  }
}`,...s.parameters?.docs?.source}}};const J=["Countdown","SessionTimeout"];export{r as Countdown,s as SessionTimeout,J as __namedExportsOrder,G as default};
