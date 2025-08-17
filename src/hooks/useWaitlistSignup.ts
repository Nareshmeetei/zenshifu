import { useState } from 'react'
import { supabase } from '../lib/supabase'

export const useWaitlistSignup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const signupForWaitlist = async (email: string, source: 'hero' | 'footer' = 'hero') => {
    setIsLoading(true)
    setMessage(null)

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address')
      }

      console.log('Attempting to insert email:', { email: email.toLowerCase().trim(), source })

      // Direct insert - let Supabase handle duplicate detection via unique constraint
      const { data, error } = await supabase
        .from('waitlist_emails')
        .insert([
          {
            email: email.toLowerCase().trim(),
            source,
          }
        ])
        .select()

      console.log('Supabase response:', { data, error })

      if (error) {
        console.error('Supabase error:', error)
        
        // Handle unique constraint violation (duplicate email)
        if (error.code === '23505' || error.message?.includes('duplicate') || error.message?.includes('unique')) {
          throw new Error('This email is already on our waitlist!')
        }
        
        // Handle other potential errors
        throw new Error(error.message || 'Failed to join waitlist')
      }

      setMessage({
        type: 'success',
        text: 'Thanks for joining our waitlist! We\'ll be in touch soon.'
      })

      return { success: true, data }
    } catch (error) {
      console.error('Signup error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      setMessage({
        type: 'error',
        text: errorMessage
      })
      return { success: false, error: errorMessage }
    } finally {
      setIsLoading(false)
    }
  }

  const clearMessage = () => setMessage(null)

  return {
    signupForWaitlist,
    isLoading,
    message,
    clearMessage
  }
}