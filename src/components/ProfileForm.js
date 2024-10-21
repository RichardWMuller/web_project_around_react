const ProfileForm = () => {
  return (
    <div className="popup__input-container">
      <div className="popup__control popup__size">
        <input
          id="name"
          className="popup__input-box popup__input-box-name"
          type="text"
          name="name"
          minLength={2}
          maxLength={40}
          required=""
        />
        <span className="popup__error" />
      </div>
      <div className="popup__control">
        <input
          id="job"
          className="popup__input-box popup__input-box-job"
          type="text"
          name="job"
          minLength={2}
          maxLength={200}
          required=""
        />
        <span className="popup__error" />
      </div>
    </div>
  )
}

export default ProfileForm
