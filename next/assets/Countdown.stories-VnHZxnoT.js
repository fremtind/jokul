import{r as n,j as e}from"./iframe-Clh-zdRB.js";import{B as l}from"./Button-AFELRHV-.js";import{F as c}from"./Flex-DVsL7F0y.js";import{u as h}from"./useModal-uiBF0kcE.js";import{C as u}from"./Countdown-B3tKAW7l.js";import{a as M,b as j,M as T,d as S,f as k,g as C}from"./Modal-CTOiRhzm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Gmv7JjS1.js";import"./Loader-DW-9j6xd.js";import"./useDelayedRender-n6xM1LgK.js";import"./SlotComponent-D7dM_OLc.js";import"./mergeRefs-BiGu2lC_.js";import"./index-pAWQiEPZ.js";import"./index-Chjiymov.js";import"./useId-DAigUxJv.js";import"./IconButton-C-NFpwPC.js";import"./CloseIcon-Bd13l-sj.js";import"./Icon-1FYWhicE.js";const z={title:"Komponenter/Countdown",component:u,args:{from:5e3,isPaused:!1}},r={decorators:o=>{const[a,i]=n.useState(0);return e.jsxs(c,{direction:"column",gap:"m",children:[e.jsx("div",{children:e.jsx(o,{})},a),e.jsx(l,{variant:"secondary",onClick:()=>i(Date.now()),children:"Gjenta"})]})}},s={args:{from:6e4},render:o=>{const[a,i]=n.useState(0),[t,p]=n.useState(o.from/1e3||0),m="Er du fortsatt der?",[d,{title:y,overlay:f,container:g,modal:x}]=h({title:m,role:"dialog"});return n.useEffect(()=>{t<=0||setTimeout(()=>p(t-1),1e3)},[t]),n.useEffect(()=>{d&&d.show()},[d]),n.createElement(M,{...g,key:a},e.jsx(j,{...f}),e.jsxs(T,{...x,role:"document",style:{minWidth:"400px"},children:[e.jsx(S,{...y,children:m}),e.jsx(k,{children:e.jsxs(c,{gap:"m",direction:"column",children:[e.jsxs("p",{children:["Du blir logget ut om ",t," sekund(er)"]}),e.jsx(u,{...o})]})}),e.jsxs(C,{children:[e.jsx(l,{variant:"primary",onClick:()=>i(Date.now()),children:"Jeg er her!"}),e.jsx(l,{children:"Logg ut"})]})]}))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const H=["Countdown","SessionTimeout"];export{r as Countdown,s as SessionTimeout,H as __namedExportsOrder,z as default};
