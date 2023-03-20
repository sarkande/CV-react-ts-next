import Head from 'next/head'
import styles from './home/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Allan Perez - Accueil</title>
      </Head>

      <section className={styles.section}>
        <h1 id="welcome">Bienvenue sur mon site</h1>
        <p>
          Ce site à vocation à m'aider pour promouvoir mes capacités dans le but
          de trouver un emploi.
        </p>

        <ul>
          <li>
            Dans cette partie du site, vous aurez accès à un petit résumé
            permettant de me présenter.
          </li>
          <li>
            Dans la partie CV, vous pourrez visualiser directement mon CV
            complet ou télécharger une version PDF plus condensé.
          </li>
          <li>
            Dans la partie Parcours, vous pourrez lire un résumé complet de mon
            parcours informatique.
          </li>
          <li>
            Dans la partie Portfolio, une liste non-exhaustive de l'ensemble de
            mes projets. Vous y trouverez donc des screenshots et en fonction de
            l'ancienneté du projet, et dans la mesure du possible, des codes
            source.
          </li>

          <li>
            En haut à droite, vous pourrez accéder directement à mon répertoire
            Github, mon gitlab ainsi que mon linkedin.
          </li>
        </ul>
        <p>
          Dans le but de m'améliorer en React JS, ce site est codé avec le
          framework Next.JS. Le serveur est un vps auquel j'ai rattaché un nom
          de domaine et instancié un serveur NGINX
        </p>
      </section>
    </>
  )
}
