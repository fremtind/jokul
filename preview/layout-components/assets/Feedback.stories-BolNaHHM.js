import{j as e}from"./jsx-runtime-D9p_MChh.js";import{r}from"./index-CRL2yuNo.js";import{P as V,T as E,S as ke}from"./Button-BPhaSTk9.js";import{c as Z}from"./clsx-B-dksMZM.js";import{S as be}from"./Message--GZugzpD.js";import{a as fe}from"./RadioButton-DmCQ2gr9.js";import{R as ye}from"./RadioButtonGroup-CSzcmYED.js";import{F as X}from"./FieldGroup-Bkna7AIf.js";import{T as J}from"./TextArea-izZPI-RK.js";import{C as he}from"./Checkbox-DROFM54e.js";import{u as je}from"./useAnimatedHeight-B__Vaf29.js";import{T as B}from"./TextInput-DdqBCKkF.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./usePreviousValue-B4HAJZS8.js";import"./Loader-BBBxl9FC.js";import"./useDelayedRender-ClAGw7sE.js";import"./useId-BJAJhdYZ.js";import"./ErrorIcon-1chdNO9D.js";import"./Icon-BsB2AusX.js";import"./InfoIcon-BvZwwj-X.js";import"./WarningIcon-B-HIgOlo.js";import"./DismissButton-DWTl2b8Z.js";import"./CloseIcon-BmhIuoBP.js";import"./SupportLabel-umH_qbZM.js";import"./BaseRadioButton-DRTWvVgP.js";import"./Label-C5Kh-mkG.js";import"./InputGroup-BiaUcKYD.js";import"./tokens-NmszT_nq.js";import"./useBrowserPreferences-pnXkstjW.js";import"./BaseTextInput-C__xg0MO.js";import"./IconButton-BK1PK2Od.js";const Se={feedbackSubmitted:!1,followupStarted:!1,followupSubmitted:!1,contactSubmitted:!1,setFeedbackSubmitted:()=>null,setFollowupStarted:()=>null,setFollowupSubmitted:()=>null,setContactSubmitted:()=>null},Y=r.createContext(Se),T=()=>r.useContext(Y),ee=({value:t,children:o})=>e.jsx(Y.Provider,{value:t,children:o});ee.__docgenInfo={description:"",methods:[],displayName:"FeedbackContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},value:{required:!0,tsType:{name:"intersection",raw:`{
    feedbackSubmitted: boolean;
    followupStarted: boolean;
    followupSubmitted: boolean;
    contactSubmitted: boolean;
    landmarkLabel?: string;
    setFeedbackSubmitted: (state: boolean) => void;
    setFollowupStarted: (state: boolean) => void;
    setFollowupSubmitted: (state: boolean) => void;
    setContactSubmitted: (state: boolean) => void;
} & Pick<BaseTextAreaProps, "counter">`,elements:[{name:"signature",type:"object",raw:`{
    feedbackSubmitted: boolean;
    followupStarted: boolean;
    followupSubmitted: boolean;
    contactSubmitted: boolean;
    landmarkLabel?: string;
    setFeedbackSubmitted: (state: boolean) => void;
    setFollowupStarted: (state: boolean) => void;
    setFollowupSubmitted: (state: boolean) => void;
    setContactSubmitted: (state: boolean) => void;
}`,signature:{properties:[{key:"feedbackSubmitted",value:{name:"boolean",required:!0}},{key:"followupStarted",value:{name:"boolean",required:!0}},{key:"followupSubmitted",value:{name:"boolean",required:!0}},{key:"contactSubmitted",value:{name:"boolean",required:!0}},{key:"landmarkLabel",value:{name:"string",required:!1}},{key:"setFeedbackSubmitted",value:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}},required:!0}},{key:"setFollowupStarted",value:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}},required:!0}},{key:"setFollowupSubmitted",value:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}},required:!0}},{key:"setContactSubmitted",value:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}},required:!0}}]}},{name:"Pick",elements:[{name:"BaseTextAreaProps"},{name:"literal",value:'"counter"'}],raw:'Pick<BaseTextAreaProps, "counter">'}]},description:""}}};const H=({children:t,className:o,...i})=>e.jsx(be,{className:Z("jkl-feedback__fade-in",o),...i,"aria-live":"polite",children:t});H.__docgenInfo={description:"",methods:[],displayName:"FeedbackSuccess",props:{fullWidth:{required:!1,tsType:{name:"boolean"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},dismissed:{required:!1,tsType:{name:"boolean"},description:""},dismissAction:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    handleDismiss: () => void;
    buttonTitle?: string;
}`,signature:{properties:[{key:"handleDismiss",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"buttonTitle",value:{name:"string",required:!1}}]}},description:""}}};const te=r.createContext(void 0),R=()=>r.useContext(te),ne=({state:t,children:o})=>e.jsx(te.Provider,{value:t,children:o});ne.__docgenInfo={description:"",methods:[],displayName:"FollowUpProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    questions: BaseQuestion[];
    values: FeedbackAnswer[] | undefined;
    currentValue?: FeedbackOption | FeedbackOption[];
    step: FollowUpStep;
    submitted: boolean;
    handleNext: (e?: FormEvent<HTMLFormElement>) => void;
    handleAbort: () => void;
    setCurrentValue: Dispatch<
        SetStateAction<FeedbackOption | FeedbackOption[] | undefined>
    >;
}`,signature:{properties:[{key:"questions",value:{name:"Array",elements:[{name:"BaseQuestion"}],raw:"BaseQuestion[]",required:!0}},{key:"values",value:{name:"union",raw:"FeedbackAnswer[] | undefined",elements:[{name:"Array",elements:[{name:"union",raw:"SingleFeedbackAnswer | MultiFeedbackAnswer",elements:[{name:"SingleFeedbackAnswer"},{name:"MultiFeedbackAnswer"}]}],raw:"FeedbackAnswer[]"},{name:"undefined"}],required:!0}},{key:"currentValue",value:{name:"union",raw:"FeedbackOption | FeedbackOption[]",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"}],required:!1}},{key:"step",value:{name:"signature",type:"object",raw:`{
    number: number;
    question: BaseQuestion;
    isLast: boolean;
}`,signature:{properties:[{key:"number",value:{name:"number",required:!0}},{key:"question",value:{name:"BaseQuestion",required:!0}},{key:"isLast",value:{name:"boolean",required:!0}}]},required:!0}},{key:"submitted",value:{name:"boolean",required:!0}},{key:"handleNext",value:{name:"signature",type:"function",raw:"(e?: FormEvent<HTMLFormElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLFormElement"}],raw:"FormEvent<HTMLFormElement>"},name:"e"}],return:{name:"void"}},required:!0}},{key:"handleAbort",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"setCurrentValue",value:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"union",raw:"FeedbackOption | FeedbackOption[] | undefined",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},{name:"undefined"}]}],raw:"SetStateAction<FeedbackOption | FeedbackOption[] | undefined>"}],raw:`Dispatch<
    SetStateAction<FeedbackOption | FeedbackOption[] | undefined>
>`,required:!0}}]}},description:""}}};const re=r.createContext(void 0),F=()=>r.useContext(re),ae=({state:t,children:o})=>e.jsx(re.Provider,{value:t,children:o});ae.__docgenInfo={description:"",methods:[],displayName:"MainQuestionContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    currentValue?: FeedbackOption | FeedbackOption[];
    setCurrentValue: Dispatch<
        SetStateAction<FeedbackOption | FeedbackOption[] | undefined>
    >;
    message?: string;
    setMessage: Dispatch<SetStateAction<string | undefined>>;
    submitted: boolean;
    handleSubmit: FormEventHandler<HTMLFormElement>;
}`,signature:{properties:[{key:"currentValue",value:{name:"union",raw:"FeedbackOption | FeedbackOption[]",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"}],required:!1}},{key:"setCurrentValue",value:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"union",raw:"FeedbackOption | FeedbackOption[] | undefined",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},{name:"undefined"}]}],raw:"SetStateAction<FeedbackOption | FeedbackOption[] | undefined>"}],raw:`Dispatch<
    SetStateAction<FeedbackOption | FeedbackOption[] | undefined>
>`,required:!0}},{key:"message",value:{name:"string",required:!1}},{key:"setMessage",value:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}],raw:"SetStateAction<string | undefined>"}],raw:"Dispatch<SetStateAction<string | undefined>>",required:!0}},{key:"submitted",value:{name:"boolean",required:!0}},{key:"handleSubmit",value:{name:"FormEventHandler",elements:[{name:"HTMLFormElement"}],raw:"FormEventHandler<HTMLFormElement>",required:!0}}]}},description:""}}};const se=({label:t,name:o,options:i,helpLabel:a,autoFocus:g=!1})=>{const v=R(),l=F(),n=v||l,u=r.useRef(null);r.useEffect(()=>{g&&u.current&&u.current.focus()},[g]);const m=s=>{const{value:c}=s.target,p=i==null?void 0:i.find(d=>d.value.toString()===c);if(p){if(!(n!=null&&n.currentValue)){n==null||n.setCurrentValue([p]);return}if(Array.isArray(n==null?void 0:n.currentValue)){const d=n.currentValue.find(k=>k===p);d?n.setCurrentValue(k=>k.filter(b=>b!==d)):n.setCurrentValue(k=>[...k,p])}}};return n?e.jsx(X,{labelProps:{variant:"large"},legend:t,helpLabel:a,children:i==null?void 0:i.map((s,c)=>e.jsx(he,{name:o||t,value:s.value.toString(),onChange:m,ref:c===0?u:void 0,children:s.label},`${t}-${s.value}`))}):(console.error("Questions must be used inside a Followup or Feedback context provider"),null)};se.__docgenInfo={description:"",methods:[],displayName:"CheckboxQuestion",props:{type:{required:!1,tsType:{name:"union",raw:'"radio" | "checkbox" | "text" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"text"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const O=({label:t,name:o,options:i,helpLabel:a,autoFocus:g=!1})=>{const v=R(),l=F(),n=v||l,u=r.useId(),m=(i==null?void 0:i.length)||0,s=r.useRef(null);r.useEffect(()=>{g&&s.current&&s.current.focus()},[g]);const c=d=>{const k=i==null?void 0:i.find(b=>b.value.toString()===d.target.value);n==null||n.setCurrentValue(k)},p=r.useMemo(()=>{var d;return Array.isArray(n==null?void 0:n.currentValue)?n==null?void 0:n.currentValue[0].value.toString():(d=n==null?void 0:n.currentValue)==null?void 0:d.value.toString()},[n==null?void 0:n.currentValue]);return n?e.jsx(ye,{legend:t,labelProps:{variant:"large"},name:`${u}-${o||t}`,inline:m<3,value:p||"",onChange:c,helpLabel:a,children:i==null?void 0:i.map((d,k)=>e.jsx(fe,{ref:k===0?s:void 0,label:d.label,value:String(d.value)},`${u}-${o||t}-${d.value}`))}):(console.error("Questions must be used inside a Followup or Feedback context provider"),null)};O.__docgenInfo={description:"",methods:[],displayName:"RadioQuestion",props:{type:{required:!1,tsType:{name:"union",raw:'"radio" | "checkbox" | "text" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"text"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ie=({label:t,name:o,helpLabel:i="Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre.",autoFocus:a=!1})=>{const{counter:g}=T(),v=R(),l=F(),n=v||l,u=r.useRef(null);r.useEffect(()=>{a&&u.current&&u.current.focus()},[a]);const m=c=>{const p={label:t,name:o||t,type:"text",value:c.target.value};n==null||n.setCurrentValue(p)},s=r.useMemo(()=>{var c;return Array.isArray(n==null?void 0:n.currentValue)?n==null?void 0:n.currentValue[0].value.toString():(c=n==null?void 0:n.currentValue)==null?void 0:c.value.toString()},[n==null?void 0:n.currentValue]);return n?e.jsx(J,{ref:u,label:t,labelProps:{variant:"large"},name:o||t,startOpen:!0,rows:5,value:s,onChange:m,helpLabel:i,counter:g}):(console.error("Questions must be used inside a Followup or Feedback context provider"),null)};ie.__docgenInfo={description:"",methods:[],displayName:"TextQuestion",props:{type:{required:!1,tsType:{name:"union",raw:'"radio" | "checkbox" | "text" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"text"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre."',computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const le=[{label:"Veldig misfornøyd",value:1,textAreaLabel:"Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."},{label:"Litt misfornøyd",value:2,textAreaLabel:"Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."},{label:"Midt på treet",value:3,textAreaLabel:"Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."},{label:"Ganske fornøyd",value:4,textAreaLabel:"Så bra! Har du noen tilbakemeldinger kan du skrive dem her."},{label:"Veldig fornøyd",value:5,textAreaLabel:"Så bra! Har du noen tilbakemeldinger kan du skrive dem her."}],A=({children:t})=>e.jsxs("svg",{className:"jkl-feedback-smiley-option__icon","aria-hidden":!0,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"20",cy:"20",r:"19",stroke:"currentColor",strokeWidth:"2"}),t]}),we=()=>e.jsxs(A,{children:[e.jsx("path",{d:"M10 30C10 24.4772 14.4772 20 20 20C25.5228 20 30 24.4772 30 30",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M10 13.9865H16.6667",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M23.3333 13.9865H29.9999",stroke:"currentColor",strokeWidth:"2"})]}),xe=()=>e.jsxs(A,{children:[e.jsx("path",{d:"M10 28.75C10 28.75 13.75 23.3334 20 23.3334C26.25 23.3334 30 28.75 30 28.75",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"12.5",cy:"14.5",r:"1.5",fill:"currentColor"}),e.jsx("circle",{cx:"27.5",cy:"14.5",r:"1.5",fill:"currentColor"})]}),I=()=>e.jsxs(A,{children:[e.jsx("path",{d:"M9.15283 25.6986H30.8477",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"12.5",cy:"14.5",r:"1.5",fill:"currentColor"}),e.jsx("circle",{cx:"27.5",cy:"14.5",r:"1.5",fill:"currentColor"})]}),qe=()=>e.jsxs(A,{children:[e.jsx("path",{d:"M10 23.3334C10 23.3334 12.9167 30 20 30C27.0833 30 30 23.3334 30 23.3334",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"12.5",cy:"14.5",r:"1.5",fill:"currentColor"}),e.jsx("circle",{cx:"27.5",cy:"14.5",r:"1.5",fill:"currentColor"})]}),Te=()=>e.jsxs(A,{children:[e.jsx("path",{d:"M30 21C30 26.5228 25.5228 31 20 31C14.4772 31 10 26.5228 10 21",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M24 14.5H29",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"12.5",cy:"14.5",r:"1.5",fill:"currentColor"})]}),oe=t=>{switch(t){case 1:return e.jsx(we,{});case 2:return e.jsx(xe,{});case 3:return e.jsx(I,{});case 4:return e.jsx(qe,{});case 5:return e.jsx(Te,{});default:return e.jsx(I,{})}};oe.__docgenInfo={description:"",methods:[],displayName:"getSmiley"};const Fe=t=>typeof t.value!="number"||![1,2,3,4,5].includes(t.value),ue=({label:t,name:o="smiley",helpLabel:i,options:a=le})=>{const g=R(),v=F(),l=g||v,n=r.useId(),u=s=>{console.log(s.target.value);const c=a==null?void 0:a.find(p=>p.value.toString()===s.target.value);l==null||l.setCurrentValue(c)},m=r.useMemo(()=>{var s;return Array.isArray(l==null?void 0:l.currentValue)?l==null?void 0:l.currentValue[0].value:(s=l==null?void 0:l.currentValue)==null?void 0:s.value},[l==null?void 0:l.currentValue]);return a.some(Fe)?(console.error("SmileyQuestion må ha tallene 1 til 5 som verdier for alternativene sine"),null):!l||!a?(console.error("Questions must be used inside a Followup or Feedback context provider"),null):e.jsx(X,{labelProps:{variant:"large"},legend:t,helpLabel:i,children:e.jsx("div",{className:"jkl-feedback-smileys",children:a.map(s=>e.jsxs(r.Fragment,{children:[e.jsx("input",{className:"jkl-sr-only",id:`${n}-${o}-${s.value}`,name:`${n}-${o}`,type:"radio",value:s.value,onChange:u,checked:m===s.value}),e.jsxs("label",{className:"jkl-feedback-smiley-option",htmlFor:`${n}-${o}-${s.value}`,children:[e.jsx("span",{className:"jkl-sr-only",children:s.label}),oe(Number(s.value))]})]},s.value))})})};ue.__docgenInfo={description:"",methods:[],displayName:"SmileyQuestion",props:{type:{required:!1,tsType:{name:"union",raw:'"radio" | "checkbox" | "text" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"text"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"smiley"',computed:!1}},helpLabel:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:"",defaultValue:{value:"defaultOptions",computed:!0}},autoFocus:{required:!1,tsType:{name:"boolean"},description:""}}};const de=({helpLabel:t="Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre.",label:o})=>{const{counter:i}=T(),a=F(),[g,v]=r.useState();if(r.useEffect(()=>{var s,c,p;const m=Array.isArray(a==null?void 0:a.currentValue)?(s=a==null?void 0:a.currentValue[0].textAreaLabel)==null?void 0:s.toString():(p=(c=a==null?void 0:a.currentValue)==null?void 0:c.textAreaLabel)==null?void 0:p.toString();v(m||o)},[a==null?void 0:a.currentValue,o]),!a)return console.error("Addon question must be used inside a MainQuestion context provider"),null;const{message:l,setMessage:n}=a,u=m=>n(m.target.value);return e.jsxs(e.Fragment,{children:[a.currentValue!==void 0&&e.jsxs("div",{className:"jkl-sr-only","aria-live":"polite",children:[g," ",t]}),e.jsx(J,{startOpen:!0,rows:4,"data-testid":"jkl-feedback__open-question",className:"jkl-spacing-xl--bottom jkl-spacing-xl--top",label:g,labelProps:{srOnly:!0},placeholder:g,helpLabel:t,value:l||"",onChange:u,counter:i})]})};de.__docgenInfo={description:"",methods:[],displayName:"AddonQuestion",props:{label:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre."',computed:!1}}}};const Ae=/^[a-zA-ZæøåÆØÅ0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-ZæøåÆØÅ0-9-]+(?:\.[a-zA-Z0-9-]+)+$/,Ce=t=>Ae.test(t),Le=/^\d{8}$/,Ne=t=>Le.test(t),Ve=t=>{if(!t||t==="")return"Du må oppgi e-postadresse for at vi kan kontakte deg";if(!Ce(t))return"Skriv inn en gyldig e-postadresse"},Ee=t=>{if(!t||t==="")return"Du må oppgi telefonnummer for at vi kan kontakte deg";if(!Ne(t))return"Skriv inn et gyldig telefonnummer"},He={title:"Takk for tiden din!",children:"Neste gang vi gjennomfører intervjuer og tester kan det hende vi tar kontakt med deg. Dine innspill hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem."},me=({label:t="Kan vi kontakte deg for flere innspill?",sendButtonLabel:o="Sett meg på lista!",withPhone:i=!1,onSubmit:a,successMessage:g=He,children:v})=>{const[l,n]=r.useState(""),[u,m]=r.useState(""),[s,c]=r.useState({}),p=r.useRef(null),d=r.useRef(null),[k,b]=r.useState(!1),[f,h]=r.useState(!1),{contactSubmitted:j,setContactSubmitted:y,landmarkLabel:x}=T(),Q=typeof v=="string"?"p":"div",_=r.useCallback((S,w)=>{const C=Ve(S),q=Ee(w);return c({email:C,phone:q}),{emailError:C,phoneError:q}},[]);r.useEffect(()=>{if(k){const{emailError:S,phoneError:w}=_(l,u);!S&&(!i||!w)&&b(!1)}},[l,u,k,i,_]);const D=S=>w=>S(w.target.value),ve=S=>{var q,P;S.preventDefault();const{emailError:w,phoneError:C}=_(l,u);if(w){b(!0),(q=p.current)==null||q.focus();return}if(i&&C){b(!0),(P=d.current)==null||P.focus();return}a({email:l,phone:i?u:void 0}),y(!0)};return f?null:j?e.jsx(H,{...g}):e.jsxs("form",{className:"jkl-spacing-xl--top",onSubmit:ve,"aria-label":x,children:[e.jsx("p",{className:"jkl-heading-4 jkl-spacing-xs--bottom",children:t}),v&&e.jsx(Q,{className:"jkl-body",children:v}),e.jsx(B,{ref:p,className:"jkl-spacing-l--top",label:"E-post",labelProps:{variant:"small"},autoComplete:"email",name:"email",value:l,onChange:D(n),errorLabel:s.email}),i&&e.jsx(B,{ref:d,className:"jkl-spacing-l--top",label:"Telefonnummer",labelProps:{variant:"small"},autoComplete:"tel",name:"phone",value:u,onChange:D(m),errorLabel:s.phone}),e.jsxs("div",{className:"jkl-spacing-xl--top",children:[e.jsx(V,{type:"submit",className:"jkl-spacing-xl--right",children:o}),e.jsx(E,{onClick:()=>h(!0),children:"Nei takk"})]})]})};me.__docgenInfo={description:"",methods:[],displayName:"ContactQuestion",props:{label:{required:!1,tsType:{name:"string"},description:`Lar deg tilpasse spørsmålsteksten.
@default "Kan vi kontakte deg for flere innspill?"`,defaultValue:{value:'"Kan vi kontakte deg for flere innspill?"',computed:!1}},sendButtonLabel:{required:!1,tsType:{name:"string"},description:`Lar deg tilpasse teksten på knappen for innsending.
@default "Sett meg på lista!"`,defaultValue:{value:'"Sett meg på lista!"',computed:!1}},withPhone:{required:!1,tsType:{name:"boolean"},description:"Sett til true om du også vil spørre om brukjerens telefonnummer i tillegg til epost",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:`Her kan du legge inn eventuelt annet innhold du vil ha med.
 Kommer mellom overskriften og feltene for utfylling`},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: { email: string; phone?: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ email: string; phone?: string }",signature:{properties:[{key:"email",value:{name:"string",required:!0}},{key:"phone",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"void"}}},description:""},successMessage:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    title: string;
    children: ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactNode",required:!0}}]}},description:"Lar deg tilpasse meldingen som kommer når brukeren sender inn skjemaet.",defaultValue:{value:`{
    title: "Takk for tiden din!",
    children:
        "Neste gang vi gjennomfører intervjuer og tester kan det hende vi tar kontakt med deg. Dine innspill hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem.",
}`,computed:!1}}}};const pe=t=>{switch(t){case"radio":return O;case"checkbox":return se;case"text":return ie;case"smiley":return ue;default:return O}},Re=(t,o)=>{const[i,a]=r.useState(),[g,v]=r.useState({number:0,question:t[0],isLast:t.length===1}),[l,n]=r.useState(!1),[u,m]=r.useState(!1),[s,c]=r.useState(),p=r.useRef({values:i,submitted:u,onSubmit:o});r.useEffect(()=>{p.current={...p.current,values:i,submitted:u}},[i,u]);const d=r.useCallback(()=>{!p.current.submitted&&p.current.values!==void 0&&p.current.onSubmit(p.current.values)},[]);function k(f){f==null||f.preventDefault();const h=Array.isArray(s)?s.map(y=>y.value.toString()):s==null?void 0:s.value,j={...g.question,name:g.question.name||g.question.label,value:h};a(y=>[...(y==null?void 0:y.filter(Q=>Q.name!==j.name))||[],j]),c(void 0),g.isLast?n(!0):v(y=>{const x=y.number+1;return{number:x,question:t[x],isLast:x+1>=t.length}})}function b(){a(void 0),c(void 0),v({number:0,question:t[0],isLast:t.length===1}),m(!0)}return r.useEffect(()=>{l&&(d(),m(!0))},[l,d]),r.useEffect(()=>(typeof window<"u"&&window.addEventListener("beforeunload",d),()=>{d(),window.removeEventListener("beforeunload",d)}),[d]),{questions:t,values:i,step:g,currentValue:s,setCurrentValue:c,submitted:u,handleNext:k,handleAbort:b}},Me={title:"Takk, igjen!",children:"Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem."},ce=({questions:t,successMessage:o=Me,onSubmit:i})=>{const[a,g]=r.useState(!1),v=r.useRef(null),l=Re(t,i),{handleAbort:n,handleNext:u,step:m,submitted:s}=l,{followupStarted:c,setFollowupStarted:p,setFollowupSubmitted:d,contactSubmitted:k,landmarkLabel:b}=T();r.useEffect(()=>{var j;m.number!==0&&((j=v.current)==null||j.focus())},[m]),r.useEffect(()=>{d(s)},[s,d]);const f=pe(t[m.number].type),h=m.isLast?V:ke;return a?null:e.jsx("div",{"aria-live":"polite",children:e.jsxs(ne,{state:l,children:[!c&&e.jsxs("div",{className:"jkl-feedback__fade-in",children:[e.jsx("p",{className:"jkl-heading-4 jkl-spacing-xl--top jkl-spacing-xs--bottom",children:"Har du tid til å svare på noen flere spørsmål?"}),e.jsx("p",{className:"jkl-body jkl-spacing-xl--bottom",children:"Det tar kun et minutt, og hjelper oss å lage bedre løsninger for deg."}),e.jsx(V,{onClick:()=>p(!0),className:"jkl-spacing-xl--right",children:"Jeg har tid!"}),e.jsx(E,{onClick:()=>g(!0),children:"Nei takk"})]}),!s&&c&&e.jsxs("form",{onSubmit:u,className:"jkl-feedback__fade-in","aria-label":b,children:[e.jsxs("p",{className:"jkl-feedback__step-counter",ref:v,children:["Steg ",m.number+1," av ",t.length]}),r.createElement(f,{...t[m.number],autoFocus:!0,key:m.number}),e.jsxs("div",{className:"jkl-spacing-xl--top","aria-live":"off",children:[e.jsx(h,{type:"submit",children:m.isLast?"Send inn":"Neste"}),e.jsx(E,{onClick:n,className:"jkl-spacing-xl--left",children:"Avbryt"})]})]}),s&&!k&&e.jsx(H,{...o})]})})};ce.__docgenInfo={description:"",methods:[],displayName:"Followup",props:{questions:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"MainQuestion | TextQuestion | CheckboxQuestion",elements:[{name:"union",raw:"RadioQuestion | SmileyQuestion",elements:[{name:"RadioQuestion"},{name:"SmileyQuestion"}]},{name:"TextQuestion"},{name:"CheckboxQuestion"}]}],raw:"FollowupQuestion[]"},description:"Spørsmålet/ene som skal stilles. Kan være av typen radio, checkbox eller text"},successMessage:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    title: string;
    children: ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactNode",required:!0}}]}},description:"Lar deg tilpasse meldingen som kommer når brukeren har svart på spørsmålene.",defaultValue:{value:`{
    title: "Takk, igjen!",
    children:
        "Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem.",
}`,computed:!1}},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FeedbackAnswer[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"SingleFeedbackAnswer | MultiFeedbackAnswer",elements:[{name:"SingleFeedbackAnswer"},{name:"MultiFeedbackAnswer"}]}],raw:"FeedbackAnswer[]"},name:"values"}],return:{name:"void"}}},description:""}}};const Qe=t=>{const[o,i]=r.useState(),[a,g]=r.useState(),[v,l]=r.useState(!1),n=r.useRef({onSubmit:t,currentValue:o,message:a,submitted:v});r.useEffect(()=>{n.current={...n.current,onSubmit:t,currentValue:o,message:a,submitted:v}},[t,o,a,v]);const u=r.useCallback((c=!0)=>{const{message:p,currentValue:d,submitted:k,onSubmit:b}=n.current;if(!k&&d!==void 0){const f=Array.isArray(d)?d.map(h=>h.value):d==null?void 0:d.value;b({feedbackValue:f,intentionalSubmit:c,...c&&p?{message:p}:{}})}},[]),m=r.useCallback(()=>u(!1),[u]);return r.useEffect(()=>(typeof window<"u"&&window.addEventListener("beforeunload",m),()=>{m(),window.removeEventListener("beforeunload",m)}),[m]),{currentValue:o,setCurrentValue:i,message:a,setMessage:g,submitted:v,handleSubmit:c=>{c.preventDefault(),u(),l(!0)}}},_e={title:"Takk for tilbakemeldingen!",children:"Husk at vi ikke kan besvare meldinger fra dette skjemaet. Kontakt gjerne din forsikringsrådgiver om du har flere spørsmål."},ge=({label:t,options:o,type:i,addOnQuestion:a,successMessage:g=_e,helpLabel:v,onSubmit:l})=>{const n=Qe(l),{setFeedbackSubmitted:u,contactSubmitted:m,landmarkLabel:s}=T(),{handleSubmit:c,currentValue:p,setCurrentValue:d,submitted:k}=n,[b]=je(p!==void 0);r.useEffect(()=>{u(k)},[k,u]);const f=pe(i);return e.jsxs(e.Fragment,{children:[!k&&e.jsx(ae,{state:n,children:e.jsxs("form",{onSubmit:c,"aria-label":s,children:[e.jsx(f,{label:t,options:o,helpLabel:v}),e.jsxs("div",{ref:b,className:Z({"jkl-feedback__submit-wrapper":!0,"jkl-feedback__submit-wrapper--hidden":p===void 0}),children:[a&&e.jsx(de,{helpLabel:typeof a=="object"?a.helpLabel:void 0,label:typeof a=="object"?a.label:void 0}),e.jsxs("div",{className:"jkl-feedback__buttons jkl-spacing-xl--top",children:[e.jsx(V,{className:"jkl-spacing-xl--right",children:"Send"}),e.jsx(E,{type:"button",onClick:()=>d(void 0),children:"Avbryt"})]})]})]})}),k&&!m&&e.jsx(H,{...g})]})};ge.__docgenInfo={description:"",methods:[],displayName:"MainQuestion",props:{type:{required:!0,tsType:{name:"union",raw:'"radio" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:""},successMessage:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    title: string;
    children: ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactNode",required:!0}}]}},description:"",defaultValue:{value:`{
    title: "Takk for tilbakemeldingen!",
    children:
        "Husk at vi ikke kan besvare meldinger fra dette skjemaet. Kontakt gjerne din forsikringsrådgiver om du har flere spørsmål.",
}`,computed:!1}},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: FeedbackType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    /** Feedbackverdien, format avhenger av typen spørsmål */
    feedbackValue: number | string | Array<string | number>;
    /** Angir hvorvidt brukeren aktivt sendte inn tilbakemeldingen.
     *  Dersom \`false\` ble skjemaet sendt inn da brukeren forlot siden
     */
    intentionalSubmit: boolean;
    /** Eventuell utfyllende melding fra brukeren. Blir bare sendt inn dersom
     *  brukeren aktivt sender inn tilbakemelding */
    message?: string;
}`,signature:{properties:[{key:"feedbackValue",value:{name:"union",raw:"number | string | Array<string | number>",elements:[{name:"number"},{name:"string"},{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Array<string | number>"}],required:!0},description:"Feedbackverdien, format avhenger av typen spørsmål"},{key:"intentionalSubmit",value:{name:"boolean",required:!0},description:"Angir hvorvidt brukeren aktivt sendte inn tilbakemeldingen.\n Dersom `false` ble skjemaet sendt inn da brukeren forlot siden"},{key:"message",value:{name:"string",required:!1},description:`Eventuell utfyllende melding fra brukeren. Blir bare sendt inn dersom
 brukeren aktivt sender inn tilbakemelding`}]}},name:"value"}],return:{name:"void"}}},description:""}}};const M=({className:t,followup:o,contactQuestion:i,counter:a,landmarkLabel:g,...v})=>{const[l,n]=r.useState(!1),[u,m]=r.useState(!1),[s,c]=r.useState(!1),[p,d]=r.useState(!1);return e.jsx("div",{className:`jkl-feedback ${t||""}`,"data-testid":"feedback",children:e.jsxs(ee,{value:{feedbackSubmitted:l,followupStarted:u,followupSubmitted:s,contactSubmitted:p,counter:a,landmarkLabel:g,setFeedbackSubmitted:n,setFollowupStarted:m,setFollowupSubmitted:c,setContactSubmitted:d},children:[!u&&e.jsx(ge,{...v}),l&&!p&&o&&e.jsx(ce,{...o}),i&&e.jsx("div",{"aria-live":"polite",children:(!o&&l||s)&&e.jsx(me,{...i})})]})})};M.__docgenInfo={description:"",methods:[],displayName:"Feedback",props:{className:{required:!1,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:'"radio" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"smiley"'}]},description:"Velg typen alternativer, Smiley eller RadioButtons."},label:{required:!0,tsType:{name:"string"},description:"Spørsmålet som stilles til brukeren"},helpLabel:{required:!1,tsType:{name:"string"},description:"Hjelpetekst til hovedspørsmålet"},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
     *  dette alternativet er valgt (gjelder kun alternativene til
     *  hovedspørsmålet i Feedback, ignoreres ellers)
     **/
    textAreaLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Teksten som vises ved alternativet"},{key:"value",value:{name:"T",required:!0}},{key:"textAreaLabel",value:{name:"string",required:!1},description:`Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom
 dette alternativet er valgt (gjelder kun alternativene til
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:"Svaralternativer til spørsmålet"},addOnQuestion:{required:!1,tsType:{name:"union",raw:`| {
      /** Spørsmålet du vil stille */
      label?: string;
      /** Eventuell hjelpetekst. Om du ikke spesifiserer en vil det vises en påminnelse om å ikke skrive inn personling informasjon. */
      helpLabel?: string;
  }
| boolean`,elements:[{name:"signature",type:"object",raw:`{
    /** Spørsmålet du vil stille */
    label?: string;
    /** Eventuell hjelpetekst. Om du ikke spesifiserer en vil det vises en påminnelse om å ikke skrive inn personling informasjon. */
    helpLabel?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1},description:"Spørsmålet du vil stille"},{key:"helpLabel",value:{name:"string",required:!1},description:"Eventuell hjelpetekst. Om du ikke spesifiserer en vil det vises en påminnelse om å ikke skrive inn personling informasjon."}]}},{name:"boolean"}]},description:"Dersom du vil stille et åpent spørsmål i tillegg kan du sette denne til en truthy verdi"},successMessage:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    title: string;
    children: ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactNode",required:!0}}]}},description:"Lar deg tilpasse meldingen som kommer når brukeren sender inn tilbakemeldingen."},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: FeedbackType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    /** Feedbackverdien, format avhenger av typen spørsmål */
    feedbackValue: number | string | Array<string | number>;
    /** Angir hvorvidt brukeren aktivt sendte inn tilbakemeldingen.
     *  Dersom \`false\` ble skjemaet sendt inn da brukeren forlot siden
     */
    intentionalSubmit: boolean;
    /** Eventuell utfyllende melding fra brukeren. Blir bare sendt inn dersom
     *  brukeren aktivt sender inn tilbakemelding */
    message?: string;
}`,signature:{properties:[{key:"feedbackValue",value:{name:"union",raw:"number | string | Array<string | number>",elements:[{name:"number"},{name:"string"},{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Array<string | number>"}],required:!0},description:"Feedbackverdien, format avhenger av typen spørsmål"},{key:"intentionalSubmit",value:{name:"boolean",required:!0},description:"Angir hvorvidt brukeren aktivt sendte inn tilbakemeldingen.\n Dersom `false` ble skjemaet sendt inn da brukeren forlot siden"},{key:"message",value:{name:"string",required:!1},description:`Eventuell utfyllende melding fra brukeren. Blir bare sendt inn dersom
 brukeren aktivt sender inn tilbakemelding`}]}},name:"value"}],return:{name:"void"}}},description:"Funksjon for å håndtere innsending av tilbakemelding\n@param value Verdien av tilbakemeldingen. Dette er et objekt med følgende egenskaper:\n- `feedbackValue`: Selve verdien av tilbakemeldingen (format varierer etter spørsmålstype)\n- `intentionalSubmit`: Er `true` hvis brukeren aktivt sendte inn skjemaet, `false` hvis skjemaet ble sendt inn automatisk\n- `message`: Eventuell utfyllende melding fra bruker. Blir kun sendt inn ved aktiv innsending"},followup:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /** Spørsmålet/ene som skal stilles. Kan være av typen radio, checkbox eller text */
    questions: FollowupQuestion[];
    /** Lar deg tilpasse meldingen som kommer når brukeren har svart på spørsmålene.  */
    successMessage?: {
        title: string;
        children: ReactNode;
    };
    onSubmit: (values: FeedbackAnswer[]) => void;
}`,signature:{properties:[{key:"questions",value:{name:"Array",elements:[{name:"union",raw:"MainQuestion | TextQuestion | CheckboxQuestion",elements:[{name:"union",raw:"RadioQuestion | SmileyQuestion",elements:[{name:"RadioQuestion"},{name:"SmileyQuestion"}]},{name:"TextQuestion"},{name:"CheckboxQuestion"}]}],raw:"FollowupQuestion[]",required:!0},description:"Spørsmålet/ene som skal stilles. Kan være av typen radio, checkbox eller text"},{key:"successMessage",value:{name:"signature",type:"object",raw:`{
    title: string;
    children: ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactNode",required:!0}}]},required:!1},description:"Lar deg tilpasse meldingen som kommer når brukeren har svart på spørsmålene."},{key:"onSubmit",value:{name:"signature",type:"function",raw:"(values: FeedbackAnswer[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"SingleFeedbackAnswer | MultiFeedbackAnswer",elements:[{name:"SingleFeedbackAnswer"},{name:"MultiFeedbackAnswer"}]}],raw:"FeedbackAnswer[]"},name:"values"}],return:{name:"void"}},required:!0}}]}},description:""},contactQuestion:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * Lar deg tilpasse spørsmålsteksten.
     * @default "Kan vi kontakte deg for flere innspill?"
     * */
    label?: string;
    /**
     * Lar deg tilpasse teksten på knappen for innsending.
     * @default "Sett meg på lista!"
     * */
    sendButtonLabel?: string;
    /** Sett til true om du også vil spørre om brukjerens telefonnummer i tillegg til epost */
    withPhone?: boolean;
    /** Her kan du legge inn eventuelt annet innhold du vil ha med.
     *  Kommer mellom overskriften og feltene for utfylling
     */
    children?: ReactNode;
    onSubmit: (values: { email: string; phone?: string }) => void;
    /** Lar deg tilpasse meldingen som kommer når brukeren sender inn skjemaet.  */
    successMessage?: {
        title: string;
        children: ReactNode;
    };
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1},description:`Lar deg tilpasse spørsmålsteksten.
@default "Kan vi kontakte deg for flere innspill?"`},{key:"sendButtonLabel",value:{name:"string",required:!1},description:`Lar deg tilpasse teksten på knappen for innsending.
@default "Sett meg på lista!"`},{key:"withPhone",value:{name:"boolean",required:!1},description:"Sett til true om du også vil spørre om brukjerens telefonnummer i tillegg til epost"},{key:"children",value:{name:"ReactNode",required:!1},description:`Her kan du legge inn eventuelt annet innhold du vil ha med.
 Kommer mellom overskriften og feltene for utfylling`},{key:"onSubmit",value:{name:"signature",type:"function",raw:"(values: { email: string; phone?: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ email: string; phone?: string }",signature:{properties:[{key:"email",value:{name:"string",required:!0}},{key:"phone",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"void"}},required:!0}},{key:"successMessage",value:{name:"signature",type:"object",raw:`{
    title: string;
    children: ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactNode",required:!0}}]},required:!1},description:"Lar deg tilpasse meldingen som kommer når brukeren sender inn skjemaet."}]}},description:""},landmarkLabel:{required:!1,tsType:{name:"string"},description:`Hvis du ønsker at Feedback formen skal eksponeres som et landmark kan du sende inn
hva du ønsker at en skjermleser skal kalle den her. Bare eksponer Feedback som et
landmark på sider der den er en viktig del av innholdet, feks en kvitteringsside
eller et annet sted det å kunne gi tilbakemelding vil føles naturlig eller forventet
for brukeren.`}}};const kt={title:"Komponenter/Feedback",component:M,parameters:{layout:"centered"},tags:["autodocs"]},L={args:{type:"radio",label:"Hvordan opplevde du å bestille forsikring på nett?",helpLabel:"Hjelpetekst",options:[{label:"Enkelt og greit",value:"enkelt"},{label:"Midt på treet",value:"ok"},{label:"Tungvindt",value:"tungvindt"}],addOnQuestion:{label:"Er det noe mer du vil legge til?",helpLabel:"Hjelpetekst"},successMessage:{title:"Takk for tilbakemeldingen!",children:"Vi setter pris på at du tar deg tid til å gi oss tilbakemelding."},onSubmit:console.info},render:t=>e.jsx(M,{...t})},N={args:{type:"smiley",label:"Hvordan opplevde du å bestille forsikring på nett?",helpLabel:"Hjelpetekst",options:le,addOnQuestion:{label:"Er det noe mer du vil legge til?",helpLabel:"Hjelpetekst"},successMessage:{title:"Takk for tilbakemeldingen!",children:"Vi setter pris på at du tar deg tid til å gi oss tilbakemelding."},onSubmit:console.info},render:t=>e.jsx(M,{...t})};var $,K,W;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: "radio",
    label: "Hvordan opplevde du å bestille forsikring på nett?",
    helpLabel: "Hjelpetekst",
    options: [{
      label: "Enkelt og greit",
      value: "enkelt"
    }, {
      label: "Midt på treet",
      value: "ok"
    }, {
      label: "Tungvindt",
      value: "tungvindt"
    }],
    addOnQuestion: {
      label: "Er det noe mer du vil legge til?",
      helpLabel: "Hjelpetekst"
    },
    successMessage: {
      title: "Takk for tilbakemeldingen!",
      children: "Vi setter pris på at du tar deg tid til å gi oss tilbakemelding."
    },
    onSubmit: console.info
  },
  render: args => <Feedback {...args} />
}`,...(W=(K=L.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var G,U,z;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: "smiley",
    label: "Hvordan opplevde du å bestille forsikring på nett?",
    helpLabel: "Hjelpetekst",
    options: defaultOptions,
    addOnQuestion: {
      label: "Er det noe mer du vil legge til?",
      helpLabel: "Hjelpetekst"
    },
    successMessage: {
      title: "Takk for tilbakemeldingen!",
      children: "Vi setter pris på at du tar deg tid til å gi oss tilbakemelding."
    },
    onSubmit: console.info
  },
  render: args => <Feedback {...args} />
}`,...(z=(U=N.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const bt=["Radio","Smiley"];export{L as Radio,N as Smiley,bt as __namedExportsOrder,kt as default};
