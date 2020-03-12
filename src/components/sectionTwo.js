import React from "react"
import {Container, Row, Col, Image} from 'react-bootstrap'
import '../styles/global.css'

import cover from "../images/s2.svg"

const SectionTwo = () =>{

    return(
      <div>
        <Container>
 
        <Row className="d-flex justify-content-center align-items-center">
          <Col md="{{ span: 6, offset: 3 }}"><h6 className="txt-1">ENVIRONMENT MONITORING SYSTEM</h6></Col>
        </Row>
 
        <Row className="d-flex justify-content-center align-items-center">
          <Col><h2 className="txt-2">Apapun bisnismu,<br/>Evomo dapat membantumu</h2></Col>
        </Row>
 
        <Row>
          <Col md={{ span: 9 }}><h5 className="txt-3 ml25">Aplikasi <b>Monitoring Berbasis Kondisi</b> yang memberikan Anda informasi mengenai kondisi yang ingin anda pantau berdasarkan indikator yang Anda tentukan baik berupa suhu, kelembaban, tekanan udara, pemakaian listrik, jumlah debit air, integrasi cctv, dll. Evomo menjadi solusi Anda dalam memonitoring proses pertanian, perikanan, peternakan, pembangunan dan area publik.</h5></Col>
        </Row>
      </Container>
      <Image src={cover} width="100%" />
      </div>
    )
}

export default SectionTwo

