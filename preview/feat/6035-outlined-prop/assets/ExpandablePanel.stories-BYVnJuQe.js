import{R as v,r as m,j as e}from"./iframe-BcWBBkWW.js";import{F as y}from"./Flex-CI1hu971.js";import{E as b,a as t}from"./ExpandablePanel-DfyAxwx5.js";import{E as u}from"./Expander-QoYJ37bv.js";/* empty css               *//* empty css               */import{B as h}from"./Button-MChkLKkN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BgXl1T9v.js";import"./mergeRefs-BFk5GKrB.js";import"./useAnimatedHeightBetween-Be2LplEx.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-ZtkGsu5C.js";import"./usePreviousValue-CKyCnSRA.js";import"./ChevronDownIcon-CjoUErRU.js";import"./Icon-C_cgTqSN.js";import"./ChevronUpIcon-B26scoA5.js";import"./Loader-C7_2NwAc.js";import"./useDelayedRender-BR6p43Fo.js";const{expect:i,waitFor:x}=__STORYBOOK_MODULE_TEST__,U={title:"Komponenter/ExpandablePanel",component:t,subcomponents:{Expander:u,ExpandablePanelContent:b},args:{outlined:!1}},s={decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx(n,{})})],render:n=>e.jsx(y,{direction:"column",gap:"xs",children:["first","second","third"].map(a=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{children:"Klikk på meg for å åpne!"}),e.jsx(t.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},a))})},o={name:"Standalone",decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"standalone-trigger",children:"Hva dekker reiseforsikringen på vei til flyplassen?"}),e.jsx(t.Content,{"data-testid":"standalone-content",children:"Reiseforsikringen dekker blant annet forsinket bagasje og avbestilling ved akutt sykdom når reisen er betalt med kortet."})]}),play:async({canvas:n,userEvent:a,step:r})=>{await r("Åpne standalone panelet",async()=>{const d=n.getByTestId("standalone-trigger"),l=n.getByTestId("standalone-content");i(l).toHaveAttribute("data-expanded","false"),await a.click(d),await x(()=>{i(l).toHaveAttribute("data-expanded","true")})})}},p={name:"Kontrollert",decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>{const[a,r]=v.useState(!1),d=m.useId();return e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsxs("p",{"data-testid":"controlled-state",style:{margin:0},children:["Status: ",a?"Åpen":"Lukket"]}),e.jsx(h,{onClick:()=>r(!a),"aria-expanded":a,"aria-controls":d,children:"Åpne"}),e.jsxs(t,{...n,open:a,onOpenChange:r,id:d,children:[e.jsx(t.Header,{"data-testid":"controlled-trigger",children:"Se dekning for leiebil"}),e.jsx(t.Content,{"data-testid":"controlled-content",children:"Forsikringen dekker skade, tyveri og egenandel når bilen er leid i Norden eller EU og leieforholdet er betalt med kortet."})]})]})},play:async({canvas:n,userEvent:a,step:r})=>{const d=n.getByTestId("controlled-trigger"),l=n.getByTestId("controlled-content"),k=n.getByTestId("controlled-state");await r("Åpne kontrollert panel",async()=>{i(l).toHaveAttribute("data-expanded","false"),i(k).toHaveTextContent("Status: Lukket"),await a.click(d),await x(()=>{i(l).toHaveAttribute("data-expanded","true"),i(k).toHaveTextContent("Status: Åpen")})}),await r("Lukk kontrollert panel",async()=>{await a.click(d),await x(()=>{i(l).toHaveAttribute("data-expanded","false"),i(k).toHaveTextContent("Status: Lukket")})})}},c={name:"Starter åpen",args:{defaultOpen:!0},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"initially-open-trigger",children:"Kontaktvalg for skadehjelp"}),e.jsx(t.Content,{"data-testid":"initially-open-content",children:"Ring oss pa 55 55 55 55, start chat eller be om at en rådgiver ringer deg tilbake innen 15 minutter."})]}),play:async({canvas:n,userEvent:a,step:r})=>{const d=n.getByTestId("initially-open-trigger"),l=n.getByTestId("initially-open-content");await r("Panelet er åpent ved start",async()=>{i(l).toHaveAttribute("data-expanded","true")}),await r("Panelet kan lukkes igjen",async()=>{await a.click(d),await x(()=>{i(l).toHaveAttribute("data-expanded","false")}),await a.click(d)})}},g={name:"Lang tittel",decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 20rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"long-title-trigger",children:"Hva skjer med egenandel, avbestilling og forsinket bagasje hvis hele familien blir forsinket pa vei til flyplassen?"}),e.jsx(t.Content,{"data-testid":"long-title-content",children:"Du er dekket for forsinket bagasje, avbestilling ved akutt sykdom og egenandel pa leiebil opptil 15 000 kroner."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <Story />
            </div>],
  render: args => <Flex direction="column" gap="xs">
            {["first", "second", "third"].map(panelKey => <ExpandablePanel key={panelKey} {...args}>
                    <ExpandablePanel.Header>
                        Klikk på meg for å åpne!
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>)}
        </Flex>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Standalone",
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <div style={{
      width: "min(100%, 32rem)"
    }}>
                    <Story />
                </div>
            </div>],
  render: args => <ExpandablePanel {...args}>
            <ExpandablePanel.Header data-testid="standalone-trigger">
                Hva dekker reiseforsikringen på vei til flyplassen?
            </ExpandablePanel.Header>
            <ExpandablePanel.Content data-testid="standalone-content">
                Reiseforsikringen dekker blant annet forsinket bagasje og
                avbestilling ved akutt sykdom når reisen er betalt med kortet.
            </ExpandablePanel.Content>
        </ExpandablePanel>,
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    await step("Åpne standalone panelet", async () => {
      const trigger = canvas.getByTestId("standalone-trigger");
      const content = canvas.getByTestId("standalone-content");
      expect(content).toHaveAttribute("data-expanded", "false");
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "true");
      });
    });
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Kontrollert",
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <div style={{
      width: "min(100%, 32rem)"
    }}>
                    <Story />
                </div>
            </div>],
  render: args => {
    const [isOpen, setIsOpen] = React.useState(false);
    const id = useId();
    return <div style={{
      display: "grid",
      gap: "16px"
    }}>
                <p data-testid="controlled-state" style={{
        margin: 0
      }}>
                    Status: {isOpen ? "Åpen" : "Lukket"}
                </p>
                <Button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls={id}>
                    Åpne
                </Button>
                <ExpandablePanel {...args} open={isOpen} onOpenChange={setIsOpen} id={id}>
                    <ExpandablePanel.Header data-testid="controlled-trigger">
                        Se dekning for leiebil
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content data-testid="controlled-content">
                        Forsikringen dekker skade, tyveri og egenandel når bilen
                        er leid i Norden eller EU og leieforholdet er betalt med
                        kortet.
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            </div>;
  },
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    const trigger = canvas.getByTestId("controlled-trigger");
    const content = canvas.getByTestId("controlled-content");
    const state = canvas.getByTestId("controlled-state");
    await step("Åpne kontrollert panel", async () => {
      expect(content).toHaveAttribute("data-expanded", "false");
      expect(state).toHaveTextContent("Status: Lukket");
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "true");
        expect(state).toHaveTextContent("Status: Åpen");
      });
    });
    await step("Lukk kontrollert panel", async () => {
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "false");
        expect(state).toHaveTextContent("Status: Lukket");
      });
    });
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Starter åpen",
  args: {
    defaultOpen: true
  },
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <div style={{
      width: "min(100%, 32rem)"
    }}>
                    <Story />
                </div>
            </div>],
  render: args => <ExpandablePanel {...args}>
            <ExpandablePanel.Header data-testid="initially-open-trigger">
                Kontaktvalg for skadehjelp
            </ExpandablePanel.Header>
            <ExpandablePanel.Content data-testid="initially-open-content">
                Ring oss pa 55 55 55 55, start chat eller be om at en rådgiver
                ringer deg tilbake innen 15 minutter.
            </ExpandablePanel.Content>
        </ExpandablePanel>,
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    const trigger = canvas.getByTestId("initially-open-trigger");
    const content = canvas.getByTestId("initially-open-content");
    await step("Panelet er åpent ved start", async () => {
      expect(content).toHaveAttribute("data-expanded", "true");
    });
    await step("Panelet kan lukkes igjen", async () => {
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "false");
      });
      await userEvent.click(trigger);
    });
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Lang tittel",
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <div style={{
      width: "min(100%, 20rem)"
    }}>
                    <Story />
                </div>
            </div>],
  render: args => <ExpandablePanel {...args}>
            <ExpandablePanel.Header data-testid="long-title-trigger">
                Hva skjer med egenandel, avbestilling og forsinket bagasje hvis
                hele familien blir forsinket pa vei til flyplassen?
            </ExpandablePanel.Header>
            <ExpandablePanel.Content data-testid="long-title-content">
                Du er dekket for forsinket bagasje, avbestilling ved akutt
                sykdom og egenandel pa leiebil opptil 15 000 kroner.
            </ExpandablePanel.Content>
        </ExpandablePanel>
}`,...g.parameters?.docs?.source}}};const N=["_ExpandablePanel","ExpandablePanelStandalone","ExpandablePanelControlled","ExpandablePanelInitiallyOpen","ExpandablePanelLongTitle"];export{p as ExpandablePanelControlled,c as ExpandablePanelInitiallyOpen,g as ExpandablePanelLongTitle,o as ExpandablePanelStandalone,s as _ExpandablePanel,N as __namedExportsOrder,U as default};
