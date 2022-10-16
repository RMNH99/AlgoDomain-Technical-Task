import './itemList.css';
import axios from "axios";
import {useEffect } from "react";

const Itemlist=(props)=>{
    
    let auth=true;
    let discount,gst,finalprice,delivery,afterDiscount,actualprice,dis,gs,res;
    if(props.item.product_category==="Electronics"){
        delivery=350;
        dis=15;
        gs=18;
        actualprice=Number(props.item.product_price)
      discount=Number((actualprice/100)*dis);
      afterDiscount=Number(actualprice-discount);
      gst= Number((afterDiscount/100)*gs);
     finalprice=Number(afterDiscount+gst+delivery);  
    }else if(props.item.product_category==="Home Appliances"){
        delivery=800;
        dis=22;
        gs=24;
        actualprice=Number(props.item.product_price)
      discount=Number((actualprice/100)*dis);
      afterDiscount=Number(actualprice-discount);
      gst= Number((afterDiscount/100)*gs);
     finalprice=Number(afterDiscount+gst+delivery);  
    }else if(props.item.product_category==="Clothing"){
        delivery=0;
        dis=40;
        gs=12;
        actualprice=Number(props.item.product_price)
      discount=Number((actualprice/100)*dis);
      afterDiscount=Number(actualprice-discount);
      gst= Number((afterDiscount/100)*gs);
     finalprice=Number(afterDiscount+gst+delivery);  
    }else if(props.item.product_category==="Furniture"){
        delivery=300;
        dis=10;
        gs=18;
        actualprice=Number(props.item.product_price)
      discount=Number((actualprice/100)*dis);
      afterDiscount=Number(actualprice-discount);
      gst= Number((afterDiscount/100)*gs);
     finalprice=Number(afterDiscount+gst+delivery);  
    }

    if(props.item.product_price<props.item.final_price){
        auth=false;
    }

     //*/***********axios****************** */
     const postdata =()=>{
        try{
            axios.post(`http://localhost:8080/items`, {
                id: props.item.id,
                product_name: props.item.product_name,
                product_type: props.item.product_type,
                product_category: props.item.product_category,
                product_price: props.item.product_price,
                gst: gs,
                delivery: delivery,
                discount: dis,
                final_price:finalprice 
            })
            .then((response) => {
             res=response.data;
             
            });
        }catch(err){
            console.log(err);
    
        }
    }
     useEffect(()=>{
        postdata();
       },[]);

// **********************************
return <div className='item-div'>
    <div>
<table>
    <tr>
        <td>Product ID :</td>
    
          <td>{props.item.id}</td>
        
    </tr>

    <tr>
        <td>Product Name :</td>
        <td>{props.item.product_name}</td>
    </tr>
    <tr>
        <td>Product Type :</td>
        <td>{props.item.product_type}</td>
    </tr>
    <tr>
        <td>Product Category :</td>
        <td>{props.item.product_category}</td>
    </tr>
    <tr>
        <td>Product Price :</td>
        <td>{props.item.product_price} Rs.</td>
    </tr>
</table>
</div>
{/* .................................................... */}
<div className='item-div-2'>
<table>
<tr>
        <td>Discount :</td>
        <td>-{props.item.discount} Rs. {dis}%</td>
    </tr>
    <tr>
        <td>GST :</td>
        <td>+{props.item.gst} Rs. {gs}%</td>
    </tr>
    <tr>
        <td>Delivery :</td>
        <td>+{props.item.delivery} Rs.</td>
    </tr>
    <tr>
    <td>Final Price :</td>
        <td>{props.item.final_price} Rs.</td>
    </tr>
    {
        auth ?<tr>
        <td> Saving :</td>
        <td>{props.item.product_price-props.item.final_price} Rs.</td>
    </tr>:<></>
    }
</table>

</div>
<div>
    {/* Extra For Adjust Grid */}
</div>
{/* ....................BUTTONS........................ */}
<div className='edit'>
<button onClick={()=>props.onEdit(props.item.id)}>Edit</button>
</div>

<div className='delete'>
<button  onClick={()=>props.onSelect(props.id)}>Delete</button>
</div>
</div>
}
export default Itemlist;