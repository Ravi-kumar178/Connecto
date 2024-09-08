import React from 'react'

const GenderCheckBox = ({onCheckboxChange,selectGender}) => {
  return (
    <div className='flex'>

        <div className="form-control px-2">
            <label htmlFor='genderMale' className="label  gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input 
                 checked={selectGender==="male"}
                 onChange={()=>onCheckboxChange("male")}
                type="checkbox" id='genderMale' autoComplete='sex'  className={`checkbox border-slate-900 ${selectGender==='male'?'selected':""}`} />
            </label>
        </div>

        <div className="form-control px-2">
            <label htmlFor='genderFemale' className="label  gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input 
                 checked = {selectGender==="female"}
                 onChange={()=>onCheckboxChange("female")}
                type="checkbox" id='genderFemale' autoComplete='sex'  className={`checkbox border-slate-900 ${selectGender==='female'?"selected":""}`} />
            </label>
        </div>

    </div>
  )
}

export default GenderCheckBox