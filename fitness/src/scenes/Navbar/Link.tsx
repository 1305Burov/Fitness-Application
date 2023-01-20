import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const formatedPage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <AnchorLink
            className={`${selectedPage === formatedPage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            href={`#${formatedPage}`}
            onClick={() => setSelectedPage(formatedPage)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link