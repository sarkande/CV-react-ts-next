import ProjectThumbnail from '@/components/ProjectThumbnail'
import Head from 'next/head'
import styles from './portfolio.module.scss'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Allan Perez - Portfolio</title>
      </Head>
      <h1>Portfolio</h1>
      <div className={styles.portfolio}>
        <ProjectThumbnail title="Foundry VTT Naheulbeuk">
          gitlab: <a href="">aaa</a>
          <p>
            Projet permettant de rajouter un système donjon de naheulbeuk à
            foundryVTT un logiciel permettant de mettre en place du jeu de rôle
          </p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Talents-Affinity" img="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Site AngularJS/RubyOnRails DofusTouch" img="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="" img="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="" img="">
          <p>Test</p>
        </ProjectThumbnail>
      </div>

      <h1>Vieux projets</h1>
    </>
  )
}
