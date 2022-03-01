import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faIdBadge } from "@fortawesome/free-solid-svg-icons"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => (
  <header>
    <article className=" justify-between px-10 items-center flex ">
      <StaticImage
        src="../images/logo-zephyr.png"
        alt="Logo de l'ASBL Zéphyr à Visé"
        width={100}
      />
      <section className="flex gap-x-4">
        <FontAwesomeIcon icon={faEnvelope} className="text-bleu text-xl" />
        <FontAwesomeIcon icon={faFacebook} className="text-bleu text-xl" />
      </section>
    </article>
    <nav className="bg-orange">
      <ul className="flex gap-x-8 p-2 justify-center text-white font-black">
        <li className="flex items-center gap-x-2">
          <FontAwesomeIcon icon={faHome} /> <span>accueil </span>
        </li>
        <li className="flex items-center gap-x-2">
          <FontAwesomeIcon icon={faIdBadge} />
          <span>Qui sommes-nous ? </span>
        </li>
        <li className="flex items-center gap-x-2">
          <FontAwesomeIcon icon={faAddressCard} />
          <span>Nos formations</span>
        </li>
        <li className="flex items-center gap-x-2">
          <FontAwesomeIcon icon={faBriefcase} />
          <span> Inscription </span>
        </li>
        <li className="flex items-center gap-x-2">
          <FontAwesomeIcon icon={faHeart} /> <span>Nous soutenir</span>
        </li>
        <li className="flex items-center gap-x-2">
          <FontAwesomeIcon icon={faHandsHelping} />
          <span>Nos partenaires</span>
        </li>
        <li className="flex items-center gap-x-2">
          <FontAwesomeIcon icon={faUsers} />
          <span> Zéphyr recrute </span>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
