import { useState } from 'react'
import ImageWithFallback from '../ImageWithFallback'
import styles from './carousel.module.scss'
interface Props {
  img: string[]
}

export default function Carousel({ img }: Props) {
  const [src, setSrc] = useState(
    img.length > 0 ? img[0] : 'project/image_not_available.png'
  )
  const [selected, setSelected] = useState(src)

  const handleClick = (src: string) => {
    console.log(src)
    setSrc(src)
    setSelected(src)
  }
  return (
    <>
      {img.length > 0 ? (
        <div className={styles.carousel}>
          <div className={styles.main}>
            <ImageWithFallback
              className={styles.mainImage}
              key={src}
              alt=""
              width={500}
              height={300}
              src={`/${src} `}
              fallbackSrc="/project/image_not_available.png"
            />
          </div>
          <div className={styles.miniatures}>
            {img.map((srcImg) => (
              <ImageWithFallback
                key={srcImg}
                alt=""
                width={125}
                height={125}
                src={`/${srcImg} `}
                fallbackSrc="/project/image_not_available.png"
                onClick={() => handleClick(srcImg)}
                className={srcImg === selected ? styles.selected : ''}
              />
            ))}
          </div>
        </div>
      ) : (
        <>No img found</>
      )}
    </>
  )
}
