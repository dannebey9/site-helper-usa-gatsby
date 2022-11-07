import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Taplink = () => {
  return (
    <div className="inset-0 absolute bg-black text-gray-100">
      <div className="flex flex-col justify-center max-w-[1000px] container mx-auto text-center mt-14">
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
        <div className="text-3xl uppercase ">handyman roman</div>
        <div className="text-sm text-red-500 leading-3 mb-10">
          a button clicked. everything fixed
        </div>
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center">
          <a className="taplink-btn" href="tel:+19172923343">
            Call
          </a>
          <a className="taplink-btn" href="https://wa.me/19172923343">
            What'sApp
          </a>
          <a className="taplink-btn" href="https://wa.me/19172923343">
            Telegram
          </a>
        </div>
      </div>
    </div>
  )
}

export default Taplink
