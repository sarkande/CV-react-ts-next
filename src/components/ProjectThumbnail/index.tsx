import { useState } from 'react'
import Image from 'next/image'
import styles from './projectThumbnail.module.scss'
import ImageWithFallback from '../ImageWithFallback'
import Carousel from '../Carousel'

interface MyProps {
  children?: React.ReactNode
  thumbnail?: string
  title: string
  carousel?: string[]
}

export default function ProjectThumbnail({
  children,
  thumbnail,
  title,
  carousel,
}: React.PropsWithChildren<MyProps>) {
  const [open, setOpen] = useState(false)
  const [src, setSrc] = useState(thumbnail !== undefined ? thumbnail : '')
  const handleOpen = () => {
    console.log('click')
    setOpen(!open)
  }
  return (
    <div className={`${styles.thumbnail} ${open ? styles.maximized : null}`}>
      {open ? (
        <div className={styles.container}>
          <div>{children}</div>
          {carousel ? <Carousel img={carousel} /> : null}
        </div>
      ) : null}
      {!open ? (
        <ImageWithFallback
          className={styles.thumbnail_picture}
          key={src}
          alt=""
          width={200}
          height={150}
          src={`/${src} `}
          fallbackSrc="/project/image_not_available.png"
        />
      ) : null}
      <div className={styles.thumbnail_title}>
        <h1>{title}</h1>
        <button onClick={handleOpen}>
          {!open ? 'Ouvrir détails' : 'Fermer détails'}
        </button>
      </div>
    </div>
  )
}
