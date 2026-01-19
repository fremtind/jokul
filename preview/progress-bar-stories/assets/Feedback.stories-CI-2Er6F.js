import{j as e,r as n}from"./iframe-BLkUpd90.js";import{P as N,T as V,S as de}from"./Button-BfPiboqO.js";import{c as $}from"./clsx-B-dksMZM.js";import{S as me}from"./Message-CWTs2AQ-.js";import{a as pe,R as ce}from"./RadioButton-B2blqASW.js";import{F as O}from"./FieldGroup-BJaHInFu.js";import{T as K}from"./TextArea-BJ5_C7_J.js";import{C as ge}from"./Checkbox-ChdXQzoA.js";import{u as ve}from"./useAnimatedHeight-Bq79K2zO.js";import{T as P}from"./TextInput-BH6Tf7Vk.js";import"./preload-helper-PPVm8Dsz.js";import"./usePreviousValue-D32f_KmJ.js";import"./Loader-AQ69JjHm.js";import"./useDelayedRender-Cl-oYxPd.js";import"./useId-Cx1CVnI-.js";import"./WarningIcon-Kq_VDe4Y.js";import"./Icon-C5BUtbpO.js";import"./InfoIcon-By8NqDon.js";import"./DismissButton-WYQZpwDt.js";import"./CloseIcon-h4yoWWcb.js";import"./SupportLabel-PqwXe1Hg.js";import"./BaseRadioButton-CD8m43po.js";import"./Label-ClbbEBQm.js";import"./InputGroup-BS6z23Je.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-CJh4-RsK.js";import"./BaseTextInput-DZkPD-A-.js";import"./IconButton-CCs_7TPd.js";const ke=/^[a-zA-ZæøåÆØÅ0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-ZæøåÆØÅ0-9-]+(?:\.[a-zA-Z0-9-]+)+$/,be=t=>ke.test(t),fe=/^\d{8}$/,ye=t=>fe.test(t),W=t=>{const{name:a,value:u,onChange:s,errorLabel:m,inline:g=!1,density:o,labelProps:r={variant:"medium"},...l}=t;return e.jsx(pe,{state:{onChange:s,value:u,name:a,invalid:!!m,inline:g,density:o},children:e.jsx(O,{errorLabel:m,labelProps:r,"data-testid":"jkl-radio-button-group",density:o,...l,role:"radiogroup","aria-invalid":!!m})})};W.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{legend:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"Alle RadioButton i gruppen får dette som name."},value:{required:!1,tsType:{name:"string"},description:"Om gruppen skal være controlled setter du den valgte verdien her."},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:""},errorLabel:{required:!1,tsType:{name:"string"},description:`Erstatter hjelpeteksten (hvis noen) med en feilmelding.
Merker samtidig alle RadioButton i gruppen som ugyldige.`},inline:{required:!1,tsType:{name:"boolean"},description:`Setter inline-modifieren på alle RadioButton i gruppen.
@default false`},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""}},composes:["Omit"]};const he={feedbackSubmitted:!1,followupStarted:!1,followupSubmitted:!1,contactSubmitted:!1,setFeedbackSubmitted:()=>null,setFollowupStarted:()=>null,setFollowupSubmitted:()=>null,setContactSubmitted:()=>null},G=n.createContext(he),w=()=>n.useContext(G),U=({value:t,children:a})=>e.jsx(G.Provider,{value:t,children:a});U.__docgenInfo={description:"",methods:[],displayName:"FeedbackContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},value:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"feedbackSubmitted",value:{name:"boolean",required:!0}},{key:"followupStarted",value:{name:"boolean",required:!0}},{key:"followupSubmitted",value:{name:"boolean",required:!0}},{key:"contactSubmitted",value:{name:"boolean",required:!0}},{key:"landmarkLabel",value:{name:"string",required:!1}},{key:"setFeedbackSubmitted",value:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}},required:!0}},{key:"setFollowupStarted",value:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}},required:!0}},{key:"setFollowupSubmitted",value:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}},required:!0}},{key:"setContactSubmitted",value:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}},required:!0}}]}},{name:"Pick",elements:[{name:"BaseTextAreaProps"},{name:"literal",value:'"counter"'}],raw:'Pick<BaseTextAreaProps, "counter">'}]},description:""}}};const E=({children:t,className:a,...u})=>e.jsx(me,{className:$("jkl-feedback__fade-in",a),...u,"aria-live":"polite",children:t});E.__docgenInfo={description:"",methods:[],displayName:"FeedbackSuccess",props:{fullWidth:{required:!1,tsType:{name:"boolean"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},dismissed:{required:!1,tsType:{name:"boolean"},description:""},dismissAction:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    handleDismiss: () => void;
    buttonTitle?: string;
}`,signature:{properties:[{key:"handleDismiss",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"buttonTitle",value:{name:"string",required:!1}}]}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"info" | "error" | "success" | "warning"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'}]},description:""}}};const z=n.createContext(void 0),H=()=>n.useContext(z),Z=({state:t,children:a})=>e.jsx(z.Provider,{value:t,children:a});Z.__docgenInfo={description:"",methods:[],displayName:"FollowUpProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
>`,required:!0}}]}},description:""}}};const X=n.createContext(void 0),q=()=>n.useContext(X),J=({state:t,children:a})=>e.jsx(X.Provider,{value:t,children:a});J.__docgenInfo={description:"",methods:[],displayName:"MainQuestionContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
>`,required:!0}},{key:"message",value:{name:"string",required:!1}},{key:"setMessage",value:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}],raw:"SetStateAction<string | undefined>"}],raw:"Dispatch<SetStateAction<string | undefined>>",required:!0}},{key:"submitted",value:{name:"boolean",required:!0}},{key:"handleSubmit",value:{name:"FormEventHandler",elements:[{name:"HTMLFormElement"}],raw:"FormEventHandler<HTMLFormElement>",required:!0}}]}},description:""}}};const Y=({label:t,name:a,options:u,helpLabel:s,autoFocus:m=!1})=>{const g=H(),o=q(),r=g||o,l=n.useRef(null);n.useEffect(()=>{m&&l.current&&l.current.focus()},[m]);const d=i=>{const{value:v}=i.target,c=u?.find(p=>p.value.toString()===v);if(c){if(!r?.currentValue){r?.setCurrentValue([c]);return}if(Array.isArray(r?.currentValue)){const p=r.currentValue.find(k=>k===c);p?r.setCurrentValue(k=>k.filter(b=>b!==p)):r.setCurrentValue(k=>[...k,c])}}};return r?e.jsx(O,{labelProps:{variant:"large"},legend:t,helpLabel:s,children:u?.map((i,v)=>e.jsx(ge,{name:a||t,value:i.value.toString(),onChange:d,ref:v===0?l:void 0,children:i.label},`${t}-${i.value}`))}):(console.error("Questions must be used inside a Followup or Feedback context provider"),null)};Y.__docgenInfo={description:"",methods:[],displayName:"CheckboxQuestion",props:{type:{required:!1,tsType:{name:"union",raw:'"radio" | "checkbox" | "text" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"text"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const _=({label:t,name:a,options:u,helpLabel:s,autoFocus:m=!1})=>{const g=H(),o=q(),r=g||o,l=n.useId(),d=u?.length||0,i=n.useRef(null);n.useEffect(()=>{m&&i.current&&i.current.focus()},[m]);const v=p=>{const k=u?.find(b=>b.value.toString()===p.target.value);r?.setCurrentValue(k)},c=n.useMemo(()=>Array.isArray(r?.currentValue)?r?.currentValue[0].value.toString():r?.currentValue?.value.toString(),[r?.currentValue]);return r?e.jsx(W,{legend:t,labelProps:{variant:"large"},name:`${l}-${a||t}`,inline:d<3,value:c||"",onChange:v,helpLabel:s,children:u?.map((p,k)=>e.jsx(ce,{ref:k===0?i:void 0,label:p.label,value:String(p.value)},`${l}-${a||t}-${p.value}`))}):(console.error("Questions must be used inside a Followup or Feedback context provider"),null)};_.__docgenInfo={description:"",methods:[],displayName:"RadioQuestion",props:{type:{required:!1,tsType:{name:"union",raw:'"radio" | "checkbox" | "text" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"text"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ee=({label:t,name:a,helpLabel:u="Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre.",autoFocus:s=!1})=>{const{counter:m}=w(),g=H(),o=q(),r=g||o,l=n.useRef(null);n.useEffect(()=>{s&&l.current&&l.current.focus()},[s]);const d=v=>{const c={label:t,name:a||t,type:"text",value:v.target.value};r?.setCurrentValue(c)},i=n.useMemo(()=>Array.isArray(r?.currentValue)?r?.currentValue[0].value.toString():r?.currentValue?.value.toString(),[r?.currentValue]);return r?e.jsx(K,{ref:l,label:t,labelProps:{variant:"large"},name:a||t,startOpen:!0,rows:5,value:i,onChange:d,helpLabel:u,counter:m}):(console.error("Questions must be used inside a Followup or Feedback context provider"),null)};ee.__docgenInfo={description:"",methods:[],displayName:"TextQuestion",props:{type:{required:!1,tsType:{name:"union",raw:'"radio" | "checkbox" | "text" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"text"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre."',computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const te=[{label:"Veldig misfornøyd",value:1,textAreaLabel:"Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."},{label:"Litt misfornøyd",value:2,textAreaLabel:"Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."},{label:"Midt på treet",value:3,textAreaLabel:"Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."},{label:"Ganske fornøyd",value:4,textAreaLabel:"Så bra! Har du noen tilbakemeldinger kan du skrive dem her."},{label:"Veldig fornøyd",value:5,textAreaLabel:"Så bra! Har du noen tilbakemeldinger kan du skrive dem her."}],T=({children:t})=>e.jsxs("svg",{className:"jkl-feedback-smiley-option__icon","aria-hidden":!0,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"20",cy:"20",r:"19",stroke:"currentColor",strokeWidth:"2"}),t]}),je=()=>e.jsxs(T,{children:[e.jsx("path",{d:"M10 30C10 24.4772 14.4772 20 20 20C25.5228 20 30 24.4772 30 30",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M10 13.9865H16.6667",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M23.3333 13.9865H29.9999",stroke:"currentColor",strokeWidth:"2"})]}),xe=()=>e.jsxs(T,{children:[e.jsx("path",{d:"M10 28.75C10 28.75 13.75 23.3334 20 23.3334C26.25 23.3334 30 28.75 30 28.75",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"12.5",cy:"14.5",r:"1.5",fill:"currentColor"}),e.jsx("circle",{cx:"27.5",cy:"14.5",r:"1.5",fill:"currentColor"})]}),I=()=>e.jsxs(T,{children:[e.jsx("path",{d:"M9.15283 25.6986H30.8477",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"12.5",cy:"14.5",r:"1.5",fill:"currentColor"}),e.jsx("circle",{cx:"27.5",cy:"14.5",r:"1.5",fill:"currentColor"})]}),Se=()=>e.jsxs(T,{children:[e.jsx("path",{d:"M10 23.3334C10 23.3334 12.9167 30 20 30C27.0833 30 30 23.3334 30 23.3334",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"12.5",cy:"14.5",r:"1.5",fill:"currentColor"}),e.jsx("circle",{cx:"27.5",cy:"14.5",r:"1.5",fill:"currentColor"})]}),we=()=>e.jsxs(T,{children:[e.jsx("path",{d:"M30 21C30 26.5228 25.5228 31 20 31C14.4772 31 10 26.5228 10 21",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M24 14.5H29",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"12.5",cy:"14.5",r:"1.5",fill:"currentColor"})]}),ne=t=>{switch(t){case 1:return e.jsx(je,{});case 2:return e.jsx(xe,{});case 3:return e.jsx(I,{});case 4:return e.jsx(Se,{});case 5:return e.jsx(we,{});default:return e.jsx(I,{})}};ne.__docgenInfo={description:"",methods:[],displayName:"getSmiley"};const qe=t=>typeof t.value!="number"||![1,2,3,4,5].includes(t.value),re=({label:t,name:a="smiley",helpLabel:u,options:s=te})=>{const m=H(),g=q(),o=m||g,r=n.useId(),l=i=>{const v=s?.find(c=>c.value.toString()===i.target.value);o?.setCurrentValue(v)},d=n.useMemo(()=>Array.isArray(o?.currentValue)?o?.currentValue[0].value:o?.currentValue?.value,[o?.currentValue]);return s.some(qe)?(console.error("SmileyQuestion må ha tallene 1 til 5 som verdier for alternativene sine"),null):!o||!s?(console.error("Questions must be used inside a Followup or Feedback context provider"),null):e.jsx(O,{labelProps:{variant:"large"},legend:t,helpLabel:u,children:e.jsx("div",{className:"jkl-feedback-smileys",children:s.map(i=>e.jsxs(n.Fragment,{children:[e.jsx("input",{className:"jkl-sr-only",id:`${r}-${a}-${i.value}`,name:`${r}-${a}`,type:"radio",value:i.value,onChange:l,checked:d===i.value}),e.jsxs("label",{className:"jkl-feedback-smiley-option",htmlFor:`${r}-${a}-${i.value}`,children:[e.jsx("span",{className:"jkl-sr-only",children:i.label}),ne(Number(i.value))]})]},i.value))})})};re.__docgenInfo={description:"",methods:[],displayName:"SmileyQuestion",props:{type:{required:!1,tsType:{name:"union",raw:'"radio" | "checkbox" | "text" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"checkbox"'},{name:"literal",value:'"text"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"smiley"',computed:!1}},helpLabel:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
 hovedspørsmålet i Feedback, ignoreres ellers)`}]}}],raw:"FeedbackOption[]"},description:"",defaultValue:{value:"defaultOptions",computed:!0}},autoFocus:{required:!1,tsType:{name:"boolean"},description:""}}};const ae=({helpLabel:t="Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre.",label:a})=>{const{counter:u}=w(),s=q(),[m,g]=n.useState();if(n.useEffect(()=>{const d=Array.isArray(s?.currentValue)?s?.currentValue[0].textAreaLabel?.toString():s?.currentValue?.textAreaLabel?.toString();g(d||a)},[s?.currentValue,a]),!s)return console.error("Addon question must be used inside a MainQuestion context provider"),null;const{message:o,setMessage:r}=s,l=d=>r(d.target.value);return e.jsxs(e.Fragment,{children:[s.currentValue!==void 0&&e.jsxs("div",{className:"jkl-sr-only","aria-live":"polite",children:[m," ",t]}),e.jsx(K,{startOpen:!0,rows:4,"data-testid":"jkl-feedback__open-question",className:"jkl-spacing-40--bottom jkl-spacing-40--top",label:m,labelProps:{srOnly:!0},placeholder:m,helpLabel:t,value:o||"",onChange:l,counter:u})]})};ae.__docgenInfo={description:"",methods:[],displayName:"AddonQuestion",props:{label:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre."',computed:!1}}}};const Te=t=>{if(!t||t==="")return"Du må oppgi e-postadresse for at vi kan kontakte deg";if(!be(t))return"Skriv inn en gyldig e-postadresse"},Fe=t=>{if(!t||t==="")return"Du må oppgi telefonnummer for at vi kan kontakte deg";if(!ye(t))return"Skriv inn et gyldig telefonnummer"},Ae={title:"Takk for tiden din!",children:"Neste gang vi gjennomfører intervjuer og tester kan det hende vi tar kontakt med deg. Dine innspill hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem."},se=({label:t="Kan vi kontakte deg for flere innspill?",sendButtonLabel:a="Sett meg på lista!",withPhone:u=!1,onSubmit:s,successMessage:m=Ae,children:g})=>{const[o,r]=n.useState(""),[l,d]=n.useState(""),[i,v]=n.useState({}),c=n.useRef(null),p=n.useRef(null),[k,b]=n.useState(!1),[f,y]=n.useState(!1),{contactSubmitted:F,setContactSubmitted:h,landmarkLabel:S}=w(),M=typeof g=="string"?"p":"div",Q=n.useCallback((j,x)=>{const A=Te(j),D=Fe(x);return v({email:A,phone:D}),{emailError:A,phoneError:D}},[]);n.useEffect(()=>{if(k){const{emailError:j,phoneError:x}=Q(o,l);!j&&(!u||!x)&&b(!1)}},[o,l,k,u,Q]);const B=j=>x=>j(x.target.value),ue=j=>{j.preventDefault();const{emailError:x,phoneError:A}=Q(o,l);if(x){b(!0),c.current?.focus();return}if(u&&A){b(!0),p.current?.focus();return}s({email:o,phone:u?l:void 0}),h(!0)};return f?null:F?e.jsx(E,{...m}):e.jsxs("form",{className:"jkl-spacing-40--top",onSubmit:ue,"aria-label":S,children:[e.jsx("p",{className:"jkl-heading-4 jkl-spacing-8--bottom",children:t}),g&&e.jsx(M,{className:"jkl-body",children:g}),e.jsx(P,{ref:c,className:"jkl-spacing-24--top",label:"E-post",labelProps:{variant:"small"},autoComplete:"email",name:"email",value:o,onChange:B(r),errorLabel:i.email}),u&&e.jsx(P,{ref:p,className:"jkl-spacing-24--top",label:"Telefonnummer",labelProps:{variant:"small"},autoComplete:"tel",name:"phone",value:l,onChange:B(d),errorLabel:i.phone}),e.jsxs("div",{className:"jkl-spacing-40--top",children:[e.jsx(N,{type:"submit",className:"jkl-spacing-40--right",children:a}),e.jsx(V,{onClick:()=>y(!0),children:"Nei takk"})]})]})};se.__docgenInfo={description:"",methods:[],displayName:"ContactQuestion",props:{label:{required:!1,tsType:{name:"string"},description:`Lar deg tilpasse spørsmålsteksten.
@default "Kan vi kontakte deg for flere innspill?"`,defaultValue:{value:'"Kan vi kontakte deg for flere innspill?"',computed:!1}},sendButtonLabel:{required:!1,tsType:{name:"string"},description:`Lar deg tilpasse teksten på knappen for innsending.
@default "Sett meg på lista!"`,defaultValue:{value:'"Sett meg på lista!"',computed:!1}},withPhone:{required:!1,tsType:{name:"boolean"},description:"Sett til true om du også vil spørre om brukjerens telefonnummer i tillegg til epost",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:`Her kan du legge inn eventuelt annet innhold du vil ha med.
 Kommer mellom overskriften og feltene for utfylling`},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: { email: string; phone?: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ email: string; phone?: string }",signature:{properties:[{key:"email",value:{name:"string",required:!0}},{key:"phone",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"void"}}},description:""},successMessage:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    title: string;
    children: ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactNode",required:!0}}]}},description:"Lar deg tilpasse meldingen som kommer når brukeren sender inn skjemaet.",defaultValue:{value:`{
    title: "Takk for tiden din!",
    children:
        "Neste gang vi gjennomfører intervjuer og tester kan det hende vi tar kontakt med deg. Dine innspill hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem.",
}`,computed:!1}}}};const ie=t=>{switch(t){case"radio":return _;case"checkbox":return Y;case"text":return ee;case"smiley":return re;default:return _}},Ce=(t,a)=>{const[u,s]=n.useState(),[m,g]=n.useState({number:0,question:t[0],isLast:t.length===1}),[o,r]=n.useState(!1),[l,d]=n.useState(!1),[i,v]=n.useState(),c=n.useRef({values:u,submitted:l,onSubmit:a});n.useEffect(()=>{c.current={...c.current,values:u,submitted:l}},[u,l]);const p=n.useCallback(()=>{!c.current.submitted&&c.current.values!==void 0&&c.current.onSubmit(c.current.values)},[]);function k(f){f?.preventDefault();const y=Array.isArray(i)?i.map(h=>h.value.toString()):i?.value,F={...m.question,name:m.question.name||m.question.label,value:y};s(h=>[...h?.filter(M=>M.name!==F.name)||[],F]),v(void 0),m.isLast?r(!0):g(h=>{const S=h.number+1;return{number:S,question:t[S],isLast:S+1>=t.length}})}function b(){s(void 0),v(void 0),g({number:0,question:t[0],isLast:t.length===1}),d(!0)}return n.useEffect(()=>{o&&(p(),d(!0))},[o,p]),n.useEffect(()=>(typeof window<"u"&&window.addEventListener("beforeunload",p),()=>{p(),window.removeEventListener("beforeunload",p)}),[p]),{questions:t,values:u,step:m,currentValue:i,setCurrentValue:v,submitted:l,handleNext:k,handleAbort:b}},Le={title:"Takk, igjen!",children:"Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem."},le=({questions:t,successMessage:a=Le,onSubmit:u})=>{const[s,m]=n.useState(!1),g=n.useRef(null),o=Ce(t,u),{handleAbort:r,handleNext:l,step:d,submitted:i}=o,{followupStarted:v,setFollowupStarted:c,setFollowupSubmitted:p,contactSubmitted:k,landmarkLabel:b}=w();n.useEffect(()=>{d.number!==0&&g.current?.focus()},[d]),n.useEffect(()=>{p(i)},[i,p]);const f=ie(t[d.number].type),y=d.isLast?N:de;return s?null:e.jsx("div",{"aria-live":"polite",children:e.jsxs(Z,{state:o,children:[!v&&e.jsxs("div",{className:"jkl-feedback__fade-in",children:[e.jsx("p",{className:"jkl-heading-4 jkl-spacing-40--top jkl-spacing-8--bottom",children:"Har du tid til å svare på noen flere spørsmål?"}),e.jsx("p",{className:"jkl-body jkl-spacing-40--bottom",children:"Det tar kun et minutt, og hjelper oss å lage bedre løsninger for deg."}),e.jsx(N,{onClick:()=>c(!0),className:"jkl-spacing-40--right",children:"Jeg har tid!"}),e.jsx(V,{onClick:()=>m(!0),children:"Nei takk"})]}),!i&&v&&e.jsxs("form",{onSubmit:l,className:"jkl-feedback__fade-in","aria-label":b,children:[e.jsxs("p",{className:"jkl-feedback__step-counter",ref:g,children:["Steg ",d.number+1," av ",t.length]}),n.createElement(f,{...t[d.number],autoFocus:!0,key:d.number}),e.jsxs("div",{className:"jkl-spacing-40--top","aria-live":"off",children:[e.jsx(y,{type:"submit",children:d.isLast?"Send inn":"Neste"}),e.jsx(V,{onClick:r,className:"jkl-spacing-40--left",children:"Avbryt"})]})]}),i&&!k&&e.jsx(E,{...a})]})})};le.__docgenInfo={description:"",methods:[],displayName:"Followup",props:{questions:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"MainQuestion | TextQuestion | CheckboxQuestion",elements:[{name:"union",raw:"RadioQuestion | SmileyQuestion",elements:[{name:"RadioQuestion"},{name:"SmileyQuestion"}]},{name:"TextQuestion"},{name:"CheckboxQuestion"}]}],raw:"FollowupQuestion[]"},description:"Spørsmålet/ene som skal stilles. Kan være av typen radio, checkbox eller text"},successMessage:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    title: string;
    children: ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactNode",required:!0}}]}},description:"Lar deg tilpasse meldingen som kommer når brukeren har svart på spørsmålene.",defaultValue:{value:`{
    title: "Takk, igjen!",
    children:
        "Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem.",
}`,computed:!1}},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FeedbackAnswer[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"SingleFeedbackAnswer | MultiFeedbackAnswer",elements:[{name:"SingleFeedbackAnswer"},{name:"MultiFeedbackAnswer"}]}],raw:"FeedbackAnswer[]"},name:"values"}],return:{name:"void"}}},description:""}}};const Ne=t=>{const[a,u]=n.useState(),[s,m]=n.useState(),[g,o]=n.useState(!1),r=n.useRef({onSubmit:t,currentValue:a,message:s,submitted:g});n.useEffect(()=>{r.current={...r.current,onSubmit:t,currentValue:a,message:s,submitted:g}},[t,a,s,g]);const l=n.useCallback((v=!0)=>{const{message:c,currentValue:p,submitted:k,onSubmit:b}=r.current;if(!k&&p!==void 0){const f=Array.isArray(p)?p.map(y=>y.value):p?.value;b({feedbackValue:f,intentionalSubmit:v,...v&&c?{message:c}:{}})}},[]),d=n.useCallback(()=>l(!1),[l]);return n.useEffect(()=>(typeof window<"u"&&window.addEventListener("beforeunload",d),()=>{d(),window.removeEventListener("beforeunload",d)}),[d]),{currentValue:a,setCurrentValue:u,message:s,setMessage:m,submitted:g,handleSubmit:v=>{v.preventDefault(),l(),o(!0)}}},Ve={title:"Takk for tilbakemeldingen!",children:"Husk at vi ikke kan besvare meldinger fra dette skjemaet. Kontakt gjerne din forsikringsrådgiver om du har flere spørsmål."},oe=({label:t,options:a,type:u,addOnQuestion:s,successMessage:m=Ve,helpLabel:g,onSubmit:o})=>{const r=Ne(o),{setFeedbackSubmitted:l,contactSubmitted:d,landmarkLabel:i}=w(),{handleSubmit:v,currentValue:c,setCurrentValue:p,submitted:k}=r,[b]=ve(c!==void 0);n.useEffect(()=>{l(k)},[k,l]);const f=ie(u);return e.jsxs(e.Fragment,{children:[!k&&e.jsx(J,{state:r,children:e.jsxs("form",{onSubmit:v,"aria-label":i,children:[e.jsx(f,{label:t,options:a,helpLabel:g}),e.jsxs("div",{ref:b,className:$({"jkl-feedback__submit-wrapper":!0,"jkl-feedback__submit-wrapper--hidden":c===void 0}),children:[s&&e.jsx(ae,{helpLabel:typeof s=="object"?s.helpLabel:void 0,label:typeof s=="object"?s.label:void 0}),e.jsxs("div",{className:"jkl-feedback__buttons jkl-spacing-40--top",children:[e.jsx(N,{className:"jkl-spacing-40--right",children:"Send"}),e.jsx(V,{type:"button",onClick:()=>p(void 0),children:"Avbryt"})]})]})]})}),k&&!d&&e.jsx(E,{...m})]})};oe.__docgenInfo={description:"",methods:[],displayName:"MainQuestion",props:{type:{required:!0,tsType:{name:"union",raw:'"radio" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"smiley"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
 brukeren aktivt sender inn tilbakemelding`}]}},name:"value"}],return:{name:"void"}}},description:""}}};const R=({className:t,followup:a,contactQuestion:u,counter:s,landmarkLabel:m,...g})=>{const[o,r]=n.useState(!1),[l,d]=n.useState(!1),[i,v]=n.useState(!1),[c,p]=n.useState(!1);return e.jsx("div",{className:`jkl-feedback ${t||""}`,"data-testid":"feedback",children:e.jsxs(U,{value:{feedbackSubmitted:o,followupStarted:l,followupSubmitted:i,contactSubmitted:c,counter:s,landmarkLabel:m,setFeedbackSubmitted:r,setFollowupStarted:d,setFollowupSubmitted:v,setContactSubmitted:p},children:[!l&&e.jsx(oe,{...g}),o&&!c&&a&&e.jsx(le,{...a}),u&&e.jsx("div",{"aria-live":"polite",children:(!a&&o||i)&&e.jsx(se,{...u})})]})})};R.__docgenInfo={description:"",methods:[],displayName:"Feedback",props:{className:{required:!1,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:'"radio" | "smiley"',elements:[{name:"literal",value:'"radio"'},{name:"literal",value:'"smiley"'}]},description:"Velg typen alternativer, Smiley eller RadioButtons."},label:{required:!0,tsType:{name:"string"},description:"Spørsmålet som stilles til brukeren"},helpLabel:{required:!1,tsType:{name:"string"},description:"Hjelpetekst til hovedspørsmålet"},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
for brukeren.`}}};const lt={title:"Komponenter/Feedback",component:R},C={args:{type:"radio",label:"Hvordan opplevde du å bestille forsikring på nett?",helpLabel:"Hjelpetekst",options:[{label:"Enkelt og greit",value:"enkelt"},{label:"Midt på treet",value:"ok"},{label:"Tungvindt",value:"tungvindt"}],addOnQuestion:{label:"Er det noe mer du vil legge til?",helpLabel:"Hjelpetekst"},successMessage:{title:"Takk for tilbakemeldingen!",children:"Vi setter pris på at du tar deg tid til å gi oss tilbakemelding."},onSubmit:console.info},render:t=>e.jsx(R,{...t})},L={args:{type:"smiley",label:"Hvordan opplevde du å bestille forsikring på nett?",helpLabel:"Hjelpetekst",options:te,addOnQuestion:{label:"Er det noe mer du vil legge til?",helpLabel:"Hjelpetekst"},successMessage:{title:"Takk for tilbakemeldingen!",children:"Vi setter pris på at du tar deg tid til å gi oss tilbakemelding."},onSubmit:console.info},render:t=>e.jsx(R,{...t})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};const ot=["Radio","Smiley"];export{C as Radio,L as Smiley,ot as __namedExportsOrder,lt as default};
