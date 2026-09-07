import{r as n,j as e}from"./iframe-AvrK8vCh.js";import{B as l}from"./Button-X456Jz6W.js";import{F as c}from"./Flex-B_3CYuZk.js";import{u as h}from"./useModal-ByPvZkMj.js";import{C as u}from"./Countdown-BFqIEqgC.js";import{a as M,b as j,M as T,d as S,f as k,g as C}from"./Modal-jD8Fe5yf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-hYepWMjU.js";import"./Loader-9xuKl4Ll.js";import"./useDelayedRender-DqCQWCuH.js";import"./SlotComponent-0saBRD3j.js";import"./mergeRefs-Yeq-_4oz.js";import"./index-D7KaPjQ2.js";import"./index-Chjiymov.js";import"./useId-y4F-Ypl6.js";import"./IconButton-IupSYp28.js";import"./CloseIcon-PVXeqKVD.js";import"./Icon-C_6paShe.js";const z={title:"Komponenter/Countdown",component:u,args:{from:5e3,isPaused:!1}},r={decorators:o=>{const[i,a]=n.useState(0);return e.jsxs(c,{direction:"column",gap:"m",children:[e.jsx("div",{children:e.jsx(o,{})},i),e.jsx(l,{variant:"secondary",onClick:()=>a(Date.now()),children:"Gjenta"})]})}},s={args:{from:6e4},render:o=>{const[i,a]=n.useState(0),[t,p]=n.useState(o.from/1e3||0),m="Er du fortsatt der?",[d,{title:y,overlay:f,container:g,modal:x}]=h({title:m,role:"dialog"});return n.useEffect(()=>{t<=0||setTimeout(()=>p(t-1),1e3)},[t]),n.useEffect(()=>{d&&d.show()},[d]),n.createElement(M,{...g,key:i},e.jsx(j,{...f}),e.jsxs(T,{...x,role:"document",style:{minWidth:"400px"},children:[e.jsx(S,{...y,children:m}),e.jsx(k,{children:e.jsxs(c,{direction:"column",children:[e.jsxs("p",{children:["Du blir logget ut om ",t," sekund(er)"]}),e.jsx(u,{...o})]})}),e.jsxs(C,{children:[e.jsx(l,{variant:"primary",onClick:()=>a(Date.now()),children:"Jeg er her!"}),e.jsx(l,{children:"Logg ut"})]})]}))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    from: 60000
  },
  render: args => {
    const [key, setKey] = useState(0);
    const [sessionTimeout, setSessionTimeout] = useState(args.from / 1000 || 0);
    const heading = "Er du fortsatt der?";
    const [instance, {
      title,
      overlay,
      container,
      modal
    }] = useModal({
      title: heading,
      role: "dialog"
    });
    useEffect(() => {
      if (sessionTimeout <= 0) {
        return;
      }
      setTimeout(() => setSessionTimeout(sessionTimeout - 1), 1000);
    }, [sessionTimeout]);
    useEffect(() => {
      if (!instance) {
        return;
      }
      instance.show();
    }, [instance]);
    return <ModalContainer {...container} key={key}>
                <ModalOverlay {...overlay} />
                <Modal {...modal} role="document" style={{
        minWidth: "400px"
      }}>
                    <ModalTitle {...title}>{heading}</ModalTitle>
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
}`,...s.parameters?.docs?.source}}};const H=["Countdown","SessionTimeout"];export{r as Countdown,s as SessionTimeout,H as __namedExportsOrder,z as default};
