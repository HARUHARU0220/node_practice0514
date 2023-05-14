import express from "express";
import product from "../models/product.js";
const routing = express.Router()


// product 전체 데이터를 가져오는 api
routing.get("/",async (req,res)=> {
    const products = await productModel.find()
    res.json({
        msg: "Product get all",
        products: products

    })
})

// 상세 프로덕트를 가져오는 api
routing.get("/:productid", async (req, res) => {
    const product = await productModel.findById(req.params.productid)
    res.json({
        msg: "Product detail get",
        product : product
    })
} )

routing.post("/",async (req,res)=>{
    // name, price, description, stock
    const newProduct = new productModel ({
        name: req.body.productName,
        price: req.body.productPrice,
        description: req.body.productDescription,
        stock: req.body.productStock
    })


    await newProduct.save()


    res.json({
        msg:"create product",
        result:newProduct
    })
})

// 특정 프로덕트를 삭제하는 api
routing.delete("/:productid", async (req,res)=> {
    await productModel.findByIdAndDelete(req.params.productid)
    res.json({
        msg: `delete product ${req.params.productid}`,

    })
})

//전체 프로덕트를 삭제하는 api
routing.delete("/", async (req, res) => {
    await productModel.deleteMany()
    res.json({
        msg: "deleted all products"
    })
})


// 특정 프로덕트를 수정하는 api (수정하고자 하는 대상, 수정하고자 하는 내용)
routing.put("/:productid", async (req, res) => {

    const product = await productModel.findById(req.params.productid)

    // if else 조건문, 삼항연산자 알아볼 것


    if (product) {
        product.name = req.body.productName ? req.body.productName : product.name
        product.price = req.body.productPrice ? req.body.productPrice : product.price
        product.description = req.body.productDescription ? req.body.productDescription : product.description
        product.stock = req.body.productStock ? req.body.productStock : product.stock

    }
    const updatedProduct = await product.save()


    res.json({
        msg: `updated product at ${req.params.productid}`,
        product: updatedProduct
    })
})




export default routing
