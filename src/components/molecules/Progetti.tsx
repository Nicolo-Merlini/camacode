import React from 'react'
import skimmingLogo from '/public/skimming-logo.png'
import skimmingProgetti from '/public/skimming-progetti.png'
import indiceLogo from '/public/indice-logo.png'
import indiceProgetti from '/public/indice-progetti.png'
import veploLogo from '/public/veplo-logo.png'
import veploProgetti from '/public/veplo-progetti.png'
import BoxGrid from '../atoms/BoxGrid'
import BoxText from '../atoms/BoxText'
import WhiteBox from '../atoms/WhiteBox'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

const Progetti = () => {
    return (
        <>
            <BoxGrid>
                <BoxText
                    title="Skimming BPE"
                    subtitle="Piattaforma multifunzionale dedicata al settore edilizio in grado di gestire gare di appalto private, garantendo una collabborazione totale tra committenti, imprese e progettisti."
                    className="py-[40px] md:py-[50px] w-full md:w-1/2"
                />
                <WhiteBox
                    className="w-full md:w-1/2 mx-auto"
                >
                    <Image
                        alt="Skimming"
                        src={skimmingLogo}
                        className="h-[50px] w-fit my-[60px] mx-auto"
                    />
                    <Image
                        alt="Skimming"
                        src={skimmingProgetti}
                        className="mx-auto w-full h-fit rounded-b-[40px]"
                    />

                </WhiteBox>

            </BoxGrid>
            <BoxGrid>
                <BoxText
                    title="Indice"
                    subtitle="Headless e-commerce creato per vendere un’esclusiva selezione dei migliori occhiali al mondo."
                    className="py-[40px] md:py-[50px] w-full md:w-1/2"
                />
                <WhiteBox
                    className="w-full md:w-1/2 mx-auto"
                >
                    <Image
                        alt="Indice"
                        src={indiceLogo}
                        className="h-[50px] w-fit my-[60px] mx-auto"
                    />
                    <Image
                        alt="Indice"
                        src={indiceProgetti}
                        className="mx-auto w-full h-fit rounded-b-[40px]"
                    />

                </WhiteBox>

            </BoxGrid>
            <BoxGrid>
                <BoxText
                    title="Veplo"
                    subtitle="Marketplace di abbigliamento dedicato ai migliori brand emergenti italiani, in grado di permettere una vendita diretta di capi e accessori tra brand e clienti"
                    className="py-[40px] md:py-[50px] w-full md:w-1/2"
                />
                <WhiteBox
                    className="w-full md:w-1/2 mx-auto"
                >
                    <Image
                        alt="Veplo"
                        src={veploLogo}

                        className="h-[50px] w-fit mt-[40px] md:mt-[60px] mb-[30px] md:mb-[40px] mx-auto"
                    />
                    <Image
                        alt="Veplo"
                        src={veploProgetti}
                        className="mx-auto h-[300px] sm:h-[400px] mb-[30px] w-fit rounded-b-[40px]"
                    />

                </WhiteBox>

            </BoxGrid>
        </>

    )
}

export default Progetti