import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <article className="w-12/12 bg-bleu text-white  py-10 mb-10 m-auto">
      <section className=" w-10/12 m-auto gap-x-8  grid grid-cols-2">
        <StaticImage src="../images/activite.jpg" alt="Photo activité" />
        <div>
          <h2 className="text-white text-3xl font-black mb-5 gap-x-8">
            Bienvenue
          </h2>
          <p className="mb-2">
            Zéphyr asbl propose, dans une ambiance conviviale, des formations
            d’alphabétisation, de français et de citoyenneté destinées à des
            primo-arrivants ou des personnes d’origine étrangère. Ces formations
            collectives permettent l’acquisition des bases du français et
            donnent les outils pour acquérir les bases linguistiques,
            administratives, culturelles et sociales. La formation est
            participative et interactive, elle alterne la théorie et la mise en
            pratique. Public cible : adultes non-francophones inscrits sur le
            territoire.
          </p>
          <p className="mb-2">
            Avec le soutien de la Wallonie / ILI, numéro d’agrément 12 mars
            2019: RW/ILI/038
          </p>
          <p className="mb-2">et la CFWB /Education Permanente.</p>
          <p className="mb-2">
            Nous sommes la principale association d’Initiative Locale
            d’Intégration et d’éducation permanente en Basse-Meuse pour
            l’apprentissage du français aux personnes dont ce n’est pas la
            langue maternelle (FLE).{" "}
          </p>
        </div>
      </section>
    </article>
    <article className="w-10/12 m-auto">
      <h2 className="text-bleu text-3xl font-black mb-5 "> Notre actualité </h2>
      <section className="gap-x-16 gap-y-8 py-10 grid grid-cols-2">
        <div className="flex flex-col">
          <figure className="mb-5">
            <StaticImage
              src="../images/news1.jpg"
              alt="Photo activité"
              height={150}
            />
          </figure>
          <h3 className="text-orange font-black">
            {" "}
            Projet pilote: Français à visée professionnelle{" "}
          </h3>
          <div className="flex gap-x-2 items-center mb-5">
            <FontAwesomeIcon icon={faCalendar} className="text-bleu " />
            <span className="italic"> du 19/1/22 au 21/6/21</span>
          </div>
          <p>
            Le projet « Français à visée professionnelle » vise à faciliter
            l’insertion professionnelle des migrants en intégrant
            l’apprentissage de la langue du pays d’accueil au développement des
            compétences clés nécessaires à l’insertion dans le travail.
            Partenariat: Zéphyr (FLE), RiseSmart (recherche emploi) et IRFAM
            accompagnement
          </p>
          <Link to="#" className="text-orange">
            {" "}
            Lire la suite...
          </Link>
        </div>
        <div className="flex flex-col">
          <figure className="mb-5">
            <StaticImage
              src="../images/new2.jpg"
              alt="Photo activité"
              height={150}
            />
          </figure>
          <h3 className="text-orange font-black">
            {" "}
            Projet pilote: Français à visée professionnelle{" "}
          </h3>
          <div className="flex gap-x-2 items-center mb-5">
            <FontAwesomeIcon icon={faCalendar} className="text-bleu " />
            <span className="italic"> du 19/1/22 au 21/6/21</span>
          </div>
          <p>
            Le projet « Français à visée professionnelle » vise à faciliter
            l’insertion professionnelle des migrants en intégrant
            l’apprentissage de la langue du pays d’accueil au développement des
            compétences clés nécessaires à l’insertion dans le travail.
            Partenariat: Zéphyr (FLE), RiseSmart (recherche emploi) et IRFAM
            accompagnement
          </p>
          <Link to="#" className="text-orange">
            {" "}
            Lire la suite...
          </Link>
        </div>{" "}
        <div className="flex flex-col">
          <figure className="mb-5">
            <StaticImage
              src="../images/pa.png"
              alt="Photo activité"
              height={150}
            />
          </figure>
          <h3 className="text-orange font-black">
            {" "}
            Projet pilote: Français à visée professionnelle{" "}
          </h3>
          <div className="flex gap-x-2 items-center mb-5">
            <FontAwesomeIcon icon={faCalendar} className="text-bleu " />
            <span className="italic"> du 19/1/22 au 21/6/21</span>
          </div>
          <p>
            Le projet « Français à visée professionnelle » vise à faciliter
            l’insertion professionnelle des migrants en intégrant
            l’apprentissage de la langue du pays d’accueil au développement des
            compétences clés nécessaires à l’insertion dans le travail.
            Partenariat: Zéphyr (FLE), RiseSmart (recherche emploi) et IRFAM
            accompagnement
          </p>
          <Link to="#" className="text-orange">
            {" "}
            Lire la suite...
          </Link>
        </div>{" "}
        <div className="flex flex-col">
          <figure className="mb-5">
            <StaticImage
              src="../images/belgique-mode-demploi.jpg"
              alt="Photo activité"
              height={150}
            />
          </figure>
          <h3 className="text-orange font-black">
            {" "}
            Projet pilote: Français à visée professionnelle{" "}
          </h3>
          <div className="flex gap-x-2 items-center mb-5">
            <FontAwesomeIcon icon={faCalendar} className="text-bleu " />
            <span className="italic"> du 19/1/22 au 21/6/21</span>
          </div>
          <p>
            Le projet « Français à visée professionnelle » vise à faciliter
            l’insertion professionnelle des migrants en intégrant
            l’apprentissage de la langue du pays d’accueil au développement des
            compétences clés nécessaires à l’insertion dans le travail.
            Partenariat: Zéphyr (FLE), RiseSmart (recherche emploi) et IRFAM
            accompagnement
          </p>
          <Link to="#" className="text-orange">
            {" "}
            Lire la suite...
          </Link>
        </div>{" "}
      </section>
    </article>
    <footer>
    <article className="border-t-8 py-10 border-orange">
      <section className="w-10/12 m-auto">
      <h3 className="text-bleu text-xl mb-5 font-black"> Avec le soutien de:</h3>
      <div className="flex gap-x-8 justify-center items-center">
      <StaticImage src="../images/Vise.png" alt="Photo activité" height={80} />
      <StaticImage src="../images/province-de-liege.png" alt="Photo activité" height={80} />
      <StaticImage src="../images/logo_Wallonie-e1548859266324.png" alt="Photo activité" height={80} />
      <StaticImage src="../images/fwb.jpg" alt="Photo activité" height={80} />
      <StaticImage src="../images/roi-baudoin-logo.png" alt="Photo activité" height={80} />
      <StaticImage src="../images/pa.png" alt="Photo activité" height={80} />
      <StaticImage src="../images/maribel.png" alt="Photo activité" height={80} />

        </div>
      </section>
    </article>
    <article className="bg-bleu text-white text-center">
      <p> Zéphyr-asbl NE: 0889-974-109 </p>
      <p> Copyright © Sirius 2022 </p>
    </article>
    </footer>
  </Layout>
)

export default IndexPage
