'use client'

import { useState } from 'react'
import axios from 'axios'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { login } from '@/src/redux/features/auth-slice'
import { Field, LoadingSpinner } from '@/src/components'
import hangerIconWhite from '@/public/images/hangericonwhite.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 709,
  height: 558,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}
const AuthModal = ({ open, onClose }) => {
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = async (e) => {
    e.preventDefault()
    setloading(true)

    const request = { username: 'mor_2314', password: '83r5^_' }

    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', request)

      if (response.status === 200) {
        dispatch(login(response.data.token))
      }
    } catch (error) {
      console.log(error)
    } finally {
      setloading(false)
      onClose()
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="bg-black/61"
    >
      <Box
        sx={style}
        className="bg-[#3E5673]/80 rounded-[20px] flex justify-center items-center relative"
      >
        {loading && <LoadingSpinner className="absolute" />}
        <div className="flex flex-col h-full items-center">
          <Image src={hangerIconWhite} width={132} height={100} alt="hangerico" className="mt-4" />
          <span className="text-3xl text-white font-medium mt-2">Welcome to CLOSET</span>
          <form onSubmit={submitForm} className="flex flex-col items-center w-full mt-16">
            <label className="w-full">
              <span className="text-white">Email</span>
              <Field
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                className="w-full"
              />
            </label>
            <label className="w-full mt-9">
              <span className="text-white">password</span>
              <Field
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full"
              />
            </label>
            <button type="submit" className="mt-12 rounded-md bg-white w-[140px] h-[40px]">
              Login
            </button>
          </form>
        </div>
      </Box>
    </Modal>
  )
}

export default AuthModal
