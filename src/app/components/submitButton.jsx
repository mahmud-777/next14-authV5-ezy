import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      <button 
        type="submit" 
        className=' px-5 py-1 border border-orange-600'
      >
        {
          pending? "Pending..." : "Save Item"
        }
        
      </button>
    </>
  )
}

export default SubmitButton
