
const BackToTop = () => {
  // const [showButton, setShowButton] = useState(false)
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 200) {
  //       setShowButton(true);
  //     } else {
  //       setShowButton(false);
  //     }
  //   });
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth' // for smoothly scrolling
  //   });
  // };
  // console.log("showButton", showButton)
  // if(!showButton) return null
  // return (
  //   <button className="btn btn-common back-to-top" style={{ display: "flex",  alignItems: "center" }}
  //     onClick={scrollToTop}
  //   >
  //     <i className="lni-chevron-up"></i>
  //   </button>
  // )

  return (
    <a href="#" className="back-to-top">
      <i className="lni-chevron-up"></i>
    </a>
  )
}

export default BackToTop