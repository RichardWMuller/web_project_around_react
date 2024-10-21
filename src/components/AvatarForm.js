const AvatarForm = () => {
  return (
    <div className="popup__change-avatar-control">
      <input
        id="link"
        className="popup__change-avatar-input-box popup__change-avatar-input-box-link"
        type="url"
        name="link"
        placeholder="Link da foto"
        minLength={15}
        required=""
      />
    </div>
  )
}

export default AvatarForm
