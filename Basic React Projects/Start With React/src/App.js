import "./App.css";
import Item from "./components/Item";
import ItemPrize from "./components/ItemPrize";

function App() {
  // const item2name='SurfExel';
const response=[
{
itemname:"Nirma",
itemday:"18",
itemmonth:"August",
itemyear:"2015"
},
{
  itemname:"Nirma2",
  itemday:"182",
  itemmonth:"August2",
  itemyear:"20152"
  },
  {
    itemname:"Nirma3",
    itemday:"183",
    itemmonth:"August3",
    itemyear:"20153"
    }

]
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello Jee</h1>
        
      <hr></hr>

      </header>

      <Item name={response[0].itemname}>
        Hello Jee Main hu aapki first item
      </Item>
      <ItemPrize day={response[0].itemday} month={response[0].itemmonth} year={response[0].itemyear}></ItemPrize>
      <Item name={response[1].itemname}></Item>
      <ItemPrize day={response[1].itemday} month={response[1].itemmonth} year={response[1].itemyear}></ItemPrize>
      <Item name={response[2].itemname}></Item>
      <ItemPrize day={response[2].itemday} month={response[2].itemmonth} year={response[2].itemyear}></ItemPrize>

      
    </div>
  );
}

export default App;
