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
    <div className="account-root">
      <img src={PaperTexture} alt="" className="account-texture" />
      <div className="account-tint" />
      
      <div className="account-content">
        {/* Profile Card */}
        <div className="profile-card">
          {/* Avatar + Greeting */}
          <div className="profile-header">
            <div className="profile-avatar" />
            <h1 className="profile-greeting">
              Hello, <span className="profile-greeting-name">{displayName}</span>!
            </h1>
          </div>

          {/* Fields — 2 column grid */}
          <div className="profile-fields">
            {/* Display Name — left col */}
            <div className="field-group">
              <label className="field-label">Display Name</label>
              <div className="field-row">
                <input
                  type="text"
                  value={displayName}
                  disabled={!editingDisplay}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="field-input"
                />
                <button
                  onClick={() => setEditingDisplay(!editingDisplay)}
                  className="field-edit-btn"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Password — right col */}
            <div className="field-group">
              <label className="field-label">Password</label>
              <div className="field-row">
                <input
                  type={editingPassword ? "text" : "password"}
                  value={password}
                  disabled={!editingPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  className="field-input"
                />
                <button
                  onClick={() => setEditingPassword(!editingPassword)}
                  className="field-edit-btn"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Email — left col */}
            <div className="field-group">
              <label className="field-label">E-mail</label>
              <div className="field-row">
                <input
                  type="email"
                  value={email}
                  disabled={!editingEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  className="field-input"
                />
                <button
                  onClick={() => setEditingEmail(!editingEmail)}
                  className="field-edit-btn"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Delete Account — right col */}
            <div className="field-group field-group-delete">
              <button className="delete-btn" type="button">
                Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* Games Section */}
        <div className="games-section">
          {/* Header with dividers */}
          <div className="games-header">
            <div className="games-divider" />
            <h2 className="games-title">Games</h2>
            <div className="games-divider" />
          </div>

          {/* Game Cards — 2 per row */}
          <div className="game-cards-grid">
            {/* Card 1 */}
            <div className="game-card">
              <img
                src={FriendThumb}
                alt="The Friend"
                className="game-thumb"
              />
              <div className="game-card-body">
                <p className="game-name">The Friend</p>
                <button
                  onClick={() => navigate('/friend')}
                  className="play-btn"
                >
                  Play Game
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="game-card">
              <img
                src={FriendThumb}
                alt="The Friend"
                className="game-thumb"
              />
              <div className="game-card-body">
                <p className="game-name">The Friend</p>
                <button
                  onClick={() => navigate('/friend')}
                  className="play-btn"
                >
                  Play Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountContent