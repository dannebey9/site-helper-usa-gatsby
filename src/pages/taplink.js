import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const Taplink = () => {
  return (
    <div className="inset-0 absolute bg-black text-gray-100 flex items-center justify-center">
      <div className="flex flex-col justify-center max-w-[1000px] container mx-auto text-center">
        <div className="justify-center flex mt-8">
          <StaticImage
            src="../images/handyman-logo.png"
            loading="eager"
            width={200}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="logo"
          />
        </div>
        <div className="text-4xl uppercase ">handyman roman</div>
        <div className="text-md text-red-500 leading-3 mb-10">
          a button clicked. everything fixed
        </div>
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center">
          <a className="taplink-btn">Call</a>
          <a className="taplink-btn">What'sApp</a>
          <a className="taplink-btn">Telegram</a>
        </div>
      </div>
    </div>
  )
}

export default Taplink
