import{r as o,j as e}from"./iframe-BhXnxIvV.js";import{B as m}from"./Button-CnhNnmdM.js";import{F as d}from"./Flex-D1mOeR5y.js";import{CompleteModal as c}from"./CompleteModal.stories-DtfELo0h.js";import{C as u}from"./Countdown-BH0d9XC1.js";import p from"./ModalBody.stories-D_qvX3wy.js";import g from"./ModalTitle.stories-DM97RbhI.js";import{b as y,d as f,f as x,g as S}from"./Modal-BJw1-Pii.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Baw_dhGG.js";import"./Loader-BvSPbzUE.js";import"./useDelayedRender-Dfg7tzqv.js";import"./SlotComponent-BTuIKmPz.js";import"./mergeRefs-BQ2i_M8N.js";/* empty css               *//* empty css               */import"./IconButton-Kv5u2PPu.js";import"./CloseIcon-4fHdd2Bc.js";import"./Icon-BxtqtHRq.js";const _={title:"Komponenter/Countdown",component:u,args:{from:5e3,isPaused:!1}},r={decorators:t=>{const[i,a]=o.useState(0);return e.jsxs(d,{direction:"column",gap:"m",children:[e.jsx("div",{children:e.jsx(t,{})},i),e.jsx(m,{variant:"secondary",onClick:()=>a(Date.now()),children:"Gjenta"})]})}},s={args:{from:6e4},render:t=>{const[i,a]=o.useState(0),[n,l]=o.useState(t.from/1e3||0);return o.useEffect(()=>{n<=0||setTimeout(()=>l(n-1),1e3)},[n]),o.createElement(y,{...c.args,role:"document",key:i,style:{minWidth:"400px"}},e.jsx(f,{...g.args,children:"Er du fortsatt der?"}),e.jsx(x,{...p.args,children:e.jsxs(d,{direction:"column",children:[e.jsxs("p",{children:["Du blir logget ut om ",n," sekund(er)"]}),e.jsx(u,{...t})]})}),e.jsxs(S,{children:[e.jsx(m,{variant:"primary",onClick:()=>a(Date.now()),children:"Jeg er her!"}),e.jsx(m,{children:"Logg ut"})]}))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const O=["Countdown","SessionTimeout"];export{r as Countdown,s as SessionTimeout,O as __namedExportsOrder,_ as default};
