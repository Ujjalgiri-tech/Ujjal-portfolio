import './Hero.css'
import react from 'react'
import pic from '../../assets/pic.jpg'
const hero =()=>{
    return(
        <div className="hero">
            <img src={pic} alt="" />
            <h1>Hi I'm Ujjal Giri.</h1>
            <p>I'm a Front End Developer with 1 years of experience using React and Node.JS. Reach out if you like to learn more.</p>

        </div>
    )
}
export default hero;