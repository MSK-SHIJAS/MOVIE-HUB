
﻿
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import './Login.css'
import 'bootstrap/dist/css/bootstrap.css';

function App1() {
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState(""); // Store search query
  const [backupData, setBackupData] = useState([]);

  const [form, setForm] = useState([]);

  // preview of image
  const [preview, setPreview] = useState("");
  // states for form
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation checks...

    setIsVisible(true);
    setForm([
      ...form,
      {
        name: name,
        category: category,
        image: URL.createObjectURL(image),
        price: price,
        description: description,
      },
    ]);
    setBackupData([
      ...form,
      {
        name: name,
        category: category,
        image: URL.createObjectURL(image),
        price: price,
        description: description,
      },
    ]);



    
  };

  // delete card
  const handleDelete = (indexOf) => {
    const status = window.confirm("Delete?");
    if (status) {
      const result = form.filter((item, index) => index !== indexOf);
      setForm(result);
    }
  };
  // delete card

  const handleDeleteAll = () => {
    const status = window.confirm("Delete all data?");

    if (status) {
      setForm([]);
      setIsVisible(false);
    }
  };

  // const handleSearch = (data) => {
  //   setSearch(data);

  //   if (data === "") {
  //     setForm(backupData);
  //   } else {
  //     const filteredItems = form.filter((user) =>
  //       user.email.toLowerCase().includes(data.toLowerCase())
  //     );
  //     setForm(filteredItems);
  //   }
  // };

  // done
  // -------------
  // delete function
  // validation ( length, required )
  // search
  // localstorage
  // delete all

  // functions
  // ----------------
  // toast
  // validation
  // modal
  // edit
  // filter
  // sort
  // paginations

  // handle image preview
  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    console.log(file, "---");
  };

  // if user again click image to reset image
  const resetImage = () => {
    setPreview("");
    setImage("");
  };

  // Function to handle search
  const handleSearch = (data) => {
    setSearch(data);

        // Filter user data based on search query


        
        if (data === "") {
          setForm(backupData);
        } else {
          const filteredItems = form.filter((user) =>
            user.name.toLowerCase().includes(data.toLowerCase())
          );
          setForm(filteredItems);
        }
        };
    



  return (
    <>
    <div className="A">
      {/* --------------- form ----------- */}
      <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category </Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Product Image</Form.Label>
            <Form.Control
              type="file"
              onClick={resetImage}
              onChange={handleChange}
            />
          </Form.Group>

          {/* image preview */}
          <Card
            className="rounded-3"
            style={{ width: "18rem", height: "300px" }}
          >
            <Card.Img
              variant="top"
              className=""
              
              style={{ width: "100%", height: "100%" ,objectFit:"contain",padding:'30px 0px'}}
              src={preview}
            />
          </Card>
          {/* image preview */}

          {/* product price */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price in(&#8377;) </Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Amount"
            />
          </Form.Group>
          {/* product price */}

          {/* description */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description about Product</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          {/* description */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
</div>
      {/* --------------- form ----------- */}

      {/* ------- cards ------- */}
      {isVisible && (
        <>
          <Container className="Container">
          <input
                type="search"
                className="form-control mt-5"
                placeholder="Search"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />


            <Button className="mt-2" onClick={handleDeleteAll} variant="outline-danger">
              Delete All products
            </Button>{" "}
            <div className="grid mb-5 mt-3">
              {form &&
                form.map((item, index) => {
                  return (
                    <Card style={{ width: "18rem", height: "32rem" }}>
                      <Card.Img
                        variant="top"
                        className="mt-3"
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "15rem",
                          objectFit: "contain",
                        }}
                        src={item.image}
                      />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.category}</Card.Text>
                        <Card.Text style={{height:"100px"}} className="overflow-auto">
                          {item.description}
                        </Card.Text>
                        <Button variant="outline-success">Edit</Button>{" "}
                        <Button
                          onClick={() => handleDelete(index)}
                          variant="outline-danger"
                        >
                          Delete
                        </Button>{" "}
                      </Card.Body>
                    </Card>
                  );
                })}
            </div>
          </Container>
        </>
      )}

      {/* ------- cards ------- */}
      {}
      </>
  );
}

export default App1;