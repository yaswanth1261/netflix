import React from 'react'
import { Wdata } from '../Data/Webseriesdata'
import Sidenav from '../Sidenav'
import { Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Webseries(){
    return(
    <div classname="container-fluid">
        <Row>
            <Col md={2}>
            <Sidenav/>
            </Col>
            <Col md={10}>
            <div className='web2'>
             {   
                Wdata.map((x)=>{
                    return(
                        <div>
                            <p>{x.Id}</p>
                            <img src={x.Image} alt="" />
                            <p>{x.Season}</p>  
                            <p>{x.Rating}</p>
                        </div>    
                           
                    )
                })
             }
             

                
            </div>
            </Col>
        </Row>
    </div>
    )

}
export default Webseries
