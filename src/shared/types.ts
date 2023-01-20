export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    Contacts='contacts'
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    descr: string;
}

export interface ClassType {
    name: string;
    image: string;
    descr?: string;
}