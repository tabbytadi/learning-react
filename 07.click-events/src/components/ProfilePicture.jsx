function ProfilePicture() {
  const imageUrl = "./pictures/profile-picture.jpg";

  //WHEN YOU CLICK THE IMAGE, IT DISSAPEARS
  const handleClick = (e) => e.target.style.display = "none";
  return (<img onClick={(e) => handleClick(e)} src={imageUrl}></img>)
}

export default ProfilePicture