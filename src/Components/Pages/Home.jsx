import React,{createRef} from "react";
import _ from "lodash"
import { Grid,
  Header,
  Image,
  } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {
  const contextRef = createRef()
  const url=window.location.href;

    console.log(url.split('/').lastIndexOf())

  const Placeholder = () =>{return <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />}
 
  return (
    <div >
    <Grid padded centered columns={2}>
    <Grid.Row centered>
          <h1>Today Weather</h1>
        </Grid.Row>
    <Grid.Column>
    <h2>
    <Link style={{color:'orange'}} to="/weather">
         lets go !
      </Link> And find out what the weather is like around you......</h2>
    </Grid.Column>
    {Placeholder()}
  </Grid>
    </div>
  );
};

export default Home;
