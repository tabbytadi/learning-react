import profilePic from '../assets/profile-picture.jpg'

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile-picture"></img>
      <h2 className="card-title">Adelina Stankova</h2>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi doloribus quae ipsum assumenda, autem ea corporis sapiente minima voluptate quia id unde inventore vitae voluptas, placeat sunt possimus. Laborum?</p>
    </div>
  );
}

export default Card;