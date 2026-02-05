import{r as o,j as e}from"./iframe-Bv39nkFP.js";import{B as m}from"./Button-D8ns893p.js";import{F as d}from"./Flex-CxDikLmz.js";import{CompleteModal as c}from"./CompleteModal.stories-CD3x53K8.js";import{C as u}from"./Countdown-BVNhlidE.js";import p from"./ModalBody.stories-DGw_zArh.js";import g from"./ModalTitle.stories-Bs2yygUF.js";import{b as y,d as f,f as x,g as S}from"./Modal-Lc9ss6Pd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Ld6Jcl5i.js";import"./Loader-_vltwT4M.js";import"./useDelayedRender-2vX_Qt57.js";import"./SlotComponent-9LNl1rS-.js";import"./mergeRefs-CvXccv94.js";/* empty css               *//* empty css               */import"./IconButton-CIq0R-Su.js";import"./CloseIcon-Cx8EjMrq.js";import"./Icon-CPV6UyZy.js";const _={title:"Komponenter/Countdown",component:u,args:{from:5e3,isPaused:!1}},r={decorators:t=>{const[i,a]=o.useState(0);return e.jsxs(d,{direction:"column",gap:"m",children:[e.jsx("div",{children:e.jsx(t,{})},i),e.jsx(m,{variant:"secondary",onClick:()=>a(Date.now()),children:"Gjenta"})]})}},s={args:{from:6e4},render:t=>{const[i,a]=o.useState(0),[n,l]=o.useState(t.from/1e3||0);return o.useEffect(()=>{n<=0||setTimeout(()=>l(n-1),1e3)},[n]),o.createElement(y,{...c.args,role:"document",key:i,style:{minWidth:"400px"}},e.jsx(f,{...g.args,children:"Er du fortsatt der?"}),e.jsx(x,{...p.args,children:e.jsxs(d,{direction:"column",children:[e.jsxs("p",{children:["Du blir logget ut om ",n," sekund(er)"]}),e.jsx(u,{...t})]})}),e.jsxs(S,{children:[e.jsx(m,{variant:"primary",onClick:()=>a(Date.now()),children:"Jeg er her!"}),e.jsx(m,{children:"Logg ut"})]}))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
