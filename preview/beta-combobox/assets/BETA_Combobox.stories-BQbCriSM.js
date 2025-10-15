import{c as x}from"./clsx-B-dksMZM.js";import{r,R as e}from"./index-siqcju79.js";import{B as q}from"./Help-DxJDcIt9.js";import{P as c}from"./Popover-D1i2PgAt.js";import{B as j}from"./Button-Dng0c-UK.js";import{T as B}from"./TextInput-DldzU6H_.js";import{F as L}from"./Flex-B3l4XY1h.js";import{S as C}from"./SupportLabel-Bm3W2hYF.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./Icon-mINJCSxV.js";import"./getThemeAndDensity-CIeob-5A.js";import"./jsx-runtime-DqZpzl9T.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./InputGroup-BJwbXp8L.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./BaseTextInput-Un_Ktj_I.js";import"./IconButton-B7cUPyFx.js";import"./tokens-CmXyXTIM.js";import"./SlotComponent-CWN6EcE2.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";const y=({className:b,label:h="Label",placeholder:R="Velg",options:l,multiselect:p=!1,description:d,help:u,errorMessage:k,defaultValue:P,...T})=>{const t=r.useId(),[a,f]=r.useState(!1),[o,w]=r.useState(P||[]),[E,g]=r.useState(l),N=!o.length,v=n=>{const s=Array.from(n.getElementsByTagName("input"));w(s.filter(m=>m.checked).map(m=>m.value))};return e.createElement("div",{className:x("BETA_jkl-combobox",b)},e.createElement("label",{htmlFor:`${t}-combobox`},h),u&&e.createElement(q,{...u,id:`${t}-combobox-help`,showButtonText:!1,className:"help"}),d&&e.createElement("p",{id:`${t}-combobox-description`,className:"description"},d),e.createElement("div",{className:"combobox"},N?e.createElement("div",{className:"chips"},R):e.createElement("fieldset",{className:"chips",onChange:n=>v(n.currentTarget)},e.createElement("legend",{className:"jkl-sr-only"},"Valgte alternativ"),o.map(n=>e.createElement("label",{key:n,className:"BETA_jkl-combobox jkl-chip jkl-chip--filter"},e.createElement("input",{type:p?"checkbox":"radio",name:`${t}-option`,value:n,defaultChecked:o.includes(n)}),n))),e.createElement("hr",null),e.createElement(c,{open:a,onOpenChange:()=>{g(l),f(!a)}},e.createElement(c.Trigger,{onClick:()=>f(!a),"aria-expanded":a,asChild:!0},e.createElement(j,{variant:"ghost",type:"button",className:"text-field"},"Velg")),e.createElement(c.Content,null,e.createElement(B,{...T,label:"Søk etter alternativ",labelProps:{srOnly:!0},placeholder:"Søk",width:"100%",id:`${t}-combobox`,"aria-describedby":`${t}-combobox-error ${t}-combobox-description`,"aria-details":`${t}-combobox-help`,onChange:n=>g(l.filter(s=>s.toLowerCase().includes(n.target.value.toLowerCase())))}),e.createElement("form",{id:`${t}-combobox-form`},e.createElement("fieldset",{onChange:n=>v(n.currentTarget)},e.createElement("legend",{className:"jkl-sr-only"},"Alternativer"),E.map(n=>e.createElement(L,{as:"label",justifyContent:"space-between",key:n,className:"BETA_jkl-combobox jkl-combobox__option option"},e.createElement("input",{type:p?"checkbox":"radio",name:`${t}-option`,value:n,defaultChecked:o.includes(n)}),n))))))),k&&e.createElement(C,{id:`${t}-combobox-error`,className:"error",label:k,labelType:"error"}))};y.__docgenInfo={description:"",methods:[],displayName:"BETA_Combobox",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Label"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},help:{required:!1,tsType:{name:"intersection",raw:`Omit<ButtonProps<"button">, "iconPosition" | "icon"> & {
    /**
     * Initiell plassering av popoveren i forhold til triggeren.
     * @default "top"
     */
    position?: "top" | "bottom" | "left" | "right";
    /**
     * @default "left"
     */
    iconPosition?: "left" | "right";
    /**
     * Teksten på knappen som åpner help-popover.
     */
    buttonText: string;
    /**
     * @default false
     */
    showButtonText?: boolean;
    /**
     * Innholdet i tooltipen.
     */
    children: ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:"PolymorphicPropsWithRef<ElementType, Props> & Props",elements:[{name:"intersection",raw:`PolymorphicProps<ElementType, Props> & {
    ref?: PolymorphicRef<ElementType>;
} & ElementTypeProp<ElementType>`,elements:[{name:"intersection",raw:`React.PropsWithChildren<Props & ElementTypeProp<ElementType>> &
Omit<
    React.ComponentPropsWithoutRef<ElementType>,
    PropsToOmit<ElementType, Props>
> &
ElementTypeProp<ElementType>`,elements:[{name:"ReactPropsWithChildren",raw:"React.PropsWithChildren<Props & ElementTypeProp<ElementType>>",elements:[{name:"intersection",raw:"Props & ElementTypeProp<ElementType>",elements:[{name:"intersection",raw:`{
    density?: Density;
    /**
     * Hvilken variant av knappen skal vises. Tertiary er planlagt fjernet fordi den ligner for mye på en lenke.
     * @default "secondary"
     */
    variant?: ButtonVariant;
    className?: string;
    loader?: {
        showLoader: boolean;
        textDescription: string;
    };
    /**
     * @deprecated Bruk \`icon\` i kombinasjon med \`iconPosition="left"\`
     */
    iconLeft?: React.ReactNode;
    /**
     * @deprecated Bruk \`icon\` i kombinasjon med \`iconPosition="right"\`
     */
    iconRight?: React.ReactNode;
} & IconOptions`,elements:[{name:"signature",type:"object",raw:`{
    density?: Density;
    /**
     * Hvilken variant av knappen skal vises. Tertiary er planlagt fjernet fordi den ligner for mye på en lenke.
     * @default "secondary"
     */
    variant?: ButtonVariant;
    className?: string;
    loader?: {
        showLoader: boolean;
        textDescription: string;
    };
    /**
     * @deprecated Bruk \`icon\` i kombinasjon med \`iconPosition="left"\`
     */
    iconLeft?: React.ReactNode;
    /**
     * @deprecated Bruk \`icon\` i kombinasjon med \`iconPosition="right"\`
     */
    iconRight?: React.ReactNode;
}`,signature:{properties:[{key:"density",value:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}],required:!1}},{key:"variant",value:{name:"unknown[number]",raw:"(typeof buttonVariants)[number]",required:!1},description:`Hvilken variant av knappen skal vises. Tertiary er planlagt fjernet fordi den ligner for mye på en lenke.
@default "secondary"`},{key:"className",value:{name:"string",required:!1}},{key:"loader",value:{name:"signature",type:"object",raw:`{
    showLoader: boolean;
    textDescription: string;
}`,signature:{properties:[{key:"showLoader",value:{name:"boolean",required:!0}},{key:"textDescription",value:{name:"string",required:!0}}]},required:!1}},{key:"iconLeft",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:'@deprecated Bruk `icon` i kombinasjon med `iconPosition="left"`'},{key:"iconRight",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:'@deprecated Bruk `icon` i kombinasjon med `iconPosition="right"`'}]}},{name:"union",raw:`| {
      iconPosition?: never;
      icon?: never;
      children: React.ReactNode;
  }
| {
      /**
       * Plasseringen av ikonet
       * @default "left"
       */
      iconPosition?: IconPosition;
      /**
       * Hvilket ikon som skal vises i knappen
       */
      icon: React.ReactElement;
  }`,elements:[{name:"signature",type:"object",raw:`{
    iconPosition?: never;
    icon?: never;
    children: React.ReactNode;
}`,signature:{properties:[{key:"iconPosition",value:{name:"never",required:!1}},{key:"icon",value:{name:"never",required:!1}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}},{name:"signature",type:"object",raw:`{
    /**
     * Plasseringen av ikonet
     * @default "left"
     */
    iconPosition?: IconPosition;
    /**
     * Hvilket ikon som skal vises i knappen
     */
    icon: React.ReactElement;
}`,signature:{properties:[{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1},description:`Plasseringen av ikonet
@default "left"`},{key:"icon",value:{name:"ReactReactElement",raw:"React.ReactElement",required:!0},description:"Hvilket ikon som skal vises i knappen"}]}}]}]},{name:"signature",type:"object",raw:`{
    /**
     * Her kan du angi hva slags element komponenten skal rendres
     * som. Det kan enten være en string for native HTML elementer
     * eller en komponent (som Link fra react-router og lignende).
     */
    as?: ElementType;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:'"button"',required:!1},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`}]}}]}]},{name:"Omit",elements:[{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<ElementType>",elements:[{name:"literal",value:'"button"'}]},{name:"unknown"}],raw:`Omit<
    React.ComponentPropsWithoutRef<ElementType>,
    PropsToOmit<ElementType, Props>
>`},{name:"signature",type:"object",raw:`{
    /**
     * Her kan du angi hva slags element komponenten skal rendres
     * som. Det kan enten være en string for native HTML elementer
     * eller en komponent (som Link fra react-router og lignende).
     */
    as?: ElementType;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:'"button"',required:!1},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`}]}}]},{name:"signature",type:"object",raw:`{
    ref?: PolymorphicRef<ElementType>;
}`,signature:{properties:[{key:"ref",value:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]',required:!1}}]}},{name:"signature",type:"object",raw:`{
    /**
     * Her kan du angi hva slags element komponenten skal rendres
     * som. Det kan enten være en string for native HTML elementer
     * eller en komponent (som Link fra react-router og lignende).
     */
    as?: ElementType;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:'"button"',required:!1},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`}]}}]},{name:"intersection",raw:`{
    density?: Density;
    /**
     * Hvilken variant av knappen skal vises. Tertiary er planlagt fjernet fordi den ligner for mye på en lenke.
     * @default "secondary"
     */
    variant?: ButtonVariant;
    className?: string;
    loader?: {
        showLoader: boolean;
        textDescription: string;
    };
    /**
     * @deprecated Bruk \`icon\` i kombinasjon med \`iconPosition="left"\`
     */
    iconLeft?: React.ReactNode;
    /**
     * @deprecated Bruk \`icon\` i kombinasjon med \`iconPosition="right"\`
     */
    iconRight?: React.ReactNode;
} & IconOptions`,elements:[{name:"signature",type:"object",raw:`{
    density?: Density;
    /**
     * Hvilken variant av knappen skal vises. Tertiary er planlagt fjernet fordi den ligner for mye på en lenke.
     * @default "secondary"
     */
    variant?: ButtonVariant;
    className?: string;
    loader?: {
        showLoader: boolean;
        textDescription: string;
    };
    /**
     * @deprecated Bruk \`icon\` i kombinasjon med \`iconPosition="left"\`
     */
    iconLeft?: React.ReactNode;
    /**
     * @deprecated Bruk \`icon\` i kombinasjon med \`iconPosition="right"\`
     */
    iconRight?: React.ReactNode;
}`,signature:{properties:[{key:"density",value:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}],required:!1}},{key:"variant",value:{name:"unknown[number]",raw:"(typeof buttonVariants)[number]",required:!1},description:`Hvilken variant av knappen skal vises. Tertiary er planlagt fjernet fordi den ligner for mye på en lenke.
@default "secondary"`},{key:"className",value:{name:"string",required:!1}},{key:"loader",value:{name:"signature",type:"object",raw:`{
    showLoader: boolean;
    textDescription: string;
}`,signature:{properties:[{key:"showLoader",value:{name:"boolean",required:!0}},{key:"textDescription",value:{name:"string",required:!0}}]},required:!1}},{key:"iconLeft",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:'@deprecated Bruk `icon` i kombinasjon med `iconPosition="left"`'},{key:"iconRight",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:'@deprecated Bruk `icon` i kombinasjon med `iconPosition="right"`'}]}},{name:"union",raw:`| {
      iconPosition?: never;
      icon?: never;
      children: React.ReactNode;
  }
| {
      /**
       * Plasseringen av ikonet
       * @default "left"
       */
      iconPosition?: IconPosition;
      /**
       * Hvilket ikon som skal vises i knappen
       */
      icon: React.ReactElement;
  }`,elements:[{name:"signature",type:"object",raw:`{
    iconPosition?: never;
    icon?: never;
    children: React.ReactNode;
}`,signature:{properties:[{key:"iconPosition",value:{name:"never",required:!1}},{key:"icon",value:{name:"never",required:!1}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}},{name:"signature",type:"object",raw:`{
    /**
     * Plasseringen av ikonet
     * @default "left"
     */
    iconPosition?: IconPosition;
    /**
     * Hvilket ikon som skal vises i knappen
     */
    icon: React.ReactElement;
}`,signature:{properties:[{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1},description:`Plasseringen av ikonet
@default "left"`},{key:"icon",value:{name:"ReactReactElement",raw:"React.ReactElement",required:!0},description:"Hvilket ikon som skal vises i knappen"}]}}]}]}]},{name:"union",raw:'"iconPosition" | "icon"',elements:[{name:"literal",value:'"iconPosition"'},{name:"literal",value:'"icon"'}]}],raw:'Omit<ButtonProps<"button">, "iconPosition" | "icon">'},{name:"signature",type:"object",raw:`{
    /**
     * Initiell plassering av popoveren i forhold til triggeren.
     * @default "top"
     */
    position?: "top" | "bottom" | "left" | "right";
    /**
     * @default "left"
     */
    iconPosition?: "left" | "right";
    /**
     * Teksten på knappen som åpner help-popover.
     */
    buttonText: string;
    /**
     * @default false
     */
    showButtonText?: boolean;
    /**
     * Innholdet i tooltipen.
     */
    children: ReactNode;
}`,signature:{properties:[{key:"position",value:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1},description:`Initiell plassering av popoveren i forhold til triggeren.
@default "top"`},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1},description:'@default "left"'},{key:"buttonText",value:{name:"string",required:!0},description:"Teksten på knappen som åpner help-popover."},{key:"showButtonText",value:{name:"boolean",required:!1},description:"@default false"},{key:"children",value:{name:"ReactNode",required:!0},description:"Innholdet i tooltipen."}]}}]},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},multiselect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},placeholder:{defaultValue:{value:'"Velg"',computed:!1},required:!1}}};const H=["Valg 1","Valg 2","Sykdom 1","Sykdom 2","Livsstil 1","Livsstil 2","Hendelse 1","Hendelse 2"].sort(),ce={title:"Komponenter/Combobox/BETA_Combobox",component:y,parameters:{layout:"fullscreen"},tags:["autodocs","forms"]},i={args:{name:"disease",placeholder:"Velg",multiselect:!0,label:"Velg sykdommer",options:H}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: "disease",
    placeholder: "Velg",
    multiselect: true,
    label: "Velg sykdommer",
    options: options
  }
}`,...i.parameters?.docs?.source}}};const pe=["_Combobox"];export{i as _Combobox,pe as __namedExportsOrder,ce as default};
