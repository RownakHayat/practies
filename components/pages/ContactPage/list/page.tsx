"use client"
import React from 'react'
import ContactPage from '../form/ContactPage'
import useTitle from '@/components/common/hooks/useTitle'

const ContactList = () => {
  useTitle("Contact us")
  return (
    <>
    <ContactPage />
    
    </>
  )
}

export default ContactList