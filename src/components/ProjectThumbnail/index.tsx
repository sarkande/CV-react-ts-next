import { useState } from 'react'
import Image from 'next/image'
import styles from './projectThumbnail.module.scss'

interface MyProps {
  children?: React.ReactNode
  img?: string
  title: string
}

export default function ProjectThumbnail({
  children,
  img,
  title,
}: React.PropsWithChildren<MyProps>) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    console.log('click')
    setOpen(!open)
  }

  return (
    <div className={`${styles.thumbnail} ${open ? styles.maximized : null}`}>
      {open ? (
        <div>
          {children}
          {img ? (
            <Image src="/profile.png" alt="13" width={60} height={60} />
          ) : null}
        </div>
      ) : null}
      <div className={styles.thumbnail_title}>
        <h1>{title}</h1>
        <button onClick={handleOpen}>{!open ? 'Ouvrir' : 'Fermer'}</button>
      </div>
    </div>
  )
}
