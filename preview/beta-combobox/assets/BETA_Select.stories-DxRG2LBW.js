import{r as u,R as e}from"./index-siqcju79.js";import{c as k}from"./clsx-B-dksMZM.js";import{B as f}from"./Help-DxJDcIt9.js";import{S as g}from"./SupportLabel-Bm3W2hYF.js";/* empty css               *//* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./Icon-mINJCSxV.js";import"./Button-Dng0c-UK.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";const o=({children:t,className:c,label:m="Label",placeholder:i="Velg",description:l,help:s,errorMessage:p,...d})=>{const n=u.useId();return e.createElement("div",{className:k("BETA_jkl-select",c)},e.createElement("label",{htmlFor:`${n}-select`},m),s&&e.createElement("div",{className:"help"},e.createElement(f,{...s,id:`${n}-select-help`,showButtonText:!1})),l&&e.createElement("p",{id:`${n}-select-description`,className:"description"},l),e.createElement("select",{id:`${n}-select`,"aria-describedby":`${n}-select-error ${n}-select-description`,"aria-details":`${n}-select-help`,...d},i&&e.createElement("option",{disabled:!0,selected:!0,value:""},i),t),p&&e.createElement(g,{id:`${n}-select-error`,className:"error",label:p,labelType:"error"}))};o.__docgenInfo={description:"",methods:[],displayName:"BETA_Select",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Label"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Velg"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},help:{required:!1,tsType:{name:"intersection",raw:`Omit<ButtonProps<"button">, "iconPosition" | "icon"> & {
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
@default "top"`},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1},description:'@default "left"'},{key:"buttonText",value:{name:"string",required:!0},description:"Teksten på knappen som åpner help-popover."},{key:"showButtonText",value:{name:"boolean",required:!1},description:"@default false"},{key:"children",value:{name:"ReactNode",required:!0},description:"Innholdet i tooltipen."}]}}]},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""}}};const x={title:"Komponenter/Select/BETA_Select,",component:o,args:{placeholder:"hei"}},a={args:{label:"Label",placeholder:"Placeholder",help:{buttonText:"Hei",children:e.createElement("p",null,"Hjelpetekst")}},render:t=>e.createElement(o,{...t},e.createElement("option",null,"Hei"))},r={args:{label:"Label",placeholder:"Placeholder",help:{buttonText:"Hei",children:e.createElement("p",null,"Hjelpetekst")}},render:t=>e.createElement(o,{...t},e.createElement("optgroup",{label:"Samsung"},e.createElement("option",null,"Galaxy S24"),e.createElement("option",null,"Galaxy S25")),e.createElement("optgroup",{label:"Apple"},e.createElement("option",null,"iPhone 15"),e.createElement("option",null,"iPhone 16"),e.createElement("option",null,"iPhone 17")))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Placeholder",
    help: {
      buttonText: "Hei",
      children: <p>Hjelpetekst</p>
    }
  },
  render: args => <BETA_Select {...args}>
            <option>Hei</option>
        </BETA_Select>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Placeholder",
    help: {
      buttonText: "Hei",
      children: <p>Hjelpetekst</p>
    }
  },
  render: args => <BETA_Select {...args}>
            <optgroup label="Samsung">
                <option>Galaxy S24</option>
                <option>Galaxy S25</option>
            </optgroup>
            <optgroup label="Apple">
                <option>iPhone 15</option>
                <option>iPhone 16</option>
                <option>iPhone 17</option>
            </optgroup>
        </BETA_Select>
}`,...r.parameters?.docs?.source}}};const D=["_Default","_GroupedOptions"];export{a as _Default,r as _GroupedOptions,D as __namedExportsOrder,x as default};
