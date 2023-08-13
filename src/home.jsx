import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import dollar from './images/icon-dollar.svg'
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import logo from './images/logo.svg'
import person from './images/icon-person.svg'



import './App.css'




const Home = () => {

 const[bill, setBill] = useState(); 
 const[people, setPeople] = useState(); 
 const[tip, setTip] = useState('0.00'); 
 const[total, setTotal] = useState('0.00');   
 const [tru,setTru] = useState(true)
 
 


const add = (divide,bill) => {
     setTotal(  parseFloat(bill) *  parseFloat(divide) /  100) 
     setTip( (parseFloat(bill) *  parseFloat(divide) /  100) / parseInt(people) )
   return (
       setTru(false)
     )                                                                
}
 
const reset = () => {
  setTotal('0.00')
  setTip('0.00')
  setBill("")
  setPeople("")
  return  setTru(true)
    
  
}



    return ( <div>

        <Container >
               <Row ><Col className='text-center'><Image className='p-5' src={logo} /></Col></Row>
              <Row className='main white p-4 d-flex justify-content-start'>
                <Col md={6} >
                    <Form>
                        <Form.Label htmlFor="disabledTextInput" className='person'>BILL</Form.Label>
     
                        <InputGroup className="mb-3">
        <InputGroup.Text className='bb' ><Image src={dollar} /></InputGroup.Text>        <Form.Control  placeholder='0' className='text-end ccc' value={bill} onChange={ e => setBill( e.target.value) } aria-label="Amount (to the nearest dollar)" />
        
      </InputGroup>

     <span className='person' > Select Tip %</span>
      <Row className='g-4'>
        <Col  md={4} xs={6}> <Button size='lg' className=' w-100 dar ' value={5}  onClick={e => add(e.target.value,bill)  }>5%</Button> </Col>
        <Col md={4} xs={6}>  <Button size='lg'  className=' w-100 dar' value={10} onClick={e => add(e.target.value,bill)} >10%</Button></Col>
        <Col md={4} xs={6}>  <Button size='lg'  className=' w-100 dar' value={15} onClick={e => add(e.target.value,bill)} >15%</Button></Col>
        <Col md={4} xs={6}>  <Button size='lg'  className=' w-100 dar' value={25} onClick={e => add(e.target.value,bill)}>25%</Button></Col>
        <Col md={4} xs={6}>  <Button size='lg'  className=' w-100 dar' value={50} onClick={e => add(e.target.value,bill)} >50%</Button></Col>
                
        <Col md={4} xs={6}>   <Form.Control size='lg'  className=' p-0 text-end custom' type="text" placeholder="custom" />   </Col>
      </Row>
      <Row>
        <Col> <Form.Label className='person' htmlFor="disabledTextInput">Number Of People</Form.Label>  
                <InputGroup className="mb-3">
        <InputGroup.Text className='bb'><Image src={person} /></InputGroup.Text>
        <Form.Control placeholder='0'  className='text-end ccc ' value={people} onChange={e => setPeople( e.target.value)} aria-label="Amount (to the nearest dollar)" />
        
</InputGroup>
  </Col>
      </Row> 
      
      

                    </Form>
                
                </Col>
                <Col className='darkcrayn p-4 ' md={6}>
                <Row>
                    <Col xs={6}>  <span className='whitet'>Tip Amount</span>  <br />
                  <span  className='person'> / person</span> 
                    </Col>
                    <Col xs={6}> <h1 className='tip'><Image src={dollar} /> {tip}</h1>  </Col>
                </Row>
                <Row>
                <Col xs={6}> <span className='whitet'>Total</span>  <br />
                  <span className='person'> / person</span> 
                    </Col>
                    <Col xs={6}>  <h1 className='tip'><Image src={dollar} />{total}</h1>  </Col>
                </Row>
                <Row className='mt-md-5 pt-md-5'>
                    <Col   xs={12}> <Button disabled={tru} className='w-100' onClick={ () => reset()}>RESET</Button> </Col>
                </Row>
               
                  
                 
                </Col>
              </Row>
 
        </Container>
         

    </div> );
}
 
export default Home;