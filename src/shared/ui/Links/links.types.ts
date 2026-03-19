import { ICONS } from "../../icons";

export interface LinksProps {
    text: string;
    link?: `/${string}`;
    logo?: boolean;
    logoComponent?: React.JSX.Element;
    disabeled?: boolean;
    linePosition?: boolean; // top = true, bottom = false
}