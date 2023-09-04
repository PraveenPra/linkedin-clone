import React from 'react'
import sx from './inputField.module.css'

function InputField({placeholder = '',icon = null}) {
  return ( <div className={sx.wrapper}>
    <div className={sx.icon}>
    {icon}
    </div>

    <input className='input' type='text' value={placeholder} style={{
  height: '50px',width:'100%', padding: '8px', borderRadius: '50px', flex: 1,
  border: '1px solid #0a66c2', color: '#0a66c2',paddingLeft:'32px',outline:'none',
}} />

</div>)
}


export default InputField