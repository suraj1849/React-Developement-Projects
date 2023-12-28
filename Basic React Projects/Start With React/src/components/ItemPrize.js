import './ItemPrize.css';


function ItemPrize(props){

    const day=props.day;
    const month= props.month;
    const year =props.year;

     return (
<div className='itemprize'>
   
<span> {day}</span>
<span> {month}</span>
<span> {year}</span>

</div>

     );
}

export default ItemPrize;