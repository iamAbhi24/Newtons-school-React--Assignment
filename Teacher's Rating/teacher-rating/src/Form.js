import React, { useState } from 'react'

export default function Form({ teachers }) {

    return (
        <div>
            <form action="/rating.php">
                {teachers.map((teacher,index) => {
                    return < Teacher teacher={teacher} index={index} />
                })
                }
            </form>
            <button>Submit</button>
        </div>
    )
}



function Teacher({ teacher, index }) {
    const [rating, setRating] = useState(null);
    function handleRating(e) {
        setRating(e.target.value)
    }


    return (
        <div >
            <label>{teacher.name}</label>
            <input type="radio" name={teacher.name} id={teacher.name} value={3} onChange={handleRating} />
            <input type="radio" name={teacher.name} id={teacher.name} value={2} onChange={handleRating} />
            <input type="radio" name={teacher.name} id={teacher.name} value={1} onChange={handleRating} />
        </div>
    )
}
