import React,{useState} from 'react'

const Form = ({searchData}) => {
     const [search,setSearch] = useState('');
    // onchange event
    const inputEvent = e => {
        setSearch(e.target.value);
    };
    // onsubmit event
    const onsubmit = e => {
        e.preventDefault();
        searchData(search);
        setSearch('');
    } 
  return (
    <>
    <div className="container">
        <div className="d-flex flex-wrap">
            <div className="col-12">
                <div className="search_bar pt-5 pb-1 my-5 border-1 border-bottom mx-auto">
                    <form className='d-flex' onSubmit={onsubmit}>
                        <input type="text" placeholder='Search' value = {search} onChange={inputEvent} required/>
                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Form;