import ProjectThumbnail from '@/components/ProjectThumbnail'
import Head from 'next/head'
import styles from './portfolio.module.scss'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Allan Perez - Portfolio</title>
      </Head>
      <h1 className={styles.title}>Formation ReactJS</h1>
      <div className={styles.portfolio}>
        <ProjectThumbnail
          title="Foundry VTT Naheulbeuk"
          thumbnail="project/naheulbeuk.jpg"
        >
          gitlab: <a href="">aaa</a>
          <p>
            Projet permettant de rajouter un système donjon de naheulbeuk à
            foundryVTT un logiciel permettant de mettre en place du jeu de rôle
          </p>
        </ProjectThumbnail>
        <ProjectThumbnail
          title="Talents-Affinity"
          thumbnail="project/talents.jpg"
        >
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail
          title="Site AngularJS/RubyOnRails Goldrush"
          thumbnail="project/goldrush_grand.png"
        >
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="OrcWar" thumbnail="project/orcwar.png">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
      </div>
      <h1 className={styles.title}>Projets</h1>
      <div className={styles.portfolio}>
        <ProjectThumbnail
          title="Foundry VTT Naheulbeuk"
          thumbnail="naheulbeuk.jpg"
        >
          gitlab: <a href="">aaa</a>
          <p>
            Projet permettant de rajouter un système donjon de naheulbeuk à
            foundryVTT un logiciel permettant de mettre en place du jeu de rôle
          </p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Talents-Affinity" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail
          title="Site AngularJS/RubyOnRails DofusTouch"
          thumbnail=""
        >
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
      </div>

      <h1 className={styles.title}>Vieux projets</h1>
      <div className={styles.portfolio}>
        <ProjectThumbnail
          title="Foundry VTT Naheulbeuk"
          thumbnail="naheulbeuk.jpg"
        >
          gitlab: <a href="">aaa</a>
          <p>
            Projet permettant de rajouter un système donjon de naheulbeuk à
            foundryVTT un logiciel permettant de mettre en place du jeu de rôle
          </p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Talents-Affinity" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail
          title="Site AngularJS/RubyOnRails DofusTouch"
          thumbnail=""
        >
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
      </div>
    </>
  )
}
