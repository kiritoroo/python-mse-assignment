import React from "react"

const Loader = () => {
  return (
    <div style={{ zIndex: 99 }} className="fixed bg-light grid place-content-center w-full h-screen top-0 left-0">
      <div className="font-medium wave-effect text-5xl text-gray-900 uppercase tracking-widest">
        Kien Le
      </div>
    </div>
  )
}

export default Loader