import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { TbBrandTelegram, TbBrandWhatsapp, TbPhone } from "react-icons/all"

const Taplink = () => {
  return (
    <div className="inset-0 absolute bg-black text-gray-100 scroll-smooth">
      <Seo title={"HandyMan Roman"} />
      <div className="flex flex-col justify-center max-w-[1000px] container mx-auto text-center mt-14">
        <div className="justify-center flex mt-8">
          <StaticImage
            src="../images/handyman-logo.png"
            loading="lazy"
            width={200}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="logo"
          />
        </div>
        <div className="text-3xl uppercase antialiased hover:subpixel-antialiased">
          handyman roman
        </div>
        <div className="text-sm text-red-500 leading-3 mb-10">
          a button clicked. everything fixed
        </div>
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center">
          <a className="taplink-btn" href="tel:+19172923343">
            <div className="absolute top-[50%]  right-1 -translate-y-1/2 rounded-full">
              <TbPhone size="2em" className="m-2" />
            </div>
            Call
          </a>
          <a className="taplink-btn" href="https://wa.me/19172923343">
            <div className="absolute top-[50%]  right-1 -translate-y-1/2 rounded-full">
              <TbBrandWhatsapp size="2em" className="m-2" />
            </div>
            What'sApp
          </a>
          <a className="taplink-btn" href="https://wa.me/19172923343">
            <div className="absolute top-[50%]  right-1 -translate-y-1/2 rounded-full">
              <TbBrandTelegram size="2em" className="m-2" />
            </div>
            Telegram
          </a>
        </div>
      </div>
    </div>
  )
}

export default Taplink
