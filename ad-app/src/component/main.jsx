import { useState,useEffect } from "react";
import Itemlist from "./itemList";
import axios from "axios";
import './main.css';


const Main =()=>{
    
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [category,setCategory]=useState('');
    const [type,setType]=useState('');
    const [price,setPrice]=useState('');

    const [toggleEdit,setToggleEdit]=useState(true);
    const[isEditItem,setIsEditItem]=useState(null);

   

    const [Data,setData]=useState([]);
    const fetchdata=()=>{
        try{
            axios.get(`http://localhost:8080/items`).then(
                (response)=>{
                    console.log(response.data);
                    setData(response.data);
                }
            )
        
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchdata();
    },[]);

const saveData=(e)=>{
        e.preventDefault(); 
        // ..........................................EDIT......................................
        if(!toggleEdit){
            setData(
                Data.map((elem)=>{
                    if(elem.id === isEditItem){
                        return {...elem,
                            product_name:name,
                            product_category:category,
                            product_type:type,
                            product_price:price,
                        }
                    }
                    console.log(name);
                    console.log(elem);
                    return elem;
                })
            )  
            setToggleEdit(true);
            setCategory('');
            setId('');
            setName('');
            setPrice('');
            setType('');
            setIsEditItem(null);
             
    
        }
        else{
        let itemData = {
            id:id,
            product_name: name,
            product_category: category,
            product_type: type,
            product_price: price,
        }
        


        // ........................To Arrange Data....................

        setData((itemList)=>{
                return [...itemList,itemData];
        })
        setCategory("");
        setId("");
        setName("");
        setPrice("");
        setType("");

        
    }    
}
// .....................................Edit Function........................
const editItems=(Id)=>{
    let newEditItem = Data.find((elem)=>{
        return elem.id === Id;
    });
    console.log(newEditItem);

    setToggleEdit(false);
    setCategory(newEditItem.product_category);
    setId(newEditItem.id);
    setName(newEditItem.product_name);
    setPrice(newEditItem.product_price);
    setType(newEditItem.product_type);
    setIsEditItem(id);  
    
}
// ...........................................Delete.....................
const deleteItems=(id)=>{
    console.log("Deleted");
    setData((itemList)=>{
        return itemList.filter((arrElem,index)=>{
            return index !== id;
        })
        
    });
    axios.delete(`http://localhost:8080/items/${id}`).then(
        (response)=>{
            console.log("deleted");
        },(error)=>{
            console.log("error");
        }
    )
   
};




    return <div className="main-div">
 <div className='div-1'>
   <p>ADD ITEMS FOR SALE</p>
 </div>

 <div className='div-2'>
    <div className="form-div">
        <form onSubmit={saveData}>
        <table>
            <tr>
                <td><label>Product ID :</label></td>
                <td><input type="Number" value={id} onChange={e=>setId(e.target.value) } required></input></td>
            {/* </tr>
            <tr> */}
                <td><label>Product Name :</label></td>
                <td><input type="text" value={name} onChange={e=>setName(e.target.value) } required></input></td>
            </tr>
            <tr>
                <td><label>Product Type :</label></td>
                <td><input type="text" value={type} onChange={e=>setType(e.target.value) } required></input></td>
            {/* </tr>
            <tr> */}
                <td><label>Product Category :</label></td>
                <td><select onChange={e=>setCategory(e.target.value)} value={category} >
                        <option>Select</option>
                        <option value="Electronics">Electronics </option>
                        <option value="Home Appliances">Home Appliances</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Furniture">Furniture</option>
                        </select></td>
            </tr>
            <tr>
                <td><label>Product Price :</label></td>
                <td><input type="Number" value={price} onChange={e=>setPrice(e.target.value) } required></input></td>
            {/* </tr>
            <tr> */}
                <td></td>
                {
                 toggleEdit ?<td><button type='sumbit'>Save</button></td>:<td><button type='sumbit'>Update</button></td>
                }
                
            </tr>
        </table>
    </form>
    </div>
    <div>
    <h3 className="listtitle">ITEM LIST</h3>
   <ul>
        {Data.map((item,index)=>{
         return <>
            <Itemlist item={item}
            id={index}
            key={index}
            onSelect={deleteItems}
            onEdit={editItems}
            />
            </>
        })}


    
    </ul>
    
           
    </div>

 </div>
    </div>
   
    
}
export default Main;