import React from 'react'

export default function Input({id, title,type,name,handelData,customClasses,errors, value}) {
  return (
    <div className="mb-3">
            <label htmlFor={id} className="form-label">{title}</label>
            <input type={type} name={name} className={`form-control ${customClasses}`} id={id} onChange={handelData}
            value={value} />
             {errors[name] && <p className='text-danger'>{errors[name]}</p>}
    </div>
  )
}

// export default function Input(props) {
//     return (
//       <div className="mb-3">
//               <label htmlFor={props.id} className="form-label">{props.title}</label>
//               <input type={props.type} name={props.name} className="form-control" id={props.id} onChange={props.handelData} />
            
//       </div>
//     )
//   }
