import{j as e,r as n}from"./iframe-DP8Xf_qW.js";import{C as ue,g as de}from"./types-IsTkoTmK.js";import{P as N,T as E,S as me}from"./Button-6hsN6QCv.js";import{c as P}from"./clsx-B-dksMZM.js";import{S as pe}from"./Message-CtgN-4Kd.js";import{R as ce}from"./RadioButton-vNJTCQgW.js";import{R as ge}from"./RadioButtonGroup-CfKSmhOD.js";import{F as $}from"./FieldGroup-iELpliL-.js";import{T as K}from"./TextArea-BOMDrTi5.js";import{C as ke}from"./Checkbox-CR1k7erU.js";import{u as ve}from"./useAnimatedHeight-C_PnwDDh.js";import{T as B}from"./TextInput-ChSnwcFr.js";import"./preload-helper-PPVm8Dsz.js";import"./usePreviousValue-DKNtJSDr.js";import"./Loader-BxavIFyp.js";import"./useDelayedRender-DoXz-Ftb.js";import"./useId-DCOUoPrx.js";import"./SuccessIcon-CbZ15OhW.js";import"./Icon-k8xo1fZn.js";import"./InfoIcon-DKErNC0B.js";import"./WarningIcon-1AHRTzaM.js";import"./DismissButton-C-Rz7cVw.js";import"./CloseIcon-DOvl4PHi.js";import"./SupportLabel-BKFe5kWx.js";import"./BaseRadioButton-B9qQwVPP.js";import"./Label-DF5EMnl-.js";import"./InputGroup-RhmGcLKT.js";import"./mergeRefs-_7lZvp9j.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D5Lr5Drg.js";import"./BaseTextInput-BiMYAzfk.js";import"./IconButton-DAuzWytR.js";const be=/^[a-zA-ZæøåÆØÅ0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-ZæøåÆØÅ0-9-]+(?:\.[a-zA-Z0-9-]+)+$/,fe=t=>be.test(t),ye=/^\d{8}$/,he=t=>ye.test(t),je={feedbackSubmitted:!1,followupStarted:!1,followupSubmitted:!1,contactSubmitted:!1,setFeedbackSubmitted:()=>null,setFollowupStarted:()=>null,setFollowupSubmitted:()=>null,setContactSubmitted:()=>null},W=n.createContext(je),w=()=>n.useContext(W),G=({value:t,children:a})=>e.jsx(W.Provider,{value:t,children:a});G.__docgenInfo={description:"",methods:[],displayName:"FeedbackContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},value:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"feedbackSubmitted",value:{name:"boolean",required:!0}},{key:"followupStarted",value:{name:"boolean",required:!0}},{key:"followupSubmitted",value:{name:"boolean",required:!0}},{key:"contactSubmitted",value:{name:"boolean",required:!0}},{key:"landmarkLabel",value:{name:"string",required:!1}},{key:"setFeedbackSubmitted",value:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}},required:!0}},{key:"setFollowupStarted",value:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}},required:!0}},{key:"setFollowupSubmitted",value:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}},required:!0}},{key:"setContactSubmitted",value:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}},required:!0}}]}},{name:"Pick",elements:[{name:"BaseTextAreaProps"},{name:"literal",value:'"counter"'}],raw:'Pick<BaseTextAreaProps, "counter">'}]},description:""}}};const V=({children:t,className:a,...d})=>e.jsx(pe,{className:P("jkl-feedback__fade-in",a),...d,"aria-live":"polite",children:t});V.__docgenInfo={description:"",methods:[],displayName:"FeedbackSuccess",props:{fullWidth:{required:!1,tsType:{name:"boolean"},description:""},dismissed:{required:!1,tsType:{name:"boolean"},description:""},dismissAction:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    handleDismiss: () => void;
    buttonTitle?: string;
}`,signature:{properties:[{key:"handleDismiss",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"buttonTitle",value:{name:"string",required:!1}}]}},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof COLOR_MODES)[number]"},description:'@default "info"'},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * En unik identifikator for komponenten som skal spores. Mappes til \`data-track-id\`.
     */
    id?: string;
    /**
     * Ekstra sporingsfelt utover de faste feltene over, for team som trenger å
     * spore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget
     * \`data-track-<kebab-case-nøkkel>\`-attributt i DOM-en, se \`getExtraTrackingAttributes\`.
     */
    extra?: Record<string, string | number | boolean>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""}}};const U=n.createContext(void 0),H=()=>n.useContext(U),z=({state:t,children:a})=>e.jsx(U.Provider,{value:t,children:a});z.__docgenInfo={description:"",methods:[],displayName:"FollowUpProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
>`,required:!0}}]}},description:""}}};const Z=n.createContext(void 0),q=()=>n.useContext(Z),X=({state:t,children:a})=>e.jsx(Z.Provider,{value:t,children:a});X.__docgenInfo={description:"",methods:[],displayName:"MainQuestionContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
>`,required:!0}},{key:"message",value:{name:"string",required:!1}},{key:"setMessage",value:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}],raw:"SetStateAction<string | undefined>"}],raw:"Dispatch<SetStateAction<string | undefined>>",required:!0}},{key:"submitted",value:{name:"boolean",required:!0}},{key:"handleSubmit",value:{name:"FormEventHandler",elements:[{name:"HTMLFormElement"}],raw:"FormEventHandler<HTMLFormElement>",required:!0}}]}},description:""}}};const J=({label:t,name:a,options:d,helpLabel:s,autoFocus:c=!1})=>{const g=H(),l=q(),r=g||l,o=n.useRef(null);n.useEffect(()=>{c&&o.current&&o.current.focus()},[c]);const u=i=>{const{value:k}=i.target,p=d?.find(m=>m.value.toString()===k);if(p){if(!r?.currentValue){r?.setCurrentValue([p]);return}if(Array.isArray(r?.currentValue)){const m=r.currentValue.find(v=>v===p);m?r.setCurrentValue(v=>v.filter(b=>b!==m)):r.setCurrentValue(v=>[...v,p])}}};return r?e.jsx($,{labelProps:{variant:"large"},legend:t,helpLabel:s,children:d?.map((i,k)=>e.jsx(ke,{name:a||t,value:i.value.toString(),onChange:u,ref:k===0?o:void 0,children:i.label},`${t}-${i.value}`))}):(console.error("Questions must be used inside a Followup or Feedback context provider"),null)};J.__docgenInfo={description:"",methods:[],displayName:"CheckboxQuestion",props:{type:{required:!1,tsType:{name:"union",raw:'"radio" | "checkbox" | "text" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"text"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const _=({label:t,name:a,options:d,helpLabel:s,autoFocus:c=!1})=>{const g=H(),l=q(),r=g||l,o=n.useId(),u=d?.length||0,i=n.useRef(null);n.useEffect(()=>{c&&i.current&&i.current.focus()},[c]);const k=m=>{const v=d?.find(b=>b.value.toString()===m.target.value);r?.setCurrentValue(v)},p=n.useMemo(()=>Array.isArray(r?.currentValue)?r?.currentValue[0].value.toString():r?.currentValue?.value.toString(),[r?.currentValue]);return r?e.jsx(ge,{legend:t,labelProps:{variant:"large"},name:`${o}-${a||t}`,inline:u<3,value:p||"",onChange:k,helpLabel:s,children:d?.map((m,v)=>e.jsx(ce,{ref:v===0?i:void 0,label:m.label,value:String(m.value)},`${o}-${a||t}-${m.value}`))}):(console.error("Questions must be used inside a Followup or Feedback context provider"),null)};_.__docgenInfo={description:"",methods:[],displayName:"RadioQuestion",props:{type:{required:!1,tsType:{name:"union",raw:'"radio" | "checkbox" | "text" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"text"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Y=({label:t,name:a,helpLabel:d="Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre.",autoFocus:s=!1})=>{const{counter:c}=w(),g=H(),l=q(),r=g||l,o=n.useRef(null);n.useEffect(()=>{s&&o.current&&o.current.focus()},[s]);const u=k=>{const p={label:t,name:a||t,type:"text",value:k.target.value};r?.setCurrentValue(p)},i=n.useMemo(()=>Array.isArray(r?.currentValue)?r?.currentValue[0].value.toString():r?.currentValue?.value.toString(),[r?.currentValue]);return r?e.jsx(K,{ref:o,label:t,labelProps:{variant:"large"},name:a||t,startOpen:!0,rows:5,value:i,onChange:u,helpLabel:d,counter:c}):(console.error("Questions must be used inside a Followup or Feedback context provider"),null)};Y.__docgenInfo={description:"",methods:[],displayName:"TextQuestion",props:{type:{required:!1,tsType:{name:"union",raw:'"radio" | "checkbox" | "text" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"text"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre."',computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ee=[{label:"Veldig misfornøyd",value:1,textAreaLabel:"Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."},{label:"Litt misfornøyd",value:2,textAreaLabel:"Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."},{label:"Midt på treet",value:3,textAreaLabel:"Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."},{label:"Ganske fornøyd",value:4,textAreaLabel:"Så bra! Har du noen tilbakemeldinger kan du skrive dem her."},{label:"Veldig fornøyd",value:5,textAreaLabel:"Så bra! Har du noen tilbakemeldinger kan du skrive dem her."}],T=({children:t})=>e.jsxs("svg",{className:"jkl-feedback-smiley-option__icon","aria-hidden":!0,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"20",cy:"20",r:"19",stroke:"currentColor",strokeWidth:"2"}),t]}),xe=()=>e.jsxs(T,{children:[e.jsx("path",{d:"M10 30C10 24.4772 14.4772 20 20 20C25.5228 20 30 24.4772 30 30",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M10 13.9865H16.6667",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M23.3333 13.9865H29.9999",stroke:"currentColor",strokeWidth:"2"})]}),Se=()=>e.jsxs(T,{children:[e.jsx("path",{d:"M10 28.75C10 28.75 13.75 23.3334 20 23.3334C26.25 23.3334 30 28.75 30 28.75",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"12.5",cy:"14.5",r:"1.5",fill:"currentColor"}),e.jsx("circle",{cx:"27.5",cy:"14.5",r:"1.5",fill:"currentColor"})]}),I=()=>e.jsxs(T,{children:[e.jsx("path",{d:"M9.15283 25.6986H30.8477",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"12.5",cy:"14.5",r:"1.5",fill:"currentColor"}),e.jsx("circle",{cx:"27.5",cy:"14.5",r:"1.5",fill:"currentColor"})]}),we=()=>e.jsxs(T,{children:[e.jsx("path",{d:"M10 23.3334C10 23.3334 12.9167 30 20 30C27.0833 30 30 23.3334 30 23.3334",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"12.5",cy:"14.5",r:"1.5",fill:"currentColor"}),e.jsx("circle",{cx:"27.5",cy:"14.5",r:"1.5",fill:"currentColor"})]}),qe=()=>e.jsxs(T,{children:[e.jsx("path",{d:"M30 21C30 26.5228 25.5228 31 20 31C14.4772 31 10 26.5228 10 21",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M24 14.5H29",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"12.5",cy:"14.5",r:"1.5",fill:"currentColor"})]}),te=t=>{switch(t){case 1:return e.jsx(xe,{});case 2:return e.jsx(Se,{});case 3:return e.jsx(I,{});case 4:return e.jsx(we,{});case 5:return e.jsx(qe,{});default:return e.jsx(I,{})}};te.__docgenInfo={description:"",methods:[],displayName:"getSmiley"};const Te=t=>typeof t.value!="number"||![1,2,3,4,5].includes(t.value),ne=({label:t,name:a="smiley",helpLabel:d,options:s=ee})=>{const c=H(),g=q(),l=c||g,r=n.useId(),o=i=>{const k=s?.find(p=>p.value.toString()===i.target.value);l?.setCurrentValue(k)},u=n.useMemo(()=>Array.isArray(l?.currentValue)?l?.currentValue[0].value:l?.currentValue?.value,[l?.currentValue]);return s.some(Te)?(console.error("SmileyQuestion må ha tallene 1 til 5 som verdier for alternativene sine"),null):!l||!s?(console.error("Questions must be used inside a Followup or Feedback context provider"),null):e.jsx($,{labelProps:{variant:"large"},legend:t,helpLabel:d,children:e.jsx("div",{className:"jkl-feedback-smileys",children:s.map(i=>e.jsxs(n.Fragment,{children:[e.jsx("input",{className:"jkl-sr-only",id:`${r}-${a}-${i.value}`,name:`${r}-${a}`,type:"radio",value:i.value,onChange:o,checked:u===i.value}),e.jsxs("label",{className:"jkl-feedback-smiley-option",htmlFor:`${r}-${a}-${i.value}`,children:[e.jsx("span",{className:"jkl-sr-only",children:i.label}),te(Number(i.value))]})]},i.value))})})};ne.__docgenInfo={description:"",methods:[],displayName:"SmileyQuestion",props:{type:{required:!1,tsType:{name:"union",raw:'"radio" | "checkbox" | "text" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"text"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"smiley"',computed:!1}},helpLabel:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:"",defaultValue:{value:`[
    {
        label: "Veldig misfornøyd",
        value: 1,
        textAreaLabel:
            "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
    },
    {
        label: "Litt misfornøyd",
        value: 2,
        textAreaLabel:
            "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
    },
    {
        label: "Midt på treet",
        value: 3,
        textAreaLabel:
            "Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
    },
    {
        label: "Ganske fornøyd",
        value: 4,
        textAreaLabel:
            "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
    },
    {
        label: "Veldig fornøyd",
        value: 5,
        textAreaLabel:
            "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
    },
]`,computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:""}}};const re=({helpLabel:t="Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre.",label:a})=>{const{counter:d}=w(),s=q(),[c,g]=n.useState();if(n.useEffect(()=>{const u=Array.isArray(s?.currentValue)?s?.currentValue[0].textAreaLabel?.toString():s?.currentValue?.textAreaLabel?.toString();g(u||a)},[s?.currentValue,a]),!s)return console.error("Addon question must be used inside a MainQuestion context provider"),null;const{message:l,setMessage:r}=s,o=u=>r(u.target.value);return e.jsxs(e.Fragment,{children:[s.currentValue!==void 0&&e.jsxs("div",{className:"jkl-sr-only","aria-live":"polite",children:[c," ",t]}),e.jsx(K,{startOpen:!0,rows:4,"data-testid":"jkl-feedback__open-question",className:"jkl-spacing-40--bottom jkl-spacing-40--top",label:c,labelProps:{srOnly:!0},placeholder:c,helpLabel:t,value:l||"",onChange:o,counter:d})]})};re.__docgenInfo={description:"",methods:[],displayName:"AddonQuestion",props:{label:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre."',computed:!1}}}};const Fe=t=>{if(!t||t==="")return"Du må oppgi e-postadresse for at vi kan kontakte deg";if(!fe(t))return"Skriv inn en gyldig e-postadresse"},Ae=t=>{if(!t||t==="")return"Du må oppgi telefonnummer for at vi kan kontakte deg";if(!he(t))return"Skriv inn et gyldig telefonnummer"},Le={title:"Takk for tiden din!",children:"Neste gang vi gjennomfører intervjuer og tester kan det hende vi tar kontakt med deg. Dine innspill hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem."},ae=({label:t="Kan vi kontakte deg for flere innspill?",sendButtonLabel:a="Sett meg på lista!",withPhone:d=!1,onSubmit:s,successMessage:c=Le,children:g})=>{const[l,r]=n.useState(""),[o,u]=n.useState(""),[i,k]=n.useState({}),p=n.useRef(null),m=n.useRef(null),[v,b]=n.useState(!1),[f,y]=n.useState(!1),{contactSubmitted:F,setContactSubmitted:h,landmarkLabel:S}=w(),R=typeof g=="string"?"p":"div",O=n.useCallback((j,x)=>{const A=Fe(j),D=Ae(x);return k({email:A,phone:D}),{emailError:A,phoneError:D}},[]);n.useEffect(()=>{if(v){const{emailError:j,phoneError:x}=O(l,o);!j&&(!d||!x)&&b(!1)}},[l,o,v,d,O]);const Q=j=>x=>j(x.target.value),oe=j=>{j.preventDefault();const{emailError:x,phoneError:A}=O(l,o);if(x){b(!0),p.current?.focus();return}if(d&&A){b(!0),m.current?.focus();return}s({email:l,phone:d?o:void 0}),h(!0)};return f?null:F?e.jsx(V,{...c}):e.jsxs("form",{className:"jkl-spacing-40--top",onSubmit:oe,"aria-label":S,children:[e.jsx("p",{className:"jkl-heading-4 jkl-spacing-8--bottom",children:t}),g&&e.jsx(R,{className:"jkl-body",children:g}),e.jsx(B,{ref:p,className:"jkl-spacing-24--top",label:"E-post",labelProps:{variant:"small"},autoComplete:"email",name:"email",value:l,onChange:Q(r),errorLabel:i.email}),d&&e.jsx(B,{ref:m,className:"jkl-spacing-24--top",label:"Telefonnummer",labelProps:{variant:"small"},autoComplete:"tel",name:"phone",value:o,onChange:Q(u),errorLabel:i.phone}),e.jsxs("div",{className:"jkl-spacing-40--top",children:[e.jsx(N,{type:"submit",className:"jkl-spacing-40--right",children:a}),e.jsx(E,{onClick:()=>y(!0),children:"Nei takk"})]})]})};ae.__docgenInfo={description:"",methods:[],displayName:"ContactQuestion",props:{label:{required:!1,tsType:{name:"string"},description:`Lar deg tilpasse spørsmålsteksten.
@default "Kan vi kontakte deg for flere innspill?"`,defaultValue:{value:'"Kan vi kontakte deg for flere innspill?"',computed:!1}},sendButtonLabel:{required:!1,tsType:{name:"string"},description:`Lar deg tilpasse teksten på knappen for innsending.
@default "Sett meg på lista!"`,defaultValue:{value:'"Sett meg på lista!"',computed:!1}},withPhone:{required:!1,tsType:{name:"boolean"},description:"Sett til true om du også vil spørre om brukjerens telefonnummer i tillegg til epost",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:`Her kan du legge inn eventuelt annet innhold du vil ha med.
 Kommer mellom overskriften og feltene for utfylling`},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: { email: string; phone?: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ email: string; phone?: string }",signature:{properties:[{key:"email",value:{name:"string",required:!0}},{key:"phone",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"void"}}},description:""},successMessage:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    title: string;
    children: ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactNode",required:!0}}]}},description:"Lar deg tilpasse meldingen som kommer når brukeren sender inn skjemaet.",defaultValue:{value:`{
    title: "Takk for tiden din!",
    children:
        "Neste gang vi gjennomfører intervjuer og tester kan det hende vi tar kontakt med deg. Dine innspill hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem.",
}`,computed:!1}}}};const se=t=>{switch(t){case"radio":return _;case"checkbox":return J;case"text":return Y;case"smiley":return ne;default:return _}},Ce=(t,a)=>{const[d,s]=n.useState(),[c,g]=n.useState({number:0,question:t[0],isLast:t.length===1}),[l,r]=n.useState(!1),[o,u]=n.useState(!1),[i,k]=n.useState(),p=n.useRef({values:d,submitted:o,onSubmit:a});n.useEffect(()=>{p.current={...p.current,values:d,submitted:o}},[d,o]);const m=n.useCallback(()=>{!p.current.submitted&&p.current.values!==void 0&&p.current.onSubmit(p.current.values)},[]);function v(f){f?.preventDefault();const y=Array.isArray(i)?i.map(h=>h.value.toString()):i?.value,F={...c.question,name:c.question.name||c.question.label,value:y};s(h=>[...h?.filter(R=>R.name!==F.name)||[],F]),k(void 0),c.isLast?r(!0):g(h=>{const S=h.number+1;return{number:S,question:t[S],isLast:S+1>=t.length}})}function b(){s(void 0),k(void 0),g({number:0,question:t[0],isLast:t.length===1}),u(!0)}return n.useEffect(()=>{l&&(m(),u(!0))},[l,m]),n.useEffect(()=>(typeof window<"u"&&window.addEventListener("beforeunload",m),()=>{m(),window.removeEventListener("beforeunload",m)}),[m]),{questions:t,values:d,step:c,currentValue:i,setCurrentValue:k,submitted:o,handleNext:v,handleAbort:b}},Ne={title:"Takk, igjen!",children:"Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem."},ie=({questions:t,successMessage:a=Ne,onSubmit:d})=>{const[s,c]=n.useState(!1),g=n.useRef(null),l=Ce(t,d),{handleAbort:r,handleNext:o,step:u,submitted:i}=l,{followupStarted:k,setFollowupStarted:p,setFollowupSubmitted:m,contactSubmitted:v,landmarkLabel:b}=w();n.useEffect(()=>{u.number!==0&&g.current?.focus()},[u]),n.useEffect(()=>{m(i)},[i,m]);const f=se(t[u.number].type),y=u.isLast?N:me;return s?null:e.jsx("div",{"aria-live":"polite",children:e.jsxs(z,{state:l,children:[!k&&e.jsxs("div",{className:"jkl-feedback__fade-in",children:[e.jsx("p",{className:"jkl-heading-4 jkl-spacing-40--top jkl-spacing-8--bottom",children:"Har du tid til å svare på noen flere spørsmål?"}),e.jsx("p",{className:"jkl-body jkl-spacing-40--bottom",children:"Det tar kun et minutt, og hjelper oss å lage bedre løsninger for deg."}),e.jsx(N,{onClick:()=>p(!0),className:"jkl-spacing-40--right",children:"Jeg har tid!"}),e.jsx(E,{onClick:()=>c(!0),children:"Nei takk"})]}),!i&&k&&e.jsxs("form",{onSubmit:o,className:"jkl-feedback__fade-in","aria-label":b,children:[e.jsxs("p",{className:"jkl-feedback__step-counter",ref:g,children:["Steg ",u.number+1," av ",t.length]}),n.createElement(f,{...t[u.number],autoFocus:!0,key:u.number}),e.jsxs("div",{className:"jkl-spacing-40--top","aria-live":"off",children:[e.jsx(y,{type:"submit",children:u.isLast?"Send inn":"Neste"}),e.jsx(E,{onClick:r,className:"jkl-spacing-40--left",children:"Avbryt"})]})]}),i&&!v&&e.jsx(V,{...a})]})})};ie.__docgenInfo={description:"",methods:[],displayName:"Followup",props:{questions:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"MainQuestion | TextQuestion | CheckboxQuestion",elements:[{name:"union",raw:"RadioQuestion | SmileyQuestion",elements:[{name:"RadioQuestion"},{name:"SmileyQuestion"}]},{name:"TextQuestion"},{name:"CheckboxQuestion"}]}],raw:"FollowupQuestion[]"},description:"Spørsmålet/ene som skal stilles. Kan være av typen radio, checkbox eller text"},successMessage:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    title: string;
    children: ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactNode",required:!0}}]}},description:"Lar deg tilpasse meldingen som kommer når brukeren har svart på spørsmålene.",defaultValue:{value:`{
    title: "Takk, igjen!",
    children:
        "Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem.",
}`,computed:!1}},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FeedbackAnswer[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"SingleFeedbackAnswer | MultiFeedbackAnswer",elements:[{name:"SingleFeedbackAnswer"},{name:"MultiFeedbackAnswer"}]}],raw:"FeedbackAnswer[]"},name:"values"}],return:{name:"void"}}},description:""}}};const Ee=t=>{const[a,d]=n.useState(),[s,c]=n.useState(),[g,l]=n.useState(!1),r=n.useRef({onSubmit:t,currentValue:a,message:s,submitted:g});n.useEffect(()=>{r.current={...r.current,onSubmit:t,currentValue:a,message:s,submitted:g}},[t,a,s,g]);const o=n.useCallback((k=!0)=>{const{message:p,currentValue:m,submitted:v,onSubmit:b}=r.current;if(!v&&m!==void 0){const f=Array.isArray(m)?m.map(y=>y.value):m?.value;b({feedbackValue:f,intentionalSubmit:k,...k&&p?{message:p}:{}})}},[]),u=n.useCallback(()=>o(!1),[o]);return n.useEffect(()=>(typeof window<"u"&&window.addEventListener("beforeunload",u),()=>{u(),window.removeEventListener("beforeunload",u)}),[u]),{currentValue:a,setCurrentValue:d,message:s,setMessage:c,submitted:g,handleSubmit:k=>{k.preventDefault(),o(),l(!0)}}},Ve={title:"Takk for tilbakemeldingen!",children:"Husk at vi ikke kan besvare meldinger fra dette skjemaet. Kontakt gjerne din forsikringsrådgiver om du har flere spørsmål."},le=({label:t,options:a,type:d,addOnQuestion:s,successMessage:c=Ve,helpLabel:g,onSubmit:l})=>{const r=Ee(l),{setFeedbackSubmitted:o,contactSubmitted:u,landmarkLabel:i}=w(),{handleSubmit:k,currentValue:p,setCurrentValue:m,submitted:v}=r,[b]=ve(p!==void 0);n.useEffect(()=>{o(v)},[v,o]);const f=se(d);return e.jsxs(e.Fragment,{children:[!v&&e.jsx(X,{state:r,children:e.jsxs("form",{onSubmit:k,"aria-label":i,children:[e.jsx(f,{label:t,options:a,helpLabel:g}),e.jsxs("div",{ref:b,className:P({"jkl-feedback__submit-wrapper":!0,"jkl-feedback__submit-wrapper--hidden":p===void 0}),children:[s&&e.jsx(re,{helpLabel:typeof s=="object"?s.helpLabel:void 0,label:typeof s=="object"?s.label:void 0}),e.jsxs("div",{className:"jkl-feedback__buttons jkl-spacing-40--top",children:[e.jsx(N,{className:"jkl-spacing-40--right",children:"Send"}),e.jsx(E,{type:"button",onClick:()=>m(void 0),children:"Avbryt"})]})]})]})}),v&&!u&&e.jsx(V,{...c})]})};le.__docgenInfo={description:"",methods:[],displayName:"MainQuestion",props:{type:{required:!0,tsType:{name:"union",raw:'"radio" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
 brukeren aktivt sender inn tilbakemelding`}]}},name:"value"}],return:{name:"void"}}},description:""}}};const M=({className:t,followup:a,contactQuestion:d,counter:s,landmarkLabel:c,trackingProps:g,...l})=>{const[r,o]=n.useState(!1),[u,i]=n.useState(!1),[k,p]=n.useState(!1),[m,v]=n.useState(!1);return e.jsx("div",{className:`jkl-feedback ${t||""}`,"data-testid":"feedback","data-track-component-name":ue.Feedback,"data-track-id":g?.id??(l.label?String(l.label):void 0),"data-track-label":l.label?String(l.label):void 0,"data-track-type":l.type,...de(g?.extra,l),children:e.jsxs(G,{value:{feedbackSubmitted:r,followupStarted:u,followupSubmitted:k,contactSubmitted:m,counter:s,landmarkLabel:c,setFeedbackSubmitted:o,setFollowupStarted:i,setFollowupSubmitted:p,setContactSubmitted:v},children:[!u&&e.jsx(le,{...l}),r&&!m&&a&&e.jsx(ie,{...a}),d&&e.jsx("div",{"aria-live":"polite",children:(!a&&r||k)&&e.jsx(ae,{...d})})]})})};M.__docgenInfo={description:"",methods:[],displayName:"Feedback",props:{className:{required:!1,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:'"radio" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"smiley"'}]},description:"Velg typen alternativer, Smiley eller RadioButtons."},label:{required:!0,tsType:{name:"string"},description:"Spørsmålet som stilles til brukeren"},helpLabel:{required:!1,tsType:{name:"string"},description:"Hjelpetekst til hovedspørsmålet"},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
for brukeren.`},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * En unik identifikator for komponenten som skal spores. Mappes til \`data-track-id\`.
     */
    id?: string;
    /**
     * Ekstra sporingsfelt utover de faste feltene over, for team som trenger å
     * spore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget
     * \`data-track-<kebab-case-nøkkel>\`-attributt i DOM-en, se \`getExtraTrackingAttributes\`.
     */
    extra?: Record<string, string | number | boolean>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""}}};const pt={title:"Komponenter/Feedback",component:M},L={args:{type:"radio",label:"Hvordan opplevde du å bestille forsikring på nett?",helpLabel:"Hjelpetekst",options:[{label:"Enkelt og greit",value:"enkelt"},{label:"Midt på treet",value:"ok"},{label:"Tungvindt",value:"tungvindt"}],addOnQuestion:{label:"Er det noe mer du vil legge til?",helpLabel:"Hjelpetekst"},successMessage:{title:"Takk for tilbakemeldingen!",children:"Vi setter pris på at du tar deg tid til å gi oss tilbakemelding."},onSubmit:console.info},render:t=>e.jsx(M,{...t})},C={args:{type:"smiley",label:"Hvordan opplevde du å bestille forsikring på nett?",helpLabel:"Hjelpetekst",options:ee,addOnQuestion:{label:"Er det noe mer du vil legge til?",helpLabel:"Hjelpetekst"},successMessage:{title:"Takk for tilbakemeldingen!",children:"Vi setter pris på at du tar deg tid til å gi oss tilbakemelding."},onSubmit:console.info},render:t=>e.jsx(M,{...t})},ct=["Radio","Smiley"];L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};export{L as Radio,C as Smiley,ct as __namedExportsOrder,pt as default};
