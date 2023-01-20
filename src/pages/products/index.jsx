import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import http from "../../services/axios";

import { Container} from "react-bootstrap";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import DinamicTable from "../../components/dinamicTable";
import ModalEditProducts from "../../components/modalProducts/index.jsx";

export default function ProductsPage() {
  if (!sessionStorage.getItem('USER')) return (
    <Navigate to="/" replace={true} />
  )
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [modalShow, setModalShow] = useState(false);

  const tableHeader = ['ID', 'NOME', 'VALOR', 'GRUPO', 'AÇÃO']

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('USER')))
    getDataProducts()
  }, []);


  async function getDataProducts() {
    http.get('/products')
      .then(({ data }) => {
        setProducts(data)
      })
      .catch(e => console.error('getDataProducts err => ', e))
  }

  function getProductById(id) {
    http.get(`/products/${id}`)
      .then(({ data }) => {
        setProduct(data)
        setModalShow(true)
      })
      .catch(e => console.error('getProductById err => ', e))
  }

  function updateProduct(product) {
    console.log("updateProduct product =>", product)
    http.put('/products', product)
      .then(({ data }) => {
        setModalShow(false)
        alert("Produto Atualizado com sucesso!")
        setTimeout(getDataProducts(), 1000)
      })
      .catch(e => console.error('updateProduct err => ', e))
  }

  function deleteProducts(id) {
    http.delete('/products', { id: id })
      .then(({ data }) => {
        alert("Produto deletado com sucesso!")
      })
      .catch(e => console.error('deleteProducts err => ', e))
  }

  return (
    <>
      <Navbar user={user}/>
      <Container className="pb-5">
        <DinamicTable
          header={tableHeader}
          body={products}
          actionOneText="Editar"
          actionOne={getProductById}
          actionTwoText="Deletar"
          actionTwo={deleteProducts}
        />
        <ModalEditProducts
          show={modalShow}
          onHide={() => setModalShow(false)}
          product={product}
          actionOneText="Salvar"
          actionOne={updateProduct}
        />
      </Container>
      <Footer/>
    </>
  );
}