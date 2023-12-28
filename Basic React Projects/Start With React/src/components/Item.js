import './Item.css';


function Item (props){

    const itemname=props.name;
    
return (
<div className="item">
 {itemname}
 {props.children}

</div>
);


}
export default Item;
