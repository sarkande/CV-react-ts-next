import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from './cv.module.scss'

export default function CV() {
  return (
    <>
      <Head>
        <title>Allan Perez - CV</title>
      </Head>
      <div>
        <a
          className={styles.cv_button_dl}
          href="/files/CV_2023.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger en PDF
        </a>

        <div>
          <Image
            className={styles.cv_picture}
            src="/cv_temp.png"
            alt="cv"
            width={596}
            height={842}
          />
        </div>

        {/* <div className="cv-detail">
          <div className="left-panel">
            <div className="left-panel__profile_picture"></div>
            <div className="left-panel__profile_address"></div>
            <div className="left-panel__profile_language"></div>
            <div className="left-panel__profile_hobby"></div>
          </div>
          <div className="right-panel">
            <div className="right-panel__title"></div>
            <div className="right-panel__profile_resume"></div>
            <div className="right-panel__profile_skill"></div>
            <div className="right-panel__profile_experience"></div>
            <div className="right-panel__profile_school"></div>
          </div> 
          </div> */}
      </div>
    </>
  )
}
