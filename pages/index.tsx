import { Typography } from '@mui/material'

import { Banner } from '@/components'
import useGlobalContext from '@/context/useGlobalContext'
import { ContainerLayout } from '@/ui'
import { SxStyles } from '@/ui/theme'

const classes: SxStyles = {
  title: {
    ':before': {
      display: 'block',
      content: '" "',
      marginTop: '-100px',
      height: '100px',
      visibility: 'hidden',
      pointerEvents: 'none',
    },
  },
}

const Index = () => {
  const { title } = classes
  const { globalData } = useGlobalContext()

  return (
    <>
      <Banner />
      {globalData.links?.map((ele) => {
        return (
          <ContainerLayout key={ele.text}>
            <Typography ref={ele.link} component="h1" variant="h4" sx={title}>
              {ele.text}
            </Typography>
            <Typography gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nemo ad cum ipsa
              illo, suscipit iure sed? Ea quidem officia in natus iure delectus, ipsam, saepe
              aperiam voluptate necessitatibus fugiat incidunt tenetur assumenda pariatur dolores
              corporis voluptatem distinctio deleniti harum nulla, magni illum iste. Laboriosam
              minus veritatis facilis cumque maxime dolorum, sapiente eligendi nostrum ad quas
              consectetur unde sint error eius recusandae magnam nihil animi, molestiae excepturi?
              Dolor maiores voluptatum at, veniam ratione odit eligendi, est sapiente eum corrupti,
              placeat vero rerum possimus iste exercitationem fugit enim quidem ipsam doloribus
              architecto deleniti magni dolorem? Sapiente omnis optio totam eaque ut modi aperiam
              quo! Ut facilis corrupti veritatis, quisquam odio vitae itaque similique eos quaerat
              ab soluta ipsa deleniti ipsum aperiam aliquid consequatur. Fugit, necessitatibus!
              Ipsum aperiam enim necessitatibus, autem id ratione quisquam quis deleniti, eius dicta
              libero magnam, corporis atque alias quam assumenda dolor quaerat nulla! Neque fugiat
              perspiciatis ex odit excepturi voluptatum inventore, id vero dolor pariatur quibusdam
              voluptatem, porro omnis suscipit unde, repellendus possimus necessitatibus reiciendis
              quia expedita dolorum quo voluptas accusamus minima? Doloremque cumque natus non
              aspernatur maxime. Incidunt minus maxime esse eligendi nemo. A enim, tenetur excepturi
              qui nobis fugit minima dolorem esse odit magni sequi, omnis tempore beatae molestiae
              voluptates explicabo numquam! At iure nam rem dolorum perferendis eveniet quasi
              doloremque odio sunt laboriosam? Voluptates a molestias magnam quasi soluta laborum
              modi libero numquam eveniet animi consequatur, culpa debitis quibusdam maxime itaque
              alias quidem corrupti laboriosam, voluptatem incidunt! Fugiat voluptas, repudiandae ab
              modi quas consequatur, minus perspiciatis maxime provident neque omnis repellendus
              consequuntur at quis asperiores esse ex deleniti.
            </Typography>
          </ContainerLayout>
        )
      })}
    </>
  )
}

export default Index
