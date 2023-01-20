import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BenefitType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';

const childVarient = {
    hidden: {opacity: 0, scale: .9},
    visible: {opacity: 1, scale: 1}
};

interface Props extends BenefitType {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({icon, title, descr, setSelectedPage}: Props) => {
  return (
    <motion.div 
        variants={childVarient}
        className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                {icon}
            </div>
        </div>

        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{descr}</p>
        <AnchorLink
            className="text-sm font-bold text-primary-500 underline transition duration-500 hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.Contacts)}
            href={`#${SelectedPage.Contacts}`}
        >
            Learn More
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit