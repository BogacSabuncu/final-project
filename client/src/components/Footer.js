import React, {Fragment} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import "../stylesheets/Footer.css"
const FooterPage = () => {
  return (
    <MDBFooter id="footer" color="elegant-color" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol>
            <h5 className="title">Fingachi - Finance, simplified. &#128176;</h5>
            <p>
              Securing the bag is hard enough, we're here to make sure you hold on to it.
              Through our unique approach to personal finance, we aim to make it a much more approachable topic for individuals that are unfamiliar.
            </p>
          </MDBCol>
          <MDBCol></MDBCol>
          <MDBCol>
            <h5 className="title">Resources</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Robinhood - Stocks and options with no fees <i class="fas fa-external-link-alt"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="#!">The Simple Dollar - Courses relating to personal finance</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
            <h5 className="title">Social</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!"><i class="fab fa-instagram"></i> Instagram </a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i class="fab fa-facebook"></i> Facebook </a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i class="fab fa-twitter"></i> Twitter </a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i class="fab fa-snapchat-ghost"></i> Snapchat </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
            <h5 className="title">Team &#128400;</h5>
            <ul>
              <li className="list-unstyled">
                <a id="bogac" rel="noopener noreferrer" target="_blank" href="https://github.com/BogacSabuncu">Bogac Sabuncu</a>
              </li>
              <li className="list-unstyled">
                <a id="enzo" rel="noopener noreferrer" target="_blank" href="https://github.com/enzofass">Enzo Fassioli</a>
              </li>
              <li className="list-unstyled">
                <a id="natalia" rel="noopener noreferrer" target="_blank" href="https://github.com/natalliasdh">Natallia Harmon</a>
              </li>
              <li className="list-unstyled">
                <a id="oscar" target="_blank" rel="noopener noreferrer" href="https://github.com/olanza">Oscar Lanza</a>
              </li>
              <li className="list-unstyled">
                <a id="fang" target="_blank" rel="noopener noreferrer" href="https://github.com/fyeh0">Fang Yeh</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Stylized with <MDBIcon id="heart" icon="heart" /> utilizing <a href="https://www.MDBootstrap.com"> MDBootstrap</a> <br/>
        </MDBContainer>
      </div>
    </MDBFooter>
  
  );
}

export default FooterPage;