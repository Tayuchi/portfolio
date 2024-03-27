import Image from "next/image"

const Header = () => {
    return (
      <div className='flex flex-col items-center justify-between p-20'>
        <Image
          src="/header.png"
          alt="Tayu's header image"
          width="700"
          height="500"
          className="rounded-md object-cover mt-5"
        />
      </div>
    )
  }

export default Header;


