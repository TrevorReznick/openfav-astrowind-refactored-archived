import type { HTMLAttributes } from 'astro/types'	
		

/* @@ Metadata @@ */

export interface MetaData {
    title?: string
    ignoreTitleTemplate?: boolean  
    canonical?: string  
    robots?: MetaDataRobots  
    description?: string  
    openGraph?: MetaDataOpenGraph
    twitter?: MetaDataTwitter
}

export interface MetaDataRobots {
    index?: boolean;
    follow?: boolean;
}
 
export interface MetaDataImage {
    url: string;
    width?: number;
    height?: number;
}
  
export interface MetaDataOpenGraph {
    url?: string;
    siteName?: string;
    images?: Array<MetaDataImage>;
    locale?: string;
    type?: string;
}
  
export interface MetaDataTwitter {
    handle?: string;
    site?: string;
    cardType?: string;
}

export interface Form {
    inputs?: Array<Input>;
    textarea?: Textarea;
    disclaimer?: Disclaimer;
    button?: string;
    description?: string;
}

/* @@ Widgets @@ */

export interface Widget {
    id?: string;
    isDark?: boolean;
    bg?: string;
    classes?: Record<string, string | Record<string, string>>;
}

export interface Hero extends Omit<Headline, 'classes'>, Omit<Widget, 'isDark' | 'classes'> {
    content?: string;
    actions?: string | CallToAction[];
    image?: string | unknown;
}

export interface Image {
    src: string;
    alt?: string;
}
  
  export interface Video {
    src: string;
    type?: string;
}
  
export interface Widget {
    id?: string;
    isDark?: boolean;
    bg?: string;
    classes?: Record<string, string | Record<string, string>>;
 }

export interface Headline {
    title?: string;
    subtitle?: string;
    tagline?: string;
    classes?: Record<string, string>;
}

export interface Item {
    title?: string
    description?: string
    icon?: string
    classes?: Record<string, string>
    callToAction?: CallToAction
    image?: Image
    link: string
}


type HTMLInputTypeAttribute = 	| 'button'	| 'checkbox'	| 'color'	| 'date'	| 'datetime-local'	| 'email'	| 'file'	| 'hidden'	| 'image'	| 'month'	| 'number'	| 'password'	| 'radio'	| 'range'	| 'reset'	| 'search'	| 'submit'	| 'tel'	| 'text'	| 'time'	| 'url'	| 'week';

export interface Input {
    type: HTMLInputTypeAttribute;
    name: string;
    label?: string;
    autocomplete?: string;
    placeholder?: string;
}

export interface Textarea {
    label?: string;
    name?: string;
    placeholder?: string;
    rows?: number;
}

export interface Disclaimer {
    label?: string;
}

/* @@ Components @@ */

export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset'
}

export interface Login extends Omit<Headline, 'classes'>, Form, Widget {}
export interface Contact extends Omit<Headline, 'classes'>, Form, Widget {}

export interface Features extends Omit<Headline, 'classes'>, Widget {
    image?: string | unknown;
    video?: Video;
    items?: Array<Item>;
    columns?: number;
    defaultIcon?: string;
    callToAction1?: CallToAction;
    callToAction2?: CallToAction;
    isReversed?: boolean;
    isBeforeContent?: boolean;
    isAfterContent?: boolean;
}