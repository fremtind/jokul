import{r as o,j as e}from"./iframe-B7gDD584.js";import{B as m}from"./Button-BiIeODUU.js";import{F as d}from"./Flex-B_bkG2Qe.js";import{CompleteModal as c}from"./CompleteModal.stories-C0fPel6P.js";import{C as u}from"./Countdown-D-ApKea-.js";import p from"./ModalBody.stories-CpAliHuB.js";import g from"./ModalTitle.stories-Dohtw0dT.js";import{b as y,d as f,f as x,g as S}from"./Modal-BvA4t4D3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-B7r3MVRZ.js";import"./Loader-BJ7rZw1m.js";import"./useDelayedRender-C4IYJ_1J.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-ApzK60ye.js";import"./mergeRefs-6d--RonS.js";/* empty css               *//* empty css               */import"./IconButton-0K8oc_iK.js";import"./CloseIcon-CUCLkKds.js";import"./Icon-D0qktbNk.js";const O={title:"Komponenter/Countdown",component:u,args:{from:5e3,isPaused:!1}},r={decorators:t=>{const[i,a]=o.useState(0);return e.jsxs(d,{direction:"column",gap:"m",children:[e.jsx("div",{children:e.jsx(t,{})},i),e.jsx(m,{variant:"secondary",onClick:()=>a(Date.now()),children:"Gjenta"})]})}},s={args:{from:6e4},render:t=>{const[i,a]=o.useState(0),[n,l]=o.useState(t.from/1e3||0);return o.useEffect(()=>{n<=0||setTimeout(()=>l(n-1),1e3)},[n]),o.createElement(y,{...c.args,role:"document",key:i,style:{minWidth:"400px"}},e.jsx(f,{...g.args,children:"Er du fortsatt der?"}),e.jsx(x,{...p.args,children:e.jsxs(d,{direction:"column",children:[e.jsxs("p",{children:["Du blir logget ut om ",n," sekund(er)"]}),e.jsx(u,{...t})]})}),e.jsxs(S,{children:[e.jsx(m,{variant:"primary",onClick:()=>a(Date.now()),children:"Jeg er her!"}),e.jsx(m,{children:"Logg ut"})]}))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    useEffect(() => {
      if (sessionTimeout <= 0) {
        return;
      }
      setTimeout(() => setSessionTimeout(sessionTimeout - 1), 1000);
    }, [sessionTimeout]);
    return <Modal {...CompleteModal.args} role="document" key={key} style={{
      minWidth: "400px"
    }}>
                <ModalTitle {...ModalTitleStories.args}>
                    Er du fortsatt der?
                </ModalTitle>
                <ModalBody {...ModalBodyStories.args}>
                    <Flex direction="column">
                        <p>Du blir logget ut om {sessionTimeout} sekund(er)</p>
                        <CountdownComponent {...args} />
                    </Flex>
                </ModalBody>
                <ModalActions>
                    <Button variant="primary" onClick={() => setKey(Date.now())}>
                        Jeg er her!
                    </Button>
                    <Button>Logg ut</Button>
                </ModalActions>
            </Modal>;
  }
}`,...s.parameters?.docs?.source}}};const P=["Countdown","SessionTimeout"];export{r as Countdown,s as SessionTimeout,P as __namedExportsOrder,O as default};
