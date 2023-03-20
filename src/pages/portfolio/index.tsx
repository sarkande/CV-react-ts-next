import ProjectThumbnail from '@/components/ProjectThumbnail'
import Head from 'next/head'
import styles from './portfolio.module.scss'
import { useState } from 'react'

import { OpenThumbnailContext } from '@/context/OpenThumbnailContext'

export default function Portfolio() {
  const [openThumbnail, setOpenThumbnail] = useState<string>('')

  return (
    <>
      <OpenThumbnailContext.Provider
        value={{
          openThumbnail,
          setOpenThumbnail,
        }}
      >
        <Head>
          <title>Allan Perez - Portfolio</title>
        </Head>
        <h1 className={styles.title}>Formation ReactJS</h1>
        <div className={styles.portfolio}>
          <ProjectThumbnail
            title="Modale"
            thumbnail="project/openclassrooms/projet14-modale/2.png"
            carousel={[
              'project/openclassrooms/projet14-modale/1.png',
              'project/openclassrooms/projet14-modale/2.png',
              'project/openclassrooms/projet14-modale/3.png',
            ]}
          >
            <h1>Projet Modale</h1>
            <a target="_blank" href="https://github.com/sarkande/Projet_14">
              Lien github: Projet_14
            </a>
            <p>
              Il s'agit du dernier projet de la formation ReactJS. Ce projet
              consistait à gérer une page de gestion d'employé pour un service
              RH. Il fallait refaire le système actuel fonctionnant sous JQuery
              pour passer à du ReactJS et un module parmi plusieurs possible
              devait etre coder. J'ai personnellement choisis la fenêtre modale,
              et ai du ensuite upload le composant sur npm et donc pour ça creer
              un fichier webpackJS.
            </p>
            <p>
              Pour ce module, j'ai fait en sorte de créer quelques chose de
              flexible et facilement parametrable pour que les eventuels
              utilisateurs qui telechargerait ce module, puissent faire ce qu'il
              souhaitait sans trop de difficultés
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="ArgentBank"
            thumbnail="project/openclassrooms/projet13-argentbank/2.png"
            carousel={[
              'project/openclassrooms/projet13-argentbank/1.png',
              'project/openclassrooms/projet13-argentbank/2.png',
              'project/openclassrooms/projet13-argentbank/3.png',
            ]}
          >
            <h1>Projet ArgentBank</h1>
            <a target="_blank" href="https://github.com/sarkande/Projet_13">
              Lien github: Projet_13
            </a>
            <p>
              Pour ce projet, le but était de réaliser une application de
              gestion de compte bancaire, et principalement d'utiliser Redux
              comme state manager.
            </p>
            <p>
              Une api backend était fourni, il fallait donc gérer les requetes
              pour pouvoir recupérer un token et le stocker dans le state
              manager
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="SportSee"
            thumbnail="project/openclassrooms/projet12-sportsee/2.png"
            carousel={[
              'project/openclassrooms/projet12-sportsee/1.png',
              'project/openclassrooms/projet12-sportsee/2.png',
              'project/openclassrooms/projet12-sportsee/3.png',
            ]}
          >
            <h1>Projet SportSee</h1>
            <a target="_blank" href="https://github.com/sarkande/Projet_12">
              Lien github: Projet_12
            </a>
            <p>
              Pour ce projet, le but était de réaliser une application react
              permettant d'afficher un panel de statistiques détaillés pour un
              utilisateur en fonction de ses performances physiques.
            </p>
            <p>
              J'ai travailler en utilisant la bibliotheque d3, qui est très
              puissante mais relativement compliqué à prendre en main. Par la
              suite, j'ai rajouté des animations lors de la construction des
              graphiques, ce qui permettait de rendre la page plus attractive et
              pousser plus loin ma decouverte de la bibliotheque.
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Kasa"
            thumbnail="project/openclassrooms/projet11-kasa/2.png"
            carousel={[
              'project/openclassrooms/projet11-kasa/1.png',
              'project/openclassrooms/projet11-kasa/2.png',
              'project/openclassrooms/projet11-kasa/3.png',
            ]}
          >
            <h1>Projet Kasa</h1>
            <a target="_blank" href="https://github.com/sarkande/Projet_11">
              Lien github: Projet_11
            </a>
            <p>
              Pour ce projet, le but était de réaliser une application react
              pour agence immobilière. Le site devait être compatible mobile et
              recuperait les données depuis une API.
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Maquettage"
            thumbnail="project/openclassrooms/projet10-maquettage/3.png"
            carousel={[
              'project/openclassrooms/projet10-maquettage/1.png',
              'project/openclassrooms/projet10-maquettage/2.png',
              'project/openclassrooms/projet10-maquettage/3.png',
              'project/openclassrooms/projet10-maquettage/4.png',
            ]}
          >
            <h1>Projet Maquettage</h1>
            <a target="_blank" href="https://github.com/sarkande/Projet_13">
              Lien github: Projet_12
            </a>
            <p>
              Pour ce projet, le but était de réaliser une application react
              permettant d'afficher un panel de statistiques détaillés pour un
              utilisateur en fonction de ses performances physiques.
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Billed"
            thumbnail="project/openclassrooms/projet9-Billed/2.png"
            carousel={[
              'project/openclassrooms/projet9-Billed/1.png',
              'project/openclassrooms/projet9-Billed/2.png',
              'project/openclassrooms/projet9-Billed/3.png',
              'project/openclassrooms/projet9-Billed/4.png',
            ]}
          >
            <p>Test</p>
          </ProjectThumbnail>

          <ProjectThumbnail
            title="Les petits plats"
            thumbnail="project/openclassrooms/projet7-lespetitsplats/1.png"
            carousel={[
              'project/openclassrooms/projet7-lespetitsplats/1.png',
              'project/openclassrooms/projet7-lespetitsplats/2.png',
              'project/openclassrooms/projet7-lespetitsplats/3.png',
              'project/openclassrooms/projet7-lespetitsplats/4.png',
            ]}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Fisheye"
            thumbnail="project/openclassrooms/projet6-fisheye/1.png"
            carousel={[
              'project/openclassrooms/projet6-fisheye/1.png',
              'project/openclassrooms/projet6-fisheye/2.png',
            ]}
          >
            <p>Test</p>
          </ProjectThumbnail>

          <ProjectThumbnail
            title="GameOn"
            thumbnail="project/openclassrooms/projet4-gameon/1.png"
            carousel={[
              'project/openclassrooms/projet4-gameon/1.png',
              'project/openclassrooms/projet4-gameon/2.png',
            ]}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="OhMyFood"
            thumbnail="project/openclassrooms/projet3-ohmyfood/5.png"
            carousel={[
              'project/openclassrooms/projet3-ohmyfood/1.png',
              'project/openclassrooms/projet3-ohmyfood/2.png',
              'project/openclassrooms/projet3-ohmyfood/3.png',
              'project/openclassrooms/projet3-ohmyfood/4.png',
              'project/openclassrooms/projet3-ohmyfood/5.png',
            ]}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Booki"
            thumbnail="project/openclassrooms/projet2-booki/1.png"
            carousel={[
              'project/openclassrooms/projet2-booki/1.png',
              'project/openclassrooms/projet2-booki/2.png',
              'project/openclassrooms/projet2-booki/3.png',
            ]}
          >
            <p>Test</p>
          </ProjectThumbnail>
        </div>
        <h1 className={styles.title}>Projets</h1>
        <div className={styles.portfolio}>
          <ProjectThumbnail
            title="Foundry VTT Naheulbeuk"
            thumbnail="project/naheulbeuk/1.png"
            carousel={[
              'project/naheulbeuk/1.png',
              'project/naheulbeuk/2.png',
              'project/naheulbeuk/3.png',
              'project/naheulbeuk/4.png',
            ]}
          >
            <a href="https://gitlab.com/aperezgo74/naheulbeuk">
              gitlab: naheulbeuk
            </a>
            <p>
              Projet permettant de rajouter un système donjon de naheulbeuk à
              foundryVTT un logiciel permettant de mettre en place du jeu de
              rôle
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Talents-Affinity"
            thumbnail="project/talents-affinity/3.png"
            carousel={[
              'project/talents-affinity/1.png',
              'project/talents-affinity/2.png',
              'project/talents-affinity/3.png',
              'project/talents-affinity/4.png',
              'project/talents-affinity/5.png',
              'project/talents-affinity/6.png',
            ]}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Site AngularJS/RubyOnRails Goldrush"
            thumbnail="project/goldrush.png"
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="OrcWar"
            thumbnail="project/orcwar/2.png"
            carousel={[
              'project/orcwar/1.png',
              'project/orcwar/2.png',
              'project/orcwar/3.png',
            ]}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Jonquille Sportive Reignier"
            thumbnail="project/jonquille/1.png"
            carousel={['project/jonquille/1.png', 'project/jonquille/2.png']}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Bujinkan-kanji"
            thumbnail="project/bujinkan-kanji.png"
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="RPG 3D Unity"
            thumbnail="project/rpg3d/1.png"
            carousel={[
              'project/rpg3d/1.png',
              'project/rpg3d/2.png',
              'project/rpg3d/3.png',
              'project/rpg3d/4.png',
            ]}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="RPG tactical 3D Unity"
            thumbnail="project/tactical/1.png"
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="android Unity"
            thumbnail="project/android/1.png"
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="OCR Discord"
            thumbnail="project/OCR_discord/1.png"
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="OCR Dofus"
            thumbnail="project/OCR_app/1.png"
            carousel={['project/OCR_app/1.png', 'project/OCR_app/2.png']}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Navigateur web simplifié"
            thumbnail="project/mini/2.png"
            carousel={['project/mini/1.png', 'project/mini/2.png']}
          >
            <p>Test</p>
          </ProjectThumbnail>
        </div>

        <h1 className={styles.title}>Vieux projets</h1>
        <div className={styles.portfolio}>
          <ProjectThumbnail
            title="WakeOnLan PHP"
            thumbnail=""
          ></ProjectThumbnail>
          <ProjectThumbnail title="Fnac PHP" thumbnail="">
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail title="Bloc notes C++" thumbnail="">
            <p>Test</p>
          </ProjectThumbnail>

          <ProjectThumbnail title="Bot discord parsing" thumbnail="">
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Logiciel de chat en réseau winform"
            thumbnail=""
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail title="Lecteur multimédia wpf" thumbnail="">
            <p>Test</p>
          </ProjectThumbnail>
        </div>
      </OpenThumbnailContext.Provider>
    </>
  )
}
