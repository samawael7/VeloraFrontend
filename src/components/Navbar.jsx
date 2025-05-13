import React from "react";
import logo from "../assets/logo.webp";
import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { BsLock } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import shopImage from "../assets/shopimage.jpg";


const CustomNavbar = () => {
const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="bg-white container py-3 border-bottom shadow-sm"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/home"
          className="d-flex align-items-center"
        >
          <img
            src={logo}
            alt="VeloraLogo"
            style={{ height: "32px", marginRight: "8px" }}
          />
          <span style={{ fontWeight: "700", color: "#1d1d44" }}>VELORA</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            
            <Nav.Link
              as={Link}
              to="/home"
              style={{ fontWeight: "700", color: "#1d1d44" }}
            >
              Home
            </Nav.Link>
            <div
      onMouseEnter={() => setShowMegaMenu(true)}
      onMouseLeave={() => setShowMegaMenu(false)}
      style={{ position: "relative" }}
    >
      <span
        className="nav-link"
        style={{
          fontWeight: "700",
          color: "#1d1d44",
          cursor: "pointer",
          padding: "8px 12px",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px"
        }}
      >
        Shop <FaChevronDown size={12} />
      </span>

      <div
        style={{
          opacity: showMegaMenu ? 1 : 0,
          visibility: showMegaMenu ? "visible" : "hidden",
          transform: showMegaMenu ? "translateY(0)" : "translateY(10px)",
          transition: "all 0.3s ease",
          position: "fixed",
          top: "70px",
          left: 0,
          width: "100vw",
          backgroundColor: "#fff",
          zIndex: 999,
          padding: "32px 64px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            maxWidth: "1200px",
            margin: "0 auto",
            gap: "48px",
          }}
        >
          
          <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
            <div>
              <h6 style={{ color: "#7f6fff", fontWeight: "700", marginBottom: "12px" }}>
                All Products
              </h6>
              <Nav.Link as={Link} to="/products/best-sellers">Best Sellers</Nav.Link>
              <Nav.Link as={Link} to="/products/new-arrivals">New Arrivals</Nav.Link>
              <Nav.Link as={Link} to="/products/all">Shop All</Nav.Link>
            </div>

            <div>
              <h6 style={{ color: "#7f6fff", fontWeight: "700", marginBottom: "12px" }}>
                Shop by Concern
              </h6>
              <Nav.Link as={Link} to="/shop/acne">Acne</Nav.Link>
              <Nav.Link as={Link} to="/shop/hydration">Hydration</Nav.Link>
              <Nav.Link as={Link} to="/shop/dark-spots">Dark Spots</Nav.Link>
              <Nav.Link as={Link} to="/shop/redness-rosacea">Redness & Rosacea</Nav.Link>
            </div>

            <div>
              <h6 style={{ color: "#7f6fff", fontWeight: "700", marginBottom: "12px" }}>
                Shop by Skin Type
              </h6>
              <Nav.Link as={Link} to="/shop/oily">Oily Skin</Nav.Link>
              <Nav.Link as={Link} to="/shop/dry">Dry Skin</Nav.Link>
              <Nav.Link as={Link} to="/shop/combo">Combination Skin</Nav.Link>
              <Nav.Link as={Link} to="/shop/sensitive">Sensitive Skin</Nav.Link>
            </div>

            <div>
              <h6 style={{ color: "#7f6fff", fontWeight: "700", marginBottom: "12px" }}>
                Shop by Product
              </h6>
              <Nav.Link as={Link} to="/products/cleansers">Cleansers</Nav.Link>
              <Nav.Link as={Link} to="/products/serums">Serums</Nav.Link>
              <Nav.Link as={Link} to="/products/moisturizers">Moisturizers</Nav.Link>
              <Nav.Link as={Link} to="/products/sunscreens">Sunscreens</Nav.Link>
            </div>
          </div>

          
          <div style={{ textAlign: "center", flexShrink: 0 , position:"relative"}}>
            <img
              src={shopImage}
              alt="Shop now"
              style={{
                maxWidth: "280px",
                borderRadius: "12px",
                marginBottom: "12px",
                display: "block",
              }}
            />
            <button
              style={{
                backgroundColor: "#7f6fff",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "20px",
                border: "none",
                fontWeight: "600",
                cursor: "pointer",
                position : "absolute",
                bottom: "20px" ,
                left: "90px",
                
                
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>


            <Nav.Link
              href="whyvelora"
              style={{ fontWeight: "700", color: "#1d1d44" }}
            >
              Why Us
            </Nav.Link>
            <Nav.Link
              href="contacts"
              style={{ fontWeight: "700", color: "#1d1d44" }}
            >
              Contacts
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/faq"
              style={{ fontWeight: "700", color: "#1d1d44" }}
            >
              FAQ
            </Nav.Link>

            <Nav.Link href="#" style={{ fontWeight: "700", color: "#1d1d44" }}>
              Log In
            </Nav.Link>
            <Button
              href="products"
              style={{
                backgroundColor: "#7f6fff",
                fontWeight: "700",
                border: "none",
                borderRadius: "30px",
                padding: "8px 20px",
              }}
            >
              Find your treatment
            </Button>
            <BsLock style={{ color: "#1d1d44", fontSize: "18px" }} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
