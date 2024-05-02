import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Shop({page}) {
    // const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [input,setInput]=useState('');

   function  handleOnchange(e){
        setInput(e.target.value);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?page=${page}&limit=5`)
                if (!data.ok) {
                    throw new Error('Network response was not ok')
                }
                const jsonResponse = await data.json();
                setData(data=>[...data,...jsonResponse]);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [page])


    return (
        <div>
            <h1>Shopping Scroll App</h1>
            <Input value ={input} handleOnchange={handleOnchange}/>
            <div className="shop-articles">
              {
               data.map((elem)=>{
                 return   <ShopArticles key={uuidv4()} data={elem} filter={input}/>
                })
               }
            </div>
        </div>
    )
}

export function Input({value,handleOnchange}) {

    return (
        <div>
            <label htmlFor="items">Search for articles</label>
            <input type="text" id="items" value={value} onChange={handleOnchange}/>
        </div>
    )
}



export function ShopArticles({ data ,filter}) {

    let filteredContent = null;

    if (filter === "" || data.title.includes(filter) || data.description.includes(filter)) {
        filteredContent = (
            <div className="article">
                <h2>{data.title}</h2>
                <p>{data.price}</p>
                <p>{data.category}</p>
                <p>{data.description}</p>
                <img src={data.image} alt="product-img" style={{ width: "20%" }} />
                <p>{data.rating.rate},{data.rating.count}</p>
            </div>
        );
    }

    return filteredContent;
}
