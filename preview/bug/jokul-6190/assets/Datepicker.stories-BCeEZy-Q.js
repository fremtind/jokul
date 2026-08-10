import{j as a,R as u}from"./iframe-Ce7vqFI8.js";import{D as v,f as p}from"./DatePicker-COunRSal.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-Bf_p2pnF.js";import"./index-Bvlot-KT.js";import"./formatDate-hwqa_80k.js";import"./IconButton-BnQt0QcQ.js";import"./CalendarIcon-BeVJwpbd.js";import"./Icon-aRkUlLSN.js";import"./InputGroup-C-YPBSRu.js";import"./useId-BJDOuPnz.js";import"./Label-CuVcnr1h.js";import"./SupportLabel-BhhvFw-G.js";import"./SuccessIcon-CebIjgzX.js";import"./WarningIcon-zk6nGAff.js";import"./Popover-Bsa-1LEa.js";import"./floating-ui.react-Dq3IyyUb.js";import"./getThemeAndSize-CZAj3IXt.js";import"./BaseTextInput-qjlh1QLj.js";import"./Button-D59FTHX9.js";import"./usePreviousValue-Bg0OHlue.js";import"./Loader-CmlQaVPV.js";import"./useDelayedRender-DL2DWpgL.js";import"./ArrowRightIcon-DVM3OOar.js";import"./ChevronDownIcon-CyaEVv2y.js";const{expect:n,fn:x,screen:w,waitFor:f,within:k}=__STORYBOOK_MODULE_TEST__,Q={title:"Komponenter/DatePicker",component:v,args:{action:{disabled:!1},days:["M","T","O","T","F","L","S"],defaultShow:!1,defaultValue:p(new Date),disableBeforeDate:p(new Date(new Date().setDate(new Date().getDate()-14))),disableAfterDate:p(new Date(new Date().setDate(new Date().getDate()+14))),description:"Kortet er gyldig i 3 måneder fra denne datoen",label:"Når skal du reise?",labelProps:{srOnly:!1,variant:"small"},hideCalendarLabel:"Lukk kalender",showCalendarLabel:"Åpne kalender",invalid:!1,months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],monthLabel:"Måned",placeholder:"dd.mm.åååå",yearsToShow:new Date().getFullYear(),yearLabel:"År",textInputProps:{disabled:!1,readOnly:!1}}};function b({args:e,initialValue:s=""}){const[r,i]=u.useState(s),[t,o]=u.useState(""),[C,D]=u.useState("");return a.jsxs("div",{style:{display:"grid",gap:"16px",width:"20rem"},children:[a.jsx(v,{...e,value:r,defaultValue:void 0,disableBeforeDate:void 0,disableAfterDate:void 0,onChange:(g,m,y)=>{i(g.target.value),o(m?p(m):""),D(y.value),e.onChange?.(g,m,y)}}),a.jsxs("dl",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"4px 12px",margin:0},children:[a.jsx("dt",{children:"event.target.value"}),a.jsx("dd",{"data-testid":"event-target-value",style:{margin:0},children:r||"(tom)"}),a.jsx("dt",{children:"date"}),a.jsx("dd",{"data-testid":"date-value",style:{margin:0},children:t||"(tom)"}),a.jsx("dt",{children:"meta.value"}),a.jsx("dd",{"data-testid":"meta-value",style:{margin:0},children:C||"(tom)"})]})]})}const l={args:{},render:e=>a.jsx(v,{...e,disableBeforeDate:e.disableBeforeDate,disableAfterDate:e.disableAfterDate})},d={name:"API ved kalenderklikk",args:{onChange:x()},render:e=>a.jsx(b,{args:e,initialValue:"10.11.2022"}),play:async({args:e,canvasElement:s,userEvent:r,step:i})=>{const t=k(s);await i("Velg dato i kalenderen",async()=>{await r.click(t.getByRole("button",{name:/åpne kalender/i})),await f(()=>{n(w.getByTestId("jkl-calendar")).toBeInTheDocument()}),await r.click(w.getByLabelText("11. november"))}),await i("Vis at vanlig onChange-bruk fortsatt fungerer",async()=>{await n(t.getByTestId("event-target-value")).toHaveTextContent("11.11.2022"),await n(t.getByTestId("date-value")).toHaveTextContent("11.11.2022"),await n(t.getByTestId("meta-value")).toHaveTextContent("11.11.2022"),await n(e.onChange).toHaveBeenCalled()})}},c={name:"API ved kompakt input",args:{onChange:x()},render:e=>a.jsx(b,{args:e}),play:async({args:e,canvasElement:s,userEvent:r,step:i})=>{const t=k(s),o=t.getByRole("textbox",{name:/når skal du reise/i});await i('Skriv "11112022" i feltet',async()=>{await r.clear(o),await r.type(o,"11112022")}),await i("Vis at kontrollert bruk via event.target.value er uendret",async()=>{await n(o).toHaveValue("11.11.2022"),await n(t.getByTestId("event-target-value")).toHaveTextContent("11.11.2022"),await n(t.getByTestId("date-value")).toHaveTextContent("11.11.2022"),await n(t.getByTestId("meta-value")).toHaveTextContent("11.11.2022"),await n(e.onChange).toHaveBeenCalled()})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <DatePickerComponent {...args} disableBeforeDate={args.disableBeforeDate} disableAfterDate={args.disableAfterDate} />
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "API ved kalenderklikk",
  args: {
    onChange: fn()
  },
  render: args => <DatePickerApiCompatibilityExample args={args} initialValue="10.11.2022" />,
  play: async ({
    args,
    canvasElement,
    userEvent,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Velg dato i kalenderen", async () => {
      await userEvent.click(canvas.getByRole("button", {
        name: /åpne kalender/i
      }));
      await waitFor(() => {
        expect(screen.getByTestId("jkl-calendar")).toBeInTheDocument();
      });
      await userEvent.click(screen.getByLabelText("11. november"));
    });
    await step("Vis at vanlig onChange-bruk fortsatt fungerer", async () => {
      await expect(canvas.getByTestId("event-target-value")).toHaveTextContent("11.11.2022");
      await expect(canvas.getByTestId("date-value")).toHaveTextContent("11.11.2022");
      await expect(canvas.getByTestId("meta-value")).toHaveTextContent("11.11.2022");
      await expect(args.onChange).toHaveBeenCalled();
    });
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "API ved kompakt input",
  args: {
    onChange: fn()
  },
  render: args => <DatePickerApiCompatibilityExample args={args} />,
  play: async ({
    args,
    canvasElement,
    userEvent,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", {
      name: /når skal du reise/i
    });
    await step('Skriv "11112022" i feltet', async () => {
      await userEvent.clear(input);
      await userEvent.type(input, "11112022");
    });
    await step("Vis at kontrollert bruk via event.target.value er uendret", async () => {
      await expect(input).toHaveValue("11.11.2022");
      await expect(canvas.getByTestId("event-target-value")).toHaveTextContent("11.11.2022");
      await expect(canvas.getByTestId("date-value")).toHaveTextContent("11.11.2022");
      await expect(canvas.getByTestId("meta-value")).toHaveTextContent("11.11.2022");
      await expect(args.onChange).toHaveBeenCalled();
    });
  }
}`,...c.parameters?.docs?.source}}};const W=["DatePicker","CalendarSelectionApiCompatibility","CompactInputApiCompatibility"];export{d as CalendarSelectionApiCompatibility,c as CompactInputApiCompatibility,l as DatePicker,W as __namedExportsOrder,Q as default};
