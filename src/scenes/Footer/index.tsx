import Logo from '@/assets/Logo.png';

type Props = {}

function Footer({}: Props) {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className="justify-start mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="Logo" />
                <p className='my-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam possimus voluptas porro rerum, quos sequi exercitationem amet dicta suscipit voluptates deserunt necessitatibus magnam, esse at voluptatem qui. Officia, minus distinctio.
                </p>
                <p>Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Mass orci senectus</p>
                <p className='my-5'>Et gravida id et etuiam</p>
                <p className='my-5'>Ullamcopre viva</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Mass orci senectus orci senectusorci senectus</p>
                <p className='my-5'>77-885-787-45</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer