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
                    subtitle="Pnat hired us to develop an IoT Dashboard that gathers data from chips installed into trees, stores the data in the cloud, and performs predictive analysis on it in order to program trees' maintenance."
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
                    subtitle="Pnat hired us to develop an IoT Dashboard that gathers data from chips installed into trees, stores the data in the cloud, and performs predictive analysis on it in order to program trees' maintenance."
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
                    subtitle="Pnat hired us to develop an IoT Dashboard that gathers data from chips installed into trees, stores the data in the cloud, and performs predictive analysis on it in order to program trees' maintenance."
                    className="py-[40px] md:py-[50px] w-full md:w-1/2"
                />
                <WhiteBox
                    className="w-full md:w-1/2 mx-auto"
                >
                    <Image
                        alt="Veplo"
                        src={veploLogo}
                        className="h-[50px] w-fit mt-[60px] mb-[40px] mx-auto"
                    />
                    <Image
                        alt="Veplo"
                        src={veploProgetti}
                        className="mx-auto w-[280px] mb-[30px] h-fit rounded-b-[40px]"
                    />

                </WhiteBox>

            </BoxGrid>
        </>

    )
}

export default Progetti