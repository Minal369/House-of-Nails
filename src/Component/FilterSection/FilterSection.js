import React from 'react'
import "./FilterSection.css";
import Accordion from "react-bootstrap/Accordion";

const FilterSection = () => {
  return (
    <>
        <div className="left-sidebar">
          <div className="top-sidebar">
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Sort by</Accordion.Header>
                <Accordion.Body className="left-list">
                  <ul>
                    <div className="li-checkbox">
                      <li>Low-High</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>High-Low</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>New Arrival</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Offers</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="bottom-sidebar">
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body className="left-list">
                  <div className="bottom-brand">
                    <input type="text" placeholder="Search Brand" />
                  </div>
                  <ul>
                    <div className="li-checkbox">
                      <li>SUGER POP</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Naykaa</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Lakme</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>DeBelle Gell Nail Paint</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Jucie Gloss</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Elle18</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Kay Beauty</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Faces</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Colorbar</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Colors</Accordion.Header>
                <Accordion.Body className="left-list">
                  <div className="bottom-brand">
                    <input type="text" placeholder="Search Brand" />
                  </div>
                  <ul>
                    <div className="li-checkbox">
                      <li>Pink</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Blue</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Purple</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Green</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Red</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Broen</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Nude</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Yellow</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Orange</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Black</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>White</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Gender</Accordion.Header>
                <Accordion.Body className="left-list">
                  <ul>
                    <div className="li-checkbox">
                      <li>Female</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Unisex</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Skin Type</Accordion.Header>
                <Accordion.Body className="left-list">
                  <ul>
                    <div className="li-checkbox">
                      <li>All</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Normal</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body className="left-list">
                  <ul>
                    <div className="li-checkbox">
                      <li>Rs. 0-Rs. 150 </li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Rs. 160-Rs. 250</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Rs. 260-Rs. 499</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Rs. 500-Rs. 999</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Rs. 1000-Rs. 1900</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Rs. 2000-Rs. 3999</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>Rs. 4000 & Above </li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Discount</Accordion.Header>
                <Accordion.Body className="left-list">
                  <ul>
                    <div className="li-checkbox">
                      <li>30% & Above </li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>20% & Above</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>10% & Above</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>All Discounted Products</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Avg Customer Rating</Accordion.Header>
                <Accordion.Body className="left-list">
                  <ul>
                    <div className="li-checkbox">
                      <li>5 Stars & Above</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>4 Stars & Above</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>3 Stars & Above</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>2 Stars & Above</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                    <div className="li-checkbox">
                      <li>1 Stars & Above</li>
                      <input type="checkbox" className="left-sort" />
                    </div>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
   </>
  )
}

export default FilterSection