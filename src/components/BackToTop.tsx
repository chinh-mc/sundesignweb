import React from 'react'

const BackToTop = () => {

  //  useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 300) {
  //       setShowButton(true);
  //     } else {
  //       setShowButton(false);
  //     }
  //   });
  // }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth' // for smoothly scrolling
  //   });
  // };

  return (
    <a href="#" className="back-to-top">
      <i className="lni-chevron-up"></i>
    </a>
  )
}

export default BackToTop