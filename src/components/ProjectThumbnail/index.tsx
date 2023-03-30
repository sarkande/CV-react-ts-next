import { useEffect, useState } from 'react'
import styles from './projectThumbnail.module.scss'
import ImageWithFallback from '../ImageWithFallback'
import Carousel from '../Carousel'
import { useGlobalContext } from '@/context/OpenThumbnailContext'

interface MyProps {
  children?: React.ReactNode
  thumbnail?: string
  title: string
  carousel?: string[]
  tags?: string[]
}

export default function ProjectThumbnail({
  children,
  thumbnail,
  title,
  carousel,
  tags,
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
  }, [openThumbnail, title])
  return (
    <div className={`${styles.thumbnail} ${open ? styles.maximized : null}`}>
      {open ? (
        <div className={styles.container}>
          <div className={styles.children}>{children}</div>
          {carousel ? <Carousel img={carousel} /> : null}
        </div>
      ) : null}
      {!open ? (
        <>
          <ImageWithFallback
            className={styles.thumbnail_picture}
            priority
            key={src}
            alt=""
            width={200}
            height={150}
            src={`/${src} `}
            fallbackSrc="/project/image_not_available.png"
          />
        </>
      ) : null}
      <div className={styles.thumbnail_title}>
        {tags?.map((tag, i) => (
          <span
            key={tag + Math.random() * 100000}
            className={`${styles.tag} ${
              i === 0 ? styles.red : i === 1 ? styles.blue : styles.green
            }`}
          >
            {tag}
          </span>
        ))}
        <h1>{title}</h1>
        <button onClick={handleOpen}>
          {!open ? 'Ouvrir détails' : 'Fermer détails'}
        </button>
      </div>
    </div>
  )
}
