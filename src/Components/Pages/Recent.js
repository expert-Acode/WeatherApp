import React, { useEffect, useState } from "react";
import { Segment, Button, Confirm, Pagination } from "semantic-ui-react";

const Recent = ({ recent, dataForResult }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({});
  const [dataPages,setDataPages]=useState({activePage:1,begin:0,end:9})
  const [recentData, setRecentData] = useState([]);

 useEffect(()=>{
  chagePageC()
 },[dataPages , recent])

  const modalItem = (item) => {
    setOpen(true);
    setContent(item);
  };

  const previesWeather = (event) => {
    setOpen(false);
    dataForResult(event, "pre");
  };

  const letesstWeather = (event) => {
    setOpen(false);
    dataForResult(event, "let");
  };

  const chagePageC=(event)=>{
     const data=recent.slice(dataPages.begin,dataPages.end)
     setRecentData(data)
   }

  const chagePage=async(event,{activePage})=>{
    console.log(activePage,"activePage")
   await setDataPages({activePage:activePage,begin:activePage * 9 - 9,end:activePage * 9});
  }

  console.log(dataPages,"activePage")
  
  return (
    <Segment>
      <h3>Recent Search ...</h3>
     {recent.length>0? <div class="container">
        <div class="row">
            <span className="col-6 bg-primary p-3">
                City
            </span>
            <span style={{marginInline:120}}  className="col-6 bg-warning p-3">
                Time
            </span>
        </div>
    </div>:null}
      <Button.Group fluid vertical>
        {recentData?.map((item) => {
          return (
            <>
              <Button basic onClick={() => modalItem(item)}>
              <span className="col-6 bg-primary p-3">
                {item.name}
            </span>
            <span style={{marginInline:70}}  className="col-6 bg-warning p-3">
                {item.date}
            </span>
              </Button>
            </>
          );
        })}
      </Button.Group>
      <Confirm
        open={open}
        content={
          content.name + " and remember by Defalt show you previous data"
        }
        onCancel={() => previesWeather(content)}
        cancelButton="Previes Weather"
        onConfirm={() => letesstWeather(content.name)}
        confirmButton="Letest Weather"
      />
   {recent.length>0?   <Pagination
        activePage={dataPages?.activePage}
        pointing
        secondary
        totalPages={Math.ceil(recent.length / 9)}
        onPageChange={chagePage}
      />:null}
    </Segment>
  );
};

export default Recent;
