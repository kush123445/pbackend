

const pdfKit = require('pdfkit');
const fs = require('fs');


function createPdf(req) {
try {
    const date = new Date();
    const year = date.getFullYear();
const month = date.getMonth(); // Note: Months are zero-based (0 = January, 11 = December)
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log("kushal")
    
let fileName = `./files/${req.body.phone}-${req.body.name}.pdf`;
let fontNormal = 'Helvetica';
let fontBold = 'Helvetica-Bold';

let sellerInfo = {
"companyName": "HomeCure.in Pvt. Ltd.",
"address": "TAJ Nagar",
"city": "Agra",
"state": "uttarpradesh",
"pincode": "204101",
"country": "India",
"contactNo": "+918218662808"
}

let customerInfo = {
"customerName": `${req.body.name}`,
"address": `${req.body.address}`,
"phone": `${req.body.phone}`
}

let orderInfo = {
"orderNo": `${req.body.order_id}`,
"invoiceNo": "MH-MU-1077",
"invoiceDate": `${year}-${month}-${day}`,
"invoiceTime":`${hours}:${minutes}:${seconds}`,
"products": [
{
// "id": "15785",
"name": `${req.body.p_name}`,
"company": "Acer",
"unitPrice": `${req.body.amount}`,
"totalPrice": `${req.body.amount}`,
"qty": 1
},

],
"totalValue": `${req.body.amount}`
}

let pdfDoc = new pdfKit();

let stream = fs.createWriteStream(fileName);
pdfDoc.pipe(stream);


pdfDoc.text("This is your Invoice from HomeCure ", 5, 5, { align: "center", width: 600 });
//pdfDoc.image(companyLogo, 25, 20, { width: 50, height: 50 });
pdfDoc.font(fontBold).text('HomeCure Service', 7, 75);
pdfDoc.font(fontNormal).fontSize(14).text('Order Invoice/Bill Receipt', 400, 30, { width: 200 });
pdfDoc.fontSize(10).text(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`, 400, 46, { width: 200 });

pdfDoc.font(fontBold).text("Sold by:", 7, 100);
pdfDoc.font(fontNormal).text(sellerInfo.companyName, 7, 115, { width: 250 });
pdfDoc.text(sellerInfo.address, 7, 130, { width: 250 });
pdfDoc.text(sellerInfo.city + " " + sellerInfo.pincode, 7, 145, { width: 250 });
pdfDoc.text(sellerInfo.state + " " + sellerInfo.country, 7, 160, { width: 250 });

pdfDoc.font(fontBold).text("Customer details:", 400, 100);
pdfDoc.font(fontNormal).text(customerInfo.customerName, 400, 115, { width: 250 });
pdfDoc.text(customerInfo.address, 400, 130, { width: 250 });
pdfDoc.text(customerInfo.phone, 400, 145, { width: 250 });
// pdfDoc.text(customerInfo.city + " " + customerInfo.pincode, 400, 145, { width: 250 });
// pdfDoc.text(customerInfo.state + " " + customerInfo.country, 400, 160, { width: 250 });

pdfDoc.text("Order No:" + orderInfo.orderNo, 7, 195, { width: 250 });
pdfDoc.text("Invoice No:" + orderInfo.invoiceNo, 7, 210, { width: 250 });
pdfDoc.text("Date:" + orderInfo.invoiceDate + " " + orderInfo.invoiceTime, 7, 225, { width: 250 });

pdfDoc.rect(7, 250, 560, 20).fill("#FC427B").stroke("#FC427B");
pdfDoc.fillColor("#fff").text("Product", 110, 256, { width: 190 });
//pdfDoc.text("Product", 110, 256, { width: 190 });
pdfDoc.text("Qty", 300, 256, { width: 100 });
pdfDoc.text("Price", 400, 256, { width: 100 });
pdfDoc.text("Total Price", 500, 256, { width: 100 });

let productNo = 1;
orderInfo.products.forEach(element => {
console.log("adding", element.name);
let y = 256 + (productNo * 20);
pdfDoc.fillColor("#000").text(element.id, 20, y, { width: 90 });
pdfDoc.text(element.name, 110, y, { width: 190 });
pdfDoc.text(element.qty, 300, y, { width: 100 });
pdfDoc.text(element.unitPrice, 400, y, { width: 100 });
pdfDoc.text(element.totalPrice, 500, y, { width: 100 });
productNo++;
});

pdfDoc.rect(7, 256 + (productNo * 20), 560, 0.2).fillColor("#000").stroke("#000");
productNo++;

pdfDoc.font(fontBold).text("Total:", 400, 256 + (productNo * 17));
pdfDoc.font(fontBold).text(orderInfo.totalValue, 500, 256 + (productNo * 17));

pdfDoc.end();
console.log("pdf generate successfully");
} catch (error) {
console.log("Error occurred", error);
}
}

//createPdf();
module.exports = createPdf