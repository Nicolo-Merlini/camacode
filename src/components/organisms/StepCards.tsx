import { Box } from '@chakra-ui/react'
import React from 'react'
import SmallCard from '../molecules/SmallCard'

const STEPS: { title: string | any, subtitle: string }[] = [
    {
        title: 'Progetto',
        subtitle: 'Visioniamo insieme il progetto e finalizziamo una prima proposta'
    },
    {
        title: `Demo <span class="underline decoration-[4px] underline-offset-[5px] sm:underline-offset-[9px] decoration-[#48FB47]">gratuita</span>`,
        subtitle: 'realizziamo una demo gratuita in pochi giorni'
    },
    {
        title: 'Contratto',
        subtitle: 'Conclusione del contratto e continuazione degli sviluppi'
    },
]

const StepCards = () => {
    return (
        <Box
            className='flex overflow-x-auto  lg:overflow-x-hidden  lg:grid lg:grid-cols-3'
            gap={'20px'}
        >
            {STEPS.map((step, index) => {
                return (<SmallCard
                    key={index} index={index + 1} title={step.title} subtitle={step.subtitle} />)
            })}
        </Box>
    )
}

export default StepCards