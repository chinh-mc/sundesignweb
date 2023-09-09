/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const ContactNetwork = () => {
  return (
    <div className="contact-widget">
      <div>
        <a id="zalo" href="https://zalo.me/347572732" target="_blank" rel="nofollow">
          <Image src="img/message/zalo-144.svg" alt="zalo" width={54} height={54}/></a>
        <a id="messenger" href="https://m.me/hai.zen.2011" target="_blank" rel="nofollow">
          <Image src="img/message/messenger-144.svg" alt="messenger"  width={54} height={54}/></a>
      </div>
    </div>

  )
}

export default ContactNetwork