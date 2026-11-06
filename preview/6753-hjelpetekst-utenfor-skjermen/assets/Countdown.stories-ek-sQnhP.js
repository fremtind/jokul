import{r as n,j as e}from"./iframe-_jTDLtbz.js";import{B as m}from"./Button-Dy6-EIGO.js";import{F as c}from"./Flex-xq95hGRb.js";import{u as h}from"./useModal-DJgAz0M_.js";import{C as u}from"./Countdown-Cf2NjYMq.js";import{a as M,b as j,M as T,d as S,f as k,g as C}from"./Modal-BqzHps_J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-CQpm1WPi.js";import"./Loader-D0Cc1ezW.js";import"./types-BlFGa32c.js";import"./useDelayedRender-87sQYHJ3.js";import"./SlotComponent-M3NL_f8X.js";import"./mergeRefs-_7lZvp9j.js";import"./index-Y2z6Kdw4.js";import"./index-Chjiymov.js";import"./useId-rIlMmaMg.js";import"./IconButton-W3I9N05P.js";import"./CloseIcon-8EfZ29tX.js";import"./Icon-BgojQp1r.js";const H={title:"Komponenter/Countdown",component:u,args:{from:5e3,isPaused:!1}},r={decorators:o=>{const[i,a]=n.useState(0);return e.jsxs(c,{direction:"column",gap:"m",children:[e.jsx("div",{children:e.jsx(o,{})},i),e.jsx(m,{variant:"secondary",onClick:()=>a(Date.now()),children:"Gjenta"})]})}},s={args:{from:6e4},render:o=>{const[i,a]=n.useState(0),[t,p]=n.useState(o.from/1e3||0),l="Er du fortsatt der?",[d,{title:y,overlay:f,container:g,modal:x}]=h({title:l,role:"dialog"});return n.useEffect(()=>{t<=0||setTimeout(()=>p(t-1),1e3)},[t]),n.useEffect(()=>{d&&d.show()},[d]),n.createElement(M,{...g,key:i},e.jsx(j,{...f}),e.jsxs(T,{...x,role:"document",style:{minWidth:"400px"},children:[e.jsx(S,{...y,children:l}),e.jsx(k,{children:e.jsxs(c,{gap:"m",direction:"column",children:[e.jsxs("p",{children:["Du blir logget ut om ",t," sekund(er)"]}),e.jsx(u,{...o})]})}),e.jsxs(C,{children:[e.jsx(m,{variant:"primary",onClick:()=>a(Date.now()),children:"Jeg er her!"}),e.jsx(m,{children:"Logg ut"})]})]}))}},I=["Countdown","SessionTimeout"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
                        <Flex gap="m" direction="column">
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
}`,...s.parameters?.docs?.source}}};export{r as Countdown,s as SessionTimeout,I as __namedExportsOrder,H as default};
