import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaperTexture from '../../assets/images/Texture/Paper.jpg'
const FriendThumb = '/FRIEND Poster.png'

const AccountContent = () => {
  const navigate = useNavigate()

  const [displayName, setDisplayName] = useState('player_name')
  const [password, setPassword] = useState('••••••••')
  const [email, setEmail] = useState('')

  const [editingDisplay, setEditingDisplay] = useState(false)
  const [editingPassword, setEditingPassword] = useState(false)
  const [editingEmail, setEditingEmail] = useState(false)

  return (
    <section className="account-section">
      <img src={PaperTexture} alt="" className="account-shell__texture" style={{ position: 'absolute', inset: 0 }} />
      <div className="account-shell__overlay" style={{ position: 'absolute', inset: 0 }} />
      
      <div className="account-section__content">
        {/* Profile Card */}
        <div className="account-shell">
          <img src={PaperTexture} alt="" className="account-shell__texture" />
          <div className="account-shell__overlay" />

          <div className="account-shell__content">
            <div className="account-profile-card">
              {/* Avatar + Greeting */}
              <div className="account-profile-header">
                <div className="account-card__avatar" />
                <h1 className="account-profile-title">
                  Hello, <span className="account-profile-accent">{displayName}</span>!
                </h1>
              </div>

              {/* Fields — 2 column grid */}
              <div className="account-profile-grid">
                {/* Display Name — left col */}
                <div>
                  <label className="account-field__label">Display Name</label>
                  <div className="account-field__row">
                    <input
                      type="text"
                      value={displayName}
                      disabled={!editingDisplay}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="account-field__input"
                    />
                    <button
                      onClick={() => setEditingDisplay(!editingDisplay)}
                      className="account-field__edit"
                      type="button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Password — right col */}
                <div>
                  <label className="account-field__label">Password</label>
                  <div className="account-field__row">
                    <input
                      type={editingPassword ? "text" : "password"}
                      value={password}
                      disabled={!editingPassword}
                      onChange={(e) => setPassword(e.target.value)}
                      className="account-field__input"
                    />
                    <button
                      onClick={() => setEditingPassword(!editingPassword)}
                      className="account-field__edit"
                      type="button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Email — left col */}
                <div>
                  <label className="account-field__label">E-mail</label>
                  <div className="account-field__row">
                    <input
                      type="email"
                      value={email}
                      disabled={!editingEmail}
                      onChange={(e) => setEmail(e.target.value)}
                      className="account-field__input"
                    />
                    <button
                      onClick={() => setEditingEmail(!editingEmail)}
                      className="account-field__edit"
                      type="button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Delete Account — right col */}
                <div className="account-field__delete-wrap">
                  <button className="account-field__delete" type="button">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Games Section */}
        <div className="account-games">
          {/* Header with dividers */}
          <div className="account-games__header">
            <div className="account-games__line" />
            <h2 className="account-games__title">Games</h2>
            <div className="account-games__line" />
          </div>

          {/* Game Cards — 2 per row */}
          <div className="account-games__grid">
            {/* Card 1 */}
            <div className="account-game-card">
              <img
                src={FriendThumb}
                alt="The Friend"
                className="account-game-card__thumb"
              />
              <div className="account-game-card__body">
                <p className="account-game-card__name">The Friend</p>
                <button
                  onClick={() => navigate('/friend')}
                  className="account-game-card__play"
                >
                  Play Game
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="account-game-card">
              <img
                src={FriendThumb}
                alt="The Friend"
                className="account-game-card__thumb"
              />
              <div className="account-game-card__body">
                <p className="account-game-card__name">The Friend</p>
                <button
                  onClick={() => navigate('/friend')}
                  className="account-game-card__play"
                >
                  Play Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccountContent