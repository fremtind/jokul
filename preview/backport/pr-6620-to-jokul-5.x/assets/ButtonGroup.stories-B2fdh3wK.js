import{j as n}from"./iframe-DshwNvE6.js";import{C as m}from"./Card-D4mhJ9MT.js";import{F as s}from"./Flex-CiCXHsfp.js";import{c as p}from"./clsx-B-dksMZM.js";import{B as o}from"./Button-xQAX5hEc.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-BzfQUGTI.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-gs0uk53P.js";import"./Loader-Co2KO35-.js";import"./useDelayedRender-BYywS-pI.js";const r=({mainAction:e,secondaryAction:i,className:l,...c})=>n.jsxs(s,{...c,className:p("jkl-button-group",l),gap:"8",direction:"column",alignItems:"center",children:[n.jsx(o,{variant:"primary",...e}),i&&n.jsx(o,{variant:"ghost",...i})]});r.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{mainAction:{required:!0,tsType:{name:"Exclude",elements:[{name:"intersection",raw:"PolymorphicPropsWithRef<ElementType, Props> & Props",elements:[{name:"intersection",raw:`PolymorphicProps<ElementType, Props> & {
    ref?: PolymorphicRef<ElementType>;
} & ElementTypeProp<ElementType>`,elements:[{name:"intersection",raw:`React.PropsWithChildren<Props & ElementTypeProp<ElementType>> &
Omit<
    React.ComponentPropsWithoutRef<ElementType>,
    PropsToOmit<ElementType, Props>
> &
ElementTypeProp<ElementType>`,elements:[{name:"ReactPropsWithChildren",raw:"React.PropsWithChildren<Props & ElementTypeProp<ElementType>>",elements:[{name:"intersection",raw:"Props & ElementTypeProp<ElementType>",elements:[{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"variant",value:{name:"unknown[number]",raw:"(typeof buttonVariants)[number]",required:!1},description:`Hvilken variant av knappen skal vises. Tertiary er planlagt fjernet fordi den ligner for mye på en lenke.
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
}`,signature:{properties:[{key:"ref",value:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]',required:!1}}]}},{name:"signature",type:"object",raw:`{
    /**
     * Her kan du angi hva slags element komponenten skal rendres
     * som. Det kan enten være en string for native HTML elementer
     * eller en komponent (som Link fra react-router og lignende).
     */
    as?: ElementType;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:'"button"',required:!1},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`}]}}]},{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"variant",value:{name:"unknown[number]",raw:"(typeof buttonVariants)[number]",required:!1},description:`Hvilken variant av knappen skal vises. Tertiary er planlagt fjernet fordi den ligner for mye på en lenke.
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
@default "left"`},{key:"icon",value:{name:"ReactReactElement",raw:"React.ReactElement",required:!0},description:"Hvilket ikon som skal vises i knappen"}]}}]}]}]},{name:"literal",value:'"variant"'}],raw:'Exclude<ButtonProps<"button">, "variant">'},description:""},secondaryAction:{required:!1,tsType:{name:"Exclude",elements:[{name:"intersection",raw:"PolymorphicPropsWithRef<ElementType, Props> & Props",elements:[{name:"intersection",raw:`PolymorphicProps<ElementType, Props> & {
    ref?: PolymorphicRef<ElementType>;
} & ElementTypeProp<ElementType>`,elements:[{name:"intersection",raw:`React.PropsWithChildren<Props & ElementTypeProp<ElementType>> &
Omit<
    React.ComponentPropsWithoutRef<ElementType>,
    PropsToOmit<ElementType, Props>
> &
ElementTypeProp<ElementType>`,elements:[{name:"ReactPropsWithChildren",raw:"React.PropsWithChildren<Props & ElementTypeProp<ElementType>>",elements:[{name:"intersection",raw:"Props & ElementTypeProp<ElementType>",elements:[{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"variant",value:{name:"unknown[number]",raw:"(typeof buttonVariants)[number]",required:!1},description:`Hvilken variant av knappen skal vises. Tertiary er planlagt fjernet fordi den ligner for mye på en lenke.
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
}`,signature:{properties:[{key:"ref",value:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]',required:!1}}]}},{name:"signature",type:"object",raw:`{
    /**
     * Her kan du angi hva slags element komponenten skal rendres
     * som. Det kan enten være en string for native HTML elementer
     * eller en komponent (som Link fra react-router og lignende).
     */
    as?: ElementType;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:'"button"',required:!1},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`}]}}]},{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"variant",value:{name:"unknown[number]",raw:"(typeof buttonVariants)[number]",required:!1},description:`Hvilken variant av knappen skal vises. Tertiary er planlagt fjernet fordi den ligner for mye på en lenke.
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
@default "left"`},{key:"icon",value:{name:"ReactReactElement",raw:"React.ReactElement",required:!0},description:"Hvilket ikon som skal vises i knappen"}]}}]}]}]},{name:"literal",value:'"variant"'}],raw:'Exclude<ButtonProps<"button">, "variant">'},description:""}}};const b={title:"Komponenter/Button Group",args:{mainAction:{children:"Fortsett"}},decorators:e=>n.jsx(m,{as:s,style:{minWidth:"max(90vw, 100%)",maxWidth:"60ch",minHeight:"40ex"},alignItems:"end",padding:"l",children:n.jsx(e,{})})},t={name:"Én handling",render:e=>n.jsx(r,{...e})},a={name:"Hovedhandling og sekundærhandling",args:{mainAction:{children:"Bekreft endringer"},secondaryAction:{children:"Avbryt"}},render:e=>n.jsx(r,{...e})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Én handling",
  render: args => <ButtonGroup {...args} />
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Hovedhandling og sekundærhandling",
  args: {
    mainAction: {
      children: "Bekreft endringer"
    },
    secondaryAction: {
      children: "Avbryt"
    }
  },
  render: args => <ButtonGroup {...args} />
}`,...a.parameters?.docs?.source}}};const T=["SingleAction","TwoActions"];export{t as SingleAction,a as TwoActions,T as __namedExportsOrder,b as default};
