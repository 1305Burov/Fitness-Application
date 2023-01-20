import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { SelectedPage } from "@/shared/types"

import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import Htext from './../../shared/Htext';

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const inputStyles = 'w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white'

function Contacts({ setSelectedPage }: Props) {
    const { register, trigger, formState: { errors } } = useForm();

    const handleSubmit = async (e: React.FormEvent) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }else {

        }
    }

    return (
        <section
            id="contacts"
            className="mx-auto w-5/6 pt-24 pb-32"
        >
            <motion.div
                onViewportEnter={()=> setSelectedPage(SelectedPage.Contacts)}
            >
                <motion.div
                    initial='hidden' 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ delay: .2, duration: .5}} 
                    variants={{ 
                        hidden: {opacity: 0, x: -50}, 
                        visible: {opacity: 1, x: 0},
                    }} 
                    className="md:w-5/6"
                >
                    <Htext>
                        <span className="text-primary-500">JOIN NOW</span> to get in shape
                    </Htext>
                    <p className="my-5">
                        Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                    </p>


                    {/* Form */}

                    <div className="mt-10 justify-between gap-8 md:flex">
                        <motion.div
                            initial='hidden' 
                            whileInView="visible" 
                            viewport={{ once: true, amount: 0.5 }} 
                            transition={{ duration: .5}} 
                            variants={{ 
                                hidden: {opacity: 0, y: 50}, 
                                visible: {opacity: 1, y: 0},
                            }} 
                            className="mt-10 basis-3/5 md:mt-0"
                        >
                            <form
                                target="_blank"
                                onSubmit={handleSubmit}
                                action="https://formsubmit.co/sometestemail@g.com"
                                method="POST"
                            >
                                <input 
                                    type="text" 
                                    className={inputStyles} 
                                    placeholder='Name' 
                                    {...register(
                                        'name', 
                                        { required: true, maxLength: 100, }
                                    )} 
                                />
                                {errors.name && (
                                    <p className="mt-1 text-primary-500">
                                        {errors.name.type === 'required' && "This field is required!"}
                                        {errors.name.type === 'maxLength' && "100 characters are allowed"}
                                    </p>
                                )} 

                                <input 
                                    type="text" 
                                    className={inputStyles} 
                                    placeholder='Email' 
                                    {...register(
                                        'email', 
                                        { required: true, pattern: /^[A-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, }
                                    )} 
                                />
                                {errors.email && (
                                    <p className="mt-1 text-primary-500">
                                        {errors.email.type === 'required' && "This field is required!"}
                                        {errors.email.type === 'pattern' && "Invalid email!"}
                                    </p>
                                )}
                                
                                <textarea 
                                    className={inputStyles} 
                                    placeholder='Message'
                                    rows={4}
                                    cols={50}
                                    {...register(
                                        'message', 
                                        { required: true, maxLength: 1000, }
                                    )} 
                                />
                                {errors.message && (
                                    <p className="mt-1 text-primary-500">
                                        {errors.message.type === 'required' && "This field is required!"}
                                        {errors.message.type === 'maxLength' && "1000 characters are allowed"}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                                >   
                                    SUBMIT
                                </button>
                            </form>
                        </motion.div>

                        <motion.div
                            initial='hidden' 
                            whileInView="visible" 
                            viewport={{ once: true, amount: 0.5 }} 
                            transition={{ delay: .2, duration: .5}} 
                            variants={{ 
                                hidden: {opacity: 0, y: 50}, 
                                visible: {opacity: 1, y: 0},
                            }} 
                            className="relative mt-16 basis-2/5 md:mt-0"
                        >
                            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                                <img className="w-full" src={ContactUsPageGraphic} alt="Contact-Page-Graphic" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Contacts