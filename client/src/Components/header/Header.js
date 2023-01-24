
import "./header.css"

export default function Header() {
  return (
    <div className='headrer'>
      <div className='headerTitles'>
        <span className='headerTitleSm'></span>
        <span className='headerTitleLg'>Blog </span>
      </div>
      <img className='headerImg' 
      src={"https://www.sciencepresse.qc.ca/sites/default/files/styles/large_16_9/public/2019-10/Smart%20City%20image.jpg?itok=1mMOT4ee"}
      alt=""/>
    </div>
  )
}
