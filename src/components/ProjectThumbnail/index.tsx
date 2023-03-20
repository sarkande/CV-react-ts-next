import { useEffect, useState } from 'react'
import styles from './projectThumbnail.module.scss'
import ImageWithFallback from '../ImageWithFallback'
import Carousel from '../Carousel'
import {
  OpenThumbnailContext,
  useGlobalContext,
} from '@/context/OpenThumbnailContext'

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
  const { openThumbnail, setOpenThumbnail } = useGlobalContext()

  const [open, setOpen] = useState(false)
  const [src] = useState(thumbnail !== undefined ? thumbnail : '')

  const handleOpen = () => {
    if (!open) setOpenThumbnail(title)
    else setOpenThumbnail('')
  }

  useEffect(() => {
    setOpen(openThumbnail === title)
  })
  return (
    <div className={`${styles.thumbnail} ${open ? styles.maximized : null}`}>
      {open ? (
        <div className={styles.container}>
          <div className={styles.children}>{children}</div>
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
