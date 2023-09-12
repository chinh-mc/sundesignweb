import { useEffect, useState } from 'react';


const LoadingGlobal = (props: any) => {
  const { type, visible, delay } = props;
  const [loading, setLoading] = useState(visible);

  useEffect(() => {
    setLoading(visible)
  }, [visible])

  let loader;
  if (type === "BounceLoader") {
    loader = (
      <div className="bounce-loader">
        <div className="bounce-loader__loading1"></div>
        <div className="bounce-loader__loading2"></div>
      </div >
    )
  } else if (type === "RingLoader") {
    loader = (
      <div className="ring-loader">
        <div className="ring-loader__loading1"></div>
        <div className="ring-loader__loading2"></div>
      </div >
    )
  }
  else if (type === "ScaleLoader") {
    loader = (
      <div className="scale-loader">
        <div className="scale-loader__loading1"></div>
        <div className="scale-loader__loading2"></div>
        <div className="scale-loader__loading3"></div>
        <div className="scale-loader__loading4"></div>
        <div className="scale-loader__loading5"></div>
      </div >
    )
  }

  useEffect(() => {
    if (!visible && !isNaN(delay)) {
      setTimeout(() => {
        if (loading) {
          setLoading(false);
        }
      }, delay * 1000);
    } else {
      setLoading(visible);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  return (
    loading ?
      <div className={"overlay-sun"}>
        <div className="loading" id="load">
          {
            loader
          }
        </div>
      </div>
      :
      null
  )
}

export default LoadingGlobal
