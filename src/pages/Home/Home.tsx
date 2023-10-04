import "./Home.css"
import imgUrl from "./pic.jpg"

export default function Home() {
  return (
    <div className="home__container">
      <img src={imgUrl} className="home__image"/>
      <div className="home__info">
        <h2>Oh man, it's finally happening!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi inventore quisquam et, culpa minima veniam, odit amet neque, velit molestiae. Fugiat, libero blanditiis exercitationem quos ducimus nostrum minus architecto?
        </p>
        <hr/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eveniet provident quos beatae iste assumenda sapiente blanditiis a perferendis. Aspernatur ea est laudantium veritatis, accusantium repellat doloribus saepe odit aut?
        </p>
      </div>
    </div>
  )
}