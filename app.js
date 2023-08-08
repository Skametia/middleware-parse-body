const ex = require("express");
const bodyParser = require("body-parser");
const app = ex();
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/add-product", (req, res) => {
  res.send(`
  <html>
     <head> <title>Add Product</title>
     <body>
     <form method="POST" action="/product">
     <input type="text" id="productName" name="productName" required placeholder =" Name"><br><br>
     <input type="number" id="productPrice" name="productPrice" required placeholder =" Price"><br><br>
     <input type="text" id="productSize" name="productSize" required placeholder =" Size"><br><br>
     <button type="submit">Add Product</button>
     </form>
     </body>
    </html>

  `);
});
app.post("/product", (req, res) => {
  const productName = req.body.productName;
  const productPrice = req.body.productPrice;
  const productSize = req.body.productSize;
  console.log(
    ` Product-Name: ${productName} Product-Price: ${productPrice}  Product-Size: ${productSize}`
  );
  const body = ` Product-Name:  ${productName}<br> Product-Price: ${productPrice}<br> Product-Size: ${productSize}`;
  res.send(body);
});
app.listen(3000);
